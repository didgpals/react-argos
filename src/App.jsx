import { useRef, useState } from 'react';
import './App.css';


function App() {
  const [userID, setID] = useState("");
  const [userPW, setPW] = useState("");
  const [toggleBtn, settoggleBtn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // input에 입력될 텍스트를 관리하는 상태 변수
  const [inputText, setInputText] = useState('');

  const idRef = useRef();
  const pwRef = useRef();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const onChangeID = (e) => {
    setID(e.target.value);
  }

  const onChangePW = (e) => {
    setPW(e.target.value);
  }

  const onSubmit = () => {
    if (userID === "김보호" && userPW === "1234") {
      // alert("로그인 성공!");
      location.href = "sub/sub/login.html";
    } else {
      alert("아이디 또는 비밀번호를 확인해 주세요!");
    }
  }

  const handleToggle = () => {
    settoggleBtn(!toggleBtn);
  }
  // 버튼 클릭 시 실행될 함수
  const handleButtonClick = (text) => {
    setInputText(text); // 버튼 클릭 시 inputText 상태 업데이트
  };


  return (
    <div className='wrap'>
      <main id="main">
        <div id="login">
          <div className="login">
            <div className="title">
              <img src="main/logo.png" alt="아르고스케어로고" />
              <p>아르고스케어 알림장</p>
              <h2>로그인</h2>
            </div>
            <form action="">
              <fieldset>
                <legend>회원 로그인</legend>
                <div>
                  <input type="txt" placeholder='시설을 선택하세요' className="icon_search" onClick={openModal} onChange={(e) => setInputText(e.target.value)} value={inputText}
                  />
                </div>
                <div>
                  <input value={userID} onChange={onChangeID} ref={idRef} type="text" placeholder='이름을 입력하세요 ex)김보호' />
                </div>
                <div>
                  <input value={userPW} onChange={onChangePW} ref={pwRef} type="password" placeholder='비밀번호를 입력 ex)1234' className="icon_eye" />
                </div>
                <div className="checkbox_box">
                  <input type="checkbox" /> <label>로그인 상태유지</label>
                </div>
                <div className="btn_login_box">
                  {/* <button onClick={onSubmit} type='submit'>로그인</button> */}
                  <a className='btn_login' href='https://didgpals.github.io/argosassignmentbook/sub/main/main.html;' onClick={onSubmit}>로그인하기</a>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        {isOpen && (
          <section className="modal">
            <div className="dimmd"></div>
            <div className="container">
              <div className="header">
                <span className="title">시설 검색</span>
                <span className="close" onClick={closeModal}><img src="main/close.png" alt="" /></span>
              </div>
              <div className="search-bar">
                <input type="text" placeholder="시설명을 입력해주세요" />
              </div>
              <div className="facility-list">
                <div className="facility-item">
                  <div className="facility-info">
                    <span className="facility-name">아르고스 주간보호센터</span>
                    <span className="facility-address">부산광역시 부산진구 중앙대로 708</span>
                  </div>
                  <button onClick={handleToggle} className={toggleBtn ? 'select-button active' : 'select-button'}>선택</button>
                </div>

                <div className="facility-item">
                  <div className="facility-info">
                    <span className="facility-name">아르고스 주간보호센터</span>
                    <span className="facility-address">부산광역시 부산진구 중앙대로 708</span>
                  </div>
                  <button className="select-button">선택</button>
                </div>
                <div className="facility-item">
                  <div className="facility-info">
                    <span className="facility-name">아르고스 주간보호센터</span>
                    <span className="facility-address">부산광역시 부산진구 중앙대로 708</span>
                  </div>
                  <button className="select-button">선택</button>
                </div>
                <div className="facility-item">
                  <div className="facility-info">
                    <span className="facility-name">아르고스 주간보호센터</span>
                    <span className="facility-address">부산광역시 부산진구 중앙대로 708</span>
                  </div>
                  <button className="select-button">선택</button>
                </div>
                <div className="facility-item">
                  <div className="facility-info">
                    <span className="facility-name">아르고스 주간보호센터</span>
                    <span className="facility-address">부산광역시 부산진구 중앙대로 708</span>
                  </div>
                  <button className="select-button">선택</button>
                </div>
              </div>
              <button className="complete-button" onClick={() => { closeModal(); handleButtonClick('아르고스 주간보호센터'); }} >완료</button>
            </div>
          </section>
        )}
      </main >
    </div >
  )
}

export default App
