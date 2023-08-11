import { AiOutlineClose } from 'react-icons/ai';

import NavList from './NavBarList';

interface NavBarProps {
  menuOpen: boolean;
  handleClick: React.MouseEventHandler<any>;
}

const NavBar = ({ menuOpen, handleClick }: NavBarProps) => {

  return (
    <nav>
      <div className="hidden xl:block">
        <NavList />
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
          <NavList handleClick={handleClick} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
