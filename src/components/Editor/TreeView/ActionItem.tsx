import { TreeItem, TreeItemProps } from "@mui/lab";
import {Box, createTheme, ThemeProvider, Typography} from "@mui/material";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import React from "react";
import styles from "../../ActionTreeItem.module.css";


const theme = createTheme({
    typography: {
        fontFamily: "Inter,monospace",
        fontSize: 12,
    },
});
type actionItemProps = TreeItemProps & {
  labelText: string;
  nodeId: string;
  add?: () => void;
  play?: () => void;
};
export default function ActionItem({
  labelText,
  play,
  add,
  ...other
}: actionItemProps): JSX.Element {
  return (
    <TreeItem
      sx={{ pt: "0.5em" }}
      label={
        <Box
          sx={{
            pt: "0.5em",
            pb: "0.5em",
            display: "flex",
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography variant="body2" className={styles.actionLabel}>
              {labelText}
            </Typography>
          </ThemeProvider>

          {play ? (
            <PlayCircleFilledWhiteOutlinedIcon
              sx={{
                mr: "0.5em",
                fontSize: "1.5em",
              }}
              className={styles.hiddenItem}
              onClick={play}
            />
          ) : null}
          <AddCircleOutlineOutlinedIcon
            sx={{
              mr: "-0.5em",
              fontSize: "1.5em",
            }}
            className={styles.hiddenItem}
            onClick={add}
          />
        </Box>
      }
      classes={{
        content: styles.contentAction,
      }}
      {...other}
    />
  );
}
