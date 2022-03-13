import styled from "styled-components";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ExpandIcon from "@mui/icons-material/Expand";

const Header = styled.div`
  color: white;
`;

const TextDiv = styled.div`
  background: #3f3d56;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;

const DefaultButton = styled.div`
  padding: 0.5em;
  cursor: pointer;
  text-align: center;
  font-family: Inter, monospace;
  font-size: 1.5em;
  color: white;
  background: #3f3d56;
  max-height: 22%;
  border-radius: 15px;
`;

const TextPreview = ({ desc }: any): JSX.Element => {
    const [isExpanded, setExpanded] = useState(true);

    return isExpanded ? (
      <TextDiv>
        <Header>
          <IconButton
            sx={{ color: "white" }}
            onClick={() => {
              setExpanded((value) => !value);
            }}
          >
            <ExpandIcon sx={{ fontSize: 30, ml: "0.5em" }} />
          </IconButton>
        </Header>
        <Box
          sx={{
            m: "1em",
            mt: "0.5em",
            alignItems: "center",
          }}
        >
          <TextField
            InputProps={{
              inputProps: {
                style: { textAlign: "center" },
              }
            }}
            sx={{
              background: "white",
              borderRadius: "5px",
              width: "100%",
              height: "100%",
            }}
            value={desc}
            multiline
            rows={2}
            variant="outlined"
          />
        </Box>
      </TextDiv>
    ) : (
      <DefaultButton onClick={() => setExpanded((value) => !value)}>
        ...
      </DefaultButton>
    );
};

export default TextPreview;
