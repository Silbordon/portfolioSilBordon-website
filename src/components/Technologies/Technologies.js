import React from 'react';
import { DiFirebase, DiReact, DiZend, DiBootstrap, DiMysql, DiNodejs } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js and Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Firebase</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Figma</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiBootstrap size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Bootstrap</ListTitle>
          <ListParagraph>
            And others like: <br />
            Tailwind, Bulma, MUI, Antd
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiMysql size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mysql</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Postgress
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiNodejs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Nodejs</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Express
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Svelte</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Sveltekit
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Typescript</ListTitle>
        </ListContainer>
      </ListItem>

    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;