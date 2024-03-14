import * as React from "react";
 
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
 
export default function Header() {
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
                    AMI dépot de dossiers
                </Typography>
            </Toolbar>
        </AppBar>
    );
}