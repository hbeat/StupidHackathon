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
      <style>{'body { background-image:url("https://www.prachachat.net/wp-content/uploads/2022/02/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%8C-%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%88000.jpg");  width: 100%; height: 100%; background-position: center; background-size: cover;' }</style>
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