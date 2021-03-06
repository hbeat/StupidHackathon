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
  const [x, setX] = useState()
  const [y, setY] = useState()
  const [fx, setFx] = useState(0)
  const [fy, setFy] = useState(0)
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);


  useEffect(
    () => {
      const update = (e) => {
        setX(e.x)
        setY(e.y)
      }
      window.addEventListener('mousemove', update)
      window.addEventListener('touchmove', update)
      return () => {
        window.removeEventListener('mousemove', update)
        window.removeEventListener('touchmove', update)
      }
    },
    [setX, setY]
  )



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
    if (message.length > counter.current * 30) {
      const elem = document.querySelector('#textarea')
      elem.setAttribute('disabled', '')
      if (counter.current == 1) {
        setTitle("????????????! ????????????????????????????????????????????????????????????????????????????????????????????????");
        setDescription("?????????????????????????????? ???????????????????????????????????? ????????? ?????????!!!");
        setConfirm("???????????????????????????");
        setShowModal(true);
        console.log("false after closing", showModal)
      }
      else if (counter.current == 2) {
        console.log("current is 2")
        setTitle("???????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????");
        setDescription("???????????????????????? ?????????????????? ?????????????????? ????????? ?????????????????? ??? ???????????????????????????????????? !!");
        setConfirm("???????????????????????????");
        setShowModal(true);
      }
      else if (counter.current == 3) {
        console.log("current is 3")
        setTitle("???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????");
        setDescription("??????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????");
        setConfirm("?????????????????????????????????????????????????????????");
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
        document.querySelectorAll('button').forEach(button => {
          button.style.cursor = 'none';
        })
        document.querySelector('.button-4').removeAttribute('hidden');
        const cs = document.querySelector('#cursors')
        cs.style.zIndex = '50'
        const bt = document.querySelector('.button-4')
        // const butPos = bt.getBoundingClientRect()
        cs.removeAttribute('hidden')
        // console.log('butpos left ', bt.offsetTop);
        // setFx(bt.offsetLeft + 45.6)
        // console.log(fx);
        // setFy(bt.offsetTop + 16.3)
        // console.log(fy);
        // setFx(x)
        // setFy(y)
        cs.style.top = `${y}px`
        cs.style.left = `${x}px`
        for (let i = 0; i < 200; i++) {
          console.log('top = ', cs.style.top, y, bt.offsetTop);
            cs.style.top = `${y - ((y - bt.offsetTop - 16.3) * (i + 1)  / 200)}px`
            cs.style.left = `${x - ((x - bt.offsetLeft - 45.6) * (i + 1)  / 200)}px`
            forceUpdate()
          await sleep(15)
        }
        clearText()
        // window.location.href = "http://www.w3schools.com";
        
        // cs.removeAttribute('hidden')
       await sleep(1000)
       document.body.style.cursor = 'auto';
        navigate('/end')

      }

      if (counter.current < 4) {
        transformText(data)
      }
      
      counter.current++;
    }
    setStatus(false)
  }

  function clearText(){
    setMessage("")
    counter.current = 1
  }

  return (
    <>
      <h1>??????????????????</h1>
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
        <label>????????????????????? ????????? ?????????????????????????????????????????????</label>
        <br />
        <label className="label-2">???????????????????????? {100 - message.length} ??????????????????</label>
        <br />
        <button className='button-4' hidden={true} onClick={(e) => {
           e.preventDefault();
           navigate("/end");
        }}>?????????????????????????????????</button>
        <button className='button-2' onClick={(e) => {
          e.preventDefault();
          clearText();
        } }>?????????????????????????????????</button>
        <button className='button-1' onClick={(e) => {
          e.preventDefault()
          setTitle("?????????????????? ??????????????????????????? ????????? ???????????????????????????");
          setDescription("???????????????????????????????????????????????? ?????????????????????????????????????????? ????????? ???????????????????????????");
          setConfirm("???????????????????????????????????????");
          setShowModal(true);
        }}>??????????????????????????????</button>
      </form>
      {showModal && <TransitionsModal title={title} description={description} confirm={confirm} open={showModal} setOpen={setShowModal} handleClose={handleClose} />}
      <img src={MyImage}
        id="cursors"
        alt="cursor"
        width={15}
        height={18}
        style={{position: 'absolute'}}
        hidden={true}
      />
    </>
  );
};

export default TypingPage;
