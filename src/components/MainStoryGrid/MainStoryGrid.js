import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";
import { QUERIES } from "../../constants";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <SecondaryStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </SecondaryStoryWrapper>
          ))}
        </SecondaryStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper key={story.id} style={{ flex: 1 }}>
              <OpinionStory {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  row-gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
  }

  @media ${QUERIES.laptopAndUp} {
    row-gap: 0;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
    margin-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
    margin-right: 16px;
  }
`;

const SecondaryStoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondaryStoryWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const OpinionStoryList = styled(SecondaryStoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
  }
`;

const OpinionStoryWrapper = styled(SecondaryStoryWrapper)`
  flex: 1;

  @media ${QUERIES.tabletOnly} {
    &:not(:last-of-type) {
      border-bottom: revert;
      padding-bottom: revert;
      margin-bottom: revert;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  padding-top: 16px;
  border-top: 1px solid var(--color-gray-300);
  margin-top: 16px;
`;

export default MainStoryGrid;
