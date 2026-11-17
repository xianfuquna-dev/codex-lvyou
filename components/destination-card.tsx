import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/lib/types";

interface DestinationCardProps {
  destination: Destination;
  className?: string;
  priority?: boolean;
}

export function DestinationCard({
  destination,
  className = "",
  priority = false,
}: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className={`group block overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[#f8f4ea] ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--paper-deep)]">
        <Image
          src={destination.image}
          alt={destination.imageAlt}
          fill
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-[#f5f0e5e6] px-3 py-1.5 text-[11px] font-bold tracking-wide text-[var(--ink)] backdrop-blur">
            {destination.region}
          </span>
          {destination.styles.slice(0, 1).map((style) => (
            <span
              key={style}
              className="rounded-full bg-black/25 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur"
            >
              {style}
            </span>
          ))}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.19em] text-white/75">
              {destination.englishName}
            </p>
            <h3 className="serif mt-1 text-2xl font-bold">
              {destination.name}
            </h3>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 transition-colors group-hover:bg-white group-hover:text-[var(--ink)]">
            <ArrowUpRight size={17} />
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm leading-6 text-[var(--ink-soft)]">
          {destination.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-[var(--line)] pt-4 text-xs text-[var(--ink-soft)]">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} />
            {destination.district}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock3 size={13} />
            {destination.suggestedTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
