import React, { PureComponent } from "react";
import { I18nextProvider, translate } from "react-i18next";
import i18n from "./i18n";

function I18nFooter(props) {
  return (
    <I18nextProvider i18n={i18n} initialLanguage={props.locale}>
      <Footer {...props} />
    </I18nextProvider>
  );
}

class Footer extends PureComponent {
  render() {
    return <div>{this.props.t("continue.message")}</div>;
  }
}

export default translate()(I18nFooter);
