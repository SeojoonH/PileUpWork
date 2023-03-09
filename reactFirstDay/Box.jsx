import React from 'react'

function Box(names) {
  const clickMe = () => {
    alert("리액트 기본 연습 완료!")
  }
  return (       
    <div className="box">
      Box{names.num}
      {names.name}
      <button onClick={clickMe}>
        클릭
      </button>
    </div>
  )
};

export default Box