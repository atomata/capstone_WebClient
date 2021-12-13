import styled from "styled-components";
import Link from "next/link";
import { Button } from "@material-ui/core";

const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;

const SelectionList = () => {
  //TODO change this to get the name of appratus files from a json file in cloud
  const apparatusIDList = ["evil-cylinder", "wobble-sphere"];

  return (
    <Content>
      {apparatusIDList.map((apparatusId, index) => (
        <Link
          key={index}
          href={{
            pathname: "/experience",
            query: { dataId: apparatusId, isApparatusId: true, userId: 'testuser1' },
          }}
        >
          <Button>{apparatusId}</Button>
        </Link>
      ))}
    </Content>
  );
};

const Selection = (): JSX.Element => (
  <main>
    <h1>SELECT AN APPARATUS</h1>
    <SelectionList />
  </main>
);

export default Selection;
