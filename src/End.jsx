import React from 'react'
import TransitionsModal from "./TransitionsModal";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";



const End = () => {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [confirm, setConfirm] = useState("");
    const navigate = useNavigate();

  
    return (
    <>
      <style>{'body { background-image:url("https://media.discordapp.net/attachments/992626118957998091/992989048090140712/E0B89BE0B8A3E0B8B0E0B8A2E0B8B8E0B.png?width=995&height=663");  width: 100%; height: 100%; background-position: center; background-size: cover;' }</style>
      <button className='button-1'  
          style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
          }}    
          onClick={() => {
          setTitle("อ่ะอ่าว ความรักลุงของคุณนี่มันรุนแรงจริงๆ");
          setDescription("ถ้าอย่างงั้นเราจะพาคุณไปในที่ๆเหมาะกับคุณเอง");
          setConfirm("ไปด่าต่อนะจร๊");
          setShowModal(true);
          window.location.replace("https://www.facebook.com/groups/427815888197211");

        }}>ด่าต่อเลย อย่าให้ความรักชาติกลืนกินคุณ</button>
  
      
      {showModal && <TransitionsModal title={title} description={description} confirm={confirm} open={showModal} setOpen={setShowModal} />}
    </>
  )
}

export default End;