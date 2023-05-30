import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      MY SELF MR.ADITYA KUMAR, I AM FULL STACK WEB DEVELOPER AND APP DEVELOPER. I HAVE DONE GRADUATION FROM SRI GADADHAR ACHARYA JANTA COLLEGE.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our_Story_Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Storu</h1>
          <p>
            MY SELF MR.ADITYA KUMAR, I AM FULL STACK WEB DEVELOPER AND APP DEVELOPER. I HAVE DONE GRADUATION FROM SRI GADADHAR ACHARYA JANTA COLLEGE. MY DEGREE IS B.SC-IT AND HONOURS PAPER IS INFORMATION TECHNOLOGY.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam laborum similique eveniet facilis sit dolorum nobis quos nostrum aperiam recusandae quibusdam consequuntur officia consequatur distinctio, tempora blanditiis vel animi enim.
          </p>
          <p>
            MY SELF MR.ADITYA KUMAR, I AM FULL STACK WEB DEVELOPER AND APP DEVELOPER. I HAVE DONE GRADUATION FROM SRI GADADHAR ACHARYA JANTA COLLEGE.
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
          MY SELF MR.ADITYA KUMAR, I AM FULL STACK WEB DEVELOPER AND APP DEVELOPER. I HAVE DONE GRADUATION FROM SRI GADADHAR ACHARYA JANTA COLLEGE. MY DEGREE IS B.SC-IT AND HONOURS PAPER IS INFORMATION TECHNOLOGY.
          </p>
          <p>
            MY SELF MR.ADITYA KUMAR, I AM FULL STACK WEB DEVELOPER AND APP DEVELOPER. I HAVE DONE GRADUATION FROM SRI GADADHAR ACHARYA JANTA COLLEGE.
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our_Vision_Image" />
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our_Mission_Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
          MY SELF MR.ADITYA KUMAR, I AM FULL STACK WEB DEVELOPER AND APP DEVELOPER. I HAVE DONE GRADUATION FROM SRI GADADHAR ACHARYA JANTA COLLEGE. MY DEGREE IS B.SC-IT AND HONOURS PAPER IS INFORMATION TECHNOLOGY.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam laborum similique eveniet facilis sit dolorum nobis quos nostrum aperiam recusandae quibusdam consequuntur officia consequatur distinctio, tempora blanditiis vel animi enim.
          </p>
          <p>
            MY SELF MR.ADITYA KUMAR, I AM FULL STACK WEB DEVELOPER AND APP DEVELOPER. I HAVE DONE GRADUATION FROM SRI GADADHAR ACHARYA JANTA COLLEGE.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About