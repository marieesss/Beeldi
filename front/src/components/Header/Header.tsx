import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
            <Link to={"/"}>
              <HomeIcon  sx={{color: "#ffff"}}/>
            </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Test technique
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
