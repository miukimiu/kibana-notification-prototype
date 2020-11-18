import React, { FunctionComponent, ReactNode } from 'react';
import {
  EuiBreadcrumb,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiPage,
  EuiPageBody,
  EuiPageSideBar,
} from '@elastic/eui';
import { KibanaPage, KibanaPageProps } from '../../components/kibana/page/page';
import { SecurityNav } from './nav';

export type SecurityPage = KibanaPageProps & {
  navItem?: string;
};

export const SecurityPage: FunctionComponent<SecurityPage> = ({
  breadcrumbs = [],
  headerLinks,
  navItem,
  children,
  ...rest
}) => {
  const baseBreadcrumb: EuiBreadcrumb[] = [
    {
      text: 'Security',
      href: breadcrumbs?.length ? '/security/overview' : undefined,
    },
  ];

  let theBreadcrumbs = baseBreadcrumb;
  if (breadcrumbs?.length) {
    theBreadcrumbs = baseBreadcrumb.concat(breadcrumbs);
  }

  const theHeaderLinks: ReactNode = (
    <EuiHeaderLinks>
      {headerLinks}
      <EuiHeaderLink href="#">Settings</EuiHeaderLink>
    </EuiHeaderLinks>
  );

  return (
    <KibanaPage
      breadcrumbs={theBreadcrumbs}
      headerLinks={theHeaderLinks}
      {...rest}>
      <EuiPage>
        <EuiPageSideBar>
          <SecurityNav navItem={navItem} />
        </EuiPageSideBar>
        <EuiPageBody>{children}</EuiPageBody>
      </EuiPage>
    </KibanaPage>
  );
};
