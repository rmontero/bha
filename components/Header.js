import Link from 'next/link';
import Image from 'next/image'

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Image src="/svg/brho-us-logo.svg" alt="BRHO US Logo" width={200} height="auto" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
