import { useContext } from "react";
import styled from "styled-components";
import useKeypress from "react-use-keypress";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Grid from "@mui/material/Grid";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SettingsIcon from "@mui/icons-material/Settings";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import HelpIcon from "@mui/icons-material/Help";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Typography from '@mui/material/Typography';
import { SideBarContext } from "../../util/customHooks/SideBarContext";

const style = {
  position: 'absolute',
  top: '50%',
  left: '80%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  background: "#3f3d56",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4, 
  fontFamily: "Trebuchet MS"
};

const pages : string[][] = [
    ["Welcome!", "Description 1"],
    ["Apparatus List", "The Apparatus List displays all available assets for this apparatus. Selecting an Asset will display its Action List."],
    ["Actions List", "The Action List displays all actions for the selected asset. To preview the action, click on the play button. To add the action into your experience, click on the + button."],
    ["Action Sequence List", "Any actions selected by the user will appear in the Action Sequence List displayed at the bottom of the editor. These actions can be dragged around or deleted at any point."],
    ["Settings - Background", "To use a specific background for your experience, click on the + button."],
    ["Text Box", "If there's an action in the Action Sequence List, you can give it text by enabling the text box window. The text box can be moved around freely (add more text when its more finalized). All texts will be shown when previewing the experience."],
    ["Default View", "Some apparatuses will have actions that will change the camera angle. This button will ensure that the camera will return to its original position."],
    ["Preview", "The elements and texts within the Action Sequence List can be previewed as a presentation. Press the arrow keys to move back and forth through the presentation. If you want to leave, press ESC or the back arrow on the top left."],
    ["Saving", "The editor will auto-save regularly after making any changes. There is also the option to manually save the experience."],
    ["Exiting", "Once you are satisfied with your experience or if you need a break, click on the Exit button to return back to the Workbench page."]
];

function Guide() : JSX.Element {
    const { 
        guideNum,
        setGuideNum,
        showGuide, 
        toggleGuide, 
        apparatusInfo, 
        toggleApparatusInfo, 
        skyBoxInfo, 
        toggleSkyBoxInfo, 
        textBox, 
        toggleTextBox,
        showOverlay,
        toggleOverlay
    } = useContext(SideBarContext);

    function prevPage(){
        pageActions(guideNum-1);
        if(guideNum > 0){
            setGuideNum((prevVal) => prevVal - 1);
        } 
    }

    function nextPage(){
        pageActions(guideNum+1);
        if(guideNum < pages.length - 1){
            setGuideNum((prevVal) => prevVal + 1);
        } 
    }

    function pageActions(page){
        console.log(page);
        // Add actions here
        
        // Apparatus, Actions, and Action Sequence List
        if(page >= 1 && page <= 3 && !apparatusInfo){
            toggleApparatusInfo();
        }

        // Settings
        if(page === 4 && !skyBoxInfo){
            toggleSkyBoxInfo();
        }

        // Text Box
        if(page === 5 && !textBox){
            toggleTextBox();
        }

        // Preview
        if((page === 7 && showOverlay) || !showOverlay){
            toggleOverlay();
        }
    }

    useKeypress("ArrowLeft", () => {
        if(showGuide)
            prevPage();
    });
    
    useKeypress("ArrowDown", () => {
        if(showGuide)
            prevPage();
    });

    useKeypress("ArrowRight", () => {
        if(showGuide)
            nextPage();
    });

    useKeypress("ArrowUp", () => {
        if(showGuide)
            nextPage();
    });

    const renderIcon = () => {
        switch(guideNum){
            case 1:
            case 2:
            case 3:
            return (
                <FormatListBulletedIcon
                    sx={{
                        fontSize: "60px",
                        color: "#a6a5eb"
                    }}
                />
            );
            case 4:
            return (
                <SettingsIcon
                    sx={{
                        fontSize: "60px",
                        color: "#a6a5eb"
                    }}
                />
            );
            case 5:
            return (
                <TextFormatIcon
                    sx={{
                        fontSize: "60px",
                        color: "#a6a5eb"
                    }}
                />
            );
            case 6:
            return (
                <CameraswitchIcon
                    sx={{
                        fontSize: "60px",
                        color: "#a6a5eb"
                    }}
                />
            );
            case 7:
            return (
                <PlayArrowIcon
                    sx={{
                        fontSize: "60px",
                        color: "#a6a5eb"
                    }}
                />
            );
            case 8:
            return (
                <SaveAltIcon
                    sx={{
                        fontSize: "60px",
                        color: "#a6a5eb"
                    }}
                />
            );
            case 9:
            return (
                <KeyboardReturnIcon
                    sx={{
                        fontSize: "60px",
                        color: "#a6a5eb"
                    }}
                />
            );
            default:
            return (
                <HelpIcon
                    sx={{
                        fontSize: "60px",
                        color: "#a6a5eb"
                    }}
                />
            );
        }
    };

    return (
        <div>
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={showGuide}
            onClose={toggleGuide}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            >
            <Fade in={showGuide}>
                <Box sx={style}>           
                <Grid container
                    direction="row"
                    justifyContent="flex-start"
                    >
                    <Grid item xs={2}>{renderIcon()}</Grid>
                    <Grid item xs={10}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ mt: 2, color: "#f75d77" }} >
                            {pages[guideNum][0]}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography id="transition-modal-description" sx={{ mt: 2, color: "white" }}>
                    {pages[guideNum][1]}
                </Typography>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ mt: 2}}
                    >
                    <Grid item xs={4}>
                        <ArrowLeftIcon
                            type="button"
                            style={{ fontSize: "50px" }}
                            sx={{ "&:hover": { color: "#f75d77" }, color: "#a6a5eb", float: "right" }}
                            onClick={() => prevPage()}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography id="transition-modal-description" sx={{ color: "#a6a5eb", fontSize: "20px", textAlign: "center" }}>
                            {guideNum + 1}/{pages.length}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <ArrowRightIcon
                            type="button"
                            style={{ fontSize: "50px" }}
                            sx={{ "&:hover": { color: "#f75d77" }, color: "#a6a5eb", float: "left" }}
                            onClick={() => nextPage()}
                        />
                    </Grid>
                </Grid>
                </Box>
            </Fade>
            </Modal>
        </div>
    );
}

export default Guide;