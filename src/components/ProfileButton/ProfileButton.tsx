"use client";

import { logout } from "@/app/actions/auth";
import Image from "next/image";
import * as React from "react";

function ProfileButton({ className = "" }: { className?: string }) {
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <button
      className={`
        group cursor-pointer
        outline-0 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2
        transition-colors ease-in duration-75 ${className}
      `}
      aria-labelledby="profile-btn"
      onClick={handleLogout}
    >
      <span id="profile-btn" hidden>
        PROFILE
      </span>

      <Image
        src="/assets/image-avatar.png"
        alt=""
        width={24}
        height={24}
        className="
          outline outline-white -outline-offset-1 rounded-full
          transition-colors ease-in duration-75
          group-hover:outline-red-500 group-focus-visible:outline-red-500
        "
      />
    </button>
  );
}

export default ProfileButton;
