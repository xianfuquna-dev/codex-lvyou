import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[62vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">404 · OFF THE PATH</span>
      <h1 className="serif mt-5 text-4xl font-bold md:text-6xl">
        这条路暂时走不通
      </h1>
      <p className="mt-5 text-sm text-[var(--ink-soft)]">
        页面可能已移动，回到目的地列表重新出发吧。
      </p>
      <Link
        href="/destinations"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--moss)] px-6 py-3 text-sm font-semibold text-white"
      >
        <ArrowLeft size={16} /> 返回目的地
      </Link>
    </div>
  );
}
