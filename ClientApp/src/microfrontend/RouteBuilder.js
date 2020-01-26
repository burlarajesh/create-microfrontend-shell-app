import MicroFrontEnd from "./micro-frontend";
import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { readAppSettings } from "./actions";


export const RouteBuilder = function(props) {
  const CreateAppComponet = ({ history, appConfig }) => {
    return (     
        <MicroFrontEnd
          key={appConfig.AppId}
          history={history}
          appConfig={appConfig}
        />     
    );
  };

  var appSettings = props.appSettings;
  if (appSettings != undefined) {
    return (
      <Switch>
        {appSettings.map(app => {
          return (
            <Route
              key={app.AppId}
              path={app.Path}
              render={props => <CreateAppComponet {...props} appConfig={app} />}
            />
          );
        })}
      </Switch>
    );
  }else{
    return(
      <Switch>
      <Route path="/"/>
      </Switch>
    )
  }
};

export default connect(
  state => (state.appSettings ? state.appSettings : []),
  dispatch => bindActionCreators(readAppSettings, dispatch)
)(RouteBuilder);
