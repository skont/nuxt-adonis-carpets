import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useRouter } from 'next/router';
import {mainmenu as menuLinks, site} from '../siteconfig/menu';

const MenuItem = ({ title, path, submenu, id }) => {
  const router=useRouter()

  if (submenu) {
    const activeChild = submenu.find((item)=>{
      if(router.pathname===item.path){
        return true
      }
      return false
    })
    return (
      <NavDropdown title={title} id={`nav-dropdown-${id}`}>
        {submenu.map((item, index) => (
          <DropdownItem {...item} key={index} />
        ))}
      </NavDropdown>
    )
  }
  return (
         <Nav.Link href={path} active={router.pathname===path}>{title}</Nav.Link>
      )
}

const DropdownItem = ({ title, path, divider }) => {
  const router=useRouter()

  if (divider) {
    return (
      <NavDropdown.Divider />
    )
  }
  return (
        <NavDropdown.Item href={path} active={router.pathname===path}>{title}</NavDropdown.Item>
    )
}

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">{site.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            {menuLinks.map((item, index) => (
              <MenuItem {...item} key={index} />
            ))}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;