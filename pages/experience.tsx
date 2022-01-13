/* eslint-disable prefer-arrow-callback */
import styled from "styled-components";
import React, { useState } from "react";
import WebglBox from "../src/components/webgl/WebglBox";
import {
  verifyLogIn,
  checkIfLoggedIn,
  getUserName,
} from "../src/util/loginCookies";
import {
  getApparatusFromCloud,
  getExperienceFromCloud,
} from "../src/util/getDataFromCloud";
import { ExperienceData } from "../src/util/types";
import Loading from "../src/components/Loading";

const Content = styled.div`
  width: 100%;
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

type ExperienceProps = {
  dataId: string;
  isApparatusId: string;
};

function Experience({ dataId, isApparatusId }: ExperienceProps): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [userId] = useState(getUserName());
  const [experienceData, setExperienceData] = useState<ExperienceData>();

  // either apparatusID is provided or experience id but not both
  const experience: ExperienceData = {
    apparatusMetadata: { Paths: [], Data: [] },
    apparatusId: "",
    initializationData: { actionList: [] },
  };

  React.useEffect(() => {

    function getApparatusFromCloudHelper(id) {
      getApparatusFromCloud(id).then((apparatusJson) => {
        experience.apparatusId = apparatusJson.Id.Identifier;
        experience.apparatusMetadata = apparatusJson.Metadata;
        setExperienceData(experience);
        setLoading(false);
      });
    }

    // Don't load if you aren't logged in
    // TODO test to see if this is  working properly
    if (!checkIfLoggedIn()) return;

    // TODO change apparatusID to boolean instead of string or an enum
    // TODO what if getting data from cloud is unsuccessful?
    if (isApparatusId === "true") {
      getApparatusFromCloudHelper(dataId);
    } else {
      getExperienceFromCloud(userId, dataId).then((experienceJson) => {
        experience.initializationData.actionList = experienceJson.actionList;
        getApparatusFromCloudHelper(experienceJson.apparatusId);
      });
    }
  }, [dataId, experience, isApparatusId, userId]);

  React.useEffect(() => {
    verifyLogIn();
  }, []);

  // Todo what if the experienceData and userID are undefined? we should show an error message
  return !loading ? (
    <main>
      <Content>
        <WebglBox userId={userId} experienceData={experienceData} />
      </Content>
    </main>
  ) : (
    <Loading />
  );
}

Experience.getInitialProps = ({ query }) => {
  const { dataId } = query;
  const { isApparatusId } = query;
  return { dataId, isApparatusId };
};

export default Experience;
