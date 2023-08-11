import useScreenWidth from '@/utils/useScreenWidth';
import NavBarItem from './NavBarItem';

const routes: any[] = [
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

interface NavListProps {
  handleClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const NavList: React.FC<NavListProps> = ({ handleClick }) => {
  const screenWidth = useScreenWidth()

  return (
    <ul className="[&>*:not(:last-child)]:mb-[18px] xl:flex && [&>*:not(:last-child)]:mr-[28px]  xl:[&>*:not(:last-child)]:mb-0">
      {routes.map(({ href, name }) => (
        <NavBarItem
          key={name}
          href={href}
          name={name}
          handleClick={handleClick}
          screenWidth={screenWidth}
        />
      ))}
    </ul>
  );
};

export default NavList;
