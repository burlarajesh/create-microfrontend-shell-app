import React from "react";

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { appConfig, document } = this.props;
    const scriptId = `micro-frontend-script-${appConfig.AppId}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    } else {
      const script = document.createElement("script");
      script.id = scriptId;

      script.src = appConfig.HostCDNUrl;
      script.onload = this.renderMicroFrontend;
      document.head.appendChild(script);
    }
  }

  componentWillUnmount() {
    const { appConfig, window } = this.props;
    if (window[`unmount${appConfig.AppId}`] != undefined) {
      window[`unmount${appConfig.AppId}`](`${appConfig.AppId}-container`);
    }
  }

  renderMicroFrontend = () => {
    const { appConfig, window, history } = this.props;
    if (window[`render${appConfig.AppId}`] != undefined) {
      window[`render${appConfig.AppId}`](
        `${appConfig.AppId}-container`,
        history,
        appConfig
      );
    }
  };

  render() {
    return <main id={`${this.props.appConfig.AppId}-container`} />;
  }
}
class AppConfig {}
MicroFrontend.defaultProps = {
  document,
  window
};

export default MicroFrontend;
