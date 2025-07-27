import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const linkStyle = (path: string) =>
    router.pathname === path
      ? 'text-yellow-300 underline'
      : 'text-white hover:underline';

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="flex justify-center space-x-6">
        <Link href="/home" className={linkStyle('/home')}>Home</Link>
        <Link href="/about" className={linkStyle('/about')}>About</Link>
        <Link href="/posts" className={linkStyle('/posts')}>Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
