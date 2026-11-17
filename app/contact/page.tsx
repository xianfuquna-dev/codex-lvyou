import type { Metadata } from "next";
import { Check, Clock3, MapPin, MessageCircle } from "lucide-react";
import { ConsultationForm } from "@/components/consultation-form";

export const metadata: Metadata = {
  title: "定制周末",
  description: "写下出行偏好，生成本地咨询摘要。",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{
    destination?: string | string[];
    route?: string | string[];
  }>;
}) {
  const params = await searchParams;
  const destination =
    typeof params.destination === "string" ? params.destination : "";
  const route = typeof params.route === "string" ? params.route : "";
  const context = destination || route;

  return (
    <div className="page-enter">
      <section className="paper-texture bg-[#e9e1d1]">
        <div className="shell grid gap-12 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-start md:py-24">
          <div className="md:sticky md:top-28">
            <span className="eyebrow">PLAN YOUR WEEKEND</span>
            <h1 className="serif mt-5 text-4xl font-bold leading-tight md:text-6xl">
              这次周末，
              <br />
              想去哪里？
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[var(--ink-soft)] md:text-base">
              把同行人、可用时间和偏好告诉我们。这个演示版本会先在浏览器里生成一份咨询摘要，不会上传你的信息。
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex gap-3">
                <Check
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--cinnabar)]"
                />
                <div>
                  <p className="text-sm font-bold">先考虑路程</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--ink-soft)]">
                    一日出行尽量减少目的地切换。
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--cinnabar)]"
                />
                <div>
                  <p className="text-sm font-bold">告诉我同行人</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--ink-soft)]">
                    带父母、带孩子和独行的节奏完全不同。
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock3
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--cinnabar)]"
                />
                <div>
                  <p className="text-sm font-bold">留一点机动时间</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--ink-soft)]">
                    天气和路况，值得被算进行程里。
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <MessageCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--cinnabar)]"
                />
                <div>
                  <p className="text-sm font-bold">当前为演示流程</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--ink-soft)]">
                    尚未接入真实客服，不会承诺报价或履约。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ConsultationForm
            initialMessage={
              context ? `我想了解「${context}」的周末安排。` : undefined
            }
          />
        </div>
      </section>
    </div>
  );
}
