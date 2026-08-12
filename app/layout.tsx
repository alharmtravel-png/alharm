import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'نظام محاسبة السياحة والسفر',
  description: 'Travel ERP - نظام إدارة الحجوزات والمحاسبة للسياحة والسفر',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
