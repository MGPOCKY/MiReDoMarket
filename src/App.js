import './App.css';
import YoutubeVideo from './01/YoutubeVideo';
import YoutubeLylic from './01/YoutubeLylic';
import ResultLylic from './01/ResultLylic';
import LylicBlock from './01/LylicBlock';
import { Component } from 'react';
import dataList from './data/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    //console.log(dataList);
    this.shuffle = this.shuffle.bind(this);
    this.selectCard = this.selectCard.bind(this);
    this.resetCard = this.resetCard.bind(this);
    this.validate = this.validate.bind(this);
    this.initVariable = this.initVariable.bind(this);

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
    }
    //console.log(this.state.origin);
  }
  initVariable(){
    let randomInt = parseInt(Math.random() * dataList.length);
    let originh = dataList[randomInt]['origin'].split(' ');

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
    }))
    return [originh, shufflearrh, selectItems, linkh, exampleItems, scoreh];
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
        this.setState(() => ({score: this.state.score / 2}));
      }
      this.setState(() => ({
        finish: !this.state.finish,
      }));
    }
  }
  fillColor(color) {
    let change = this.state.select.slice();
    for(let i=0;i<this.state.arr.length;i++) {
      change[i] = <LylicBlock className={color} key={i} value={change[i].props.value} id={i} func={this.resetCard}/>;
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
    change[this.state.index] = <LylicBlock className="" key={this.state.index} value={arr[e.target.id]} id={e.target.id} func={this.resetCard}/>;

    //console.log(arr);
    this.setState((state, props) => ({
      index: this.state.index + 1,
      select: change,
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
  render() {
    return (
      <div className="App">
        <YoutubeVideo link={this.state.link}></YoutubeVideo>
        <h2>입력한 글씨를 누르면 초기화 됩니다.</h2>
        <ResultLylic items={this.state.select}/>
        <h2>보기</h2>
        <YoutubeLylic func={this.selectCard} items={this.state.example}/>
        <br />
        <h2>해당 문제의 배점은 {this.state.score}점 입니다!!</h2>
        <h2>총 {this.state.sumScore}점 입니다!!</h2>
        <button onClick={this.initVariable}>다른 문제</button>
      </div>
    );
  }
}

export default App;
