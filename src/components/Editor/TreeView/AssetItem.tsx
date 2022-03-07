import { TreeItem, TreeItemProps } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import styles from "../../ActionTreeItem.module.css";

type AssetItemPropsType = TreeItemProps & {
  labelText: string;
};
export default function AssetItem({
  labelText,
  ...other
}: AssetItemPropsType): JSX.Element {
  return (
    <TreeItem
      sx={{ mb: "1em" }}
      label={
        <Box
          sx={{
            display: "flex",
            p: "0.5em",
          }}
        >
          <CategoryIcon sx={{ ml: "-0.5em", mr: "0.5em", fontSize: "1.5em" }} />
          <Typography variant="body2" className={styles.assetLabel}>
            {labelText}
          </Typography>
        </Box>
      }
      classes={{
        content: styles.contentAsset,
      }}
      {...other}
    />
  );
}
