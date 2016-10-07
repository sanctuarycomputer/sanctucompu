import React, { Component } from 'react';
import v from 'vudu';

const styles = v({
  hello: {
    color: 'pink'
  }
});

export default class Hello extends Component {
  render() {
    return <div className={styles.hello}>Hello From React!</div>;
  }
}
