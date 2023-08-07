import Link from 'next/link';

interface NavBarItemProps {
  name: string;
  href: string;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ name, href }) => {
  return (
    <li>
      <Link
        className="uppercase text-center text-white text-base font-medium leading-snug"
        href={href}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavBarItem;
