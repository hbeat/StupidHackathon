import React from 'react'

const TypingPage = () => {
  return (
    <>
      <h1>ด่าโลด</h1>
      <form>
         <textarea id="textarea" name="textarea" rows="20" cols="40"></textarea>
         <br/>
         <label>ขั้นต่ำ 100 คำนะกิ้วๆ</label>
         <br/>
         <button>ล้างใหม่หมด</button>
         <button>ด่าแม่งเลย</button>
      </form>
    </>
  )
}

export default TypingPage