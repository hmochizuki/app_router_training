"use client";

import { usePathname, useRouter } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const HeaderNavLink: React.FC<Props> = ({ href, children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const onClick = () => router.push(href);
  const disabled = pathname === href
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-40 bg-blue-600 border border-blue-900 rounded-md disabled:opacity-50"
    >
      {children}
    </button>
  );
};
