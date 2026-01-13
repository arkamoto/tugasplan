import React from "react";
import Link from "next/link";

const Header = () => (
  <header className="w-full bg-dark shadow-md py-4 px-6 flex items-center justify-between">
    <Link href="/">
      <span className="text-xl font-bold text-primary cursor-pointer">
        TugasPlan
      </span>
    </Link>
    <nav>
      <ul className="flex space-x-6">
        <li>
          <Link href="/features">
            <span className="text-primary hover:text-primary-light cursor-pointer">
              Features
            </span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="text-primary hover:text-primary-light cursor-pointer">
              About
            </span>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <span className="text-primary hover:text-primary-light cursor-pointer">
              Login
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
