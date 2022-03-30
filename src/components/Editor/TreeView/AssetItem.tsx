import { TreeItem, TreeItemProps } from "@mui/lab";
import {Box, createTheme, SvgIconProps, ThemeProvider, Typography} from "@mui/material";
import React from "react";
import styles from "../../ActionTreeItem.module.css";


const theme = createTheme({
    typography: {
        fontFamily: "Inter,monospace",
        fontSize: 13,
    },
});
type AssetItemPropsType = TreeItemProps & {
  labelText: string;
  LabelIcon: React.ElementType<SvgIconProps>;
};
export default function AssetItem({
  labelText,
  LabelIcon,
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
          <LabelIcon sx={{ ml: "-0.5em", mr: "0.5em", fontSize: "1.5em" }} />
          <ThemeProvider theme={theme}>
            <Typography variant="body2" className={styles.actionLabel}>
              {labelText}
            </Typography>
          </ThemeProvider>
        </Box>
      }
      classes={{
        content: styles.contentAsset,
      }}
      {...other}
    />
  );
}
