import { EuiSelectableOption } from '@elastic/eui';

export const Options: EuiSelectableOption[] = [
  {
    label: 'Alerts',
    'data-test-subj': 'titanOption',
  },
  {
    label: 'Cases',
    disabled: true,
  },
  {
    label: 'Reports',
  },
  {
    label: 'Background search',
  },
  {
    label: 'Cloud',
  },
  {
    label: 'News',
  },
];
