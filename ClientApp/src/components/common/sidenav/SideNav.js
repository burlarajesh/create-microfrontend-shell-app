import React from "react";
import { NavLink, ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./SideNav.scss";
import { readAppSettings } from '../../../microfrontend/actions'

class SideNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: true,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {       
        return (
            <aside className={this.state.isOpen ? "sideNavBar" : "sideNavBar collapsed"}>
                <button
                    onClick={this.toggle}
                    className="btn btn-outline-secondary my-3 mx-2"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="list-group list-group-flush">
                    <ListGroup className="list-group-flush">                       
                        {this.props.appSettings && this.props.appSettings.map((app) => {
                            return <ListGroupItem key={app.AppId} className="list-group-item-action">
                                <NavLink tag={Link} to={app.Path}>
                                    {app.DisplayName}
                                </NavLink>
                            </ListGroupItem>
                        })}
                    </ListGroup>
                </div>
            </aside>
        );
    }
}

export default connect(
    state => state.appSettings,
    dispatch => bindActionCreators(readAppSettings, dispatch)
)(SideNav);