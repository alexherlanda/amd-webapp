import React from "react";
import girl from "assets/images/girl.jpg";
import man from "assets/images/man.jpg";
import {
  Section,
  SectionResume,
  Subtitle,
  TeamMember,
  CoverageCarrousel,
  Timeline,
} from "components/";
function About() {
  return (
    <>
      <Section type="resume">
        <SectionResume title="¿Quiénes somos?">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </SectionResume>
      </Section>
      <Section type="single">
        <div class="container">
          <Subtitle title="Asociados" />
          <div class="row">
            <TeamMember
              src={girl}
              name="Jessi Romero"
              rol="React JS / React Native - Developer "
            />
            <TeamMember
              src={man}
              name="Tomás Hernández Alvarado"
              rol="React JS / React Native - Developer "
            />
            <TeamMember
              src={man}
              name="Tomás Hernández Alvarado"
              rol="React JS / React Native - Developer "
            />
          </div>
        </div>
      </Section>
      <Section type="segment" bg="bg-gray">
        <div class="container">
          <Subtitle title="Equipo ejecutivo" />
          <div class="row">
            <TeamMember
              src={girl}
              name="Jessi Romero"
              rol="React JS / React Native - Developer "
            />
            <TeamMember
              src={man}
              name="Tomás Hernández Alvarado"
              rol="React JS / React Native - Developer "
            />
            <TeamMember
              src={man}
              name="Tomás Hernández Alvarado"
              rol="React JS / React Native - Developer "
            />
          </div>
        </div>
      </Section>
      <Section type="resume">
        <SectionResume title="">
          <Timeline />
        </SectionResume>
      </Section>
      <Section type="single">
        <div class="container">
          <Subtitle title="Proyectos" />
          <div class="row"></div>
        </div>
      </Section>
      <Section type="segment" bg="bg-gray">
        <div class="container">
          <Subtitle title="Colaboraciones" />
        </div>
      </Section>
      <CoverageCarrousel />
    </>
  );
}

export default About;
