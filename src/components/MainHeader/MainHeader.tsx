import * as React from "react";
import PageLink from "../PageLink";
import Logout from "../Logout";
import Navbar from "../Navbar";
import { type CurrentPath } from "@/types/types";

function MainHeader({ currentPath = "/" }: { currentPath?: CurrentPath }) {
  return (
    <header className="p-4 md:p-5 lg:p-8 md:rounded-[10px] bg-blue-900 flex lg:flex-col lg:min-h-[960px] items-center justify-between gap-2">
      <div className="flex items-center lg:flex-col lg:gap-18 w-full">
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
