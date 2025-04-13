import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Lucas Hahn
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-500 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/resume" className="hover:text-blue-500 transition-colors">
                Resume
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
