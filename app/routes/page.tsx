import type { Metadata } from "next";
import { MapPinned, Route, Users } from "lucide-react";
import { TripCard } from "@/components/trip-card";
import { trips } from "@/lib/data";

export const metadata: Metadata = {
  title: "周末路线",
  description: "按时间和节奏整理的北京周边周末旅行路线。",
};

export default function RoutesPage() {
  return (
    <div className="page-enter">
      <section className="bg-[var(--moss)] text-white">
        <div className="shell grid gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-end md:py-28">
          <div>
            <span className="eyebrow !text-[#e8b8a7]">WEEKEND ROUTES</span>
            <h1 className="serif mt-5 text-4xl font-bold leading-tight md:text-6xl">
              周末不必远，
              <br />
              但要走得顺。
            </h1>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/70 md:justify-self-end md:text-base">
            一条路线只围绕一个核心体验。我们用出发时间、停留节奏和返程安排，把目的地串成真正能执行的周末。
          </p>
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <div className="mb-10 grid gap-4 border-b border-[var(--line)] pb-10 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <MapPinned size={20} className="text-[var(--cinnabar)]" />
            <div>
              <p className="text-sm font-bold">就近组合</p>
              <p className="mt-1 text-xs text-[var(--ink-soft)]">减少无效路程</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Route size={20} className="text-[var(--cinnabar)]" />
            <div>
              <p className="text-sm font-bold">节奏明确</p>
              <p className="mt-1 text-xs text-[var(--ink-soft)]">知道何时该出发</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users size={20} className="text-[var(--cinnabar)]" />
            <div>
              <p className="text-sm font-bold">适配同行人</p>
              <p className="mt-1 text-xs text-[var(--ink-soft)]">比风景更重要的变量</p>
            </div>
          </div>
        </div>
        <div className="grid gap-7">
          {trips.map((trip) => (
            <TripCard key={trip.slug} trip={trip} />
          ))}
        </div>
      </section>
    </div>
  );
}
