import React from 'react';
import { Container } from 'react-bootstrap';
import './Profile.css';

const Profile = () => {
  return (
    <Container style={{ marginTop: 55 }}>
      <h1 style={{ marginBottom: 13 }}>Introduction</h1>
      <div style={{ marginBottom: 50 }}>
        <p style={{ marginBottom: 3 }} className="lead">
          안녕하세요 대학에서 컴퓨터공학을 전공 중인 초보 개발자입니다. 저는
          최근 javascript에 관심을 가지고 react js와 express js를 공부하고
          있습니다. 꾸준히 개발 공부를 하여 향후 풀스택 개발자가 되는 것이 최종
          목표입니다.
        </p>
      </div>
      <h1>My Stack</h1>
      <div style={{ marginBottom: 50 }}>
        <img
          src="https://img.icons8.com/color/96/000000/html-5--v1.png"
          alt="html"
          style={{ marginRight: 15 }}
        />
        <img
          src="https://img.icons8.com/color/96/000000/css3.png"
          alt="css"
          style={{ marginRight: 15 }}
        />
        <img
          src="https://img.icons8.com/color/96/000000/javascript--v1.png"
          alt="javascript"
          style={{ marginRight: 15 }}
        />
        <img
          src="https://img.icons8.com/ios-glyphs/90/000000/react.png"
          alt="react"
          style={{ marginRight: 15 }}
        />
        <img
          src="https://img.icons8.com/windows/96/000000/node-js.png"
          alt="node-js"
          style={{ marginRight: 15 }}
        />
        <img
          src="https://img.icons8.com/color/96/000000/mongodb.png "
          alt="mongodb"
          style={{ marginRight: 15 }}
        />
        <img
          src="https://img.icons8.com/color/96/000000/mysql-logo.png"
          alt="mysql"
          style={{ marginRight: 15 }}
        />
        <img
          src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png"
          alt="java"
          style={{ marginRight: 15 }}
        />
        <img
          src="https://img.icons8.com/color/96/000000/kotlin.png"
          alt="kotlin"
          style={{ marginRight: 15 }}
        />
        <img
          src="https://img.icons8.com/fluency/96/000000/android-os.png"
          alt="android"
          style={{ marginRight: 15 }}
        />
        <img
          src="https://img.icons8.com/color/96/000000/python--v1.png"
          alt="python"
          style={{ marginRight: 15 }}
        />
        <img
          src="https://img.icons8.com/color/96/000000/firebase.png"
          alt="firebase"
          style={{ marginRight: 15 }}
        />
      </div>
    </Container>
  );
};

export default Profile;
