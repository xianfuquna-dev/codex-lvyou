import type { Metadata } from "next";
import { DestinationExplorer } from "@/components/destination-explorer";
import { destinations } from "@/lib/data";

export const metadata: Metadata = {
  title: "目的地",
  description: "按区域与旅行偏好，找到适合下一次周末的北京周边目的地。",
};

const validStyles = ["山水", "长城", "古镇", "亲子", "轻徒步"] as const;

export default async function DestinationsPage({
  searchParams,
}: {
  searchParams: Promise<{ style?: string | string[] }>;
}) {
  const { style } = await searchParams;
  const initialStyle = validStyles.find((item) => item === style) ?? "全部";

  return (
    <div className="page-enter">
      <section className="paper-texture border-b border-[var(--line)] bg-[#ede6d8]">
        <div className="shell py-20 md:py-28">
          <span className="eyebrow">PLACES TO GO</span>
          <h1 className="serif mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            找到下一处
            <br />
            想去的地方
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--ink-soft)] md:text-base">
            北京的山、湖与古村，不必都在同一种节奏里。按区域、兴趣或关键词筛选，再慢慢决定这个周末怎么出发。
          </p>
        </div>
      </section>
      <section className="shell py-14 md:py-20">
        <DestinationExplorer
          destinations={destinations}
          initialStyle={initialStyle}
        />
      </section>
    </div>
  );
}
