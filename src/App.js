import './App.css';

//Routing
import { Routes , Route } from "react-router-dom";

//MaterialUi
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
import LessonComponent from './components/LessonComponent/LessonComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <br></br>

      <CssBaseline />
      <Container fixed>

        <Routes>
          {/*Dentro de element podremos un componente o simplemente un html para pintar*/}
          <Route path="/" element={ <ListComponent></ListComponent> }></Route>
          <Route path="/lesson/:id" element={<LessonComponent></LessonComponent>}></Route>
          <Route path="*" element={ <ListComponent></ListComponent> }></Route>
        </Routes>

      </Container>

    </div>
  );
}

export default App;





