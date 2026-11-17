"use client";

import { Check, Clipboard, Send } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  people: string;
  days: string;
  interest: string;
  contact: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  people: "2 人",
  days: "1 天",
  interest: "山水",
  contact: "",
  message: "",
};

export function ConsultationForm({
  initialMessage = "",
}: {
  initialMessage?: string;
}) {
  const [form, setForm] = useState<FormState>({
    ...initialForm,
    message: initialMessage,
  });
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setSummary("");
    setCopied(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const generated = [
      `称呼：${form.name}`,
      `出行人数：${form.people}`,
      `可用时间：${form.days}`,
      `偏好：${form.interest}`,
      `联系方式：${form.contact}`,
      `补充需求：${form.message || "无"}`,
    ].join("\n");

    setSummary(generated);
    setCopied(false);
  }

  async function copySummary() {
    if (!summary) return;
    await navigator.clipboard.writeText(summary);
    setCopied(true);
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-[var(--line)] bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[var(--moss)] focus:ring-2 focus:ring-[#294f3c1c]";

  return (
    <div className="rounded-[1.75rem] border border-[var(--line)] bg-[#f8f4ea] p-6 md:p-9">
      {!summary ? (
        <form onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-xs font-semibold text-[var(--ink)]">
              怎么称呼你
              <input
                required
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className={fieldClass}
                placeholder="例如：林女士"
              />
            </label>
            <label className="text-xs font-semibold text-[var(--ink)]">
              出行人数
              <select
                value={form.people}
                onChange={(event) => updateField("people", event.target.value)}
                className={fieldClass}
              >
                <option>1 人</option>
                <option>2 人</option>
                <option>3–4 人</option>
                <option>5 人及以上</option>
              </select>
            </label>
            <label className="text-xs font-semibold text-[var(--ink)]">
              可用时间
              <select
                value={form.days}
                onChange={(event) => updateField("days", event.target.value)}
                className={fieldClass}
              >
                <option>当天往返</option>
                <option>1 天</option>
                <option>2 天 1 晚</option>
                <option>3 天及以上</option>
              </select>
            </label>
            <label className="text-xs font-semibold text-[var(--ink)]">
              更偏好
              <select
                value={form.interest}
                onChange={(event) =>
                  updateField("interest", event.target.value)
                }
                className={fieldClass}
              >
                <option>山水</option>
                <option>长城</option>
                <option>古镇</option>
                <option>亲子</option>
                <option>轻徒步</option>
              </select>
            </label>
          </div>
          <label className="mt-5 block text-xs font-semibold text-[var(--ink)]">
            手机或微信
            <input
              required
              value={form.contact}
              onChange={(event) => updateField("contact", event.target.value)}
              className={fieldClass}
              placeholder="仅用于生成本地演示摘要"
            />
          </label>
          <label className="mt-5 block text-xs font-semibold text-[var(--ink)]">
            其他想法
            <textarea
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className={`${fieldClass} min-h-28 resize-y`}
              placeholder="例如：带父母，不想走太多路；想住一晚"
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--moss)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--moss-deep)]"
          >
            生成咨询摘要
            <Send size={15} />
          </button>
          <p className="mt-4 text-xs leading-5 text-[var(--ink-soft)]">
            这是演示表单，不会把信息发送至服务器或任何第三方。
          </p>
        </form>
      ) : (
        <div>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--moss)] text-white">
            <Check size={20} />
          </span>
          <h2 className="serif mt-5 text-2xl font-bold">咨询摘要已生成</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
            本站尚未配置真实收件渠道，因此信息没有发送。你可以复制以下摘要，后续接入邮箱、企业微信或其他表单服务。
          </p>
          <pre className="mt-6 whitespace-pre-wrap rounded-xl bg-white/70 p-5 font-sans text-sm leading-7 text-[var(--ink)]">
            {summary}
          </pre>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={copySummary}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--moss)] px-5 py-2.5 text-sm font-semibold text-white"
            >
              {copied ? <Check size={15} /> : <Clipboard size={15} />}
              {copied ? "已复制" : "复制摘要"}
            </button>
            <button
              type="button"
              onClick={() => {
                setSummary("");
                setForm({ ...initialForm, message: initialMessage });
              }}
              className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold"
            >
              重新填写
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
