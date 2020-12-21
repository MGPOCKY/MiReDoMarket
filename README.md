# MiReDoMarket

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 프로젝트 설명
- 사용자에게 정해진 구간의 노래를 들려준 뒤 무작위로 배열되어 있는 단어들을 배치하여 노래 가사를 완성하는 게임
### 구현 동기
- *놀라운 토요일 – 도레미 마켓* 프로그램을 보며 내가 좋아하는 노래나 프로그램에는 나오지 않았는데 어려운 노래들을 가지고 도레미 마켓과 비슷한 게임을 하고 싶었고, 문제별 난이도에 따라 점수를 차등 지급하여 어려운 문제일 수록 높은 점수를 얻을 수 있는 게임을 만들고 싶어서
 
### 구현 방법
- 서버의 경우 AWS를 이용하여 서버를 구축하였고, 사용자가 보기의 버튼을 클릭했을 때 state의 변화를 통해 정보 변화를 감지하였다. 노래 가사 및 영상의 정보의 경우 JSON파일의 형식으로 저장되어 있는 내용들을 파싱하여 영상과 가사의 정보를 불러와 state에 저장하는 방식으로 구현하였다. 각 문제는 여러 문제 중 랜덤하게 가져오도록 했고, 다음 문제 역시 여러 문제 중 랜덤하게 가져오도록 구현하였다.

## Available Scripts

In the project directory, you can run:

### `yarn start`
