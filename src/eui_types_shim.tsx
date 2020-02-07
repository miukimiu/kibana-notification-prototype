import { EuiListGroup } from '@elastic/eui';

export type EuiListGroupProps = React.ComponentProps<typeof EuiListGroup>;
export type EuiListGroupItemProps = Required<
  EuiListGroupProps
>['listItems'][number];
