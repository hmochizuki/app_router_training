"use client";
import ActionButtons from "./ActionButtons";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>天気予報アプリ</h1>
      <h2>mochy weather</h2>
      <ActionButtons />
    </main>
  );
};

export default Home;
