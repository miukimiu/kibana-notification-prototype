import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import {
  EuiButtonEmpty,
  EuiButtonEmptyProps,
  EuiAccordion,
  htmlIdGenerator,
} from '@elastic/eui';
import {
  EuiNotificationFlyoutMessageLink,
  EuiNotificationFlyoutMessageLinkProps,
} from './notification_flyout_message_link';

import {
  EuiNotificationFlyoutMessageMeta,
  EuiNotificationFlyoutMessageMetaProps,
} from './notification_flyout_message_meta';

export interface EuiNotificationFlyoutMessageButtonProps
  extends Omit<EuiButtonEmptyProps, 'size' | 'flush'> {
  label: ReactNode;
}

type metaProps = Omit<EuiNotificationFlyoutMessageMetaProps, 'isRead'>;

export type EuiNotificationFlyoutMessageProps = {
  /**
   * The title of the
   */
  meta: metaProps;
  /**
   * The title of the
   */
  link: EuiNotificationFlyoutMessageLinkProps;
  /**
   * readState
   */
  readState: 'seen' | 'unseen';

  /**
   * Button ...
   */
  button?: EuiNotificationFlyoutMessageButtonProps;
  /**
   * A string or an array of strings.
   */
  messages: ReactElement[];
};

export const EuiNotificationFlyoutMessage: FunctionComponent<EuiNotificationFlyoutMessageProps> = ({
  link,
  readState,
  button,
  messages,
  meta,
}) => {
  const isRead = readState === 'seen';

  return (
    <div className="euiNotificationFlyoutMessage">
      <EuiNotificationFlyoutMessageMeta
        iconType={meta.iconType}
        type={meta.type}
        healthStatus={meta.healthStatus}
        isRead={isRead}
      />

      <div className="euiNotificationFlyoutMessage__content">
        <EuiNotificationFlyoutMessageLink
          {...link}
          visited={isRead ? true : false}
        />

        <div className="euiNotificationFlyoutMessage__messages">
          {messages && messages.length === 1 ? (
            messages
          ) : (
            <EuiAccordion
              id={htmlIdGenerator()()}
              className="euiNotificationFlyoutMessage__accordion"
              buttonClassName="euiNotificationFlyoutMessage__accordionButton"
              buttonContent={`+ ${messages.length} messages`}>
              {messages}
            </EuiAccordion>
          )}
        </div>

        <div className="euiNotificationFlyoutMessage__primaryAction">
          {button && (
            <EuiButtonEmpty
              flush="left"
              size="s"
              {...(button as EuiButtonEmptyProps)}>
              {button.label}
            </EuiButtonEmpty>
          )}
        </div>
      </div>
    </div>
  );
};
