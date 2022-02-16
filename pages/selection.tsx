import Link from "next/link";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { verifyLogIn, checkIfLoggedIn } from "../src/util/loginCookies";
import Loading from "../src/components/Loading";
import { getBlobsInContainer } from "../src/util/cloudOperations/readFromCloud";
import { apparatusBlob, defaultStorage } from "../src/util/constants";
import { OuterBox, SelectionContainer, SelectionHeading, SelectionContent, PreviewContainer, SelectionButton, SelectionOption, ImgIllustration1, ImgIllustration2, GifIllustration} from "../src/components/SelectionBox";
import { urlFor } from "../src/util/utils";

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

  const [visible, setVisible] = useState(false);  // visibility state for  preview
  const [apparatusName, setapparatusName] = useState("apparatus"); // apparatus selected for preview state
  function displayGif(apparatusID: React.SetStateAction<string>): void {
    setapparatusName(apparatusID)
    setVisible(true)    
  } // To set the hooks for preview gif
  var path = "assets/" + apparatusName + ".gif"; //To set the path of preview gif

  return (
    <OuterBox>
      <SelectionContainer>
          <SelectionHeading>APPARATUS LIST</SelectionHeading>
          <SelectionContent>
            <table>
              {apparatusList.map((apparatusId, index) => (
                <tr>
                  <td><SelectionOption>{apparatusId}</SelectionOption></td>
                  <td><Button onClick={() => displayGif(apparatusId)}><SelectionButton>PREVIEW</SelectionButton></Button></td>
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
      <ImgIllustration1 src={urlFor("assets/selectionillustration1.svg")} />   
      <PreviewContainer>GIF FOR PREVIEW
      {visible && <div><GifIllustration src={urlFor(path)} /></div>}
      </PreviewContainer>
      <ImgIllustration2 src={urlFor("assets/selectionillustration2.svg")} />   
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
