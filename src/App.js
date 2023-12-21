
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';//import bootstrap to all pages
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';//Need to import a few things for the router
import './App.css';
import { Container } from 'react-bootstrap';
import Edit from './components/edit';
import ToDoList from './components/toDoList';
import MakeTask from './components/makeTask';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*Navbar changes the url to allow us to use different components on different urls */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">List App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/maketask">Make Task</Nav.Link>
              <Nav.Link href="/todolist">To Do List</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* Where we put the new component of which change of url */}
        <Routes>
          {/* when we go to this path, show this component */}
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/todolist' element={<ToDoList></ToDoList>}></Route>
          <Route path='/maketask' element={<MakeTask></MakeTask>}></Route>
          <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
