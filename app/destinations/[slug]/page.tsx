import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CarFront,
  Clock3,
  Gauge,
  MapPin,
  Route,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DestinationCard } from "@/components/destination-card";
import { getDestination, destinations } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return {};
  return {
    title: destination.name,
    description: destination.summary,
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const related = destinations
    .filter(
      (item) =>
        item.slug !== destination.slug &&
        (item.region === destination.region ||
          item.styles.some((style) => destination.styles.includes(style))),
    )
    .slice(0, 3);

  return (
    <div className="page-enter">
      <section className="relative min-h-[540px] overflow-hidden bg-[var(--moss-deep)] text-white md:min-h-[620px]">
        <Image
          src={destination.image}
          alt={destination.imageAlt}
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10241bdd] via-[#10241b6e] to-[#10241b3a]" />
        <div className="shell relative flex min-h-[540px] flex-col justify-end pb-14 pt-20 md:min-h-[620px] md:pb-20">
          <Link
            href="/destinations"
            className="absolute top-8 inline-flex items-center gap-2 text-xs font-semibold text-white/75 hover:text-white"
          >
            <ArrowLeft size={15} /> 返回目的地
          </Link>
          <span className="text-[11px] font-semibold tracking-[0.2em] text-white/65">
            {destination.englishName} · {destination.district}
          </span>
          <h1 className="serif mt-4 text-5xl font-bold tracking-[-0.03em] md:text-7xl">
            {destination.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
            {destination.tagline}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {destination.styles.map((style) => (
              <span
                key={style}
                className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs backdrop-blur"
              >
                {style}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="shell grid gap-12 py-14 md:py-20 lg:grid-cols-[1fr_310px] lg:gap-20">
        <article>
          <span className="eyebrow">ABOUT THE PLACE</span>
          <h2 className="serif mt-4 text-3xl font-bold md:text-4xl">
            为什么值得去
          </h2>
          <p className="mt-6 text-base font-medium leading-8 text-[var(--ink)]">
            {destination.summary}
          </p>
          <div className="mt-5 space-y-4 text-sm leading-8 text-[var(--ink-soft)] md:text-[15px]">
            {destination.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.4rem] border border-[var(--line)] bg-[#f8f4ea] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--cinnabar)]">
                不要错过
              </p>
              <ul className="mt-4 space-y-3">
                {destination.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-6"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--moss)]" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.4rem] border border-[var(--line)] bg-[#f0e2da] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--cinnabar)]">
                出发前提醒
              </p>
              <ul className="mt-4 space-y-3">
                {destination.tips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-3 text-sm leading-6"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cinnabar)]" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-10 border-l-2 border-[var(--cinnabar)] pl-4 text-xs leading-6 text-[var(--ink-soft)]">
            本站的距离、车程和建议停留时间用于行程规划参考；开放时间、票价、交通与活动状态可能变化，请出发前以景区及属地官方信息为准。
          </p>
        </article>

        <aside>
          <div className="sticky top-28 rounded-[1.5rem] border border-[var(--line)] bg-[#f8f4ea] p-6">
            <h2 className="serif text-xl font-bold">快速了解</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex gap-3 border-b border-[var(--line)] pb-4">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[var(--cinnabar)]"
                />
                <div>
                  <dt className="text-xs text-[var(--ink-soft)]">位置</dt>
                  <dd className="mt-1 font-medium">{destination.district}</dd>
                </div>
              </div>
              <div className="flex gap-3 border-b border-[var(--line)] pb-4">
                <CarFront
                  size={17}
                  className="mt-0.5 shrink-0 text-[var(--cinnabar)]"
                />
                <div>
                  <dt className="text-xs text-[var(--ink-soft)]">交通参考</dt>
                  <dd className="mt-1 font-medium">{destination.distance}</dd>
                  <dd className="mt-1 text-xs leading-5 text-[var(--ink-soft)]">
                    {destination.driveTime}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3 border-b border-[var(--line)] pb-4">
                <Clock3
                  size={17}
                  className="mt-0.5 shrink-0 text-[var(--cinnabar)]"
                />
                <div>
                  <dt className="text-xs text-[var(--ink-soft)]">建议停留</dt>
                  <dd className="mt-1 font-medium">
                    {destination.suggestedTime}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3 border-b border-[var(--line)] pb-4">
                <CalendarDays
                  size={17}
                  className="mt-0.5 shrink-0 text-[var(--cinnabar)]"
                />
                <div>
                  <dt className="text-xs text-[var(--ink-soft)]">适合季节</dt>
                  <dd className="mt-1 font-medium">
                    {destination.bestSeason}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Gauge
                  size={17}
                  className="mt-0.5 shrink-0 text-[var(--cinnabar)]"
                />
                <div>
                  <dt className="text-xs text-[var(--ink-soft)]">游览强度</dt>
                  <dd className="mt-1 font-medium">
                    {destination.difficulty}
                  </dd>
                </div>
              </div>
            </dl>
            <Link
              href={`/contact?destination=${encodeURIComponent(destination.name)}`}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[var(--moss)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--moss-deep)]"
            >
              规划这趟周末 <ArrowRight size={16} />
            </Link>
          </div>
          <p className="mt-4 text-center text-[10px] leading-5 text-[var(--ink-soft)]">
            封面：{" "}
            <a
              href={destination.imageSource}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              {destination.imageCredit}
            </a>
          </p>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="border-t border-[var(--line)] bg-[#ece5d7] py-20">
          <div className="shell">
            <div className="flex items-center justify-between">
              <div>
                <span className="eyebrow">KEEP EXPLORING</span>
                <h2 className="serif mt-4 text-3xl font-bold">
                  也许你还会喜欢
                </h2>
              </div>
              <Route size={30} className="hidden text-[var(--moss)] sm:block" />
            </div>
            <div className="mt-9 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <DestinationCard key={item.slug} destination={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
