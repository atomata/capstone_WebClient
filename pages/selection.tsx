import styled from "styled-components";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { verifyLogIn, checkIfLoggedIn } from "../src/util/loginCookies";
import Loading from "../src/components/Loading";

const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;


const SelectionList = ({experienceId}) => {
  // need to change this to get the name of appratus files from a json file in cloud
  const apparatusIDList = ["evil-cylinder", "wobble-sphere"];

  return (
    <Content>
      {apparatusIDList.map((apparatusId, index) => (
        <Link
          key={index}
          href={{
            pathname: "/experience",
            query: { experienceId, apparatusId, dataType: "apparatus" },
          }}
        >
          <Button>{apparatusId}</Button>
        </Link>
      ))}
    </Content>
  );
};

function Selection({experienceId}): JSX.Element {
   useEffect(() => {verifyLogIn()}, [])

  return checkIfLoggedIn() ? (
    <main>
      <h1>SELECT AN APPARATUS</h1>
      <SelectionList experienceId = {experienceId} />
    </main>
  ) :
  (
    <Loading/>
  );
}

Selection.getInitialProps = ({query}) => {
    const {experienceId} = query;
    return {experienceId};
};

export default Selection;
