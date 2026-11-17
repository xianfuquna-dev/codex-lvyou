import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Trip } from "@/lib/types";

export function TripCard({ trip }: { trip: Trip }) {
  return (
    <Link
      href={`/routes/${trip.slug}`}
      className="group grid overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[#f8f4ea] md:grid-cols-[0.95fr_1.05fr]"
    >
      <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[300px]">
        <Image
          src={trip.image}
          alt={trip.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover transition duration-700 group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-[#f5f0e5e6] px-3 py-1.5 text-[11px] font-bold text-[var(--ink)] backdrop-blur">
          {trip.style}
        </span>
      </div>
      <div className="flex flex-col justify-center p-6 md:p-9">
        <div className="flex items-center gap-2 text-xs font-medium text-[var(--cinnabar)]">
          <CalendarDays size={14} />
          {trip.days} · {trip.budget}
        </div>
        <h3 className="serif mt-4 text-2xl font-bold md:text-3xl">
          {trip.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
          {trip.subtitle}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {trip.highlights.slice(0, 2).map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[11px] text-[var(--ink-soft)]"
            >
              {highlight}
            </span>
          ))}
        </div>
        <div className="mt-7 flex items-center gap-2 text-sm font-semibold">
          查看路线
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
