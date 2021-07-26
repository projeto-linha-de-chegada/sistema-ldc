import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from '@material-ui/core/Avatar';
import Container from 'react-bootstrap/Container';

//auth
import StoreContext from '../../components/Store/Context';
import { useContext } from 'react';

export default function NavBar() {
    //auth 
    const { setToken } = useContext(StoreContext);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ marginBottom: "20px" }}>
                <Container>
                    <Avatar alt="Icone do sistema" src="plc_logo.ico" style={{ marginRight: "10px" }}></Avatar>
                    <Navbar.Brand href="/">Banco de Horas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="/perfil" >Perfil</Nav.Link>
                            <NavDropdown title="Atividades" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/cadastrarAtividade">Cadastrar atividades</NavDropdown.Item>
                                <NavDropdown.Item href="/manterAtividades">Manter atividades</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Avaliação" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/solicitarAvaliacao">Solicitar Avaliação</NavDropdown.Item>
                                <NavDropdown.Item href="/historicoAvaliacao">Histórico de avaliações</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Opções" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => setToken(null)}>Log Out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}