import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Content.css';

const Content = () => {
  const ct = `  ### 비동기 작업 
  - 서버의 API를 사용해야 할 때는 네트워크 송수신 과정에서 시간이 걸리기 때문에 즉시 처리되는 것이 아니라, 응답을 받을 때까지기다렸다가 전달받은 응답 데이터를 처리한다. 
  - 동기적 처리 : 요청이 끝날 때까지 기다리는 동안 중지 상태가 되어 다른 작업을 할 수 없다. 
  - 비동기적처리 : 웹 애플리케이션이 멈추지 않기 때문에 동시에 여러 가지 요청을 처리할 수 있고, 기다리는 과정에서 다른 함수도 호출할 수 있다.
  ### 콜백 함수
  
  - 특정 함수가 처리된 직후 어떠한 작업을 하고 싶다면 콜백 함수 활용
  - 콜백 지옥
  
  ### Promise
  
  - 콜백 지옥 같은 코드가 형성되지 않게 하는 방안
  - .then을 사용하여 그다음 작업을 설정하기 때문에 콜백 지옥이 형성되지 않는다.
  
  ### async/await
  
  - Promise를 더욱 쉽게 사용할 수 있도록 해주는 문법
  - 함수 앞부분에 async 키워드를 추가하고, 해당 함수 내부에서 Promise의 앞부분에 await 키워드를 추가한다.`;
  return (
    <Container style={{ marginTop: 55, paddingLeft: 50, paddingRight: 50 }}>
      <hr style={{ marginBottom: 10 }}></hr>
      <h3>title</h3>
      <hr style={{ marginTop: 0, marginBottom: 10 }}></hr>
      <p style={{ margin: 0 }}>nickname</p>
      <hr style={{ marginTop: 10 }}></hr>
      <pre className="overflow-auto">{ct}</pre>
      <hr></hr>
      <Button>back</Button>
    </Container>
  );
};

export default Content;
