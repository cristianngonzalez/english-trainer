import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

//Components
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import ListComponent from './components/ListComponent/ListComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <br></br>

      <CssBaseline />
      <Container fixed>
        <ListComponent></ListComponent>
      </Container>

    </div>
  );
}

export default App;





