import { useEffect } from "react";

export default function TickerBar() {
  useEffect(() => {
    const container = document.getElementById("horizon-ticker");
    container.innerHTML = ""; // Prevent duplication

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:EURUSD", title: "EUR/USD" },
        { proName: "FOREXCOM:GBPUSD", title: "GBP/USD" },
        { proName: "FOREXCOM:USDJPY", title: "USD/JPY" },
        { proName: "BINANCE:BTCUSDT", title: "BTC/USDT" },
        { proName: "NASDAQ:NDX", title: "Nasdaq 100" },
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
        { proName: "TVC:DEU40", title: "DAX 40" },
      ],
      showSymbolLogo: true,
      colorTheme: "light",
      isTransparent: true,
      displayMode: "adaptive",
      locale: "en",
    });

    container.appendChild(script);
  }, []);

  return (
    <div className="w-full border border-gray-200 rounded-xl shadow-sm bg-white">
      <div id="horizon-ticker" className="py-3 px-2"></div>
    </div>
  );
}
