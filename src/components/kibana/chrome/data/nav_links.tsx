import React from 'react';
import { ChromeNavGroupProps } from '../nav/nav';
import { EuiIcon } from '@elastic/eui';

// @ts-ignore
import { home } from '../../../../images/home';

export const KibanaNavTopLinks: ChromeNavGroupProps = {
  title: 'Top',
  links: [
    {
      label: 'Home',
      // @ts-ignore: Still throws a console error
      icon: <EuiIcon type={home} />,
      url: '/',
    },
    // {
    //   label: 'Settings',
    //   iconType: 'gear',
    // },
  ],
};

export const KibanaNavLinks: ChromeNavGroupProps[] = [
  {
    title: 'Analytics',
    iconType: 'logoKibana',
    links: [
      {
        label: 'Overview',
        url: 'analytics/overview',
      },
      {
        label: 'Discover',
      },
      {
        label: 'Visualize',
        url: 'visualize',
      },
      {
        label: 'Dashboards',
        url: 'dashboards',
      },
      {
        label: 'Canvas',
        url: 'canvas',
      },
      {
        label: 'Maps',
        // url: 'maps',
      },
      {
        label: 'Machine Learning',
      },
      {
        label: 'Graph',
      },
    ],
  },
  {
    title: 'Observability',
    iconType: 'logoObservability',
    links: [
      {
        label: 'Overview',
        url: 'observability-overview',
      },
      {
        label: 'Metrics',
      },
      {
        label: 'Logs',
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
        label: 'Overview',
        url: 'security/overview',
      },
      {
        label: 'SIEM',
      },
      {
        label: 'Endpoint',
      },
    ],
  },
  {
    title: 'Workplace Search',
    iconType: 'logoWorkplaceSearch',
    links: [
      {
        label: 'Analytics',
      },
      {
        label: 'Documents',
      },
      {
        label: 'Content Sources',
      },
      {
        label: 'Crawler',
      },
      {
        label: 'Curations',
      },
      {
        label: 'Relevance Tuning',
      },
      {
        label: 'Results Settings',
      },
      {
        label: 'Schema',
      },
      {
        label: 'Synonyms',
      },
      {
        label: 'Workplace Admin',
      },
    ],
  },
  {
    title: 'Management',
    iconType: 'devToolsApp',
    links: [
      {
        label: 'Dev Tools',
        url: 'dev-tools-console',
      },
      {
        label: 'Stack Monitoring',
      },
      {
        label: 'Stack Management',
        url: 'stack-management',
      },
      // {
      //   label: 'Console',
      // },
      {
        label: 'Credentials',
      },
      {
        label: 'Ingestion APIs',
      },
      {
        label: 'Query Tester',
      },
      {
        label: 'Reference UI',
      },
    ],
  },
  {
    title: 'Learn',
    iconType: 'training',
    links: [
      {
        label: 'Docs',
        href: 'https://www.elastic.co/guide',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'Blogs',
        href: 'https://www.elastic.co/blog/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'Webinars',
        href: 'https://www.elastic.co/videos/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'Training',
        href: 'https://www.elastic.co/training/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'Consulting',
        href: 'https://www.elastic.co/consulting',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'Elastic.co',
        href: 'http://elastic.co',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ],
  },
];
