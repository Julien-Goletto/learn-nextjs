import '@/app/ui/global.css';
import { inter as mainFont } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mainFont.className} antialiased`}>{children}</body>
    </html>
  );
}
