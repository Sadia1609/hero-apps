import React from 'react';

import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const AppsCard = ({app}) => {
    const { image, title, downloads, ratingAvg, id} = app
    return (
      <Link to={`/app/${id}`} className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
  <figure className='h-48 overflow-hidden'>
    <img className='h-[200px] w-full object-cover'
      src={image}
      alt="" />
  </figure>
  <div className="card-body flex ">
    <h2 className="card-title text-[#001931]">{title}</h2>
   <div className='flex justify-between pt-5'>
    <div className='bg-[#f1f5e8]  h-[30px] w-[60px] flex items-center justify-center gap-3 rounded text-[#00d390]'> <FiDownload />{downloads}M</div>
   <div className='bg-[#fff0e1] h-[30px] w-[60px] flex items-center justify-center gap-3 rounded text-[#ff8811]'> <FaStar />{ratingAvg}</div>
   </div>
 

   
  </div>

  
</Link>

    );
};

export default AppsCard;