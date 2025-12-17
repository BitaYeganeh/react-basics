import { Link } from "react-router";
import styles from "./Header.module.css";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {
  //return (
  //   <header className={styles.header} style={{display: "flex"}}>
  //     <h1>Logo</h1>
  //     <nav>
  //       <Link to="/">Home</Link>
  //       <Link to="/about">About</Link>
  //       <Link to="/todos">Todos</Link>
  //     </nav>
  //   </header>
  // );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/todos">
            Todos
          </Button>
          <Button color="inherit" component={Link} to="/employees">
            Employees
          </Button>
          <Button color="inherit" component={Link} to="/filterlist">
            FilterList
          </Button>
          <Button color="inherit" component={Link} to="/reactproblems">
            ReactProblems
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
