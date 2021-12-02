/* eslint-disable prefer-arrow-callback */
import styled from "styled-components";
import React, { useState } from "react";
import NavigationBox from "../src/components/NavigationBox";
import WebglBox from "../src/components/webgl/WebglBox";
import {
  getApparatusFromCloud,
  getExperienceFromCloud,
} from "../src/util/getDataFromCloud";
import { ExperienceData } from "../src/util/types";

const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;

const LoadingView = (): JSX.Element => (
  <main>
    <Content>
      <p>Loading....</p>
    </Content>
  </main>
);

function Experience({ userId, dataId, isApparatusId }): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [experienceData, setExperienceData] = useState<ExperienceData>();
  // either apparatusID is provided or experience id but not both
  const [test, setTest] = useState<boolean>(isApparatusId);

  const experience: ExperienceData = {
    apparatusMetadata: { Paths: [], Data: [] },
    apparatusId: "",
    initializationData: { actionList: [] },
  };

  React.useEffect(() => {
    if (isApparatusId === 'true') {
      getApparatusFromCloud(dataId).then((apparatusJson) => {
        experience.apparatusId = apparatusJson.Id.Identifier;
        experience.apparatusMetadata = apparatusJson.Metadata;
        setExperienceData(experience);
        setLoading(false);
      });
    } else{
      getExperienceFromCloud(userId, dataId).then((experienceJson) => {
        experience.initializationData.actionList = experienceJson.actionList;
        getApparatusFromCloud(experienceJson.apparatusId).then(
          (apparatusJson) => {
            experience.apparatusId = apparatusJson.Id.Identifier;
            experience.apparatusMetadata = apparatusJson.Metadata;
            setExperienceData(experience);
            setLoading(false);
          }
        );
      });
    }
  }, [isApparatusId]);

  return !loading ? (
    <main>
      <Content>
        <WebglBox userId={userId} experienceData={experienceData} />
        <NavigationBox />
      </Content>
    </main>
  ) : (
    <LoadingView />
  );
}

Experience.getInitialProps = ({ query }) => {
  const userId = query.userId;
  const dataId = query.dataId;
  const isApparatusId = query.isApparatusId;
  return { userId, dataId, isApparatusId };
};

export default Experience;
