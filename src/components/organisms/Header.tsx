'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LinkType } from '@/types/LinkType';
import { getLinkClass } from '@/utils/getLinkClass';
import Navbar from './Navbar';
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
      <header className="sticky top-0 bg-gray-800 lg:text-xl text-white p-4 flex justify-end sm:justify-start items-center">
        <nav className="hidden sm:block space-x-4">
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
          className="block sm:hidden cursor-pointer"
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
