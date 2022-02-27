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
import { ActionData, ExperienceData } from "../src/util/types";
import Loading from "../src/components/Loading";
import { useActionList } from "../src/util/customHooks/overlayfunc";

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

export const GlobalContext = createContext(null);

// type for Context Values
export type globalContextTypes = {
  experienceData: ExperienceData;
  setExperienceData: React.Dispatch<React.SetStateAction<ExperienceData>>;
  selectedAction: number;
  actionList: ActionData[];
  removeActionFromList: (index: number) => void;
  setDescription: (description: string) => void;
  handleOnDragEnd: (result: {
    destination: { index: number };
    source: { index: number };
  }) => void;
  addActionToList: (actionData: ActionData) => void;
  userId: string;
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

  const {
    selectedAction,
    actionList,
    removeActionFromList,
    setDescription,
    handleOnDragEnd,
    addActionToList,
  } = useActionList(experienceData);

  // All Global Context Hooks
  const globalContextValues: globalContextTypes = {
    experienceData,
    setExperienceData,
    selectedAction,
    actionList,
    removeActionFromList,
    setDescription,
    handleOnDragEnd,
    addActionToList,
    userId,
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
            <GlobalContext.Provider value={globalContextValues}>
              <WebglBox userId={userId} />
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
