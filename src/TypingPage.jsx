import React from "react";
import { useState, useEffect, useRef } from "react";
import TransitionsModal from "./TransitionsModal";
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
  }

  function waitButton() {
    return new Promise((resolve, reject) => {
      if (showModal == false) {
        resolve(true);
      }
   });
}

// const waitButton = new Promise((resolve, reject) => {
//   if (showModal == false) {
//     resolve(true);
//   }
// });



  async function evaluateText() {
    if (message.length > counter.current * 40) {
      const elem = document.querySelector('#textarea')
      elem.setAttribute('disabled', '')
      let data = "";
      do {
        const response = await fetch(
          "https://watasalim.vercel.app/api/quotes/random"
        );
        const json = await response.json();
        data = json.quote.body;
      } while (data.length > 60);
      
      
      if (counter.current == 1) {
        setTitle("A1");
        setDescription("A2");
        setShowModal(true);
        console.log("false after closing", showModal)
      }
      else if(counter.current == 2) {
        console.log("current is 2")
        setTitle("คุณกำลังพิมพ์ข้อความนี้");
        setDescription("กรุณารอสักครู่");
        setShowModal(true);
      }
      else if(counter.current == 3) {
        console.log("current is 3")
        setTitle("คุณกำลังพิมพ์ข้อความนี้");
        setDescription("กรุณารอสักครู่");
        setShowModal(true);
      }

      console.log("showModal out while", showModal)
      do{
        setTimeout(() => {
          
        }, 1000);
      } while(showModal)
      await transformText(data)
      // while(showModal){
      //   console.log("showModal while", showModal)
      //   setTimeout(async () => {
      //     console.log("showModal await", showModal)
      //     await transformText(data);
      //   }, 1000);
      // }
      // console.log("modal before await "+ showModal);
      // await transformText(data);
      counter.current++;
      elem.removeAttribute('disabled')
    }
  }

  // function displayPopup(text, desc) {
  //   if (counter == 1) {

  // }

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
        {showModal&&<TransitionsModal title={title} description={description} open={showModal} setOpen={setShowModal}/>}
    
    </>
  );
};

export default TypingPage;
