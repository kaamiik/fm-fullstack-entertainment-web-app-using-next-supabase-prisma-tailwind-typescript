import * as React from 'react';
import PageLink from '../PageLink';
import Logout from '../Logout';
import Navbar from '../Navbar';
import { type CurrentPath } from '@/types/types';

function MainHeader({ currentPath = '/' }: { currentPath?: CurrentPath }) {
  return (
    <header className="flex items-center justify-between gap-2 bg-blue-900 p-4 md:rounded-[10px] md:p-5 lg:min-h-[960px] lg:flex-col lg:p-8">
      <div className="flex w-full items-center lg:flex-col lg:gap-18">
        <PageLink />
        <Navbar
          currentPath={currentPath}
          className="ms-auto me-auto lg:ms-0 lg:me-0"
        />
      </div>
      <Logout />
    </header>
  );
}

export default MainHeader;
