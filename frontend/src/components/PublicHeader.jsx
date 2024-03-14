import * as React from "react";
 
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
 
export default function PublicHeader() {
    return (
        <AppBar position="static">
            <Toolbar>
                {/*Inside the IconButton, we 
                    can render various icons*/}
                {/* The Typography component applies 
                     default font weights and sizes */}
 
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    AMI demande de dossiers
                </Typography>
            </Toolbar>
        </AppBar>
    );
}