import React from 'react';
import { ChromeNavGroupProps } from './nav';
import { EuiIcon } from '@elastic/eui';

// @ts-ignore
import { home } from '../../../images/home';

export const KibanaNavTopLinks: ChromeNavGroupProps = {
  links: [
    {
      label: 'Home',
      // @ts-ignore: Still throws a console error
      icon: <EuiIcon type={home} />,
      isActive: true,
    },
    {
      label: 'Settings',
      iconType: 'gear',
    },
  ],
};

export const KibanaNavLinks: ChromeNavGroupProps[] = [
  {
    title: 'Stack',
    iconType: 'logoElasticsearch',
    links: [
      {
        label: 'Stack Monitoring',
      },
      {
        label: 'Canvas',
      },
      {
        label: 'Maps',
      },
      {
        label: 'Machine learning',
      },
      {
        label: 'Infrastructure',
      },
      {
        label: 'Graph',
      },
      {
        label: 'Visualize',
      },
    ],
  },
  {
    title: 'Observability',
    iconType: 'logoObservability',
    links: [
      {
        label: 'Logs',
      },
      {
        label: 'Metrics',
      },
      {
        label: 'APM',
      },
      {
        label: 'Uptime',
      },
    ],
  },
  {
    title: 'Security',
    iconType: 'logoSecurity',
    links: [
      {
        label: 'Endpoint',
      },
      {
        label: 'SIEM',
      },
    ],
  },
  {
    title: 'Enterprise Search',
    iconType: 'logoEnterpriseSearch',
    links: [
      {
        label: 'App Search',
      },
      {
        label: 'Workplace Search',
      },
    ],
  },
  {
    title: 'Developer Tools',
    iconType: 'devToolsApp',
    links: [
      {
        label: 'Console',
      },
      {
        label: 'Ingestion APIs',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    links: [
      {
        label: 'Elastic.co',
        href: 'http://elastic.co',
        target: '_blank',
      },
      {
        label: 'Webinars',
        href: 'http://elastic.co',
        target: '_blank',
      },
      {
        label: 'Blogs',
        href: 'http://elastic.co',
        target: '_blank',
      },
      {
        label: 'Training',
        href: 'http://elastic.co',
        target: '_blank',
      },
      {
        label: 'Consulting',
        href: 'http://elastic.co',
        target: '_blank',
      },
    ],
  },
];
