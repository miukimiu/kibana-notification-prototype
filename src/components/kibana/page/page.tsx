import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import { EuiBreadcrumb } from '@elastic/eui';
import { KibanaChromeContext } from '../../layout';

export type KibanaPageProps = {
  breadcrumbs: EuiBreadcrumb[];
  headerLinks: ReactNode;
};

export const KibanaPage: FunctionComponent<KibanaPageProps> = ({
  breadcrumbs,
  headerLinks,
  children,
}) => {
  const setHeaderItems = useContext(KibanaChromeContext);

  useEffect(() => {
    setHeaderItems.setChrome({
      breadcrumbs,
      headerLinks,
    });
  }, [breadcrumbs, headerLinks]);

  return <>{children}</>;
};
