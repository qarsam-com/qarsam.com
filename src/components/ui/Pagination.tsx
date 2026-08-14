import Link from "next/link";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  getHref: (page: number) => string;
  className?: string;
}

function getPages(currentPage: number, totalPages: number) {
  const pages = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
  return Array.from(pages).filter((page) => page >= 1 && page <= totalPages).sort((a, b) => a - b);
}

export default function Pagination({ currentPage, totalPages, getHref, className }: PaginationProps) {
  const pages = getPages(currentPage, totalPages);

  return (
    <nav aria-label="Pagination" className={className}>
      <ul className="flex flex-wrap items-center gap-2">
        {pages.map((page, index) => {
          const previous = pages[index - 1];
          const showEllipsis = previous && page - previous > 1;
          return (
            <li key={page} className="flex items-center gap-2">
              {showEllipsis ? <span aria-hidden="true" className="px-1 text-navy-500">…</span> : null}
              <Link
                href={getHref(page)}
                aria-current={page === currentPage ? "page" : undefined}
                className={cn(
                  "inline-flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm font-medium transition-colors",
                  page === currentPage
                    ? "border-electric-600 bg-electric-600 text-white"
                    : "border-navy-200 text-navy-700 hover:border-electric-300 hover:text-electric-600"
                )}
              >
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
