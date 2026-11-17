import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://jingjiao.example.com"),
  title: {
    default: "京郊行记｜北京周边旅行灵感",
    template: "%s｜京郊行记",
  },
  description:
    "发现北京周边值得出发的山野、湖泊、古镇与长城，按时间和兴趣找到适合你的周末路线。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
