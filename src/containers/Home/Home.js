import React from "react";
import { Section, Footer, SliderMobile } from "../../components";
import { Interests, NewsFeed, Ranking, Slider } from "../../containers";

import { useMediaQuery } from "react-responsive";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <>
      {isTabletOrMobile && isPortrait ? <SliderMobile /> : <Slider />}

      <Section
        title="Asociación Mexicana de Debate"
        description="La Asociación Mexicana de Debate (AMD) es una ONG dedicada a promover el pensamiento crítico y la práctica de debate en México y en el mundo."
      />

      <Section
        title="Noticias"
        description="Entérate de las historias y conoce a las personas que forman el circuito mexicano de debate."
      >
        <NewsFeed />
      </Section>

      <Section
        title="Ranking"
        description="Les debatientes mejor clasificados en la Liga Mexicana de Debate 2021"
      >
        <Ranking />
      </Section>

      <Section title="Esto te interesa" description="">
        <Interests />
      </Section>

      <Footer />
    </>
  );
}

export default App;
