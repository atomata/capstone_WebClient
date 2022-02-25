/* eslint-disable prefer-arrow-callback */
import styled from "styled-components";
import React, { createContext, useState } from "react";
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

export const TestContext = createContext(null);

function Experience({
  apparatusId,
  experienceId,
  dataType,
}: ExperienceProps): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userId] = useState(getUserName());
  const [experienceData, setExperienceData] = useState<ExperienceData>();


  // experience data defined here - JUSTIN
  // const ExperienceContext = React.createContext([experienceData, setExperienceData]);

  const [name, setName] = useState('INITIAL NAME');
  const [price, setPrice] = useState(0);

  const testvalue = {
    name,
    setName,
    price,
    setPrice,
  };

  const experienceDataTemp: ExperienceData = {
    apparatusMetadata: { Id: "", Paths: [], Data: [] },
    experience: { experienceId, apparatusId: "", actionList: [] },
  };
  React.useEffect(() => {
    // either apparatusID is provided or experience id but not both
    function getApparatusFromCloudHelper(id) {
      getApparatusFromCloud(id)
        .then((apparatusJson) => {
          experienceDataTemp.apparatusMetadata = apparatusJson;
          experienceDataTemp.experience.apparatusId = apparatusJson.Id;
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
            <TestContext.Provider value={testvalue}>                                                     
            <WebglBox userId={userId} experienceData={experienceData} />
            </TestContext.Provider>
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


