"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "../../atoms/Button";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const HeaderNavLink: React.FC<Props> = ({ href, children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const onClick = () => router.push(href);
  const disabled = pathname === href;
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};
