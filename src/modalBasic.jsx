import { useRef, useState } from 'react';
import icoBattery from '../public/common/ico_back.svg'


function modal() {
  return (
    <section className="modal">
      <div className="dimmd"></div>
      <div className="container">
        <div className="header">
          <span className="title">시설 검색</span>
          <span className="close"><img src="main/close.png" alt="" /></span>
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
        <button className="complete-button">완료</button>
      </div>
    </section>
  )
}


export default ModalBasic;