import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import {
  EuiBreadcrumb,
  EuiPage,
  EuiPageBody,
  EuiPageSideBar,
} from '@elastic/eui';
import { KibanaChromeContext } from '../../layout';
import Helmet from 'react-helmet';

export type KibanaPageProps = {
  breadcrumbs?: EuiBreadcrumb[];
  headerLinks?: ReactNode;
  pageTitle: string;
  solutionNav?: ReactNode;
};

export const KibanaPage: FunctionComponent<KibanaPageProps> = ({
  breadcrumbs,
  headerLinks,
  solutionNav,
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

  const pageContent = solutionNav ? (
    <EuiPage>
      <EuiPageSideBar>{solutionNav}</EuiPageSideBar>
      <EuiPageBody>{children}</EuiPageBody>
    </EuiPage>
  ) : (
    <EuiPage>
      <EuiPageBody>{children}</EuiPageBody>
    </EuiPage>
  );

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Kibana 8 Prototype</title>
      </Helmet>
      {pageContent}
    </>
  );
};
