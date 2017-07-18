import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';
import { objectKeyFilter } from 'utils/objects';

/**
 * Standard button.
 */
export default class Button extends React.Component {
  static propTypes = {
    /**
     * Displays the button at the given size
     */
    size:                  PropTypes.oneOf(['s', 'm', 'l']),
    /**
     * The type of button to display.
     */
    type:                  PropTypes.oneOf(['primary', 'secondary', 'cta']),
    /**
     * Children to render.
     */
    children:              PropTypes.node,
    /**
     * CSS classes to apply to the element.
     */
    className:             PropTypes.string,
    /**
     * Whether or not the button is disabled or not.
     */
    disabled:              PropTypes.bool,
    /**
     * Called when the user clicks outside of the button.
     */
    onClickOutside:        PropTypes.func,
    /**
     * Disables outside click listening by explicitly removing the event listening bindings.
     */
    disableOnClickOutside: PropTypes.func,
    /**
     * Enables outside click listening by setting up the event listening bindings.
     */
    enableOnClickOutside:  PropTypes.func
  };

  static defaultProps = {
    size:           'l',
    type:           'primary',
    disabled:       false,
    onClickOutside: noop
  };

  handleClickOutside = (event) => {
    this.props.onClickOutside(event);
  };

  render() {
    const { size, type, className, children, ...props } = this.props;

    return (
      <button
        className={classNames(
          'dp-button',
          `dp-button--${size}`,
          `dp-button--${type}`,
          className
        )}
        {...objectKeyFilter(props, Button.propTypes)}
      >
        {children}
      </button>
    );
  }
}
