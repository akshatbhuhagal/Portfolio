import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import Dart from '@/components/technologies/Dart';
import ReactNativeExpo from '@/components/technologies/ReactIcon';
import Flutter from '@/components/technologies/Flutter';
import JetpackCompose from '@/components/technologies/JetpackCompose';
import Kotlin from '@/components/technologies/Kotlin';

export const skillComponents = {
  Kotlin: Kotlin,
  Flutter: Flutter,
  Dart: Dart,
  JetpackCompose: JetpackCompose,
  ReactNativeExpo: ReactNativeExpo,
};

export const heroConfig = {
  name: 'Akshat Bhuhagal',
  title: 'A Lead Mobile Engineer.',
  avatar: '/assets/logo.png',

  skills: [
    {
      name: 'Kotlin',
      href: 'https://kotlinlang.org/',
      component: 'Kotlin',
    },
    {
      name: 'Flutter',
      href: 'https://flutter.dev/',
      component: 'Flutter',
    },
    {
      name: 'Dart',
      href: 'https://dart.dev/',
      component: 'Dart',
    },
    {
      name: 'Jetpack Compose',
      href: 'https://developer.android.com/jetpack/compose',
      component: 'JetpackCompose',
    },
    {
      name: 'RN Expo',
      href: 'https://expo.dev/',
      component: 'ReactNativeExpo',
    },
  ],

  description: {
    template:
      'I build scalable mobile apps using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. Specializing in <b>FinTech</b>, <b>Engineering</b>, and <b>cross-platform</b> solutions for iOS & Android.',
  },

  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: 'mailto:akshatbhuhagal@gmail.com',
      icon: 'Chat',
    },
  ],
};

export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/akshat-bhuhagal/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/akshatbhuhagal',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:akshatbhuhagal@gmail.com',
    icon: <Mail />,
  },
];
