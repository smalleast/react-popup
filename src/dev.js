import './dev.scss';
import {ReactPopup} from './main';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: 'bottom'
    }
  }

  show = () => {
    const {rp} = this.refs;
    rp.show(() => {
      console.log('show callback....');
    })
  };
  _top = () => {
    this.setState({direction: 'top'})
  };
  _right = () => {
    this.setState({direction: 'right'})
  };
  _bottom = () => {
    this.setState({direction: 'bottom'})
  };
  _left = () => {
    this.setState({direction: 'left'})
  };

  render() {
    const {direction} = this.state;
    return (
      <div className="hello-react-popup">
        <button onClick={this.show.bind(this)}>OPEN POPUP</button>
        <button onClick={this._top.bind(this)}>direction set:top</button>
        <button onClick={this._right.bind(this)}>direction set:right</button>
        <button onClick={this._bottom.bind(this)}>direction set:bottom</button>
        <button onClick={this._left.bind(this)}>direction set:left</button>
        <ReactPopup ref="rp" direction={direction}>
          <div className="content" style={{padding: '20px', backgroundColor: '#fff'}}>
            <h1>关于Google</h1>
            <div className="bd">
              <div className="img">
                <img src="https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>
              </div>
              <p>搜索工具百度为您找到相关结果约100,000,000个</p>
              <p>百度一下,你就知道官网</p>
              <cite>全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。</cite>
              <p>www.baidu.com/ - 百度快照 - 7036条评价</p>
            </div>
          </div>
        </ReactPopup>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
