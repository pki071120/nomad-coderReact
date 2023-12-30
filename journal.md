async와 await
  async는 비동기라는 의미로 요청을 보내고 응답을 받거나 안 받아도 다음 코드가 실행된다.
  await은 pointer를 지정하고 그 부분부터 아래 코드들은 항상 실행된다.

Promise란?
콜백함수의 단점을 보완하며 비동기 처리에 사용되는 객체

BrowserRouter, HashRouter
전자는 url에 #가 붙지 않는거고 후자는 url에 #가 붙는 것이다.

route
url을 이동하게 해주는 컴포넌트이다.

useParams
route로 보낸 Parameters를 사용할 수 있게 해준다.

breaking change
개발툴이 업데이트 되면서 계속 사용하기 위해 코드를 수정해야 되는 경우

느낀점
강의에서는 fetch를 사용하였지만 axios를 찾아서 사용함으로서 axios를 사용하여 api를 조금더 잘 연결할 수 있게 되었고 routing의 방법이 navigate를 사용하는 방법과 Link컴포넌트를 사용하는 방법이 있다는 것도 알게 되었다. 또한 useParams를 사용해서 id값을 가져오고 그 id값을 이용해서 데이터를 가져오는 법도 알 수 있었다. 또한 리액트는 breaking change가 없기에 정말 좋은 라이브러리라고 불리는 것 같다.