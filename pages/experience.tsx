/* eslint-disable prefer-arrow-callback */
import styled from "styled-components";
import React, { useState } from "react";
import { Alert, AlertTitle } from "@mui/material";
import WebglBox from "../src/components/WebglBox";
import {
  verifyLogIn,
  checkIfLoggedIn,
  getUserName,
} from "../src/util/loginCookies";
import {
  getApparatusFromCloud,
  getExperienceFromCloud,
} from "../src/util/cloudOperations/readFromCloud";
import { ExperienceData } from "../src/util/types";
import Loading from "../src/components/Loading";

const Content = styled.div`
  width: 100%;
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;

type ExperienceProps = {
  apparatusId: string;
  experienceId: string;
  dataType: string;
};

function Experience({
  apparatusId,
  experienceId,
  dataType,
}: ExperienceProps): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userId] = useState(getUserName());
  const [experienceData, setExperienceData] = useState<ExperienceData>();

  const experienceDataTemp: ExperienceData = {
    apparatusMetadata: { paths: [], data: [] },
    experience: { experienceId, apparatusId: "", actionList: [] },
  };
  React.useEffect(() => {
    // either apparatusID is provided or experience id but not both
    function getApparatusFromCloudHelper(id) {
      getApparatusFromCloud(id)
        .then((apparatusJson) => {
          experienceDataTemp.apparatusMetadata = apparatusJson.metadata;
          experienceDataTemp.experience.apparatusId =
            apparatusJson.id.Identifier;
          setExperienceData(experienceDataTemp);
          setLoading(false);
        })
        .catch(() => setError("apparatus not found"));
    }

    // Don't load if you aren't logged in
    // TODO test to see if this is  working properly
    if (!checkIfLoggedIn()) return;

    if (dataType === "apparatus") {
      getApparatusFromCloudHelper(apparatusId);
    } else if (dataType === "experience") {
      getExperienceFromCloud(userId, experienceId)
        .then((experienceJson) => {
          experienceDataTemp.experience = experienceJson;
          getApparatusFromCloudHelper(experienceJson.apparatusId);
        })
        .catch(() => setError("experience file not found"));
    }
  }, [apparatusId, experienceId, dataType, userId]);

  React.useEffect(() => {
    verifyLogIn();
  }, []);

  // Todo what if the experienceData and userID are undefined? we should show an error message
  if (error === "") {
    if (!loading) {
      return (
        <main>
          <Content>
            <WebglBox userId={userId} experienceData={experienceData} />
          </Content>
        </main>
      );
    }
    return <Loading />;
  }
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {error}
    </Alert>
  );
}

Experience.getInitialProps = ({ query }) => {
  const { apparatusId } = query;
  const { experienceId } = query;
  const { dataType } = query;
  return { apparatusId, experienceId, dataType };
};

export default Experience;
