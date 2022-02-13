import Link from "next/link";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { verifyLogIn, checkIfLoggedIn } from "../src/util/loginCookies";
import Loading from "../src/components/Loading";
import { getBlobsInContainer } from "../src/util/cloudOperations/readFromCloud";
import { apparatusBlob, defaultStorage } from "../src/util/constants";
import { OuterBox, SelectionContainer, SelectionHeading, SelectionContent, PreviewContainer, SelectionButton, SelectionOption} from "../src/components/SelectionBox";

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
    <OuterBox>
      <SelectionContainer>
          <SelectionHeading>APPARATUS LIST</SelectionHeading>
          <SelectionContent>
            <table>
              {apparatusList.map((apparatusId, index) => (
                <tr>
                  <td><SelectionOption>{apparatusId}</SelectionOption></td>
                  <td><SelectionButton>PREVIEW</SelectionButton></td>
                  <td>
                    <Link
                      key={index}
                      href={{
                        pathname: "/experience",
                        query: { experienceId, apparatusId, dataType: "apparatus" },
                      }}
                    >
                      <Button><SelectionButton>SELECT</SelectionButton></Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </table>
          </SelectionContent>
      </SelectionContainer>
      <PreviewContainer>GIF FOR PREVIEW</PreviewContainer>
    </OuterBox>
  );
};

function Selection({ experienceId }): JSX.Element {
  useEffect(() => {
    verifyLogIn();
  }, []);

  return checkIfLoggedIn() ? (
    <main>
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
