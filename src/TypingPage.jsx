import React from 'react'
import "./typingpagestyle.css"

const TypingPage = () => {
  return (
    <>    
 
      <h1>ด่าโลด</h1>
      <form>
         <textarea id="textarea" name="textarea" rows="20" cols="40"></textarea>
         <br/>
         <label>ขั้นต่ำ 100 คำนะกิ้วๆ</label>
         <br/>
         <div>
          <button className='button-2'>ล้างใหม่หมด</button>
          <button className='button-1'>ด่าแม่งเลย</button>
         </div>

         
      </form>

    
    </>
  )
}

export default TypingPage