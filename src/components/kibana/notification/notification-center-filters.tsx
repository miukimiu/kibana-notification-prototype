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

  const messageTypes = [
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

  const spaces = [
    {
      id: 'default',
      label: 'Default',
      quantity: 22,
      onClick: facet0Clicked,
    },
    {
      id: 'bravo',
      label: 'Bravo',
      quantity: 5,

      onClick: facet1Clicked,
    },
    {
      id: 'charlie',
      label: 'Charlie',
      quantity: 1,
      onClick: facet1Clicked,
    },
    {
      id: 'foxtrot',
      label: 'Foxtrot',
      quantity: 1,
      onClick: facet1Clicked,
    },
    {
      id: 'tango',
      label: 'Tango',
      quantity: 1,
      onClick: facet1Clicked,
    },
  ];

  const messageTypesFacets = (align) => {
    return (
      <>
        {messageTypes.map((facet) => {
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

  const spacesFacets = (align) => {
    return (
      <>
        {spaces.map((facet) => {
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
      <EuiFacetGroup>{messageTypesFacets('Vertical')}</EuiFacetGroup>
      <EuiSpacer />
      <EuiTitle size="xxs">
        <h4>Spaces</h4>
      </EuiTitle>
      <EuiFacetGroup>{spacesFacets('Vertical')}</EuiFacetGroup>
    </div>
  );
};
