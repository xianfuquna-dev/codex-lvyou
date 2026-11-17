import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/lib/types";

export function GuideCard({
  guide,
  compact = false,
}: {
  guide: Guide;
  compact?: boolean;
}) {
  return (
    <Link href={`/guides/${guide.slug}`} className="group block">
      <div
        className={`relative overflow-hidden rounded-[1.4rem] bg-[var(--paper-deep)] ${
          compact ? "aspect-[16/10]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={guide.image}
          alt={guide.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.035]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-[#f5f0e5e6] px-3 py-1.5 text-[11px] font-bold text-[var(--ink)] backdrop-blur">
          {guide.category}
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-5">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.1em] text-[var(--ink-soft)]">
            {guide.readTime}阅读
          </p>
          <h3 className="serif mt-2 text-xl font-bold leading-8">
            {guide.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--ink-soft)]">
            {guide.excerpt}
          </p>
        </div>
        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line)] transition group-hover:border-[var(--ink)] group-hover:bg-[var(--ink)] group-hover:text-white">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}
