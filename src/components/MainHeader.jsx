import { Link } from "react-router-dom"
import Image from '../images/main_header.png'


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            MY SELF MR.ADITYA KUMAR, I AM FULL STACK WEB DEVELOPER AND APP DEVELOPER. I HAVE DONE GRADUATION FROM SRI GADADHAR ACHARYA JANTA COLLEGE. MY DEGREE IS B.SC-IT AND HONOURS PAPER IS INFORMATION TECHNOLOGY.
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main HeaderImage" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader