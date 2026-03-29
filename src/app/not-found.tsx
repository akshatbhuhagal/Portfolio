import Container from '@/components/common/Container';
import { Link } from 'next-view-transitions';

export default function NotFound() {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center py-16">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-secondary mt-4 text-lg">Page not found</p>
      <Link
        href="/"
        className="mt-8 rounded-md border border-black/20 px-4 py-2 text-sm transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/5"
      >
        Go back home
      </Link>
    </Container>
  );
}
