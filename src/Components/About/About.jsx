import './About.css'
import about_img from '../../assets/group.jpeg'
import play_icon from '../../assets/play.png'

function About() {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className="about-img"/> 
            <img src={play_icon} alt="" className="play-icon"/>       </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>B.S.Abdur Rahman Crescent Institute of Science And Technology</h2>
            <p>Since 1984, B.S. Abdur Rahman Crescent Institute of Science and Technology is a renowned Quality Leadership Institution located at the greenest spot of Chennai near Tambaram. Through our long history of 38 years of excellence, the Institution has offered access to a wide range of academic opportunities. With 54 programmes, grouped under 12 different Schools, 31 Undergraduate programmes, 23 Postgraduate programmes, and Ph.D. (in all the departments), this institution is a rising stalwart in higher education with promising Quality, Security and Placement. We welcome students from all countries and our educational programmes are designed to equip the learners with virtual knowledge that helps them to achieve what they want to be and go where they want to go in the ladder of success.</p>
            <p>This institution is an intellectual destination that challenges conventional thinking and stimulates passion to redefine learning. The distinctive teaching at this institution makes the students and scholars to compete with themselves and each other. Apart from providing top-notch education, our green campus and well-planned student life are solely dedicated to making students utilize the ambiance to the fullest. Through our wide array of educational programmes and unique clubs to foster student development activities, we provide opportunities and experiences that build community, help you grow personally and professionally, and create a place that you can call home now and throughout your life.</p>
        </div>
    </div>
  )
}

export default About
