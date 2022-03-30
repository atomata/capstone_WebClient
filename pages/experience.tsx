/* eslint-disable prefer-arrow-callback */
import styled from "styled-components";
import React, { useState } from "react";
import { Alert, AlertTitle } from "@mui/material";
import WebglBox from "../src/components/Editor/WebglBox";
import {
  verifyLogIn,
  checkIfLoggedIn,
  getUserName,
} from "../src/util/loginCookies";
import {
  setupApparatusData,
  setupExperienceData,
} from "../src/util/cloudOperations/readFromCloud";
import { ExperienceData } from "../src/util/types";
import Loading from "../src/components/Loading";
import {
  globalContextTypes,
  GlobalContext,
} from "../src/util/customHooks/globalContext";

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

  // All Global Context Hooks
  const globalContextValues: globalContextTypes = {
    experienceData,
    setExperienceData,
    userId,
  };

  const experienceDataTemp: ExperienceData = {
    apparatusRoot: { children: [], path: "", identifier: "", type: "" },
    experience: {
      experienceId,
      apparatusId: "",
      actionList: [],
      skyboxId: "default",
    },
  };
  React.useEffect(() => {
    // Don't load if you aren't logged in
    if (!checkIfLoggedIn()) return;

    if (dataType === "apparatus") {
      setupApparatusData(apparatusId, experienceDataTemp)
        .then(() => {
          setExperienceData(experienceDataTemp);
          setLoading(false);
        })
        .catch((err) =>
          setError(
            `${err.message !== "" ? err.message : "apparatus not found"} `
          )
        );
    } else if (dataType === "experience") {
      setupExperienceData(userId, experienceId, experienceDataTemp)
        .then(() => {
          setExperienceData(experienceDataTemp);
          setLoading(false);
        })
        .catch((err) =>
          setError(
            `${err.message !== "" ? err.message : "experience not found"} `
          )
        );
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
            <GlobalContext.Provider value={globalContextValues}>
              <WebglBox />
            </GlobalContext.Provider>
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
