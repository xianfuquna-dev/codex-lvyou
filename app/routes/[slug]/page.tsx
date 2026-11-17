import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CircleDollarSign,
  MapPin,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DestinationCard } from "@/components/destination-card";
import { getDestination, getTrip, trips } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return trips.map((trip) => ({ slug: trip.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const trip = getTrip(slug);
  if (!trip) return {};
  return {
    title: trip.title,
    description: trip.subtitle,
  };
}

export default async function TripDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const trip = getTrip(slug);
  if (!trip) notFound();

  const places = trip.destinationSlugs
    .map((placeSlug) => getDestination(placeSlug))
    .filter((place) => place !== undefined);

  return (
    <div className="page-enter">
      <section className="relative min-h-[530px] overflow-hidden bg-[var(--moss-deep)] text-white md:min-h-[650px]">
        <Image
          src={trip.image}
          alt={trip.imageAlt}
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10241bf2] via-[#10241b99] to-[#10241b33]" />
        <div className="shell relative flex min-h-[530px] flex-col justify-end pb-14 pt-20 md:min-h-[650px] md:pb-20">
          <Link
            href="/routes"
            className="absolute top-8 inline-flex items-center gap-2 text-xs font-semibold text-white/75 hover:text-white"
          >
            <ArrowLeft size={15} /> 返回路线
          </Link>
          <span className="eyebrow !text-[#e8b8a7]">{trip.style} · WEEKEND</span>
          <h1 className="serif mt-5 text-5xl font-bold tracking-[-0.03em] md:text-7xl">
            {trip.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            {trip.subtitle}
          </p>
        </div>
      </section>

      <section className="shell grid gap-14 py-14 md:py-20 lg:grid-cols-[1fr_300px] lg:gap-20">
        <article>
          <span className="eyebrow">THE PLAN</span>
          <h2 className="serif mt-4 text-3xl font-bold md:text-4xl">行程节奏</h2>
          <div className="mt-10 border-l border-[var(--line)]">
            {trip.itinerary.map((item, index) => (
              <div key={`${item.time}-${item.title}`} className="relative pb-11 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-0 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[var(--paper)] bg-[var(--cinnabar)]" />
                <span className="text-xs font-bold tracking-wide text-[var(--cinnabar)]">
                  {item.time}
                </span>
                <h3 className="serif mt-2 text-2xl font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--ink-soft)]">
                  {item.description}
                </p>
                {index < trip.itinerary.length - 1 && (
                  <span className="absolute bottom-0 left-0 h-[calc(100%-26px)] w-px bg-transparent" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[1.5rem] bg-[#eee5d5] p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--cinnabar)]">
              顺路提醒
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
              {trip.note}
            </p>
          </div>

          <div className="mt-14">
            <span className="eyebrow">PLACES ON THIS ROUTE</span>
            <h2 className="serif mt-4 text-3xl font-bold">沿途目的地</h2>
            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              {places.map((place) => (
                <DestinationCard key={place.slug} destination={place} />
              ))}
            </div>
          </div>
        </article>

        <aside>
          <div className="sticky top-28 rounded-[1.5rem] border border-[var(--line)] bg-[#f8f4ea] p-6">
            <h2 className="serif text-xl font-bold">路线信息</h2>
            <div className="mt-6 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <CalendarDays
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--cinnabar)]"
                />
                <div>
                  <p className="text-xs text-[var(--ink-soft)]">建议时长</p>
                  <p className="mt-1 font-semibold">{trip.days}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--cinnabar)]"
                />
                <div>
                  <p className="text-xs text-[var(--ink-soft)]">适合同行</p>
                  <p className="mt-1 font-semibold">{trip.audience}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CircleDollarSign
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--cinnabar)]"
                />
                <div>
                  <p className="text-xs text-[var(--ink-soft)]">预算倾向</p>
                  <p className="mt-1 font-semibold">
                    {trip.budget}（不含交通与住宿报价）
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--cinnabar)]"
                />
                <div>
                  <p className="text-xs text-[var(--ink-soft)]">这条路的重点</p>
                  <ul className="mt-2 space-y-2 text-xs leading-5">
                    {trip.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <Link
              href={`/contact?route=${encodeURIComponent(trip.title)}`}
              className="mt-7 flex items-center justify-center gap-2 rounded-full bg-[var(--moss)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--moss-deep)]"
            >
              按这条路咨询 <ArrowRight size={16} />
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}
