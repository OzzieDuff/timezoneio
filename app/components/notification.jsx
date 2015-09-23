'use strict';

var React = require('react');

class Notification extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  handleClickDismiss() {
    this.setState({ active: false });
  }

  render() {
    var className = 'notification';

    if (this.props.style)
      className += ' notification-' + this.props.style;

    if (this.props.allowDismiss)
      className += ' notification-dismissable';

    var text = Array.isArray(this.props.text) ?
               this.props.text.join('<br>') :
               this.props.text;

    if (!text || !this.state.active)
      return <span style={{display: 'none'}}></span>;

    return (
      <div className={className}>
        {text}
        { this.props.allowDismiss &&
          <span className="notification-dismiss material-icons md-18"
                  name="Dismiss notification"
                  onClick={this.handleClickDismiss.bind(this)}>
            clear
          </span>
        }
      </div>
    );
  }
};

module.exports = Notification;
