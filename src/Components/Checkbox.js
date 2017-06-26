import React from 'react';
import PropTypes from 'prop-types';
import Label from 'Components/InputLabel';
import newId from 'Components/utils/newid';
import classNames from 'classnames';

class Checkbox extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    disabled:  PropTypes.bool,
    id:        PropTypes.string,
    value:     PropTypes.oneOf(PropTypes.string, PropTypes.number),
    children:  PropTypes.node,
    onChange:  PropTypes.func,
  };
  static defaultProps = {
    onChange() {}
  };

  componentWillMount() {
    if (this.props.id) {
      this.id = this.props.id;
    } else {
      this.id = newId();
    }
  }

  handleChange = (event) => {
    this.props.onChange(event.target.checked, this.props.value);
  };

  render() {
    const { children, className, value, ...elementProps } = this.props;
    const props = Object.assign({}, elementProps);
    delete props.onChange;
    return (
      <div
        className={classNames(
          'dp-input--checkbox',
          className,
          { 'dp-input--checkbox--disabled': this.props.disabled }
        )}
      >
        <input
          type="checkbox"
          value={value}
          id={this.id}
          ref={(c) => { this.input = c; }}
          onChange={this.handleChange}
          {...elementProps}
        />
        <label htmlFor={this.id} className="dp-input--checkbox__checkbox" />
        <Label htmlFor={this.id}>{children}</Label>
      </div>
    );
  }
}

export default Checkbox;
