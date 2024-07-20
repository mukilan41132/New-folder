import React from 'react';
import "../Style/Mymoves.css"
import { FaArrowRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { FaRegCalendar } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

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
            <button className='button1' style={{ fontSize: "15px" }}> View More details</button>
            <button className='button2' style={{ fontSize: "15px" }}> Quotes Awaiting</button>
          </div>

        </div>
        <div className='container_divlast'>
          <BsFillExclamationTriangleFill className='colors' />
          <p className='opacity'><b>Disclaimer: </b>please update your move date before two days of shifting</p>
        </div>

        {/* ////////// */}
        <div className='container_divlast'>
          <span className='bold'>Inventory Details</span>
          <div className='sub_container22'>
            <button className='button3' style={{ fontSize: "15px" }}> Edit Inventory</button>
          </div>
        </div>
        <div >
          <Accordion sx={{ width: "100%", backgroundColor: "#e8e8e8" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ color: "#ef5238" }}
            >
              Living Room &nbsp;&nbsp;&nbsp;<span className='ovel'>15</span>
            </AccordionSummary>
            <AccordionDetails>
              <div className='acdive' >
                <div className='container_div'>
                  <div className='sub_container3'>
                    <span>Furnitures</span>
                  </div>
                  <div className='sub_container3'>
                    <span>Electricals</span>
                  </div>
                  <div className='sub_container3'>
                    <span>Fragile</span>
                  </div>
                </div>

                <div className='container_div'>
                  <div className='sub_container3'>
                    <span className='sub_container223'>
                      <span>1 Seater sofa</span>
                      <span>2</span>
                    </span>
                    <span>Wooden</span>
                  </div>
                  <div className='sub_container3'>
                    <span className='sub_container223'>
                      <span>1 Seater sofa</span>
                      <span>2</span>
                    </span>
                    <span>Wooden</span>
                  </div>
                  <div className='sub_container3'>
                    <span className='sub_container223'>
                      <span>1 Seater sofa</span>
                      <span>2</span>
                    </span>
                    <span>Wooden</span>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ width: "100%", backgroundColor: "#e8e8e8" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ color: "#ef5238" }}
            >
              Bed Room &nbsp;&nbsp;&nbsp;<span className='ovel'>15</span>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ width: "100%", backgroundColor: "#e8e8e8" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ color: "#ef5238" }}
            >
              Kitchen &nbsp;&nbsp;&nbsp;<span className='ovel'>15</span>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ width: "100%", backgroundColor: "#e8e8e8" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ color: "#ef5238" }}
            >
              Bathroom &nbsp;&nbsp;&nbsp;<span className='ovel'>15</span>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        </div>
        <div className='container_divlast'>
          <span className='bold'>House Details</span>
          <div className='sub_container22'>
            <button className='button3' style={{ fontSize: "15px" }}> Edit House details</button>
          </div>

        </div>
        <div className='maincontainer'>
          <div>Existing House Details</div>
          <div className='container_div'>
            <div className='sub_container'>
              <span className='bold'>Flat No.</span>
              <span>0</span>
            </div>
            <div className='sub_container'>
              <span className='bold'>Elevator Available</span>
              <span>No</span>
            </div>
            <div className='sub_container'>
              <span className='bold'>Packing Required</span>
              <span>Yes</span>
            </div>
            <div className='sub_container'>
              <span className='bold'>Distance from truck to door</span>
              <span>1 meter</span>
            </div>
          </div>
          <div className='sub_container'>
            <span className='bold'> Additional Information</span>
            <span>No Additional Information</span>
          </div>
        </div>
        <div className='maincontainer'>
          <div>Existing House Details</div>
          <div className='container_div'>
            <div className='sub_container'>
              <span className='bold'>Flat No.</span>
              <span>0</span>
            </div>
            <div className='sub_container'>
              <span className='bold'>Elevator Available</span>
              <span>No</span>
            </div>
            <div className='sub_container'>
              <span className='bold'>Packing Required</span>
              <span>Yes</span>
            </div>
            <div className='sub_container'>
              <span className='bold'>Distance from truck to door</span>
              <span>1 meter</span>
            </div>
          </div>
          <div className='sub_container'>
            <span className='bold'> Additional Information</span>
            <span>No Additional Information</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Mymoves;
