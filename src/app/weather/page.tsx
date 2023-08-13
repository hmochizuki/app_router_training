import { getCurrentWeather } from "@/services/weather";

const Weather = async () => {
  const currentWeather = await getCurrentWeather("Tokyo");
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>現在の天気</h1>
      <table className="border border-black">
        <thead className="border border-black">
          <tr className="border border-black">
            <th className="border border-black">name</th>
            <th>current weather</th>
          </tr>
        </thead>
        <tbody className="border border-black">
          <tr className="border border-black">
            <td className="border border-black">
              {currentWeather.data.location.name}
            </td>
            <td>
              {currentWeather.data.current.condition.text}
              <img src={currentWeather.data.current.condition.icon} />
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Weather;
