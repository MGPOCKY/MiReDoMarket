import './App.css';
import YoutubeVideo from './01/YoutubeVideo';
import YoutubeLylic from './01/YoutubeLylic';
import ResultLylic from './01/ResultLylic';
import LylicBlock from './01/LylicBlock';
import { Component } from 'react';
import dataList from './data/data.json';
import { faRedo, faHistory, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  constructor(props) {
    super(props);
    //console.log(dataList);
    this.shuffle = this.shuffle.bind(this);
    this.selectCard = this.selectCard.bind(this);
    this.resetCard = this.resetCard.bind(this);
    this.validate = this.validate.bind(this);
    this.initVariable = this.initVariable.bind(this);
    this.reload = this.reload.bind(this);

    let initVar = this.initVariable();
    this.state = {
      origin: initVar[0],
      arr: initVar[1],
      select: initVar[2],
      link: initVar[3],
      index: 0,
      example: initVar[4],
      finish: false,
      sumScore: 0,
      score: initVar[5],
      exampleOrigin: initVar[4],
      name: initVar[6],
    }
    //console.log(this.state.origin);
  }
  initVariable(){
    let randomInt = parseInt(Math.random() * dataList.length);
    let originh = dataList[randomInt]['origin'].split(' ');
    let name = dataList[randomInt]['name'];
    let linkh = dataList[randomInt]['link'];
    let scoreh = dataList[randomInt]['score'];
    const emptyarr = [];
    for(let i=0;i<originh.length;i++) {
      emptyarr.push("____");
    }
    let shufflearrh = originh.slice();
    this.shuffle(shufflearrh);
    //console.log(shufflearrh);
    let exampleItems = shufflearrh.map((value, index) => <LylicBlock key={index} value={value} id={index} func={this.selectCard}/>);
    let selectItems = emptyarr.map((value, index) => <LylicBlock key={index} value={value} id={index}/>);

    this.setState(() => ({
      origin: originh,
      arr: shufflearrh,
      select: selectItems,
      link: linkh,
      index: 0,
      example: exampleItems,
      finish: false,
      sumScore: this.state.sumScore,
      score: scoreh,
      exampleOrigin: exampleItems,
      retry: false,
      name: name,
    }))
    return [originh, shufflearrh, selectItems, linkh, exampleItems, scoreh, name];
  }
  componentDidUpdate() {
    if(this.state.index === this.state.arr.length && !this.state.finish) {
      if(this.validate()) {
        console.log("Success!");
        this.fillColor("green");
        this.setState(() => ({sumScore: this.state.sumScore + this.state.score}))
      }
      else {
        console.log("Fail!");
        this.fillColor("red");
        this.setState(() => ({
          score: this.state.score / 2,
          retry: true,
        }));
      }
      this.setState(() => ({
        finish: !this.state.finish,
      }));
    }
  }
  fillColor(color) {
    let change = this.state.select.slice();
    for(let i=0;i<this.state.arr.length;i++) {
      change[i] = <LylicBlock className={color} key={i} value={change[i].props.value} id={i}/>;
    }
    this.setState((state, props) => ({
      select: change,
    }));
  }
  selectCard(e) {
    if(this.state.index > this.state.arr.length - 1)
      return;
    //console.log(e);
    //console.log(e.target.id);
    let arr = this.state.arr.slice();
    let change = this.state.select.slice();
    let exampleChange = this.state.example.slice();
    change[this.state.index] = <LylicBlock className="" key={this.state.index} value={arr[e.target.id]} id={e.target.id} func={this.resetCard}/>;
    exampleChange[e.target.id] = <LylicBlock className="selected" key={e.target.id} value={arr[e.target.id]} id={e.target.id}/>;
    //console.log(arr);
    this.setState((state, props) => ({
      index: this.state.index + 1,
      select: change,
      example: exampleChange,
    }));
  }
  resetCard(e) {
    const arr = this.state.arr;
    const emptyarr = [];
    for(let i=0;i<arr.length;i++) {
      emptyarr.push("____");
    }
    const selectItems = emptyarr.map((value, index) => <LylicBlock key={index} value={value} id={index}/>);
    //console.log(e);
    //console.log(e.target.id);
    this.setState((state, props) => ({
      index: 0,
      select: selectItems,
      finish: false,
      example: this.state.exampleOrigin,
    }));
  }
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  validate() {
    const selectedList = this.state.select.slice();
    const originalList = this.state.origin.slice();
    for(let i=0;i<this.state.arr.length;i++) {
      if(originalList[i] !== selectedList[i].props.value) {
        return false;
      }
    }
    return true;
  }
  reload() {
    let relink = this.state.link.slice()+"&";
    this.setState(()=>({
      link: relink,
    }));
  }
  render() {
    let retry = this.state.retry ? <FontAwesomeIcon icon={faRedo} size="2x" onClick={this.resetCard}/> + "재시도" : "";
    return (
      <div className="App">
        <YoutubeVideo link={this.state.link} name={this.state.name}/>
        <h1>{this.state.name}</h1>
        <h2>입력한 글씨를 누르면 초기화 됩니다.</h2>
        <ResultLylic items={this.state.select}/>
        <h2>보기</h2>
        <YoutubeLylic func={this.selectCard} items={this.state.example}/>
        <br />
        <h2>해당 문제의 배점은 {this.state.score}점 입니다!!</h2>
        <h2>총 {this.state.sumScore}점 입니다!!</h2>
        <FontAwesomeIcon icon={faHistory} size="2x" onClick={this.reload}/> 다시 듣기
        <br/>
        <FontAwesomeIcon icon={faAngleRight} size="2x" onClick={this.initVariable}/> 다음 문제
        <br/>
        {retry}
      </div>
    );
  }
}

export default App;
