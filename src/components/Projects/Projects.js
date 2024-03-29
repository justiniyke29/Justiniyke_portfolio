import React from "react";
import Image from "next/image";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({
          id,
          image,
          title,
          description,
          tags,
          source,
          visit,
          showSource,
        }) => (
          <BlogCard key={id}>
            <Image src={image} width="450" height="250" />
            <TitleContent>
              <HeaderThree title={title}></HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              {showSource && (
                <ExternalLinks href={source} target="_blank" rel="noreferrer">
                  Code
                </ExternalLinks>
              )}
              <ExternalLinks href={visit} target="_blank" rel="noreferrer">
                View Live
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
