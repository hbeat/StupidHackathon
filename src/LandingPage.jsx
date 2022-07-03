import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <style>{'body { background-image:url("https://media.discordapp.net/attachments/992626118957998091/993004303277109308/103879425_gettyimages-983412224.jpg");  width: 100%; height: 100%; background-position: center; background-size: cover;' }</style>
      <Link to="/typing">
        <button type="button" className="landing-page-button">คลิกเพื่อด่าลุง</button>
      </Link>
    </>
  )
}

export default LandingPage;