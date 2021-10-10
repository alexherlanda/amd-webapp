import React from "react";
import {
  Section,
  SectionResume,
  SectionImage,
  TeamMember,
  Subtitle,
} from "components";
import img1 from "assets/images/img1.jpeg";
import img2 from "assets/images/img2.jpeg";
import girl from "assets/images/girl.jpg";
import man from "assets/images/man.jpg";

function PageTest() {
  return (
    <>
      <Section type="resume">
        <SectionResume title="Nuestro servicios">
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
      <Section type="segment">
        <div class="container">
          <div class="row">
            <div class="col">
              <SectionResume title="segmento">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </SectionResume>
            </div>
            <div class="col">
              <SectionImage src={img1} />
            </div>
          </div>
        </div>
      </Section>
      <Section type="segment">
        <div class="container">
          <div class="row">
            <div class="col">
              <SectionImage src={img2} />
            </div>
            <div class="col">
              <SectionResume title="segmento">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </SectionResume>
            </div>
          </div>
        </div>
      </Section>
      <Section type="segment" style={{ background: "#F7F7F7" }}>
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
    </>
  );
}

export default PageTest;
