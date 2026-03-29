import AWS from '@/components/technologies/AWS';
import Java from '@/components/technologies/Java';
import Dart from '@/components/technologies/Dart';
import Firebase from '@/components/technologies/Firebase';
import Flutter from '@/components/technologies/Flutter';
import JetpackCompose from '@/components/technologies/JetpackCompose';
import Kotlin from '@/components/technologies/Kotlin';
import NodeJs from '@/components/technologies/NodeJs';
import Riverpod from '@/components/technologies/Riverpod';
import Sentry from '@/components/technologies/Sentry';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'PlayerAmp',
    description:
      'Feature-rich music player for Android built with Kotlin and Jetpack Compose. Modern Material Design UI with powerful audio playback capabilities.',
    image: '/project/playeramp.png',
    link: 'https://play.google.com/store/apps/details?id=com.playeramp.amppaid',
    technologies: [
      { name: 'Kotlin', icon: <Kotlin key="kotlin" /> },
      { name: 'Jetpack Compose', icon: <JetpackCompose key="jetpackcompose" /> },
    ],
    isWorking: true,
  },
  {
    title: 'AllerWell',
    description:
      'Health-tech platform helping users manage allergies with personalized tracking, insights, and recommendations. Built with Flutter frontend and Node.js + AWS backend.',
    image: '/project/allerwell.png',
    link: 'https://allerwell.tech/',
    technologies: [
      { name: 'Flutter', icon: <Flutter key="flutter" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
    ],
    isWorking: true,
  },
  {
    title: 'MovieChitChat',
    description:
      'Flutter chat application for movie discussions powered by AWS Amplify. Real-time messaging with cloud-based backend infrastructure.',
    image: '/project/moviechitchat.png',
    link: 'https://github.com/akshatbhuhagal/MovieChitChat',
    technologies: [
      { name: 'Flutter', icon: <Flutter key="flutter" /> },
      { name: 'Dart', icon: <Dart key="dart" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
    ],
    github: 'https://github.com/akshatbhuhagal/MovieChitChat',
    isWorking: true,
  },
  {
    title: 'MyNotes',
    description:
      'MVVM note-taking app built with Kotlin using Room Database, LiveData, and ViewModel. Clean architecture with modern Android development practices.',
    image: '/project/mynotes.png',
    link: 'https://github.com/akshatbhuhagal/MyNotes',
    technologies: [
      { name: 'Kotlin', icon: <Kotlin key="kotlin" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
    ],
    github: 'https://github.com/akshatbhuhagal/MyNotes',
    isWorking: true,
  },
  {
    title: 'Zugo',
    description:
      'Flutter FinTech app for European markets with white-label system, KYC integrations (Plaid, Onfido, Veriff), payment flows, and offline-first architecture.',
    image: '/project/zugo.png',
    link: 'https://zugo.group/',
    technologies: [
      { name: 'Flutter', icon: <Flutter key="flutter" /> },
      { name: 'Dart', icon: <Dart key="dart" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
      { name: 'Sentry', icon: <Sentry key="sentry" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
    ],
    isWorking: true,
  },
  {
    title: 'CricketPoll',
    description:
      'Live cricket scoring and bidding platform built with Flutter using Clean Architecture and Riverpod state management. Full lifecycle ownership from architecture to Play Store release.',
    image: '/project/cricketpoll.png',
    link: '#',
    technologies: [
      { name: 'Flutter', icon: <Flutter key="flutter" /> },
      { name: 'Dart', icon: <Dart key="dart" /> },
      { name: 'Riverpod', icon: <Riverpod key="riverpod" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
    ],
    isWorking: true,
  },
  {
    title: 'FitTrack',
    description:
      'Privacy-focused fitness tracking app for running with real-time metrics, route mapping, and local-first data storage.',
    image: '/project/fittrack.png',
    link: 'https://github.com/akshatbhuhagal/FitTrack',
    technologies: [
      { name: 'Kotlin', icon: <Kotlin key="kotlin" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
    ],
    github: 'https://github.com/akshatbhuhagal/FitTrack',
    isWorking: true,
  },
  {
    title: 'DLC',
    description:
      'The Learning Club — an educational Android app built with Kotlin and Java, available on the Google Play Store.',
    image: '/project/dlc.png',
    link: 'https://play.google.com/store/apps/details?id=com.theLearningcLub&pli=1',
    technologies: [
      { name: 'Kotlin', icon: <Kotlin key="kotlin" /> },
      { name: 'Java', icon: <Java key="java" /> },
    ],
    isWorking: true,
  },
];
