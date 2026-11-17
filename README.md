# 京郊行记

北京周边旅行内容与获客型官网演示，基于 Next.js 16、TypeScript 和 Tailwind CSS 4。

## 启动

```bash
pnpm install
pnpm dev
```

打开 `http://localhost:3000`。

生产构建：

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
pnpm start
```

## 内容

- 10 个北京与环京目的地，覆盖慕田峪、古北水镇、爨底下、十渡等。
- 3 条周末路线与 3 篇行前指南。
- 目的地支持区域、兴趣和关键词筛选。
- 咨询表单在浏览器内生成并复制摘要，不发送或存储个人信息。

结构化内容集中在 `lib/data.ts`，页面位于 `app/`，共享组件位于 `components/`。

## 上线前

1. 将 `app/layout.tsx`、`app/robots.ts`、`app/sitemap.ts` 中的占位域名替换为正式域名。
2. 核对品牌名称、目的地开放信息、交通时长和所有运营内容。
3. 如需真实咨询，将本地演示表单接入经审核的表单服务或自有 API，并补充隐私告知。
4. 上线前再次核验 Wikimedia Commons 图片的作者、许可证和署名要求。

本站不包含数据库、登录、支付、库存或订单系统。
