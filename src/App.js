import { Typography, Paper, Grid } from '@material-ui/core';

import SettingsPanel from './components/SettingsPanel';
import Toolbox from './components/Toolbox';
import Topbar from './components/TopBar';

import Container from './components/user/Container';
import Card from "./components/user/Card";
import Text from "./components/user/Text";
import Button from "./components/user/Button";

import { Editor, Frame, Element } from "@craftjs/core";

function App() {

  return (
    <div style={{ margin: "0 auto", width: "800px" }}>

      <Typography variant="h5" align="center">A super simple page editor</Typography>
      <Topbar />
      <Editor resolver={{ Card, Button, Text, Container }}>
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Grid item xs>
            <Frame>
            <Element is={Container} padding={5} background="#eee" canvas>
              <Card />
              <Button size="small" variant="outlined">Click</Button>
              <Text fontSize="small" text="Hi world!" />
              <Element is={Container} padding={6} background="#999" canvas>
                <Text fontSize="small" text="It's me again!" />
              </Element>
            </Element>
            </Frame>
          </Grid>

          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>

        </Grid>
      </Editor>
    </div >
  );
}

export default App;
