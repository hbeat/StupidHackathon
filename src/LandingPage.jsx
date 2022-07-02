import React from 'react'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <>
      <Link to="/typing">
        <button type="button" class="landing-page-button">คลิ๊กเพื่อด่าลุง</button>
      </Link>
    </>
  )
}

export default LandingPage