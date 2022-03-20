import { useContext } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Grid from "@mui/material/Grid";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Typography from '@mui/material/Typography';
import { useGuide } from "../../util/customHooks/guideFunc"
import { SideBarContext } from "../../util/customHooks/SideBarContext";

const style = {
  position: 'absolute',
  top: '50%',
  left: '80%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  background: '#3f3d56',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4, 
  fontFamily: 'Trebuchet MS'
};

function Guide() : JSX.Element {
    const { 
        guideNum,
        showGuide, 
        toggleGuide, 
    } = useContext(SideBarContext);

    const { pages, prevPage, nextPage, renderIcon } = useGuide();

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