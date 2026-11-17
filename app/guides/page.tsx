import type { Metadata } from "next";
import { GuideCard } from "@/components/guide-card";
import { guides } from "@/lib/data";

export const metadata: Metadata = {
  title: "行前指南",
  description: "北京周边自驾、轻徒步、亲子和周末出行的实用建议。",
};

export default function GuidesPage() {
  return (
    <div className="page-enter">
      <section className="paper-texture border-b border-[var(--line)] bg-[#ede6d8]">
        <div className="shell py-20 md:py-28">
          <span className="eyebrow">FIELD NOTES</span>
          <h1 className="serif mt-5 text-4xl font-bold leading-tight md:text-6xl">
            出发之前，
            <br />
            先读几页。
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--ink-soft)] md:text-base">
            路线规划、鞋子怎么选、带孩子怎么安排节奏。关于京郊旅行，真正决定体验的往往是那些看起来不起眼的准备。
          </p>
        </div>
      </section>
      <section className="shell py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>
    </div>
  );
}
