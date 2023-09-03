import { HeaderNavLink } from "./HeaderNavLink";


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
