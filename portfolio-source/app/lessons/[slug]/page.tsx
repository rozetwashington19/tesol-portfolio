import { CaseStudy } from '@/components/portfolio';
import { lessons } from '@/lib/portfolioData';
import { notFound } from 'next/navigation';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const l=lessons.find(x=>x.slug===slug);return {title:l?`${l.title} | Rozario Washington`:'Lesson not found',description:l?.description}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const l=lessons.find(x=>x.slug===slug);if(!l)notFound();return <CaseStudy lesson={l}/>}

export function generateStaticParams(){ return lessons.map(({slug}) => ({slug})); }
export const dynamicParams = false;
