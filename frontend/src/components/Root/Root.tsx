import React, { ReactNode } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import { RouteComponentProps } from 'react-router';

import { flattenMessages } from 'services/i18n/intl';
import enMessages from 'translations/en.json';
import frMessages from 'translations/fr.json';
import { Header, Menu } from './components';
import Style from './Root.style';

const locales = {
  fr: flattenMessages(frMessages),
  en: flattenMessages(enMessages),
};

addLocaleData([...fr, ...en]);

// Your component own properties
interface Props extends RouteComponentProps<any> {
  children: ReactNode;
}

const Root: React.FunctionComponent<Props> = ({ children }) => (
  <IntlProvider locale="fr" messages={locales.fr}>
    <Style.Page>
      <Header />
      <Style.Body>
        <Menu />
        <Style.Content>{children}</Style.Content>
      </Style.Body>
    </Style.Page>
  </IntlProvider>
);

export default Root;
