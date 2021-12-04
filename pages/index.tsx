import styled from "styled-components";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { verifyLogIn, logOut } from "../src/util/loginCookies";

const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;

const ApparatusList = () => {
  const apparatusIDList = ["evil-cylinder", "wobble-sphere"];

  return (
    <Content>
      {apparatusIDList.map((data, index) => (
        <Link
          key={index}
          href={{
            pathname: "/experience",
            query: { id: data },
          }}
        >
          <Button>{data}</Button>
        </Link>
      ))}
    </Content>
  );
};

function Home(): JSX.Element {
  verifyLogIn();

  return (
    <main>
    <h1>SELECT AN APPARATUS</h1>
    <ApparatusList />
    <Button onClick={logOut}>Log Out</Button>
  </main>
  );
}

export default Home;
