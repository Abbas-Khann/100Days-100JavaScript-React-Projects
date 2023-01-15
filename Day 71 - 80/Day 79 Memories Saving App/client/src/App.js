import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./images/memories.png";
import Posts from "./components/posts/posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";

const App = () => {
    const classes = useStyles();
    return(
        <Container>
            <AppBar className={classes.AppBar}
            position="static"
            color="inherit"
            >
            <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
            <img
            className={classes.image }
            src={memories} 
            alt="memories" 
            height="60" 
            />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Form />
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App