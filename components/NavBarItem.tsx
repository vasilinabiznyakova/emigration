import Link from 'next/link';
import { usePathname } from 'next/navigation';

import DropDownMenu from './DropDownMenu';

interface NavBarItemProps {
  name: string;
  href: string;
  handleClick?: React.MouseEventHandler<HTMLAnchorElement>;
  screenWidth: number;
}

const NavBarItem: React.FC<NavBarItemProps> = ({
  name,
  href,
  handleClick,
  screenWidth,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="text-center xl:text-start">
      {name !== 'Services' && screenWidth >= 1440 ? (
        <Link
          className={`uppercase xl:text-white text-base font-medium leading-snug hover:underline transition ${
            isActive ? 'underline' : ''
          }`}
          href={href}
          onClick={handleClick}
        >
          {name}
        </Link>
      ) : (
        <DropDownMenu
          // menuRoutes={menuRoutes}
          name={name}
          isActive={isActive}
        />
      )}
    </li>
  );
};

export default NavBarItem;
