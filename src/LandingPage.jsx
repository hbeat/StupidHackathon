import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <style>{'body { background-image:url("https://mpics.mgronline.com/pics/Images/563000005307201.JPEG");}' }</style>
      <Link to="/typing">
        <button type="button" className="landing-page-button">คลิกเพื่อด่าลุง</button>
      </Link>
    </>
  )
}

export default LandingPage;