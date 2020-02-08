import React, { Component, Fragment } from 'react';
import _ from 'lodash';

import {
  EuiIcon,
  EuiHighlight,
  EuiTextColor,
  EuiBadge,
  EuiSelectable,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiText,
  EuiPopover,
} from '@elastic/eui';

import { searchData, recents } from './data';

export default class extends Component {
  constructor(props) {
    super(props);

    this.searchData = searchData.concat(recents);
    this.data = this.searchData.map(item => {
      return {
        id: item.title,
        label: `${item.title} ${item.type.title}`,
        prepend: <EuiIcon type={item.type.iconType} size="l" color="subdued" />,
        // append: <EuiBadge>{country.code}</EuiBadge>,
      };
    });

    this.recentData = recents.map(item => {
      return {
        id: item.title,
        label: `${item.title} ${item.type.title}`,
        prepend: <EuiIcon type={item.type.iconType} size="l" color="subdued" />,
        append: <EuiIcon type="clock" size="s" color="subdued" />,
      };
    });

    // this.recentData.unshift({
    //   label: 'Recents',
    //   isGroupLabel: true,
    // });

    this.state = {
      options: this.data,
      useCustomContent: true,
      inputHasFocus: false,
      searchValue: '',
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onWindowKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowKeyDown);
  }

  onWindowKeyDown = e => {
    if (e.metaKey && e.key.toLowerCase() === 'k') {
      window.addEventListener('keyup', this.onWindowKeyUp);
    }
  };

  onWindowKeyUp = () => {
    this.inputRef.focus();
    window.removeEventListener('keyup', this.onWindowKeyUp);
  };

  onChange = options => {
    this.setState({
      options,
    });
  };

  renderOption = (option, searchValue) => {
    const data = _.find(this.searchData, { title: option.id });

    return (
      <Fragment>
        <EuiHighlight search={searchValue}>{data.title}</EuiHighlight>
        <EuiTextColor color="subdued" className="eui-displayBlock">
          <small>
            <EuiHighlight search={searchValue}>{data.type.title}</EuiHighlight>
          </small>
        </EuiTextColor>
      </Fragment>
    );
  };

  setInputRef = ref => (this.inputRef = ref);

  render() {
    const {
      options,
      useCustomContent,
      inputHasFocus,
      searchValue,
    } = this.state;

    let customProps;
    if (useCustomContent) {
      customProps = {
        height: 300,
        renderOption: this.renderOption,
        listProps: {
          rowHeight: 68,
          showIcons: false,
        },
      };
    }

    const searchValueExists = searchValue && searchValue !== '';

    return (
      <Fragment>
        <EuiSelectable
          className="searchSelectable"
          searchable
          options={searchValueExists ? options : this.recentData}
          onChange={this.onChange}
          searchProps={{
            compressed: true,
            placeholder: 'Search for anything...',
            onFocus: () => this.setState({ inputHasFocus: true }),
            onKeyUpCapture: e =>
              this.setState({ searchValue: e.currentTarget.value }),
            // TODO: Allow pre/appends on search inputs
            append: 'Command + K',
            inputRef: this.setInputRef,
            isClearable: true,
          }}
          onBlur={() => this.setState({ inputHasFocus: false })}
          listProps={{ bordered: true }}
          {...customProps}>
          {(list, search) => (
            <Fragment>
              <EuiPopover
                id="popover"
                button={search}
                isOpen={inputHasFocus}
                closePopover={() => this.setState({ inputHasFocus: false })}
                panelPaddingSize="none">
                <div style={{ width: '600px' }}>
                  {list}
                  <EuiText className="searchCustomPopover__footer" size="xs">
                    <EuiFlexGroup
                      alignItems="center"
                      gutterSize="s"
                      responsive="false">
                      <EuiFlexItem grow={false}>
                        <EuiLink>View more results</EuiLink>
                      </EuiFlexItem>
                      <EuiFlexItem />
                      <EuiFlexItem grow={false}>
                        Quickly search using
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiBadge>Command + K</EuiBadge>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiText>
                </div>
              </EuiPopover>
            </Fragment>
          )}
        </EuiSelectable>
      </Fragment>
    );
  }
}
