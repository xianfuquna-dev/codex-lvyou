"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { DestinationCard } from "@/components/destination-card";
import type { Destination, Region, TravelStyle } from "@/lib/types";

const regions: Array<Region | "全部"> = ["全部", "京北", "京西", "京郊", "环京"];
const styles: Array<TravelStyle | "全部"> = [
  "全部",
  "山水",
  "长城",
  "古镇",
  "亲子",
  "轻徒步",
];

export function DestinationExplorer({
  destinations,
  initialStyle = "全部",
}: {
  destinations: Destination[];
  initialStyle?: (typeof styles)[number];
}) {
  const [region, setRegion] = useState<(typeof regions)[number]>("全部");
  const [style, setStyle] = useState<(typeof styles)[number]>(initialStyle);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return destinations.filter((destination) => {
      const regionMatches = region === "全部" || destination.region === region;
      const styleMatches =
        style === "全部" || destination.styles.includes(style);
      const queryMatches =
        !normalized ||
        [
          destination.name,
          destination.district,
          destination.summary,
          ...destination.styles,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalized);
      return regionMatches && styleMatches && queryMatches;
    });
  }, [destinations, query, region, style]);

  return (
    <div>
      <div className="rounded-[1.5rem] border border-[var(--line)] bg-[#f8f4ea] p-5 md:p-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
          <SlidersHorizontal size={14} />
          筛选目的地
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-[1fr_2fr]">
          <label className="relative block">
            <span className="sr-only">搜索目的地</span>
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--ink-soft)]"
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索地点或区域"
              className="w-full rounded-full border border-[var(--line)] bg-white/70 py-3 pl-11 pr-4 text-sm outline-none focus:border-[var(--moss)]"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {regions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setRegion(item)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  region === item
                    ? "bg-[var(--moss)] text-white"
                    : "border border-[var(--line)] bg-white/50 text-[var(--ink-soft)] hover:border-[var(--moss)]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 border-t border-[var(--line)] pt-4">
          {styles.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setStyle(item)}
              className={`rounded-full px-4 py-1.5 text-xs transition ${
                style === item
                  ? "bg-[var(--cinnabar)] text-white"
                  : "text-[var(--ink-soft)] hover:text-[var(--cinnabar)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between">
        <p className="text-sm text-[var(--ink-soft)]">
          找到{" "}
          <span className="font-semibold text-[var(--ink)]">
            {filtered.length}
          </span>{" "}
          个目的地
        </p>
        {(region !== "全部" || style !== "全部" || query) && (
          <button
            type="button"
            onClick={() => {
              setRegion("全部");
              setStyle("全部");
              setQuery("");
            }}
            className="text-xs font-semibold text-[var(--cinnabar)] underline underline-offset-4"
          >
            清除筛选
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((destination) => (
            <DestinationCard
              key={destination.slug}
              destination={destination}
            />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-[1.5rem] border border-dashed border-[var(--line)] bg-[#f8f4ea] px-6 py-16 text-center">
          <p className="serif text-xl font-bold">暂时没有匹配的地点</p>
          <p className="mt-2 text-sm text-[var(--ink-soft)]">
            换一个区域或旅行偏好再试试。
          </p>
        </div>
      )}
    </div>
  );
}
