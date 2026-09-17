"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CustomLink({ path, children }) {
  const pathName = usePathname();
  let active = pathName === path;
  return (
    <Link className={active ? "text-blue-800" : ""} href={path}>
      {children}
    </Link>
  );
}

export default CustomLink;
