/* eslint-disable prefer-arrow-callback */
import styled from "styled-components";
import React, { useState } from "react";
import { Alert, AlertTitle } from "@mui/material";
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
import { setExperienceName } from "../src/util/getExperienceFromCloud";

const Content = styled.div`
  width: 100%;
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;

type ExperienceProps = {
  dataId: string;
  dataType: string;
};

function Experience({ dataId, dataType }: ExperienceProps): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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
      getApparatusFromCloud(id)
        .then((apparatusJson) => {
          experience.apparatusId = apparatusJson.Id.Identifier;
          experience.apparatusMetadata = apparatusJson.Metadata;
          setExperienceData(experience);
          setLoading(false);
        })
        .catch(() => setError("apparatus not found"));
        //If the experience already exists.
        if(experience.apparatusId != dataId ) {
          setExperienceName(dataId);
        }
      });
    }

    // Don't load if you aren't logged in
    // TODO test to see if this is  working properly
    if (!checkIfLoggedIn()) return;


    if (dataType === "apparatus") {
      getApparatusFromCloudHelper(dataId);
    } else if (dataType === "experience") {
      getExperienceFromCloud(userId, dataId)
        .then((experienceJson) => {
          experience.initializationData.actionList = experienceJson.actionList;
          getApparatusFromCloudHelper(experienceJson.apparatusId);
        })
        .catch(() => setError("experience file not found"));
    }
  }, [dataId, experience, dataType, userId]);

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
  const { dataId } = query;
  const { dataType } = query;
  return { dataId, dataType };
};

export default Experience;