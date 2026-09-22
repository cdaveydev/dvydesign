import Link from "next/link";

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm text-muted">
        <li>
          <Link
            href="/"
            aria-label="Home"
            className="inline-flex items-center text-muted transition hover:text-fg"
          >
            <HomeIcon />
          </Link>
        </li>
        <li aria-hidden="true" className="text-fg/35">
          /
        </li>
        <li className="font-medium text-fg" aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  );
}

function HomeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4.5 10.5 12 4.25l7.5 6.25V19a1.5 1.5 0 0 1-1.5 1.5h-4.25v-5.25h-3.5V20.5H6A1.5 1.5 0 0 1 4.5 19v-8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
