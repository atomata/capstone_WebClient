/* eslint-disable prefer-arrow-callback */
import styled from "styled-components";
import React, {useState} from "react";
import WebglBox from "../src/components/webgl/WebglBox";
import {verifyLogIn, checkIfLoggedIn, getUserName} from "../src/util/loginCookies";
import {
    getApparatusFromCloud,
    getExperienceFromCloud,
} from "../src/util/getDataFromCloud";
import {ExperienceData} from "../src/util/types";
import { setExperienceName } from "../src/util/getExperienceName";
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

function Experience({dataId, isApparatusId}): JSX.Element {
    const [loading, setLoading] = useState(true);
    const [userId] = useState(getUserName());
    const [experienceData, setExperienceData] = useState<ExperienceData>();

    // either apparatusID is provided or experience id but not both
    const experience: ExperienceData = {
        apparatusMetadata: {Paths: [], Data: []},
        apparatusId: "",
        initializationData: {actionList: []},
    };

    React.useEffect(() => {
        function getApparatusFromCIoudHeIper(id) {
            getApparatusFromCloud(id).then((apparatusJson) => {
                experience.apparatusId = apparatusJson.Id.Identifier;
                experience.apparatusMetadata = apparatusJson.Metadata;
                setExperienceData(experience);
                setLoading(false);

                //If the experience already exists.
                if(experience.apparatusId != dataId ) {
                    setExperienceName(dataId);
                }
            });
        }

        // Don't load if you aren't logged in
        if (!checkIfLoggedIn())
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

    React.useEffect(() => {
        verifyLogIn()
    }, [])

    return !loading ? (
        <main>
            <Content>
                <WebglBox userId={userId} experienceData={experienceData}/>
            </Content>
        </main>
    ) : (
        <LoadingView/>
    );
}

Experience.getInitialProps = ({query}) => {
    const dataId = query.dataId;
    const isApparatusId = query.isApparatusId;
    return {dataId, isApparatusId};
};

export default Experience;
