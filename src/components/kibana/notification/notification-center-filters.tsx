import React, { useState } from 'react';
import {
  EuiFacetGroup,
  EuiFacetButton,
  EuiTitle,
  EuiSpacer,
} from '@elastic/eui';

export const KibanaNotificationCenterFilters = () => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState(undefined);

  const facet0Clicked = (id) => {
    setDisabled(false);

    setLoading(false);
    setSelectedOptionId((selectedOptionId) =>
      selectedOptionId === id ? undefined : id
    );
  };

  const facet1Clicked = (id) => {
    setDisabled(false);
    setLoading(false);
    setSelectedOptionId((selectedOptionId) =>
      selectedOptionId === id ? undefined : id
    );
  };

  const list = [
    {
      id: 'alerts',
      label: 'Alerts',
      quantity: 1321,
      onClick: facet0Clicked,
    },
    {
      id: 'cases',
      label: 'Cases',
      quantity: 44,

      onClick: facet1Clicked,
    },
    {
      id: 'reports',
      label: 'Reports',
      quantity: 7,
      onClick: facet1Clicked,
    },
    {
      id: 'backgroundSearch',
      label: 'Background search',
      quantity: 3,
      onClick: facet1Clicked,
    },
    {
      id: 'cloud',
      label: 'Cloud',
      quantity: 3,
      onClick: facet1Clicked,
    },
    {
      id: 'News',
      label: 'news',
      quantity: 3,
      onClick: facet1Clicked,
    },
  ];

  const facets = (align) => {
    return (
      <>
        {list.map((facet) => {
          return (
            <EuiFacetButton
              key={facet.id}
              id={`${facet.id}_${align}`}
              quantity={facet.quantity}
              isSelected={selectedOptionId === facet.id}
              isDisabled={disabled && facet.id !== 'facet2'}
              isLoading={loading}
              onClick={
                facet.onClick ? () => facet.onClick(facet.id) : undefined
              }>
              {facet.label}
            </EuiFacetButton>
          );
        })}
      </>
    );
  };

  return (
    <div style={{ maxWidth: 200 }}>
      <EuiTitle size="xxs">
        <h4>Message Types</h4>
      </EuiTitle>
      <EuiFacetGroup>{facets('Vertical')}</EuiFacetGroup>
      <EuiSpacer />
      <EuiTitle size="xxs">
        <h4>Spaces</h4>
      </EuiTitle>
      <EuiFacetGroup>{facets('Vertical')}</EuiFacetGroup>
    </div>
  );
};
