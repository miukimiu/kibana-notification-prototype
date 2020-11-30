import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import {
  EuiButtonEmpty,
  EuiButtonEmptyProps,
  EuiAccordion,
  htmlIdGenerator,
} from '@elastic/eui';
import classNames from 'classnames';
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
   * If readState exists an icon appears.
   */
  isRead?: boolean | undefined;

  onRead?: () => void;

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
  button,
  messages,
  isRead,
  onRead,
  meta,
}) => {
  const classes = classNames('euiNotificationFlyoutMessage', {
    'euiNotificationFlyoutMessage--withReadState': typeof isRead === 'boolean',
  });

  return (
    <div className={classes}>
      <EuiNotificationFlyoutMessageMeta
        iconType={meta.iconType}
        type={meta.type}
        healthStatus={meta.healthStatus}
        isRead={isRead}
        onRead={() => {
          if (onRead) {
            onRead();
          }
        }}
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
