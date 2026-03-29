import { about } from './About';
import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
}

export const siteConfig = {
  name: heroConfig.name,
  title: 'Akshat Bhuhagal - Lead Mobile Engineer',
  description:
    'Lead Mobile Engineer specializing in Flutter & Kotlin. Building scalable apps for FinTech, EdTech, and sports platforms.',
  url: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  author: {
    name: about.name,
    github: 'akshatbhuhagal',
    linkedin: 'akshat-bhuhagal',
    email: 'akshatbhuhagal@gmail.com',
  },
  keywords: [
    'portfolio',
    'mobile engineer',
    'flutter',
    'kotlin',
    'android',
    'ios',
    'fintech',
    heroConfig.name.toLowerCase(),
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  '/': {
    title: `${heroConfig.name} - ${heroConfig.title}`,
    description: `${about.description} Explore my projects, experience, and technical expertise.`,
    keywords: [
      'portfolio',
      'mobile engineer',
      'flutter developer',
      'kotlin developer',
      'projects',
    ],
  },

  '/work-experience': {
    title: 'Work Experience - Professional Journey',
    description:
      'Explore my professional work experience across different companies and roles in mobile development.',
    keywords: [
      'work experience',
      'career',
      'mobile engineer',
      'flutter developer',
      'kotlin developer',
    ],
  },

  '/projects': {
    title: 'Projects - My Work & Projects Portfolio',
    description:
      'Discover my projects across Flutter, Kotlin, and mobile development. From FinTech apps to open-source packages.',
    keywords: [
      'projects',
      'portfolio',
      'mobile apps',
      'flutter apps',
      'kotlin apps',
    ],
  },

  '/resume': {
    title: 'Resume - Professional CV',
    description: `View and download ${heroConfig.name}'s professional resume and CV. Technical skills, experience, and qualifications.`,
    keywords: [
      'resume',
      'cv',
      'professional',
      'skills',
      'qualifications',
      'download',
    ],
  },
};

export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
