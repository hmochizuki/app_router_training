import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

const HeaderNavLink: React.FC<Props> = ({ href, children }) => {
  return (
    <div className="w-40 bg-blue-600 border border-blue-900 rounded-md">
      <Link href={href}>{children}</Link>
    </div>
  );
};

export const Header: React.FC = () => {
  return (
    <header>
      <p className="bg-white text-center">天気予報アプリ ~~ Mochy Weather ~~</p>
      <div className="bg-blue-800">
        <div className="text-center text-white flex justify-center space-x-5">
          <HeaderNavLink href="/">Top</HeaderNavLink>
          <HeaderNavLink href="/weather">天気予報</HeaderNavLink>
        </div>
      </div>
    </header>
  );
};
