import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span className="relative grid size-9 place-items-center rounded-xl bg-accent-gradient bg-[length:200%_200%] shadow-lg shadow-primary/30">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5 text-white"
          aria-hidden="true"
        >
          <path
            d="M12 2 4 6.5v9L12 22l8-6.5v-9L12 2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="11" r="2.4" fill="currentColor" />
          <path
            d="M12 6.2v2.2M12 13.6v2.4M7.8 8.8l1.9 1M14.3 11.2l1.9 1"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="font-heading text-xl font-bold tracking-tight">
        TECH3ON
      </span>
    </span>
  );
}
