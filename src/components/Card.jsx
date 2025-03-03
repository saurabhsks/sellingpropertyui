// import React from 'react'
// import image1 from "../assets/image1.jpg";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBed, faBath, faHeart } from "@fortawesome/free-solid-svg-icons";

function Card({image, views, price, apartment, address, BHK, bathroom}) {
  return (
    <div className="container mt-6">
    <div className="flex justify-between !mb-2">
        <div className="font-bold font-sans text-[15px]">Views: {views}</div>
        <div className="bg-[#b1b1b1] uppercase text-[12px] font-semibold text-white px-[10px] py-[2px] float-left mr-[11px] relative">
        <span 
         className="absolute right-[-5px] top-0" 
         style={{
          content: '""',
          borderTop: "10px solid transparent",
          borderBottom: "14px solid transparent",
          borderLeft: "6px solid #b1b1b1",
          position: "absolute",
    }}
  />
        FOR SELL</div>
    </div>
    <div className="shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer pb-1">
        <div className="h-48 overflow-hidden">
        <img src={image} alt="Card Image" className="w-full h-full object-cover transition-transform duration-300 hover:scale-106" />
        </div>
        <div className="bg-white p-5 mb-[30px] relative">
        <div className="flex mb-1">
            <div className="bg-[#b1b1b1] uppercase text-[12px] font-semibold text-white px-[10px] py-[2px] mr-[11px] h-[22px]">
                APARTMENT
            </div>
            
            <span className="text-blue-600 font-18 font-semibold font-sans text-lg">₹ {price} Lacs</span>

        </div>
        <h3 className="text-[17px] mb-[10px] p-0 font-sans font-bold">{apartment}</h3>
        <p className="text-[14px] text-[#444] p-0 mb-[8px] font-normal"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 mr-2" />{address}</p>
        <div>
        <div className="flex h-[2rem]">
            <span className="m-0 p-[0_10px_0_0] list-none inline-block font-extrabold"><FontAwesomeIcon icon={faBed} className="text-gray-500 mr-1" />{BHK} BHK</span>
            <span className="m-0 p-[0_10px_0_0] list-none inline-block font-extrabold"><FontAwesomeIcon icon={faBath} className="text-gray-500 mr-1" />{bathroom}</span>
            <div className="ml-auto flex items-center">
           <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-gray-500 hover:text-white hover:bg-red-600 cursor-pointer">
            <FontAwesomeIcon icon={faHeart} />
           </div>
        </div>

        </div>
        </div>

        <div className="mt-3">
            <button className="float-left text-[13px] bg-[#39a901] text-white mt-[-5px] px-3 py-1 text-base leading-6 rounded">More Details</button>
            <button className="float-right text-[13px] bg-[#e30000] text-white mt-[-5px] inline-block cursor-pointer border border-transparent px-3 py-1 text-base leading-6 rounded">Contact Us</button>
        </div>
    </div>    
        
    </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  apartment: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  BHK: PropTypes.number.isRequired,
  bathroom: PropTypes.number.isRequired,
};

export default Card
// export default Card
