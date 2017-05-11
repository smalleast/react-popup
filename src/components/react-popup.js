/**
 * Created by tony on 2017/5/11.
 */
import './style.scss';
import documentAppend from 'react-document-append';
import calcStyle from 'calc-style';
import classNames from 'classnames';
import {ReactBackdrop} from 'react-backdrop';
import React, {PropTypes} from 'react';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class ReactPopup extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    direction: PropTypes.string
  };
  static defaultProps = {
    direction: 'bottom'
  };

  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      visible: false
    }
    this._callback = null;
  }

  show = (inCallback) => {
    console.log('show....');
    this._callback = inCallback;
    this.setState({hidden: false}, () => {
      setTimeout(() => {
        this.setState({visible: true})
      })
    })
  };

  hide = (inCallback) => {
    console.log('close....');
    this._callback = inCallback;
    this.setState({visible: false})
  };

  _onTransitionEnd = () => {
    console.log('_onTransitionEnd....');
    const {visible} = this.state;
    !visible && this.setState({hidden: true})
    if (this._callback && typeof this._callback === 'function') {
      this._callback();
    }

  };

  render() {
    const {className, direction, children} = this.props;
    const {hidden, visible} = this.state;
    return (
      <div className="react-popup-container">
        <ReactBackdrop visible={visible} onClick={this.hide.bind(this,()=>{
          console.log('hide callback.....');
        })}/>
        <div
          ref="root"
          className={classNames('react-popup', className)}
          hidden={hidden}
          onTransitionEnd={this._onTransitionEnd}
          data-direction={direction}
          data-visible={visible}>
          {children}
        </div>
      </div>

    )
  }
}
