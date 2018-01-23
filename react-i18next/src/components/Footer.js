import React, { PureComponent } from "react";
import translate from "./translate";

class Footer extends PureComponent {
  render() {
    return <div>{this.props.t("continue.message")}</div>;
  }
}

export default translate(Footer);
