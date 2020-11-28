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
    console.log(dataList);
    let randomInt = parseInt(Math.random() * dataList.length);
    console.log(randomInt);
    this.shuffle = this.shuffle.bind(this);
    this.selectCard = this.selectCard.bind(this);
    this.resetCard = this.resetCard.bind(this);
    this.validate = this.validate.bind(this);
    let origin = dataList[randomInt]['origin'].split(' ');
    let link = dataList[randomInt]['link'];
    const emptyarr = [];
    for(let i=0;i<origin.length;i++) {
      emptyarr.push("____");
    }
    let shufflearr = origin.slice();
    this.shuffle(shufflearr);
    const exampleItems = shufflearr.map((value, index) => <LylicBlock key={value} value={value} id={index} func={this.selectCard}/>);
    const selectItems = emptyarr.map((value, index) => <LylicBlock key={index} value={value} id={index}/>);
    console.log(origin);
    this.state = {
      origin: origin,
      arr: shufflearr,
      select: selectItems,
      link: link,
      index: 0,
      example: exampleItems,
      finish: false,
    }
    console.log(this.state.origin);
  }
  componentDidUpdate() {
    if(this.state.index === this.state.arr.length && !this.state.finish) {
      if(this.validate()) {
        console.log("Success!");
        this.fillColor("green");
      }
      else {
        console.log("Fail!");
        this.fillColor("red");
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
        <h2>입력한 버튼을 누르면 초기화 됩니다.</h2>
        <ResultLylic items={this.state.select}/>
        <h2>보기</h2>
        <YoutubeLylic func={this.selectCard} items={this.state.example}/>
      </div>
    );
  }
}

export default App;
