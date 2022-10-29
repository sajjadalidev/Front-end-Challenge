import {
  Nav,
  NavbarContainer,
  NavLogo,
  MenuItem,
  MenuLink,
  Menu,
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Kwanso - Front-end Exercise</NavLogo>
        <Menu>
          <MenuItem>
            <MenuLink to="/list-tasks">Tasks</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/create-task">Create Tasks</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/bulk-delete">Delete Task</MenuLink>
          </MenuItem>
        </Menu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
