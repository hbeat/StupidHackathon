import React from "react";
import { useState, useEffect, useRef } from "react";
import TransitionsModal from "./TransitionsModal";
import axios from "axios";
import "./typingpagestyle.css"

const TypingPage = () => {
  const counter = useRef(1);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  async function transformText(text) {
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
    }
    const elem = document.querySelector('#textarea')
    elem.removeAttribute('disabled')
  }


  function evaluateText() {
    if (message.length > counter.current * 40) {
      const elem = document.querySelector('#textarea')
      elem.setAttribute('disabled', '')
      if (counter.current == 1) {
        setTitle("อุ้ย! ความรักชาติยังไม่หายไปจากใจละเส้");
        setDescription("อย่ายอมแพ้ ด่าให้ได้ถึง 100 ตัว!!!");
        setShowModal(true);
        console.log("false after closing", showModal)
      }
      else if(counter.current == 2) {
        console.log("current is 2")
        setTitle("จ๊ะเอ๋ตัวเอง ยังรักลุงตู่อยู่ใช่มั้ยล้าา");
        setDescription("ไปให้สุด ด่าลุง ให้สุด 100 ตัวเอง 8 ปียังทนมาได้ !!");
        setShowModal(true);
      }
      else if(counter.current == 3) {
        console.log("current is 3")
        setTitle("ความรักชาติกับลุงตู่ยังอยู่ในใจเจ้าใช่มั้ยละ เสียใจด้วยนะ");
        setDescription("ความพยายามของเจ้ายังไม่พอ ความรักลุงตู่มันกลืนกินเจ้าแล้ว");
        setShowModal(true);
      }

      console.log("showModal out while", showModal)
    }

    
  }
async function handleClose() {
      // const elem = document.querySelector('#textarea')
      // elem.setAttribute('disabled', '')
      let data = "";
      if (counter.current == 2) {
        do {
        const response = await axios.get(
          "https://watasalim.vercel.app/api/quotes/random"
        );
        const json = await response.data;
        data = json.quote.body;
      } while (data.length > 60);
      }
      
      transformText(data)
      counter.current++;
      // elem.removeAttribute('disabled')
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
        {showModal&&<TransitionsModal title={title} description={description} open={showModal} setOpen={setShowModal} handleClose={handleClose}/>}
    
    </>
  );
};

export default TypingPage;
