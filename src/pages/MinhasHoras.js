import React, {Component} from 'react';
//bootstrap include
import 'bootstrap/dist/css/bootstrap.min.css';

//navbar imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

//card imports 
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns'

class MinhasHoras extends Component{
    render(){
      return (
        <div>
       <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">Banco de Horas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/perfil">Perfil</Nav.Link>
            <Nav.Link href="/link">Minhas Horas</Nav.Link>
            <NavDropdown title="Opções" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Upload de certificados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contatar staff</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sobre o sistema</NavDropdown.Item>
              {/*<NavDropdown.Divider />*/}
              {/*<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    
      <div>
        <h1></h1>
      <CardColumns>
      <Card style={{ width: '18rem'}} border = "dark">
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Title>Certificado de ReactJS</Card.Title>
          <Card.Text>Texto sobre o certificado</Card.Text>
          <Button variant="primary">Baixar certificado</Button>
          <h1></h1>
          <Button variant="dark">Editar certificado</Button>
          <h1></h1>
          <Button variant="danger">Remover certificado</Button>
          <h1></h1>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem'}} border = "dark">
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Title>Certificado de ReactJS</Card.Title>
          <Card.Text>Texto sobre o certificado</Card.Text>
          <Button variant="primary">Baixar certificado</Button>
          <h1></h1>
          <Button variant="dark">Editar certificado</Button>
          <h1></h1>
          <Button variant="danger">Remover certificado</Button>
          <h1></h1>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem'}} border = "dark">
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Title>Certificado de ReactJS</Card.Title>
          <Card.Text>Texto sobre o certificado</Card.Text>
          <Button variant="primary">Baixar certificado</Button>
          <h1></h1>
          <Button variant="dark">Editar certificado</Button>
          <h1></h1>
          <Button variant="danger">Remover certificado</Button>
          <h1></h1>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem'}} border = "dark">
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Title>Certificado de ReactJS</Card.Title>
          <Card.Text>Texto sobre o certificado</Card.Text>
          <Button variant="primary">Baixar certificado</Button>
          <h1></h1>
          <Button variant="dark">Editar certificado</Button>
          <h1></h1>
          <Button variant="danger">Remover certificado</Button>
          <h1></h1>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem'}} border = "dark">
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Title>Certificado de ReactJS</Card.Title>
          <Card.Text>Texto sobre o certificado</Card.Text>
          <Button variant="primary">Baixar certificado</Button>
          <h1></h1>
          <Button variant="dark">Editar certificado</Button>
          <h1></h1>
          <Button variant="danger">Remover certificado</Button>
          <h1></h1>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem'}} border = "dark">
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Title>Certificado de ReactJS</Card.Title>
          <Card.Text>Texto sobre o certificado</Card.Text>
          <Button variant="primary">Baixar certificado</Button>
          <h1></h1>
          <Button variant="dark">Editar certificado</Button>
          <h1></h1>
          <Button variant="danger">Remover certificado</Button>
          <h1></h1>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem'}} border = "dark">
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Title>Certificado de ReactJS</Card.Title>
          <Card.Text>Texto sobre o certificado</Card.Text>
          <Button variant="primary">Baixar certificado</Button>
          <h1></h1>
          <Button variant="dark">Editar certificado</Button>
          <h1></h1>
          <Button variant="danger">Remover certificado</Button>
          <h1></h1>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem'}} border = "dark">
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Title>Certificado de ReactJS</Card.Title>
          <Card.Text>Texto sobre o certificado</Card.Text>
          <Button variant="primary">Baixar certificado</Button>
          <h1></h1>
          <Button variant="dark">Editar certificado</Button>
          <h1></h1>
          <Button variant="danger">Remover certificado</Button>
          <h1></h1>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem'}} border = "dark">
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Title>Certificado de ReactJS</Card.Title>
          <Card.Text>Texto sobre o certificado</Card.Text>
          <Button variant="primary">Baixar certificado</Button>
          <h1></h1>
          <Button variant="dark">Editar certificado</Button>
          <h1></h1>
          <Button variant="danger">Remover certificado</Button>
          <h1></h1>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem'}} border = "dark">
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Title>Certificado de ReactJS</Card.Title>
          <Card.Text>Texto sobre o certificado</Card.Text>
          <Button variant="primary">Baixar certificado</Button>
          <h1></h1>
          <Button variant="dark">Editar certificado</Button>
          <h1></h1>
          <Button variant="danger">Remover certificado</Button>
          <h1></h1>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem'}} border = "dark">
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Title>Certificado de ReactJS</Card.Title>
          <Card.Text>Texto sobre o certificado</Card.Text>
          <Button variant="primary">Baixar certificado</Button>
          <h1></h1>
          <Button variant="dark">Editar certificado</Button>
          <h1></h1>
          <Button variant="danger">Remover certificado</Button>
          <h1></h1>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem'}} border = "dark">
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Title>Certificado de ReactJS</Card.Title>
          <Card.Text>Texto sobre o certificado</Card.Text>
          <Button variant="primary">Baixar certificado</Button>
          <h1></h1>
          <Button variant="dark">Editar certificado</Button>
          <h1></h1>
          <Button variant="danger">Remover certificado</Button>
          <h1></h1>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem'}} border = "dark">
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Title>Certificado de ReactJS</Card.Title>
          <Card.Text>Texto sobre o certificado</Card.Text>
          <Button variant="primary">Baixar certificado</Button>
          <h1></h1>
          <Button variant="dark">Editar certificado</Button>
          <h1></h1>
          <Button variant="danger">Remover certificado</Button>
          <h1></h1>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem'}} border = "dark">
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Title>Certificado de ReactJS</Card.Title>
          <Card.Text>Texto sobre o certificado</Card.Text>
          <Button variant="primary">Baixar certificado</Button>
          <h1></h1>
          <Button variant="dark">Editar certificado</Button>
          <h1></h1>
          <Button variant="danger">Remover certificado</Button>
          <h1></h1>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem'}} border = "dark">
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Title>Certificado de ReactJS</Card.Title>
          <Card.Text>Texto sobre o certificado</Card.Text>
          <Button variant="primary">Baixar certificado</Button>
          <h1></h1>
          <Button variant="dark">Editar certificado</Button>
          <h1></h1>
          <Button variant="danger">Remover certificado</Button>
          <h1></h1>
        </Card.Body>
      </Card>
      </CardColumns>
      </div>
      </div>
      )
    }
}

export default MinhasHoras;