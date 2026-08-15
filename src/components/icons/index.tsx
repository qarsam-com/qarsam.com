import React from "react";

/**
 * Menu Icon (Hamburger)
 */
export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

/**
 * Close Icon (X)
 */
export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/**
 * Chevron Down Icon
 */
export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/**
 * Arrow Right Icon
 */
export const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/**
 * Check Icon
 */
export const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/**
 * WhatsApp Icon
 */
export const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.87 1.246-3.045 3.006-3.045 4.926 0 1.211.23 2.389.72 3.537L2.89 23.352l3.898-1.288c1.09.592 2.292.906 3.622.906 4.925 0 8.93-4.006 8.93-8.93 0-2.383-.952-4.629-2.698-6.323-1.746-1.695-4.065-2.628-6.543-2.628z"/>
  </svg>
);

/**
 * Email Icon
 */
export const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

/**
 * Qarsam Logo (SVG)
 */
export const QarsamLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Logo mark - stylized Q */}
    <circle cx="12" cy="20" r="10" fill="currentColor" />
    <path
      d="M18 28C20 24 22 22 24 22"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Qarsam Text */}
    <text
      x="32"
      y="25"
      fontSize="18"
      fontWeight="700"
      fontFamily="Poppins, sans-serif"
      fill="currentColor"
      letterSpacing="-0.5"
    >
      Qarsam
    </text>
  </svg>
);

/**
 * Layers Icon — used for platforms / enterprise software
 */
export const LayersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

/**
 * Workflow / Automation Icon
 */
export const WorkflowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <path d="M9.5 10v3a2 2 0 0 0 2 2H14" />
    <path d="M14.5 10v-3a2 2 0 0 0-2-2h-2.5" />
  </svg>
);

/**
 * Cloud Icon
 */
export const CloudIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-1.5A4.5 4.5 0 0 0 6.5 19h11z" />
  </svg>
);

/**
 * Shield / Security Icon
 */
export const ShieldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5z" />
    <polyline points="9 12 11.5 14.5 15.5 9.5" />
  </svg>
);

/**
 * Bar Chart / Analytics Icon
 */
export const ChartBarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" y1="20" x2="20" y2="20" />
    <rect x="6" y="12" width="3" height="8" />
    <rect x="13" y="7" width="3" height="13" />
    <path d="M17 5h3v3" />
    <path d="M20 5 13 12l-3-3-4 4" />
  </svg>
);

/**
 * CPU / AI Icon
 */
export const CpuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <rect x="10" y="10" width="4" height="4" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
  </svg>
);

/**
 * Globe Icon
 */
export const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
  </svg>
);

/**
 * Puzzle / Integration Icon
 */
export const PuzzleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 3.5a1.5 1.5 0 0 1 3 0V5h2a2 2 0 0 1 2 2v2h1.5a1.5 1.5 0 0 1 0 3H16v2a2 2 0 0 1-2 2h-2v1.5a1.5 1.5 0 0 1-3 0V16H7a2 2 0 0 1-2-2v-2H3.5a1.5 1.5 0 0 1 0-3H5V7a2 2 0 0 1 2-2h2z" />
  </svg>
);

/**
 * Rocket / Growth Icon
 */
export const RocketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.5 16.5c-1 1-1.5 3-1.5 4.5 1.5 0 3.5-.5 4.5-1.5l7-7a2.5 2.5 0 0 0-3.5-3.5z" />
    <path d="M14 10c1-3 3.5-5.5 7-6.5 1 3.5-1.5 6-6.5 7" />
    <circle cx="13.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

/**
 * Target Icon
 */
export const TargetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

/**
 * Clock Icon
 */
export const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15.5 14" />
  </svg>
);

/**
 * Lock Icon
 */
export const LockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="11" width="14" height="9" rx="1.5" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

/**
 * Search / SEO Icon
 */
export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.2" y2="16.2" />
  </svg>
);

/**
 * Server Icon
 */
export const ServerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="6" rx="1.5" />
    <rect x="3" y="14" width="18" height="6" rx="1.5" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
    <line x1="7" y1="17" x2="7.01" y2="17" />
  </svg>
);

/**
 * Phone Icon
 */
export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4.5C4 3.7 4.7 3 5.5 3H8l2 5-2.2 1.8a11.5 11.5 0 0 0 5.4 5.4L15 13l5 2v2.5c0 .8-.7 1.5-1.5 1.5C10.5 19 4 12.5 4 4.5z" />
  </svg>
);

/**
 * Map Pin Icon
 */
export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

/**
 * Sparkles Icon
 */
export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4z" />
  </svg>
);

/**
 * Users / Team Icon
 */
export const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.2a3.2 3.2 0 0 1 0 6.2" />
    <path d="M15 14c2.8.3 5 1.9 5.5 6" />
  </svg>
);

/**
 * Code / Software Engineering Icon
 */
export const CodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="8 6 3 12 8 18" />
    <polyline points="16 6 21 12 16 18" />
    <line x1="13.5" y1="4" x2="10.5" y2="20" />
  </svg>
);

/**
 * Database Icon
 */
export const DatabaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="5.5" rx="8" ry="3" />
    <path d="M4 5.5V18c0 1.7 3.6 3 8 3s8-1.3 8-3V5.5" />
    <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </svg>
);

/**
 * Handshake / Partnership Icon
 */
export const HandshakeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12l4-4h4l3 3-3 3-2-2" />
    <path d="M22 12l-4-4h-4l-3 3 3 3 2-2" />
    <path d="M9 14l2 2 2-2M11 16l2 2" />
  </svg>
);

/**
 * Refresh / Continuous improvement icon
 */
export const RefreshIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4v5h5" />
    <path d="M20 20v-5h-5" />
    <path d="M5.5 15a7 7 0 0 0 12.3 2.5L20 15" />
    <path d="M18.5 9a7 7 0 0 0-12.3-2.5L4 9" />
  </svg>
);

export const iconMap = {
  layers: LayersIcon,
  workflow: WorkflowIcon,
  cloud: CloudIcon,
  shield: ShieldIcon,
  chart: ChartBarIcon,
  cpu: CpuIcon,
  globe: GlobeIcon,
  puzzle: PuzzleIcon,
  rocket: RocketIcon,
  target: TargetIcon,
  clock: ClockIcon,
  lock: LockIcon,
  search: SearchIcon,
  server: ServerIcon,
  phone: PhoneIcon,
  mapPin: MapPinIcon,
  sparkles: SparklesIcon,
  users: UsersIcon,
  code: CodeIcon,
  database: DatabaseIcon,
  handshake: HandshakeIcon,
  refresh: RefreshIcon,
  check: CheckIcon,
  whatsapp: WhatsAppIcon,
  email: EmailIcon,
} as const;

export type IconName = keyof typeof iconMap;

export default {
  MenuIcon,
  CloseIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  CheckIcon,
  WhatsAppIcon,
  EmailIcon,
  QarsamLogo,
};
