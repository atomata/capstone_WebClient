import styled from "styled-components";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { verifyLogIn, checkIfLoggedIn } from "../src/util/loginCookies";
import Loading from "../src/components/Loading";
import { getBlobsInContainer } from "../src/util/cloudOperations/readFromCloud";
import { apparatusBlob, defaultStorage } from "../src/util/constants";

const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;

const SelectionList = ({ experienceId }) => {
  const [apparatusList, setApparatusList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getBlobsInContainer(apparatusBlob, defaultStorage);
        setApparatusList(res);
      } catch (err) {
        console.log("test", err);
      }
    }
    fetchData();
  }, []);
  return (
    <Content>
      {apparatusList.map((apparatusId, index) => (
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

function Selection({ experienceId }): JSX.Element {
  useEffect(() => {
    verifyLogIn();
  }, []);

  return checkIfLoggedIn() ? (
    <main>
      <h1>SELECT AN APPARATUS</h1>
      <SelectionList experienceId={experienceId} />
    </main>
  ) : (
    <Loading />
  );
}

Selection.getInitialProps = ({ query }) => {
  const { experienceId } = query;
  return { experienceId };
};

export default Selection;
