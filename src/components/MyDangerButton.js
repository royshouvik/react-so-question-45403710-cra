import React, { Component } from 'react';
import { Button } from 'reactstrap';
import CSSModules from 'react-css-modules';
import styles from './MyDangerButton.css';
import cn from 'classnames';

class MyDangerButton extends Component {
  render() {
    const myFancyDangerButton = cn({
      btn: true,
      'btn-danger': true,
      MyDangerButton: true
    });

    return (
      <div>
        <h1>My Fancy Danger Button!</h1>
        <Button className={myFancyDangerButton}>Danger Button</Button>
      </div>
    );
  }
}

export default CSSModules(MyDangerButton, styles);
