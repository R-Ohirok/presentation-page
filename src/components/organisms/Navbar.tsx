'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { X } from 'lucide-react';
import { LinkType } from '@/types/LinkType';
import { getLinkClass } from '@/utils/getLinkClass';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  links: LinkType[];
  activePage: string;
};

export default function Navbar({ onClose, isOpen, links, activePage }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <aside className="fixed top-0 right-0 bottom-0 left-0 z-10 h-dvh bg-gray-800 p-4 text-white">
      <div className="flex justify-end">
        <button onClick={onClose} aria-label="Close" className="cursor-pointer">
          <X />
        </button>
      </div>

      <div>
        <nav>
          <ul className="my-[30%] flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <li key={href} className="self-center text-xl">
                <Link
                  href={href}
                  onClick={onClose}
                  className={getLinkClass({ activePage, href })}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
