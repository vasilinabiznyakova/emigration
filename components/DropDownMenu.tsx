import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';

interface MenuRoutesProps {
  // menuRoutes: any[];
  name: string;
  isActive: boolean;
}

const menuRoutes = [
  {
    name: 'Investments opportunities',
    href: '/services/investment',
  },
  {
    name: 'Business relocation',
    href: '/services/business',
  },
  {
    name: 'Family relocation',
    href: '/services/family',
  },
];

const DropDownMenu: React.FC<MenuRoutesProps> = ({
  // menuRoutes,
  name,
  // isActive,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  

  return (
    <>
      <div className=" flex items-center justify-between uppercase xl:text-white text-base font-medium leading-snug hover:underline transition pb-[26px]">
        <Link
          href="/services"
          className="flex mr-[4px]"
        >
          {name}
        </Link>
        {!isOpen ? (
          <AiOutlineCaretDown onClick={() => setIsOpen((prev) => !prev)} />
        ) : (
          <AiOutlineCaretUp onClick={() => setIsOpen((prev) => !prev)} />
        )}
      </div>
      {isOpen ? (
        <ul className="[&>*:not(:last-child)]:mb-[8px] absolute w-[280px] h-[120px] bg-white text-center py-[19px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          {menuRoutes.map(({ href, name }, i) => (
            <li key={i}>
              <Link
                onClick={() => setIsOpen((prev) => !prev)}
                className={`text-slate-600 text-lg font-normal leading-snug hover:underline transition ${
                  pathname === href ? 'underline' : ''
                }`}
                href={href}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default DropDownMenu;
