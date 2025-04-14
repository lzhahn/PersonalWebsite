"use client";

import Link from 'next/link';
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Flex, Text, Box } from '@radix-ui/themes';

export default function Header() {
  return (
    <Box className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-sm">
      <Flex className="container mx-auto px-4 py-4" justify="between" align="center">
        <Link href="/" className="text-xl font-bold dark:text-white">
          <Text size="5" weight="bold">Lucas Hahn</Text>
        </Link>
        <NavigationMenu.Root className="relative">
          <NavigationMenu.List className="flex space-x-6">
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <a href="#hero" className="hover:text-blue-500 transition-colors dark:text-white">
                  <Text size="2">Home</Text>
                </a>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <a href="#projects" className="hover:text-blue-500 transition-colors dark:text-white">
                  <Text size="2">Experience</Text>
                </a>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <a href="#skills" className="hover:text-blue-500 transition-colors dark:text-white">
                  <Text size="2">Skills</Text>
                </a>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <a href="#contact" className="hover:text-blue-500 transition-colors dark:text-white">
                  <Text size="2">Contact</Text>
                </a>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </Flex>
    </Box>
  );
}
