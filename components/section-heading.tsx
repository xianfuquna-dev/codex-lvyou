import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  href?: string;
  linkLabel?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  href,
  linkLabel = "查看全部",
}: SectionHeadingProps) {
  return (
    <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="serif mt-4 text-3xl font-bold leading-tight tracking-tight md:text-[2.6rem]">
          {title}
        </h2>
        {intro && (
          <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--ink-soft)]">
            {intro}
          </p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className="group inline-flex shrink-0 items-center gap-2 self-start border-b border-[var(--ink)] pb-1 text-sm font-semibold md:self-auto"
        >
          {linkLabel}
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      )}
    </div>
  );
}
