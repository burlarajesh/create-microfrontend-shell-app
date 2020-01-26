import React from "react";
import {
  Navbar,
  NavbarBrand,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import { Link } from "react-router-dom";
import "./AppHeader.scss";

export default class AppHeader extends React.Component {
  constructor(props) {
    super(props);    
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow">
        <NavbarBrand tag={Link} to="/" className="mr-auto">
          Shell
        </NavbarBrand>
        <Dropdown isOpen={this.state.isOpen} toggle={this.toggle} >
          <DropdownToggle color="outline-light" caret>User</DropdownToggle>
          <DropdownMenu right>
            <p className="px-4 py-2">User Name</p>
            <DropdownItem divider />
            <DropdownItem>Sign out</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Navbar>
    );
  }
}
