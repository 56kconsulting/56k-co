import React, { PropTypes } from 'react';

export class Tooltip extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { tooltipActive: false };
  }

  render() {
    var self = this;
    var nodes = _.map(this.props.children, function(child) {
      child.props.tooltipActive = self.state.tooltipActive;
      child.props.handleChange = self._handleChange;
      if (self.isMounted()) {
        child.props.position = self.getDOMNode().getBoundingClientRect();
      }
      return child;
    });
    return (
      <div className="Tooltip">
        {nodes}
      </div>
    );
  }

  _handleChange = active => {
    this.setState({
      tooltipActive: active,
    });
  };
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
  render() {
    return (
      <div onMouseEnter={this._onMouseEnter} onMouseLeave={this._onMouseLeave}>
        {this.props.children}
      </div>
    );
  }
  _onMouseEnter = () => {
    this.props.handleChange(true);
  };
  _onMouseLeave = () => {
    this.props.handleChange(false);
  };
}
