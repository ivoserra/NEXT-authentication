"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LayoutProvider = ({ children }: any) => {
  const pathname = usePathname();

  const isPublicPage = pathname === "/login" || pathname === "/register";

  return (
    <div>
      {!isPublicPage && (
        <div className="flexjustify-content items-center gap-3">
          <h1>NEXT {pathname}</h1>
          <div className="flex items-center gap-3">
            <Link href="/">Home</Link>
            <Link href="/login">login</Link>
            <Link href="register">Register</Link>
            <Link href="profile">Profile</Link>
          </div>
        </div>
      )}

      {children}
      <footer>
        <h4>footer</h4>
      </footer>
    </div>
  );
};
