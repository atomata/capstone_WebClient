import React, { useContext, useState } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeItem, treeItemClasses, TreeItemProps } from "@mui/lab";
import styled from "styled-components";
import { Box, IconButton, SvgIconProps, Typography } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import { makeStyles } from "@mui/styles";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import { SerializedApparatus } from "../../../util/types";
import {
  GlobalContext,
  globalContextTypes,
} from "../../../util/customHooks/globalContext";
import { getAssetBundleActions } from "../../../util/jsonParsing";
import styles from "../../ActionTreeItem.module.css";
import { requestTrigger } from "../../../util/unityContextActions";
import { ActionContext } from "../../../util/customHooks/actionContext";

const ApparatusInfoHeader = styled.div.attrs({
  children: "Apparatus & Actions",
})`
  display: flex;
  justify-content: center;
  width: stretch;
  font-size: 1.2em;
  text-transform: uppercase;
  color: white;
  font-family: Inter, monospace;
  margin-bottom: 15px;
`;

type StyledTreeItemProps = TreeItemProps & {
  labelIcon?: React.ElementType<SvgIconProps>;
  onClick1?: () => void;
  onClick2?: () => void;
  labelText: string;
};

const useAssetItemStyles = makeStyles(() => ({
  content: {
    flexDirection: "row-reverse",
    backgroundColor: "#525067",
    color: "#a6a5eb",
    borderRadius: "8px",
    "&.MuiTreeItem-root, &:hover,&.Mui-selected,&.Mui-selected:hover,&.Mui-selected.Mui-focused":
      {
        backgroundColor: "#525067",
      },
    "&:hover,&.Mui-expanded": {
      color: "white",
    },
  },

  labelText: {
    fontWeight: "bold",
    textTransform: "capitalize",
    flexGrow: 1,
    fontSize: "1.00em",
    fontFamily: "Inter, monospace",
  },
}));

function StyledAssetItem(props: StyledTreeItemProps) {
  const { labelIcon: LabelIcon, labelText, ...other } = props;
  const classes = useAssetItemStyles();
  return (
    <TreeItem
      sx={{ pb: 1.5 }}
      label={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 1.5,
            pr: 0,
            mb: -0.5,
          }}
        >
          <LabelIcon sx={{ ml: -1, mr: 1, fontSize: "22px" }} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
        </Box>
      }
      classes={{
        content: classes.content,
      }}
      {...other}
    />
  );
}
function StyledActionItem(props: StyledTreeItemProps) {
  const { labelText, onClick1, onClick2, ...other } = props;
  return (
    <TreeItem
      sx={{ pt: "10px" }}
      label={
        <Box
          sx={{
            pt: "8px",
            pb: "8px",
            display: "flex",
          }}
        >
          <Typography variant="body2" className={styles.labelTextClass}>
            {labelText}
          </Typography>

          <PlayCircleFilledWhiteOutlinedIcon
            sx={{
              mr: 0.7,
              fontSize: "25px",
            }}
            className={styles.hiddenItem}
            onClick={onClick1}
          />
          <AddCircleOutlineOutlinedIcon
            sx={{
              mr: -2,
              fontSize: "25px",
            }}
            className={styles.hiddenItem}
            onClick={onClick2}
          />
        </Box>
      }
      classes={{
        content: styles.content,
      }}
      {...other}
    />
  );
}

function ApparatusInfo(): JSX.Element {
  const { experienceData }: globalContextTypes = useContext(GlobalContext);
  const { addActionToList } = useContext(ActionContext);

  const metadata = checkIfMetaExists();
  const assetbundleactions = React.useMemo(
    () => getAssetBundleActions(metadata),
    [metadata]
  );
  return (
    <>
      <ApparatusInfoHeader />
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: "10em", flexGrow: 1, maxWidth: "90%" }}
      >
        {assetbundleactions.map((data, index) => (
          <StyledAssetItem
            labelText={data[0]}
            nodeId={`index ${index}`}
            labelIcon={CategoryIcon}
          >
            {data[1].map((actionData) => (
              <StyledActionItem
                labelText={
                  actionData.input.name !== undefined
                    ? actionData.input.name
                    : actionData.input.command
                }
                nodeId={actionData}
                onClick1={() =>
                  requestTrigger(actionData.path, actionData.input.command)
                }
                onClick2={() => {
                  const actionDataClone = {
                    input: actionData.input,
                    path: actionData.path,
                    assetId: actionData.assetId,
                    desc: actionData.desc,
                  };
                  addActionToList(actionDataClone);
                }}
              />
            ))}
          </StyledAssetItem>
        ))}
      </TreeView>
    </>
  );

  function checkIfMetaExists(): SerializedApparatus {
    return experienceData !== undefined
      ? experienceData.apparatusMetadata
      : undefined;
  }
}

export default ApparatusInfo;
