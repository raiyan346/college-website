import './Testimonials.css'
import leftarrow from '../../assets/left-arrow.png'
import rightarrow from '../../assets/right-arrow.png'
import user1 from '../../assets/user1.jpeg'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'
import { useRef } from 'react'

const Testimonials = ()=>{

const slider = useRef();
let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className="testimonials">
        <img src={rightarrow} alt="" className="next-btn" onClick={slideForward}/>
        <img src={leftarrow} alt="" className="back-btn" onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt=""/>
                            <div className="user-details">
                                <h3>Riyas Ahmed</h3>
                                <span>md Bandhar</span>
                            </div>
                        </div>
                        <p>My experience at Crescent College has been very positive. The faculty members are supportive and knowledgeable, always ready to help students. The campus environment is clean and friendly, and the infrastructure is improving every year. I especially appreciate the opportunities provided through workshops, internships, and hackathons. Thank you for helping me grow academically and personally.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt=""/>
                            <div className="user-details">
                                <h3>Strella</h3>
                                <span>Chennai</span>
                            </div>
                        </div>
                        <p>My time at Crescent College has been truly rewarding. The professors are approachable and well-versed in their subjects, always willing to guide us when needed. The campus has a welcoming vibe, and the facilities keep getting better each year. I’m especially grateful for the learning opportunities through seminars, hands-on projects, and coding competitions. Crescent has helped shape both my academic journey and personal development.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt=""/>
                            <div className="user-details">
                                <h3>Haris</h3>
                                <span>Thirupanthuruthi</span>
                            </div>
                        </div>
                        <p>Studying at Crescent College has been a great experience. The teaching staff is encouraging and always willing to help us understand concepts better. The college environment feels safe and positive, and the infrastructure continues to improve. I value the various platforms offered for skill-building, such as technical events, career guidance programs, and student clubs. Crescent has helped me grow both intellectually and personally.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt=""/>
                            <div className="user-details">
                                <h3>Andriya</h3>
                                <span>Hydrabad</span>
                            </div>
                        </div>
                        <p>My journey at Crescent College has been enriching and inspiring. The faculty members are approachable, skilled, and always ready to support students in academics and beyond. The campus atmosphere is vibrant, with good facilities that keep evolving. I’m thankful for the real-world exposure provided through events like hackathons, guest lectures, and industrial visits. It’s been a key part of my personal and academic growth.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials