import { useContext } from "react";
import { SideBarContext } from "../../util/customHooks/SideBarContext";
import { ExperienceData } from "../../util/types";
import ApparatusInfo from "./ApparatusInfo";
import SkyBoxInfo from "./SkyBoxInfo";

type OverlayProps = {
  experienceData: ExperienceData;
};

function ToolDocItem({ experienceData }: OverlayProps): JSX.Element {
  const { apparatusInfo, skyboxInfo } = useContext(SideBarContext);
  return (
    <div>
      {apparatusInfo ? (
        <ApparatusInfo experienceData={experienceData} />
      ) : (
        <div />
      )}
      {skyboxInfo ? <SkyBoxInfo /> : <div />}
    </div>
  );
}

export default ToolDocItem;
