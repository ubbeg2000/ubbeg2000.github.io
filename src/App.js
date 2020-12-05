import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Library from "./pages/Library";
import Apod from "./pages/Apod";

function App() {
  return (
    <div>
      <Router>
        <AppBar position="relative" style={{ backgroundColor: "#343434" }}>
          <Toolbar>
            <Typography color="lightgrey" style={{ marginRight: "30px" }}>
              Explore Jagad
            </Typography>
            <Link to="/">
              <Button
                disableElevation
                variant="text"
                style={{ color: "lightgrey" }}
              >
                Dailys
              </Button>
            </Link>
            <Link to="/library">
              <Button
                disableElevation
                variant="text"
                style={{ color: "lightgrey" }}
              >
                Library
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <Container
          maxWidth="xl"
          style={{
            paddingTop: "50px",
          }}
        >
          <Switch>
            <Route exact path="/" component={Apod} />
            <Route exact path="/library" component={Library} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
