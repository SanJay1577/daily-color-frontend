import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function HomePage() {
  const history = useHistory();
  const theme = createTheme({
    palette: {
      mode: 'dark'
    },
  });
  return (

    <div>
      <ThemeProvider theme={theme}>
        <header>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Color Suggestion
                </Typography>
                <Button color="inherit" onClick={() => history.push("/login")}>Login</Button>
                <Button color="inherit" onClick={() => history.push("/signup")}>Signup</Button>
              </Toolbar>
            </AppBar>
          </Box>
        </header>
      </ThemeProvider>
      <main>
        <section className="main-parallax">
          <div className="inner-parallax">
            <br />
            <div className="web-heading">
              <h1>
                Color Suggestion
              </h1>
            </div>
            <br />
            <i>Login to get your color</i>
          </div>
        </section>
      </main>
      <footer>
        <p>Contact : suggestcolor@gmail.com</p>
      </footer>

    </div>
  );
}
