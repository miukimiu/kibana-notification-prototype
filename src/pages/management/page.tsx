import React, { FunctionComponent } from 'react';
import { EuiBreadcrumb, EuiPageBody, EuiPageSideBar } from '@elastic/eui';
import { KibanaPage, KibanaPageProps } from '../../components/kibana/page/page';
import { KibanaManagementNav } from './nav';

export type ManagementPage = KibanaPageProps & {
  sideNavItem?: string;
};

export const ManagementPage: FunctionComponent<ManagementPage> = ({
  breadcrumbs,
  sideNavItem,
  children,
  ...rest
}) => {
  const baseBreadcrumb: EuiBreadcrumb[] = [
    {
      text: 'Management',
      href: breadcrumbs?.length ? '/management/stack' : undefined,
    },
  ];

  let theBreadcrumbs = baseBreadcrumb;
  if (breadcrumbs?.length) {
    theBreadcrumbs = baseBreadcrumb.concat(breadcrumbs);
  }

  return (
    <KibanaPage breadcrumbs={theBreadcrumbs} {...rest}>
      <EuiPageSideBar>
        <KibanaManagementNav currentItem={sideNavItem} />
      </EuiPageSideBar>
      <EuiPageBody>{children}</EuiPageBody>
    </KibanaPage>
  );
};
