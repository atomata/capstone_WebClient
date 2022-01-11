import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { getAssetBundles, checkIfParent } from "../../util/JsonParsing";

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

const ApparatusListBox = ({ metadata, handleAssetBundleChange }) => {
  if (metadata !== undefined) {
    const assetbundles = React.useMemo(
      () => getAssetBundles(metadata),
      [metadata]
    );

    return (
      <Box>
        <ListHeading>Apparatus</ListHeading>
        <ListBoxScroller>
          {assetbundles.map((data, index) => (
            <ListButton key={index}>
              <Button
                variant="contained"
                color={checkIfParent(data) ? "primary" : "secondary"} // checks if node is a parent
                onClick={() => {
                  handleAssetBundleChange(data);
                }}
              >
                {data.identifier[0]}
              </Button>
            </ListButton>
          ))}
          <ListButton>
            <Button variant="contained" color="secondary">
              Some Asset
            </Button>
          </ListButton>
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
