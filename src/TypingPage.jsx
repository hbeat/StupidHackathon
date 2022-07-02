import React from "react";
import { useState, useEffect, useRef } from "react";
import "./typingpagestyle.css"

const TypingPage = () => {
  const counter = useRef(1);
  const [message, setMessage] = useState("");

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  async function transformText(text) {
    const elem = document.querySelector('#textarea')
    elem.setAttribute('disabled', '')
    let onChangeMsg = message.split("");
    const maxLength = Math.max(message.length, text.length);
    for (let index = 0; index < maxLength; index++) {
      if (
        message.charAt(index) != undefined &&
        text.charAt(index) != undefined
      ) {
        onChangeMsg[index] = text.charAt(index);
      } else if (text.charAt(index) == undefined) {
        onChangeMsg[index] = "";
      } else {
        onChangeMsg[index] = text.charAt(index);
      }
      const outMessage = onChangeMsg.join("");
      await sleep(50);

      setMessage(outMessage);
      // elem.value = message;
    }
    elem.removeAttribute('disabled')
  }

  async function evaluateText() {
    if (message.length > counter.current * 30) {
      let data = "";
      do {
        const response = await fetch(
          "https://watasalim.vercel.app/api/quotes/random"
        );
        const json = await response.json();
        data = json.quote.body;
      } while (data.length > 60);
      transformText(data);
      counter.current++;
    }
  }

  return (
    <>    
 
      <h1>ด่าโลด</h1>
      <form>
        <textarea
          id="textarea"
          name="textarea"
          rows="20"
          cols="40"
          value={message}
          onChange={(e) => {
            handleMessageChange(e);
            evaluateText();
          }}
        ></textarea>
        <br />
        <label>ขั้นต่ำ 100 คำนะกิ้วๆ</label>
        <br />
        <button className='button-2'>ล้างใหม่หมด</button>
        <button className='button-1'>ด่าแม่งเลย</button>
      </form>

    
    </>
  );
};

export default TypingPage;
