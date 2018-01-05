import React, { PureComponent } from "react";
import { translate } from "react-i18next";

class Header extends PureComponent {
  render() {
    return <div>{this.props.t("back.message")}</div>;
  }
}

export default translate()(Header);
