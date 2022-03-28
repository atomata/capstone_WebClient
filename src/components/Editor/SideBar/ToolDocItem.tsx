import { useContext } from "react";
import styled from "styled-components";
import { SideBarContext } from "../../../util/customHooks/SideBarContext";
import ApparatusInfo from "./ApparatusInfo";
import SkyBoxInfo from "./SkyBoxInfo";

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
function ToolDocItem(): JSX.Element {
  const { apparatusInfo, skyBoxInfo } = useContext(SideBarContext);
  return (
    <Container>
      {apparatusInfo ? <ApparatusInfo /> : <div />}
      {skyBoxInfo ? <SkyBoxInfo /> : <div />}
    </Container>
  );
}

export default ToolDocItem;
