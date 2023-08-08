import NavBarItem from './NavBarItem';

import { AiOutlineClose } from 'react-icons/ai';

const navItems: any[] = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/about',
    name: 'About us',
  },
  {
    href: '/services',
    name: 'Services',
  },
  {
    href: '/investments',
    name: 'Invest in cyprus',
  },
  {
    href: 'migration',
    name: 'Migration',
  },
  {
    href: '/contact',
    name: 'Contact us',
  },
];

interface NavBarProps {
  menuOpen: boolean;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

const NavBar = ({ menuOpen, handleClick }: NavBarProps) => {
  return (
    <nav>
      <div className="hidden xl:block">
        <ul className="flex className=' [&>*:not(:last-child)]:mr-[28px] '">
          {navItems.map(({ href, name }) => (
            <NavBarItem
              key={name}
              href={href}
              name={name}
            />
          ))}
        </ul>
      </div>
      <div
        className={
          menuOpen
            ? 'fixed left-0 top-0 w-[65%] lx:hidden h-screen bg-[#FFFFFF] p-10  ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 '
        }
      >
        <div className="flex w-full items-center justify-end">
          <div
            onClick={handleClick}
            className="cursor-pointer"
          >
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul className="className=' [&>*:not(:last-child)]:mb-[18px] '">
            {navItems.map(({ href, name }) => (
              <NavBarItem
                key={name}
                href={href}
                name={name}
                handleClick={handleClick}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
