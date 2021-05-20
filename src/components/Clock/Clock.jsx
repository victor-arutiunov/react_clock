import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    clockName: this.props.name,
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ clockName: this.props.name });
      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <span>
        {`for ${this.state.clockName}:
        ${this.state.date}`}
      </span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string,
};

Clock.defaultProps = {
  name: 'noneRandomName',
};

export default Clock;
