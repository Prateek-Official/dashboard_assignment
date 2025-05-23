import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { ThemeContextProvider } from "./components/ToggleTheme";

function App() {
  return (
    <div className="font-sans">
      <ThemeContextProvider>
        <Header />
        <Body />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
