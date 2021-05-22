import { Benefits } from "./components/Benefits";
import { Best } from "./components/Best";
import { Depositions } from "./components/Depositions";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InfoBar } from "./components/InfoBar";
import { Plans } from "./components/Plans";
import { Sicons } from "./components/Sicons";
import { SuportCentral } from './components/suportCentral';
import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { OpenModal } from "./components/OpenModal";

Modal.setAppElement('#root');

export function App() {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);

  function handleOpenNavBar() {
    setIsOpenNavBar(true);
  }

  function handleCloseNavBar() {
    setIsOpenNavBar(false);
  }

  return (
    <>
      <Header onOpenModal={handleOpenNavBar} />
      <Hero />
      <Best />
      <Plans />
      <OpenModal
        isOpen={isOpenNavBar}
        onRequestClose={handleCloseNavBar}
      />
      <GlobalStyle />
      <Benefits />
      <Sicons />
      <Depositions />
      <SuportCentral />
      <InfoBar />
    </>
  );
}
