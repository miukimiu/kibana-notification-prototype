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
import { KibanaPageHeader, KibanaPageHeaderProps } from './page_header';
import { KibanaChromeContext } from '../../layout';
import Helmet from 'react-helmet';

export type KibanaPageProps = {
  breadcrumbs?: EuiBreadcrumb[];
  headerLinks?: ReactNode;
  pageTitle: string;
  solutionNav?: ReactNode;

  pageHeader?: KibanaPageHeaderProps;
};

export const KibanaPage: FunctionComponent<KibanaPageProps> = ({
  breadcrumbs,
  headerLinks,
  solutionNav,
  children,
  pageTitle,
  pageHeader,
}) => {
  const setHeaderItems = useContext(KibanaChromeContext);

  useEffect(() => {
    setHeaderItems.setChrome({
      breadcrumbs,
      headerLinks,
    });
  }, [breadcrumbs, headerLinks]);

  const optionalSideBar = solutionNav ? (
    <EuiPageSideBar>{solutionNav}</EuiPageSideBar>
  ) : undefined;

  const optionalPageHeader = pageHeader && <KibanaPageHeader {...pageHeader} />;

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Kibana 8 Prototype</title>
      </Helmet>
      <EuiPage>
        {optionalSideBar}
        <EuiPageBody>
          {optionalPageHeader}
          {children}
        </EuiPageBody>
      </EuiPage>
    </>
  );
};
