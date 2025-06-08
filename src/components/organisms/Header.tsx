'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LinkType } from '@/types/LinkType';
import { getLinkClass } from '@/utils/getLinkClass';
import Navbar from '@/components/organisms/Navbar';
import { useState } from 'react';
import { Menu } from 'lucide-react';

const links: LinkType[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contacts', label: 'Contacts' },
];

export default function Header() {
  const activePage = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-end bg-gray-800 p-4 text-white sm:justify-start lg:text-xl">
        <nav className="hidden space-x-4 sm:block">
          {links.map(({ href, label }) => {
            return (
              <Link
                key={href}
                href={href}
                className={getLinkClass({ activePage, href })}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="block cursor-pointer sm:hidden"
        >
          <Menu />
        </button>
      </header>

      {isMenuOpen && (
        <Navbar
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          links={links}
          activePage={activePage}
        />
      )}
    </>
  );
}
