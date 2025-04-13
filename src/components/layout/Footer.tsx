"use client";

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <div>
            <p className="text-sm text-gray-600 dark:text-white">
              {currentYear} Lucas Hahn. All rights reserved.
            </p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-600 dark:text-white">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
