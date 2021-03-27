import { Best } from "./components/Best";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Plans } from "./components/Plans";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <Best />
      <Plans />
      <GlobalStyle/>
    </>
  );
}
