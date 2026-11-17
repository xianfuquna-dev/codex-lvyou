import type { Metadata } from "next";
import { ArrowLeft, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideCard } from "@/components/guide-card";
import { getGuide, guides } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.excerpt,
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const related = guides.filter((item) => item.slug !== guide.slug).slice(0, 2);

  return (
    <div className="page-enter">
      <section className="shell grid gap-10 py-12 md:grid-cols-[1fr_310px] md:items-end md:py-16 lg:grid-cols-[1fr_400px]">
        <div>
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--ink-soft)] hover:text-[var(--cinnabar)]"
          >
            <ArrowLeft size={15} /> 返回行前指南
          </Link>
          <span className="eyebrow mt-12">{guide.category}</span>
          <h1 className="serif mt-5 text-4xl font-bold leading-[1.25] tracking-tight md:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--ink-soft)]">
            {guide.excerpt}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-xs text-[var(--ink-soft)]">
            <Clock3 size={14} /> 约 {guide.readTime}阅读
          </span>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[var(--paper-deep)]">
          <Image
            src={guide.image}
            alt={guide.imageAlt}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
        </div>
      </section>

      <article className="shell max-w-4xl border-t border-[var(--line)] py-14 md:py-20">
        <div className="space-y-12">
          {guide.sections.map((section, index) => (
            <section key={section.heading}>
              <div className="flex items-center gap-3">
                <span className="serif text-2xl font-bold text-[var(--cinnabar)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="serif text-2xl font-bold md:text-3xl">
                  {section.heading}
                </h2>
              </div>
              <div className="mt-5 space-y-4 pl-0 text-[15px] leading-8 text-[var(--ink-soft)] md:pl-12">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-16 border-t border-[var(--line)] pt-8 text-xs leading-6 text-[var(--ink-soft)]">
          本文为一般性出行建议。天气、道路、景区开放与安全要求可能变化，请以属地管理方和景区当日信息为准。
        </div>
      </article>

      <section className="border-t border-[var(--line)] bg-[#ece5d7] py-16">
        <div className="shell">
          <span className="eyebrow">READ NEXT</span>
          <h2 className="serif mt-4 text-3xl font-bold">继续准备下一次出发</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {related.map((item) => (
              <GuideCard key={item.slug} guide={item} compact />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
