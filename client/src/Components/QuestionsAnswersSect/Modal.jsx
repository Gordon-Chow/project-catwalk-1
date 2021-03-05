import React from 'react';
import styles from './Question.modules.css';

class Modal extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }



  render() {
    if(!this.props.show){
      return null
    }
    return <>
    <div className ={styles.imageDiv} >
      <div className ={styles.imageModal}>
      <button onClick={(event)=>{this.props.selectModal() }} className={styles.Mbutton} > ✖ </button>
      <a onClick={(event)=>{this.props.selectModal() }}><img className={styles.imageM} src={this.props.url} /></a>
      </div>
      </div>
      </>
  }
}

export default Modal