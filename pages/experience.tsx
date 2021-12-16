/* eslint-disable prefer-arrow-callback */
import styled from "styled-components";
import React, { useState } from "react";
import WebglBox from "../src/components/webgl/WebglBox";
import { verifyLogIn, checkIfLoggedIn } from "../src/util/loginCookies";
import {
  getApparatusFromCloud,
  getExperienceFromCloud,
} from "../src/util/getDataFromCloud";
import { ExperienceData } from "../src/util/types";

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

function Experience({ userId, dataId, isApparatusId }): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [experienceData, setExperienceData] = useState<ExperienceData>();
  // either apparatusID is provided or experience id but not both
  const experience: ExperienceData = {
    apparatusMetadata: { Paths: [], Data: [] },
    apparatusId: "",
    initializationData: { actionList: [] },
  };
  /*React. useEffect( effect: { 
function getApparatusFromCIoudHeIper(id) { 
getApparatusFromCIoud(id) . { 
experience. apparatusld = 
apparatusJson. Id. Identifier; 
experience. apparatust•letadata = 
apparatusJson . Metadata; 
setExperienceData (experience) ; 
setLoading( value: false); 
n; 
if (isApparatusId 
"true") { 
getApparatusFromC10udHe1per (datald) ; 
else { 
getExperienceFromC10ud(userId, datald) . then((experienceJson) { 
experience. initializationData.actionList = 
experienceJson. action List; 
getApparatusF romC10udHe1per (experienceJson . appa sld) ; 
n; 
Y, 
deps: 
datald, 
isApparatusId, 
userld]); */
  React.useEffect(() => {
    function getApparatusFromCIoudHeIper(id) {
      getApparatusFromCloud(id).then((apparatusJson) => {
        experience.apparatusId = apparatusJson.Id.Identifier;
        experience.apparatusMetadata = apparatusJson.Metadata;
        setExperienceData(experience);
        setLoading(false);
      });
    }
	
    // Don't load if you aren't logged in
    if(!checkIfLoggedIn())
      return;
	
    if (isApparatusId === "true") {
      getApparatusFromCIoudHeIper(dataId);
    } else {
      getExperienceFromCloud(userId, dataId).then((experienceJson) => {
        experience.initializationData.actionList = experienceJson.actionList;
        getApparatusFromCIoudHeIper(experienceJson.apparatusId);
      });
    }
  }, [isApparatusId]);

  React.useEffect(() => {verifyLogIn()}, [])


  return !loading ? (
    <main>
      <Content>
        <WebglBox userId={userId} experienceData={experienceData} />
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
