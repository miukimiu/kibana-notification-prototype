import React, { useState } from 'react';
import { navigate } from 'gatsby';

import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiSideNav,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

type Props = {
  currentUrl?: string;
};

export function DocsInPageNav({ currentUrl = 'introduction' }: Props) {
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const createItem = (name: string, data = {}) => {
    return {
      ...data,
      id: name,
      name,
      // @ts-ignore
      isSelected: data.url && data.url === currentUrl,
      // @ts-ignore
      // disabled: !data.url,
      // @ts-ignore
      onClick: data.url
        ? () => {
            // @ts-ignore
            navigate(data.url);
          }
        : () => {
            return null;
          },
    };
  };

  const sideNav = [
    createItem('Introduction', { url: 'introduction' }),
    createItem('Design Principles', {
      items: [
        createItem('Purpose with delight'),
        createItem('Empowering through thoughtfulness'),
        createItem('Optimized, yet flexible'),
      ],
    }),
    createItem('Culture', {
      items: [
        createItem('Purpose'),
        createItem('Workflow values'),
        createItem('Design decisions'),
      ],
    }),
    createItem('Practices', {
      items: [
        createItem('Communication'),
        createItem('Tooling'),
        createItem('Critiques'),
        createItem('User research'),
      ],
    }),
  ];

  return (
    <EuiFlexGroup direction="column" style={{ height: '100%' }}>
      <EuiFlexItem style={{ overflowY: 'auto', overflowX: 'hidden' }}>
        <div>
          <EuiTitle size="xs">
            <h2>On this page</h2>
          </EuiTitle>
          <EuiSpacer />
          <EuiSideNav
            mobileTitle="Navigate within $APP_NAME"
            toggleOpenOnMobile={toggleOpenOnMobile}
            isOpenOnMobile={isSideNavOpenOnMobile}
            items={sideNav}
          />
        </div>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <div>
          <EuiHorizontalRule />
          <EuiText size="s" color="subdued">
            <p>No credit card required. Get up and running in 3-minutes!</p>
          </EuiText>
          <EuiSpacer size="s" />
          <EuiButton fill fullWidth>
            Start a free trial
          </EuiButton>
        </div>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
