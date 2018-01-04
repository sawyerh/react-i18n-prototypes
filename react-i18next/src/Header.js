import React, { PureComponent } from "react";
import { I18nextProvider, translate } from "react-i18next";
import i18n from "./i18n";

function I18nHeader(props) {
  return (
    <I18nextProvider i18n={i18n} initialLanguage={props.locale}>
      <Header {...props} />
    </I18nextProvider>
  );
}

class Header extends PureComponent {
  render() {
    return <div>{this.props.t("back.message")}</div>;
  }
}

export default translate()(I18nHeader);
