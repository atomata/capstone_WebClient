import { Box, CircularProgress} from "@material-ui/core";

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