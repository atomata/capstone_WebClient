import React, { useContext, useState } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeItem, treeItemClasses, TreeItemProps } from "@mui/lab";
import styled from "styled-components";
import { Box, SvgIconProps, Typography } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import { makeStyles } from "@mui/styles";
import { SerializedApparatus } from "../../../util/types";
import {
  GlobalContext,
  globalContextTypes,
} from "../../../util/customHooks/globalContext";
import { getAssetBundleActions } from "../../../util/jsonParsing";

type StyledTreeItemProps = TreeItemProps & {
  parent: boolean;
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
};

const useTreeItemStyles = makeStyles(() => ({
  contentParent: {
    flexDirection: "row-reverse",
    backgroundColor: "#686396",
    borderRadius: "8px",
    "&.Mui-root, &:hover,&.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: "#686396",
      color: "white",
    },
  },

  contentChild: {
    flexDirection: "row-reverse",
    borderRadius: "8px",
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1,
    color: "white",
    fontSize: "1.05em",
    fontFamily: "Courier New, Courier, monospace",
  },
}));

function StyledTreeItem(props: StyledTreeItemProps) {
  const {
    parent,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;
  const classes = useTreeItemStyles();
  return (
    <TreeItem
        sx ={{pb:1.5}}
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
          <LabelIcon sx={{ mr: 1, color: "white", fontSize: "20px" }} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      classes={{
        content: parent ? classes.contentParent : classes.contentChild,
      }}
      {...other}
    />
  );
}

function ApparatusInfo(): JSX.Element {
  const { experienceData }: globalContextTypes = useContext(GlobalContext);

  const metadata = checkIfMetaExists();
  const assetbundleactions = React.useMemo(
    () => getAssetBundleActions(metadata),
    [metadata]
  );
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={
        <ExpandMoreIcon sx={{ fontSize: "25px", color: "white" }} />
      }
      defaultExpandIcon={
        <ChevronRightIcon sx={{ fontSize: "5px", color: "white" }} />
      }
      sx={{ height: "10em", flexGrow: 1, maxWidth: "90%"}}
    >
      {assetbundleactions.map((data, index) => (
        <StyledTreeItem
          parent
          labelText={data[0]}
          nodeId={`index ${index}`}
          labelIcon={CategoryIcon}
        >
          {data[1].map((actionData) => (
            <StyledTreeItem
              parent={false}
              labelText={
                actionData.input.name !== undefined
                  ? actionData.input.name
                  : actionData.input.command
              }
              nodeId={actionData}
              labelIcon={CategoryIcon}
            />
          ))}
        </StyledTreeItem>
      ))}
    </TreeView>
  );

  function checkIfMetaExists(): SerializedApparatus {
    return experienceData !== undefined
      ? experienceData.apparatusMetadata
      : undefined;
  }
}

export default ApparatusInfo;
