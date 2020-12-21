# MiReDoMarket

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 프로젝트 설명 : 사용자에게 정해진 구간의 노래를 들려준 뒤 무작위로 배열되어 있는 단어들을 배치하여 노래 가사를 완성하는 게임
 구현 동기 : 놀라운 토요일 – 도레미 마켓 프로그램을 보며 내가 좋아하는 노래나 프로그램에는 나오지 않았는데 어려운 노래들을 가지고 도레미 마켓과 비슷한 게임을 하고 싶었고, 문제별 난이도에 따라 점수를 차등 지급하여 어려운 문제일 수록 높은 점수를 얻을 수 있는 게임을 만들고 싶어서
 
 
 구현 방법 : 서버의 경우 AWS를 이용하여 서버를 구축하였고, 사용자가 보기의 버튼을 클릭했을 때 state의 변화를 통해 정보 변화를 감지하였다. 노래 가사 및 영상의 정보의 경우 JSON파일의 형식으로 저장되어 있는 내용들을 파싱하여 영상과 가사의 정보를 불러와 state에 저장하는 방식으로 구현하였다. 각 문제는 여러 문제 중 랜덤하게 가져오도록 했고, 다음 문제 역시 여러 문제 중 랜덤하게 가져오도록 구현하였다.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
