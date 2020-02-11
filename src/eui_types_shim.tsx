import { EuiListGroup, EuiSelectable } from '@elastic/eui';

export type EuiListGroupProps = React.ComponentProps<typeof EuiListGroup>;
export type EuiListGroupItemProps = Required<
  EuiListGroupProps
>['listItems'][number];

export type EuiSelectableProps = React.ComponentProps<typeof EuiSelectable>;
export type EuiSelectableOptionsProps = Required<EuiSelectableProps>['options'];
export type EuiSelectableOptionProps = EuiSelectableOptionsProps[number];
