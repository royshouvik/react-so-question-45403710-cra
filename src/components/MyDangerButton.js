import React, { Component } from 'react';
import { Button } from 'reactstrap';
import CSSModules from 'react-css-modules';
import bs from 'bootstrap/dist/css/bootstrap.css';
import styles from './MyDangerButton.css';
import cn from 'classnames';
// console.log('styles:', styles);

class MyDangerButton extends Component {
  render() {
    const myFancyDangerButton = cn({
      btn: true,
      'btn-danger': true,
      MyDangerButton: true
    });

    return (
      <div>
        <button className={styles.MyDangerButton}>My Danger Button #1</button>
        <Button className={myFancyDangerButton}>Danger Button #2</Button>
        <h6>My fancy heading</h6>
      </div>
    );
  }
}

{
  /* <div className={cn(style.panel,style.panelDefault,container)}>
     <div className={style.panel__body}>A Basic Panel</div> */
}
// </div>

// export default MyDangerButton;
export default CSSModules(MyDangerButton, styles);
