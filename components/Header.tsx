'use client';

import Image from 'next/image';
import { useState } from 'react';

import NavBar from './NavBar';
import Logo from '../public/assets/logo.png';
import Burger from '../public/assets/menu.svg';

import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex h-full w-full justify-between items-center bg-gradient-to-r from-violet-900 to-violet-700 px-[50px] py-[20px]">
      <Link href="/">
        <Image
          src={Logo}
          alt="Logo"
          width="100"
          height="80"
          className="cursor-pointer"
        />
      </Link>

      <NavBar menuOpen={menuOpen} />

      <button
        className="xl:hidden"
        type="button"
        onClick={handleClick}
      >
        <Image
          src={Burger}
          alt="Logo"
          width="40"
          height="30"
          className="cursor-pointer"
        />
      </button>
    </div>
  );
};

export default Header;
