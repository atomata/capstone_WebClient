import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { getAssetBundles } from "../../../util/jsonParsing";
import { SerializedApparatus } from "../../../util/types";

const Box = styled.div`
  background: #fffaf0;
  border: 1px solid black;
  min-width: 100%;
  min-height: 100%;
  /* overflow-y: scroll; */
  max-height: 100%;
  max-width: 100%;
  /* ::-webkit-scrollbar {
    display: none;
  } */
`;

const ListBoxScroller = styled.div`
  max-height: 13em;
  min-width: 100%;
  max-width: 100%;
  min-height: 12em;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ListHeading = styled.h1`
  font-size: 20px;
  text-align: center;
  font-family: Trebuchet MS;
  font-weight: bold;
  color: black;
`;

const ListButton = styled.div`
  text-align: center;
  margin: 5px;
`;

type ApparatusListProps = {
  metadata: SerializedApparatus;
  handleAssetBundleChange: (data) => void;
};

const ApparatusListBox = ({
  metadata,
  handleAssetBundleChange,
}: ApparatusListProps): JSX.Element => {
  const assetBundleList = React.useMemo(
    () => getAssetBundles(metadata),
    [metadata]
  );
  if (assetBundleList !== undefined && assetBundleList[0] !== undefined) {
    return (
      <Box>
        <ListHeading>Apparatus</ListHeading>
        <ListBoxScroller>
          {assetBundleList.map((data, index) => (
            <ListButton key={index}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleAssetBundleChange(data);
                }}
              >
                {data.identifier}
              </Button>
            </ListButton>
          ))}
        </ListBoxScroller>
      </Box>
    );
  }
  return (
    <Box>
      <ListHeading>Apparatus</ListHeading>
      <Button disabled />
    </Box>
  );
};
export default ApparatusListBox;
