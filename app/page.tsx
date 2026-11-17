import {
  ArrowDownRight,
  ArrowRight,
  Compass,
  Map,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DestinationCard } from "@/components/destination-card";
import { GuideCard } from "@/components/guide-card";
import { SectionHeading } from "@/components/section-heading";
import { TripCard } from "@/components/trip-card";
import { destinations, guides, trips } from "@/lib/data";

export default function HomePage() {
  const featured = destinations.filter((destination) => destination.featured);

  return (
    <div className="page-enter">
      <section className="relative min-h-[690px] overflow-hidden bg-[var(--moss-deep)] text-white md:min-h-[760px]">
        <Image
          src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/The_Mutianyu_section_of_the_Great_Wall_of_China.jpg/1920px-The_Mutianyu_section_of_the_Great_Wall_of_China.jpg"
          alt="群山间蜿蜒的慕田峪长城"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,38,29,0.86)_0%,rgba(16,38,29,0.51)_48%,rgba(16,38,29,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(16,38,29,0.74)_0%,transparent_45%)]" />
        <div className="shell relative flex min-h-[690px] flex-col justify-center pb-20 pt-16 md:min-h-[760px]">
          <div className="max-w-[680px]">
            <span className="eyebrow !text-[#e8b8a7]">BEYOND THE CITY</span>
            <h1 className="serif mt-6 text-[3.25rem] font-bold leading-[1.12] tracking-[-0.04em] sm:text-[4.5rem] md:text-[5.3rem]">
              周末，往山野
              <br />
              再走远一点
            </h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-white/80 md:text-lg">
              从北京出发，去长城看风，在水镇等灯，
              <br className="hidden sm:block" />
              为下一次周末找一个值得出发的方向。
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 rounded-full bg-[#f1eadb] px-6 py-3.5 text-sm font-bold text-[var(--moss-deep)] transition hover:bg-white"
              >
                发现目的地
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/routes"
                className="inline-flex items-center gap-2 rounded-full border border-white/45 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                浏览周末路线
              </Link>
            </div>
          </div>

          <div className="mt-20 flex items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65 md:absolute md:bottom-10 md:left-0 md:mt-0">
            <span>从城市到山野</span>
            <span className="h-px w-12 bg-white/30" />
            <span className="flex items-center gap-1">
              向下探索 <ArrowDownRight size={14} />
            </span>
          </div>
        </div>
      </section>

      <section className="paper-texture relative z-10 -mt-10 md:-mt-14">
        <div className="shell">
          <div className="grid rounded-[1.5rem] border border-[var(--line)] bg-[#f8f4ea] p-3 shadow-[0_18px_60px_rgba(43,56,45,0.12)] md:grid-cols-3">
            <Link
              href="/destinations?style=山水"
              className="group flex items-center gap-4 rounded-[1.1rem] p-5 transition hover:bg-white/70 md:p-7"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e2e9df] text-[var(--moss)]">
                <Compass size={18} />
              </span>
              <div>
                <p className="text-sm font-bold">按心情出发</p>
                <p className="mt-1 text-xs text-[var(--ink-soft)]">
                  山水、古镇或长城
                </p>
              </div>
              <ArrowRight
                size={16}
                className="ml-auto text-[var(--ink-soft)] transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/destinations"
              className="group flex items-center gap-4 rounded-[1.1rem] p-5 transition hover:bg-white/70 md:border-x md:border-[var(--line)] md:p-7"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eee4d2] text-[#805f34]">
                <Map size={18} />
              </span>
              <div>
                <p className="text-sm font-bold">按距离筛选</p>
                <p className="mt-1 text-xs text-[var(--ink-soft)]">
                  一日可达的北京周边
                </p>
              </div>
              <ArrowRight
                size={16}
                className="ml-auto text-[var(--ink-soft)] transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-4 rounded-[1.1rem] p-5 transition hover:bg-white/70 md:p-7"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f1dfd8] text-[var(--cinnabar)]">
                <Sparkles size={18} />
              </span>
              <div>
                <p className="text-sm font-bold">说出你的偏好</p>
                <p className="mt-1 text-xs text-[var(--ink-soft)]">
                  生成一份周末咨询摘要
                </p>
              </div>
              <ArrowRight
                size={16}
                className="ml-auto text-[var(--ink-soft)] transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="shell py-24 md:py-32">
        <SectionHeading
          eyebrow="SELECTED PLACES"
          title="北京周边，去哪里好"
          intro="不按热门榜单堆砌，而是按真实的车程、体力和季节，挑出适合你的那一站。"
          href="/destinations"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((destination, index) => (
            <DestinationCard
              key={destination.slug}
              destination={destination}
              priority={index === 0}
              className={index === 0 ? "lg:col-span-2" : ""}
            />
          ))}
        </div>
      </section>

      <section className="bg-[var(--moss)] py-24 text-white md:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <span className="eyebrow !text-[#e8b8a7]">CURATED ROUTES</span>
              <h2 className="serif mt-5 text-3xl font-bold leading-tight md:text-[2.8rem]">
                不只告诉你
                <br />
                去哪里，
                <br />
                也告诉你怎么走。
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
                从出发时间、停留节奏到返程安排，把周末真正排成一段可以执行的路线。
              </p>
              <Link
                href="/routes"
                className="mt-8 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm font-semibold hover:text-[#f2d5c9]"
              >
                查看全部路线 <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid gap-5">
              {trips.map((trip) => (
                <TripCard key={trip.slug} trip={trip} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-24 md:py-32">
        <SectionHeading
          eyebrow="BEFORE YOU GO"
          title="出发前，先看这几件事"
          intro="真正影响旅行体验的，往往不是少看一个景点，而是路程、天气和节奏没有算对。"
          href="/guides"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      <section className="shell pb-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#d9cab0] px-7 py-14 md:px-16 md:py-20">
          <div className="absolute -right-8 -top-12 h-56 w-56 rounded-full border border-[var(--ink)]/10" />
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-[var(--ink)]/10" />
          <div className="relative max-w-2xl">
            <span className="eyebrow">A WEEKEND, SLOWLY</span>
            <h2 className="serif mt-5 text-3xl font-bold leading-tight md:text-[2.8rem]">
              把下一个空闲周末，
              <br />
              留给真正的风景。
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--ink-soft)]">
              选出自己喜欢的目的地和节奏，生成一份可复制的出行摘要。当前为演示流程，不会向服务器发送个人信息。
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--moss)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--moss-deep)]"
            >
              说说你的出行偏好 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
