import AWS from '@/components/technologies/AWS';
import Codemagic from '@/components/technologies/Codemagic';
import Dart from '@/components/technologies/Dart';
import Firebase from '@/components/technologies/Firebase';
import Figma from '@/components/technologies/Figma';
import Flutter from '@/components/technologies/Flutter';
import Kotlin from '@/components/technologies/Kotlin';
import Postman from '@/components/technologies/Postman';
import Riverpod from '@/components/technologies/Riverpod';
import Sentry from '@/components/technologies/Sentry';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Gunpowder Innovations',
    position: 'Lead Mobile Engineer',
    location: 'London, UK (Remote)',

    description: [
      'Led architecture of *Zugo*, a Flutter FinTech app for European markets with clean layered architecture.',
      'Built white-label system (single codebase → multiple brands), reducing maintenance by ~80%.',
      'Implemented offline-first networking with Dio + interceptors + Hive caching.',
      'Integrated Plaid (bank linking), Onfido & Veriff (KYC), and built payment flows & scheduling systems.',
      'Owned full auth & security stack: OTP, Google/Apple login, Face ID, biometrics, encrypted storage, jailbreak detection.',
      'Set up CI/CD with Codemagic, Shorebird OTA updates, and multi-brand release system (Play Store, Firebase, TestFlight).',
      'Integrated Sentry (crash reporting) and PostHog (analytics). Wrote integration tests with cloud emulators.',
    ],
    startDate: 'February 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Flutter',
        href: 'https://flutter.dev/',
        icon: <Flutter />,
      },
      {
        name: 'Dart',
        href: 'https://dart.dev/',
        icon: <Dart />,
      },
      {
        name: 'Firebase',
        href: 'https://firebase.google.com/',
        icon: <Firebase />,
      },
      {
        name: 'Codemagic',
        href: 'https://codemagic.io/',
        icon: <Codemagic />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
    ],
    website: 'https://www.gunpowderinnovations.com/',
    linkedin: 'https://www.linkedin.com/company/gunpowder-innovations/',
  },
  {
    isCurrent: false,
    company: 'Mindnotix Software Solution',
    position: 'Mobile Engineer',
    location: 'Remote',

    description: [
      'Built *CricketPoll*, a live scoring + bidding platform using Clean Architecture + Riverpod.',
      'Owned full lifecycle from architecture design to Play Store release.',
      'Developed *GDigital* delivery tracking module - reduced app size by 40–65% while maintaining real-time tracking accuracy.',
      'Led Flutter migration strategy with phased migration plan, shared components, and native bridges.',
    ],
    startDate: 'April 2023',
    endDate: 'October 2024',
    technologies: [
      {
        name: 'Flutter',
        href: 'https://flutter.dev/',
        icon: <Flutter />,
      },
      {
        name: 'Dart',
        href: 'https://dart.dev/',
        icon: <Dart />,
      },
      {
        name: 'Riverpod',
        href: 'https://riverpod.dev/',
        icon: <Riverpod />,
      },
      {
        name: 'Firebase',
        href: 'https://firebase.google.com/',
        icon: <Firebase />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    company: 'ThinkDebug',
    position: 'Mobile Engineer',
    location: 'Remote',

    description: [
      'Built video playback system for EdTech app (50K+ downloads) using ExoPlayer with adaptive streaming + offline caching.',
      'Led development of *Sportimo*, a Fantasy sports app for an Arabic OTT platform (100M+ downloads ecosystem). Added RTL support + localization.',
      'Improved *Study Adda* app (500K+ downloads) - optimized quiz performance and enhanced progress tracking, reducing drop-offs.',
    ],
    startDate: 'January 2022',
    endDate: 'February 2023',
    technologies: [
      {
        name: 'Kotlin',
        href: 'https://kotlinlang.org/',
        icon: <Kotlin />,
      },
      {
        name: 'Flutter',
        href: 'https://flutter.dev/',
        icon: <Flutter />,
      },
      {
        name: 'Dart',
        href: 'https://dart.dev/',
        icon: <Dart />,
      },
      {
        name: 'Firebase',
        href: 'https://firebase.google.com/',
        icon: <Firebase />,
      },
    ],
    website: '#',
  },
];
