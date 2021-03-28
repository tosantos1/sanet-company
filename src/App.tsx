import { Benefits } from "./components/Benefits";
import { Best } from "./components/Best";
import { Depositions } from "./components/Depositions";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Plans } from "./components/Plans";
import { Sicons } from "./components/Sicons";


import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <Best />
      <Plans />
      <GlobalStyle/>
      <Benefits />
      <Sicons />
      <Depositions />
    </>
  );
}
