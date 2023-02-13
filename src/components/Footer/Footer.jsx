import {Paper, Container, Box, Typography} from '@mui/material'


const Footer= () => {
    return (
        <Paper sx={{
            position: 'fixed',
            bottom: 0,
            width: '100%'
        }} component="footer" square variant="outlined">
            <Container>
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        my: 1
                    }}
                >
                </Box>

                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}
                >
                    <Typography variant="caption" color="initial">
                        Copyright ©2022.
                    </Typography>
                </Box>
            </Container>
        </Paper>
    );
}

export default Footer