import type { Metadata } from "next";
import { ExternalLink, Github, ImageIcon, Search, ShieldCheck } from "lucide-react";
import { destinations } from "@/lib/data";

export const metadata: Metadata = {
  title: "关于",
  description: "关于京郊行记的内容原则、项目边界与图片来源。",
};

export default function AboutPage() {
  return (
    <div className="page-enter">
      <section className="bg-[var(--moss)] text-white">
        <div className="shell py-20 md:py-28">
          <span className="eyebrow !text-[#e8b8a7]">ABOUT THIS SITE</span>
          <h1 className="serif mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            认真整理每一次
            <br />
            从城市出发的周末
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 md:text-base">
            京郊行记是一个独立的北京周边旅行灵感站。它不追求把所有景点列完，而是希望每次推荐都有明确的车程、体力与季节逻辑。
          </p>
        </div>
      </section>

      <section className="shell grid gap-10 border-b border-[var(--line)] py-16 md:grid-cols-3 md:py-20">
        <div className="rounded-[1.4rem] border border-[var(--line)] bg-[#f8f4ea] p-6">
          <Search size={22} className="text-[var(--cinnabar)]" />
          <h2 className="serif mt-5 text-xl font-bold">少而具体</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
            目的地数量不堆砌，优先写清到达成本、适合人群和最容易踩空的细节。
          </p>
        </div>
        <div className="rounded-[1.4rem] border border-[var(--line)] bg-[#f8f4ea] p-6">
          <ShieldCheck size={22} className="text-[var(--cinnabar)]" />
          <h2 className="serif mt-5 text-xl font-bold">不把演示当承诺</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
            当前没有真实库存、价格或客服系统。所有咨询模拟与运营数据都明确标识为演示。
          </p>
        </div>
        <div className="rounded-[1.4rem] border border-[var(--line)] bg-[#f8f4ea] p-6">
          <Github size={22} className="text-[var(--cinnabar)]" />
          <h2 className="serif mt-5 text-xl font-bold">复用成熟基础</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
            技术栈基于 Next.js 官方生态，旅行模板仅作为信息架构与交互模式参考。
          </p>
        </div>
      </section>

      <section className="shell py-16 md:py-20">
        <span className="eyebrow">OPEN-SOURCE REFERENCES</span>
        <h2 className="serif mt-4 text-3xl font-bold">开源方案调研</h2>
        <div className="mt-7 overflow-hidden rounded-[1.4rem] border border-[var(--line)]">
          <div className="grid gap-px bg-[var(--line)] md:grid-cols-3">
            <a
              href="https://github.com/adrianhajdin/travel_ui_ux"
              target="_blank"
              rel="noreferrer"
              className="bg-[#f8f4ea] p-6 transition hover:bg-white"
            >
              <p className="text-sm font-bold">travel_ui_ux</p>
              <p className="mt-2 text-xs leading-6 text-[var(--ink-soft)]">
                Next.js + Tailwind 旅行官网示例。仓库未声明许可证，仅参考视觉与页面结构，未复制代码。
              </p>
              <ExternalLink size={15} className="mt-5" />
            </a>
            <a
              href="https://github.com/bedimcode/responsive-travel-website"
              target="_blank"
              rel="noreferrer"
              className="bg-[#f8f4ea] p-6 transition hover:bg-white"
            >
              <p className="text-sm font-bold">responsive-travel-website</p>
              <p className="mt-2 text-xs leading-6 text-[var(--ink-soft)]">
                高星原生 HTML/CSS/JS 模板。仓库未声明许可证，只参考响应式布局思路。
              </p>
              <ExternalLink size={15} className="mt-5" />
            </a>
            <a
              href="https://github.com/liketrek/TREK"
              target="_blank"
              rel="noreferrer"
              className="bg-[#f8f4ea] p-6 transition hover:bg-white"
            >
              <p className="text-sm font-bold">TREK</p>
              <p className="mt-2 text-xs leading-6 text-[var(--ink-soft)]">
                功能完整的开源旅行规划器，适合需要账号、协作和预订系统的场景；首版范围不引入。
              </p>
              <ExternalLink size={15} className="mt-5" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="image-credits"
        className="border-t border-[var(--line)] bg-[#ece5d7] py-16"
      >
        <div className="shell">
          <div className="flex items-center gap-3">
            <ImageIcon size={22} className="text-[var(--cinnabar)]" />
            <h2 className="serif text-3xl font-bold">图片来源</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">
            页面图片来自 Wikimedia Commons。点击名称可查看原图、作者与许可说明；不同图片的署名要求已保留在各页面或本清单中。
          </p>
          <div className="mt-7 grid gap-px overflow-hidden rounded-[1.4rem] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            {destinations.map((destination) => (
              <a
                key={destination.slug}
                href={destination.imageSource}
                target="_blank"
                rel="noreferrer"
                className="group bg-[#f8f4ea] p-5 transition hover:bg-white"
              >
                <p className="text-sm font-bold">{destination.name}</p>
                <p className="mt-2 text-xs leading-6 text-[var(--ink-soft)]">
                  {destination.imageCredit}
                </p>
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs leading-6 text-[var(--ink-soft)]">
            本站为演示项目，`jingjiao.example.com` 是占位域名。上线前应替换品牌名、正式域名、联系渠道与所有内容审核信息。
          </p>
        </div>
      </section>
    </div>
  );
}
