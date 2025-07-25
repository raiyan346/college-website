import './Programs.css'
import program1 from '../../assets/ug.png'
import program2 from '../../assets/pg.png'
import program3 from '../../assets/phd.png'
import ug from '../../assets/icon1.png'
import master from '../../assets/icon2.jpeg'
import phd from '../../assets/icon3.jpeg'

function Programs() {
  return (

    <div className="programs">
        <div className="program">
            <img src={program1} alt="" />
        <div className="caption">
            <img src={ug} alt="" />
            <p>Graduation Degree</p>
        </div>
        </div>

    <div className="program">
         <img src={program2} alt="" />
    <div className="caption">
         <img src={master} alt="" />
         <p>Master Degree</p>
    </div>
    </div>

    <div className="program">
        <img src={program3} alt="" />
    <div className="caption">
        <img src={phd} alt="" />
        <p>PhD Degree</p>
    </div>
    </div>
</div>
  )
}

export default Programs