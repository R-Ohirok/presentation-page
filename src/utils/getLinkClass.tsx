import cn from 'classnames';

type Props = {
  activePage: string;
  href: string;
};

export const getLinkClass = ({ activePage, href }: Props) => {
  const isActive = activePage === href;
  const linkClass = cn('px-3 py-1 rounded', {
    'bg-blue-600 font-semibold': isActive,
    'hover:bg-blue-500': !isActive,
  });

  return linkClass;
};
