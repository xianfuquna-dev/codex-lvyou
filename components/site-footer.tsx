import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--moss-deep)] text-[#eee8da]">
      <div className="shell py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eee8da66] text-xs font-bold tracking-widest">
                京
              </span>
              <span className="serif text-2xl font-bold tracking-[0.1em]">
                京郊行记
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#d5d0c3]">
              从北京出发，认真对待每一个周末。我们整理值得去的地方，也提醒你那些比打卡更重要的事。
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a7b4aa]">
              探索
            </p>
            <div className="mt-5 grid gap-3 text-sm">
              <Link href="/destinations" className="hover:text-white">
                全部目的地
              </Link>
              <Link href="/routes" className="hover:text-white">
                周末路线
              </Link>
              <Link href="/guides" className="hover:text-white">
                行前指南
              </Link>
              <Link href="/about" className="hover:text-white">
                关于本站
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a7b4aa]">
              出发前
            </p>
            <p className="mt-5 text-sm leading-7 text-[#d5d0c3]">
              景区开放时间、交通与活动可能有变，请以官方公告为准。
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 border-b border-[#eee8da66] pb-1 text-sm"
            >
              定制我的周末
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-[#ffffff22] pt-6 text-xs leading-6 text-[#aeb7af]">
          <p>
            图片来自 Wikimedia Commons，作者与许可证信息见各目的地详情页及
            <Link
              href="/about#image-credits"
              className="ml-1 underline underline-offset-4"
            >
              图片来源
            </Link>
            。本站为演示项目，不提供真实预订或交易服务。
          </p>
          <p className="mt-2">© 2026 京郊行记 · 内容仅作出行灵感参考</p>
        </div>
      </div>
    </footer>
  );
}
