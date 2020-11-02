import "./App.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const App = () => {
  const [stringList, setStringList] = useState([]);

  const onLeakStart = () => {
    const x = Array(1000000).join("x");
    for (let i = 0; i < 10000000; i++) {
      setStringList([...stringList, x]);
    }
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Browser Memory Leak App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="app-container">
        <Button variant="primary" onClick={onLeakStart}>
          Render many "x"
        </Button>
        <div className="loader" />
        <br />
        <div id="test">
          {stringList.map((longString, index) => {
            return <p key={index}>{longString}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
