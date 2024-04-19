import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Tehran" />
      <footer className="coder">
        created by Mojdeh Khorsand Moghadam, open-sourced on{" "}
        <a
          href="https://github.com/realRJ10/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
