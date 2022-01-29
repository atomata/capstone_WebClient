import { Box, CircularProgress} from "@mui/material";

const Loading = (): JSX.Element => (
    <Box
        display='flex'
        justifyContent='center'
        style={{ paddingTop: '38vh' }}
    >
        <CircularProgress color='secondary' />
    </Box>
);

export default Loading;