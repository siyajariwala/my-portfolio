import React, { useState } from 'react';
import PropTypes from 'prop-types';
const SkillCard =  ({
    imgSrc,
    label,
    desc,
    classes
})=>{
    const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped(!flipped);
return (
  <div className="w-full h-40 perspective" onClick={handleClick}>
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front side */}
        <div className="absolute inset-0 bg-gray-950 rounded-xl border border-black/70 flex flex-col items-center justify-center backface-hidden">
          <img src={imgSrc} alt={label} className="w-10 h-10 mb-2" />
          <h4 className="font-semibold text-sm">{label}</h4>
        </div>

        {/* Back side */}
        <div className="absolute inset-0 bg-[#fefce8] rounded-xl border border-black/70 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
          <p className="text-sm text-center text-rose-700 font-medium max-w-[12ch]">{desc}</p>
        </div>
      </div>
    </div>

  )
}
 SkillCard.propTypes={
    imgSrc:PropTypes.string.isRequired,
   label:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    classes:PropTypes.string
 } 

export default SkillCard;
