import React from 'react';
import PropTypes from 'prop-types';

export class Tooltip extends React.PureComponent {
  static propTypes = {
    handleChange: PropTypes.func,
    defaultShow: PropTypes.bool,
  };

  static defaultProps = {
    handleChange: null,
    defaultShow: false,
  };

  constructor(props) {
    super(props);
    this.state = { tooltipActive: props.defaultShow };
  }

  render() {
    const { children } = this.props;
    return (
      <div className="Tooltip">
        {children}
      </div>
    );
  }
}

export class Contents extends React.PureComponent {
  render() {
    var active = this.props.tooltipActive;
    var position = this.props.position || null;
    if (active && position) {
      var style = {
        left: position.left - 10,
        top: position.bottom + 18,
      };
      return (
        <div style={style} className="Tooltip-content bottom">
          {this.props.children}
        </div>
      );
    } else {
      return null;
    }
  }
}

export class HoverTrigger extends React.PureComponent {
  static propTypes = {
    handleChange: PropTypes.func,
    defaultShow: PropTypes.bool,
  };

  static defaultProps = {
    handleChange: null,
    defaultShow: false,
  };
  constructor(props) {
    super(props);
    this.state = { tooltipActive: props.defaultShow };
  }
  handleChange = e => {
    if (this.props.handleChange) {
      this.props.handleChange(e.target.tooltipActive);
    }
  };
  render() {
    return (
      <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        {this.props.children}
      </div>
    );
  }
  onMouseEnter = () => {
    this.handleChange(true);
    console.log('Enter');
  };
  onMouseLeave = () => {
    this.handleChange(false);
    console.log('Leave');
  };
}
