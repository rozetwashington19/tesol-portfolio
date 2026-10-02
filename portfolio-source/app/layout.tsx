import type { Metadata, Viewport } from 'next';
import './globals.css';
import { sitePath } from '@/lib/sitePath';
export const metadata: Metadata = { title:'Rozario Washington | ENL / TESOL Educator',description:'Language, culture, and thoughtful learning design. Explore Rozario Washington’s bilingual ENL lessons and teaching practice.',icons:{icon:sitePath('/favicon.svg')}};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#08090a' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
