/**
 * Contact form submission API endpoint
 * POST /api/contact
 *
 * This endpoint receives contact form submissions and sends them via email.
 * Includes rate limiting and input validation.
 */

import { NextRequest, NextResponse } from "next/server";
import { sendContactFormEmail } from "@/lib/email-service";

interface ContactFormRequest {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  projectDetails?: string;
}

// Simple in-memory rate limiter (per IP)
// In production, use Redis or a proper rate limiting service
const rateLimitStore = new Map<
  string,
  { count: number; resetTime: number }
>();

/**
 * Get client IP address from request
 */
function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  return ip;
}

/**
 * Check rate limit for IP
 */
function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const limit = rateLimitStore.get(ip);
  const maxRequests = 5; // Max 5 requests per hour per IP

  if (!limit || now > limit.resetTime) {
    // New window
    rateLimitStore.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (limit.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  limit.count++;
  return { allowed: true, remaining: maxRequests - limit.count };
}

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize string input
 */
function sanitizeInput(input: string): string {
  return input.trim().slice(0, 10000); // Limit to 10,000 characters
}

export async function POST(request: NextRequest) {
  try {
    // Check rate limit
    const clientIp = getClientIp(request);
    const { allowed, remaining } = checkRateLimit(clientIp);

    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many submissions. Please try again later (max 5 per hour).",
        },
        {
          status: 429,
          headers: { "X-RateLimit-Remaining": remaining.toString() },
        },
      );
    }

    // Parse request body
    const body: ContactFormRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.projectDetails) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: name, email, projectDetails",
        },
        { status: 400 },
      );
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Validate minimum length for project details
    if (body.projectDetails.trim().length < 20) {
      return NextResponse.json(
        {
          success: false,
          error: "Project details must be at least 20 characters",
        },
        { status: 400 },
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      phone: body.phone ? sanitizeInput(body.phone) : undefined,
      company: body.company ? sanitizeInput(body.company) : undefined,
      subject: sanitizeInput(body.service || "General Inquiry"),
      serviceRequired: body.service ? sanitizeInput(body.service) : undefined,
      projectDetails: sanitizeInput(body.projectDetails),
      message: sanitizeInput(body.projectDetails), // Use projectDetails as message
    };

    // Send email
    const emailResult = await sendContactFormEmail(sanitizedData);

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: emailResult.error || "Failed to send email",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your inquiry. We will get back to you soon.",
      },
      {
        status: 200,
        headers: { "X-RateLimit-Remaining": remaining.toString() },
      },
    );
  } catch (error) {
    console.error("Contact form API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "An error occurred while processing your request.",
      },
      { status: 500 },
    );
  }
}
