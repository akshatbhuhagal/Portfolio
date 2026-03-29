'use client';

import { ctaConfig } from '@/config/CTA';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

import Container from '../common/Container';

interface CallToActionProps {
  profileImage?: string;
  profileAlt?: string;
  linkText?: string;
  preText?: string;
}

export default function CTA({
  profileImage = ctaConfig.profileImage,
  profileAlt = ctaConfig.profileAlt,
  linkText = ctaConfig.linkText,
  preText = ctaConfig.preText,
}: CallToActionProps) {
  return (
    <Container className="mt-20 rounded-md border border-dashed border-black/20 py-8 dark:border-white/10">
      <div className="mt-6 w-full flex-col px-6 pb-8 sm:flex sm:items-center sm:justify-between sm:px-12">
        <p className="mb-4 text-center text-base opacity-50 sm:mb-3 md:text-xl">
          {preText}
        </p>
        <div className="mt-4 flex w-full justify-center sm:mt-0 sm:w-auto sm:justify-end">
          <Link
            href="mailto:akshatbhuhagal@gmail.com"
            className="group inline-flex cursor-pointer items-center self-end rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black shadow-[0_0_5px_rgba(0,0,0,0.1)] transition-all dark:border-white/30 dark:bg-white/15 dark:text-white dark:shadow-[0_0_5px_rgba(255,255,255,0.1)]"
          >
            <div className="relative z-20 flex items-center gap-2 transition-all duration-300 group-hover:gap-8">
              <div className="h-5 w-5 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  alt={profileAlt}
                  width={20}
                  height={20}
                  className="h-full w-full object-cover"
                  src={profileImage}
                  style={{ color: 'transparent' }}
                />
              </div>
              <div className="absolute left-[24px] flex -translate-x-full transform items-center gap-0 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <div className="mr-2 ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[8px] dark:bg-white/10">
                  You
                </div>
              </div>
              <span className="relative ml-0 block text-sm font-bold whitespace-nowrap transition-all duration-300 group-hover:ml-4">
                {linkText}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
}
