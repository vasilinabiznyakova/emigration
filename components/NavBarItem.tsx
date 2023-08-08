import Link from 'next/link';

interface NavBarItemProps {
  name: string;
  href: string;
  handleClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ name, href, handleClick }) => {
  return (
    <li className="text-center xl:text-start">
      <Link
        className="uppercase xl:text-white text-base font-medium leading-snug hover:underline"
        href={href}
        onClick={handleClick}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavBarItem;
