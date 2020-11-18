import React, { FunctionComponent, ReactNode } from 'react';
import {
  EuiBreadcrumb,
  EuiPageBody,
  EuiPageSideBar,
  EuiHeaderLinks,
  EuiButton,
} from '@elastic/eui';
import { KibanaPage, KibanaPageProps } from '../../components/kibana/page/page';
import { ObservabilityNav } from './nav';

export type ObservabilityPage = KibanaPageProps & {
  navItem?: string;
};

export const ObservabilityPage: FunctionComponent<ObservabilityPage> = ({
  breadcrumbs,
  headerLinks,
  navItem,
  children,
  ...rest
}) => {
  const baseBreadcrumb: EuiBreadcrumb[] = [
    {
      text: 'Observability',
      href: breadcrumbs?.length ? '/observability/overview' : undefined,
    },
  ];

  let theBreadcrumbs = baseBreadcrumb;
  if (breadcrumbs?.length) {
    theBreadcrumbs = baseBreadcrumb.concat(breadcrumbs);
  }

  const theHeaderLinks: ReactNode = (
    <EuiHeaderLinks>
      {headerLinks}
      <EuiButton iconType="plusInCircle" minWidth={0} size="s">
        Add data
      </EuiButton>
    </EuiHeaderLinks>
  );

  return (
    <KibanaPage
      breadcrumbs={theBreadcrumbs}
      headerLinks={theHeaderLinks}
      {...rest}>
      <EuiPageSideBar>
        <ObservabilityNav navItem={navItem} />
      </EuiPageSideBar>
      <EuiPageBody>{children}</EuiPageBody>
    </KibanaPage>
  );
};
