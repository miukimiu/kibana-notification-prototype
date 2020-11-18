import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import { EuiBreadcrumb, EuiPage } from '@elastic/eui';
import { KibanaChromeContext } from '../../layout';
import Helmet from 'react-helmet';

export type KibanaPageProps = {
  breadcrumbs?: EuiBreadcrumb[];
  headerLinks?: ReactNode;
  pageTitle: string;
};

export const KibanaPage: FunctionComponent<KibanaPageProps> = ({
  breadcrumbs,
  headerLinks,
  children,
  pageTitle = '',
}) => {
  const setHeaderItems = useContext(KibanaChromeContext);

  useEffect(() => {
    setHeaderItems.setChrome({
      breadcrumbs,
      headerLinks,
    });
  }, [breadcrumbs, headerLinks]);

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Kibana 8 Prototype</title>
      </Helmet>
      <EuiPage>{children}</EuiPage>
    </>
  );
};
