"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/destinations", label: "目的地" },
  { href: "/routes", label: "周末路线" },
  { href: "/guides", label: "行前指南" },
  { href: "/about", label: "关于" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:rgba(243,239,229,0.92)] backdrop-blur-xl">
      <div className="shell flex h-[74px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="京郊行记首页"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--moss)] text-[11px] font-bold tracking-[0.12em] text-[var(--moss)]">
            京
          </span>
          <span>
            <span className="serif block text-[1.2rem] font-bold leading-none tracking-[0.1em]">
              京郊行记
            </span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--ink-soft)]">
              Beyond Beijing
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="主导航">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-sm transition-colors hover:text-[var(--cinnabar)] ${
                  active ? "text-[var(--cinnabar)]" : "text-[var(--ink)]"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 h-px w-full bg-[var(--cinnabar)]" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-[var(--moss)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--moss-deep)]"
          >
            定制我的周末
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] md:hidden"
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="shell border-t border-[var(--line)] py-4 md:hidden"
          aria-label="移动端导航"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-[var(--line)] py-3 text-base"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block rounded-full bg-[var(--moss)] px-5 py-3 text-center text-sm font-semibold text-white"
          >
            定制我的周末
          </Link>
        </nav>
      )}
    </header>
  );
}
