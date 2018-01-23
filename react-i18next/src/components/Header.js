import translate from "./translate";
import React, { PureComponent } from "react";

class Header extends PureComponent {
  render() {
    return <div>{this.props.t("back.message")}</div>;
  }
}

export default translate(Header);
