import { log } from 'console';
import NavBarItem from './NavBarItem';

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
}

const NavBar: React.FC<NavBarProps> = (menuOpen) => {
  return (
    <nav className="fixed w-full">
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
            ? 'fixed left-0 top-0 w-[65%] lx:hidden h-screen bg-[#FFF] p-10  ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 bg-red'
        }
      >
        cccc
      </div>
    </nav>
  );
};

export default NavBar;
