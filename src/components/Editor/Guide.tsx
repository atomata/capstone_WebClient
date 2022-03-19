import { useContext, useState } from "react";
import useKeypress from "react-use-keypress";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
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
  border: '2px solid #000',
  boxShadow: 24,
  p: 4, 
};

const pages : string[][] = [
    ["Welcome!", "Description 1"],
    ["Apparatus List", "The Apparatus List displays all available assets for this apparatus. Selecting an Asset will display its Action List."],
    ["Actions List", "The Action List displays all actions for the selected asset. To preview the action, click on the (PLAY) button. To add the action into your experience, click on the (PLUS) button."],
    ["Action Sequence List", "Any actions selected by the user will appear in the Action Sequence List displayed at the bottom of the editor. These actions can be dragged around or deleted at any point."],
    ["Settings - Background", "To use a specific background for your experience, click on the (PLUS) button."],
    ["Text Box", "Any"],
    ["Default View", ""],
    ["Preview", ""],
    ["Saving", "The editor will auto-save regularly after making any changes. There is also the option to manually save the experience."],
    ["Exiting", "Once you are satisfied with your experience or if you need a break, click on the Exit button to return back to the Workbench page."]
];

// TO DO: Icons
const titleIcons = [
    
]

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
        prevPage();
    });
    
    useKeypress("ArrowDown", () => {
        prevPage();
    });

    useKeypress("ArrowRight", () => {
        nextPage();
    });

    useKeypress("ArrowUp", () => {
        nextPage();
    });

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
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    {// titleIcons[guideNum]
                    }

                    {pages[guideNum][0]}
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    {pages[guideNum][1]}
                </Typography>

                <ArrowLeftIcon
                    type="button"
                    style={{ fontSize: "35px" }}
                    sx={{ "&:hover": { color: "white" }, mb: 3 }}
                    onClick={() => prevPage()}
                />
                <p>{guideNum + 1}/{pages.length}</p>
                <ArrowRightIcon
                    type="button"
                    style={{ fontSize: "35px" }}
                    sx={{ "&:hover": { color: "white" }, mb: 3 }}
                    onClick={() => nextPage()}
                />
                </Box>
            </Fade>
            </Modal>
        </div>
    );
}

export default Guide;