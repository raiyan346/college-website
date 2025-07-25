import './Campus.css';
import bls from '../../assets/b-ls.jpeg';
import csb from '../../assets/cs-b.jpeg';
import audi from '../../assets/auditorium.jpeg';
import canteen from '../../assets/canteen.jpeg';
import arrow from '../../assets/dark-arrow.png';

function Campus() {
  return (
    <div className="campus">
      <div className="scroll-wrapper">
        <div className="gallery scroll-track">
          <img src={bls} alt="Building" />
          <img src={csb} alt="CS Block" />
          <img src={audi} alt="Auditorium" />
          <img src={canteen} alt="Canteen" />
          {/* Repeating for smooth loop */}
          <img src={bls} alt="Building" />
          <img src={csb} alt="CS Block" />
          <img src={audi} alt="Auditorium" />
          <img src={canteen} alt="Canteen" />
        </div>
      </div>

      <button className="btn dark-btn">
        See more here
        <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
}

export default Campus;
