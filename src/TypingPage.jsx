import React from 'react'
import {useState, useEffect} from 'react'




const TypingPage = () => {

let counter = 1
const [message, setMessage] = useState('');

const handleMessageChange = event => {
  setMessage(event.target.value);
  // console.log(event.target.value);
  console.log(message);
};

// useEffect(() =>{

// }, [message])
function transformText(text) {
  const elem = document.querySelector('#textarea')
  elem.setAttribute('disable', 'true')
  let onChangeMsg = message.split('')
  
  for (let index = 0; index < message.length; index++) {
    if (message.charAt(index) != undefined || text.charAt(index) != undefined){
      onChangeMsg[index] = text.charAt(index)
    }
    else if (text.charAt(index) == undefined){
      onChangeMsg[index] = ''
    }
    const outMessage = onChangeMsg.join("")
    setTimeout(() => {
      
    }, 1000);
    
    setMessage(outMessage)
    elem.value = message
  }
  elem.setAttribute('disable', 'false')
    
}
function evaluateText(){
  if (message.length > counter * 5){
    const newMsg = 'nope'
    transformText(newMsg)
    setMessage(newMsg)
  }
}



  return (
    <>
      <h1>ด่าโลด</h1>
      <form>
         <textarea id="textarea" name="textarea" rows="20" cols="40" value={message} onChange={(e) => {
          handleMessageChange(e)
          evaluateText()
         }}></textarea>
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