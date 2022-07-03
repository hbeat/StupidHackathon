import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import TransitionsModal from "./TransitionsModal";
import axios from "axios";
import "./typingpagestyle.css"
import MyImage from "./assets/cursor.png";





const TypingPage = () => {
  const counter = useRef(1);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();
  
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
      await sleep(40);
      setMessage(outMessage);
    }
    const elem = document.querySelector('#textarea')
    elem.removeAttribute('disabled')
  }

  function evaluateText() {
    if (message.length > counter.current * 5) {
      const elem = document.querySelector('#textarea')
      elem.setAttribute('disabled', '')
      if (counter.current == 1) {
        setTitle("อุ้ย! ความรักชาติยังไม่หายไปจากใจละเส้");
        setDescription("อย่ายอมแพ้ ด่าให้ได้ถึง ๑๐๐ ตัว!!!");
        setConfirm("ด่าต่อเลย");
        setShowModal(true);
        console.log("false after closing", showModal)
      }
      else if (counter.current == 2) {
        console.log("current is 2")
        setTitle("จ๊ะเอ๋ตัวเอง ยังรักลุงตู่อยู่ใช่มั้ยล้าา");
        setDescription("ไปให้สุด ด่าลุง ให้สุด ๑๐๐ ตัวเอง ๘ ปียังทนมาได้ !!");
        setConfirm("ด่าต่อเลย");
        setShowModal(true);
      }
      else if (counter.current == 3) {
        console.log("current is 3")
        setTitle("ความรักชาติกับลุงตู่ยังอยู่ในใจเจ้าใช่มั้ยละ เสียใจด้วยนะ");
        setDescription("ความพยายามของเจ้ายังไม่พอ ความรักลุงตู่กลืนกินเจ้าแล้ว");
        setConfirm("พลังของเจ้ายังไม่พอ");
        setShowModal(true);
        counter.current++;
      }
      setStatus(true)
      console.log("showModal out while", showModal)
    }
  }
  async function handleClose() {
    if (status) {
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
      else if (counter.current == 4) {
        document.body.style.cursor = 'none';
        document.querySelector('textarea').setAttribute('disabled', '')
        document.querySelector('textarea').style.cursor = 'none';
        navigate('/end')
      }

      if (counter.current < 4) {
        transformText(data)
      }
      
      counter.current++;
    }
    setStatus(false)
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
        <label>ขั้นต่ำ ๑๐๐ คำนะกิ้วๆ</label>
        <br />
        <label className="label-2">เหลืออีก {100 - message.length} นะจร๊ะ</label>
        <br />
        <button className='button-4' onClick={() => {
           navigate("/end");
        }}>tuuuuu </button>
        <button className='button-2'>ล้างใหม่หมด</button>
        <button className='button-1' onClick={(e) => {
          e.preventDefault()
          setTitle("โอ๊ะโอ ยังไม่ถึง ๑๐๐ คำนะกิ้วๆ");
          setDescription("พยายามเข้านะจร๊ะ ด่าโลดเลยจะถึง ๑๐๐ คำนะกิ้วๆ");
          setConfirm("ไปด่าต่อนะจร๊");
          setShowModal(true);
        }}>ด่าแม่งเลย</button>
      </form>
      {showModal && <TransitionsModal title={title} description={description} confirm={confirm} open={showModal} setOpen={setShowModal} handleClose={handleClose} />}
      <img src={MyImage}
        id="cursors"
        alt="cursor"
        width={12}
        height={15}
        style={{ position: "absolute", top: "105%", left: "80%" }}
      />
    </>
  );
};

export default TypingPage;
