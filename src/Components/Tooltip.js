import React from 'react';
import PropTypes from 'prop-types';

export default class Tooltip extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    styles: PropTypes.object,
  };

  styles = {
    wrapper: {
      position: 'relative',
      display: 'inline-block',
      zIndex: '98',
      color: '#555',
      cursor: 'help',
    },
    tooltip: {
      position: 'absolute',
      zIndex: '99',
      minWidth: '200px',
      maxWidth: '420px',
      background: '#616161',
      color: '#fff',
      top: '125%',
      left: '50%',
      marginBottom: '10px',
      padding: '5px',
    },
    arrow: {
      position: 'absolute',
      width: '0',
      height: '0',
      top: '-5px',
      left: '50%',
      marginLeft: '-5px',
      borderLeft: 'solid transparent 5px',
      borderRight: 'solid transparent 5px',
      borderBottom: 'solid #616161 5px',
    },
    gap: {
      position: 'absolute',
      width: '100%',
      height: '20px',
      bottom: '-20px',
    },
    tiptrigger: {
      display: 'inline-block',
      borderRadius: '50%',
      height: '18px',
      width: '18px',
      lineHeight: '18px',
      fontSize: '11px',
      background: '#fafefe',
      border: '1px solid #a3aaaa',
      textAlign: 'center',
      color: '#7a7e7e',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.18)',
      boxSizing: 'border-box',
      cursor: 'default',
    },
  };

  constructor(props) {
    super(props);
    this.state = { visible: false };
    if (props.styles) this.mergeStyles(props.styles);
  }

  mergeStyles = userStyles => {
    Object.keys(this.styles).forEach(name => {
      Object.assign(this.styles[name], userStyles[name]);
    });
  };

  show = () => this.setVisibility(true);
  hide = () => {
    setTimeout(() => {
      this.setVisibility(false);
    }, 1000);
  };

  setVisibility = visible => {
    this.setState(
      Object.assign({}, this.state, {
        visible,
      }),
    );
  };

  render() {
    const { props, state, styles, show, hide } = this;

    return (
      <div
        onMouseEnter={show}
        onMouseLeave={hide}
        ref="wrapper"
        style={styles.wrapper}
      >
        <span style={styles.tiptrigger}>
          {props.triggerText}
        </span>
        {state.visible &&
          <div ref="tooltip" style={styles.tooltip}>
            <div className="Tooltip-content">
              {this.props.children}
            </div>
            <div ref="arrow" />
            <div ref="gap" style={styles.gap} />
          </div>}
      </div>
    );
  }
}
