import React from 'react';
import "../Style/Mymoves.css"
import { FaArrowRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { FaRegCalendar } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
function Mymoves() {
  return (
    <div className='home'>
      <div className='maincontainer'>
        <h6 style={{ fontWeight: 600, fontSize: "16px" }}>MY MOVES</h6>
        <div className='container_div'>
          <div className='sub_container'>
            <span className='bold'>From</span>
            <span className='opacity' >Ejipura,Bangaluru,Karnataka</span>
          </div>
          <div className='sub_containercircle'>
            <FaArrowRight />
          </div >
          <div className='sub_container'>
            <span className='bold' >To</span>
            <span className='opacity'>HSR Layout,Bangaluru,Karnataka</span>
          </div>
          <div className='sub_container'>
            <span className='bold' >Request#</span>
            <span id='color' style={{ color: "#ef5238", fontWeight: 600 }}>E21418</span>
          </div>
        </div>
        <div className='container_div'>
          <div className='sub_container2'>
            <span className='colors'><MdHome /></span>
            <span>1BHK</span>
          </div>
          <div className='sub_container2'>
            <span className='colors'><FaBoxes /></span>
            <span>3</span>
          </div>
          <div className='sub_container2'>
            <span className='colors'><GiPathDistance /></span>
            <span>4.8km</span>
          </div>
          <div className='sub_container2'>
            <span className='colors'><FaRegCalendar /></span>
            <span className='sub_container2'>
              <span>Sep 26,2020 at 6:00 pm</span>
              <FaPencilAlt className='colors' />
            </span>
          </div>
          <div className='sub_container2'>
            <input className='colors' type='checkbox' id='checkbox'></input>
            <label for="checkbox">is flexible</label>
          </div>
          <div className='sub_container22'>
            <button className='button1'> View More details</button>
            <button className='button2'> Quotes Awaiting</button>
          </div>

        </div>
        <div className='container_divlast'>
          <BsFillExclamationTriangleFill />
          <p className='opacity'><b>Disclaimer:</b>please update your move date before two days of shifting</p>
        </div>
      </div>

    </div>
  );
}

export default Mymoves;
