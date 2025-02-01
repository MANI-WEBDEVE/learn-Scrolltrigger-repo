import React from 'react'
import "./styles/Basic-Animation.css"
import {motion} from 'motion/react'
function HoverTapAnimation() {
  return (
    <motion.div
    className='box'
    initial={{
        scale:0.6
    }}
    whileTap={{
        scale:0.3,
        borderRadius:'0%'
    }}
    
    whileHover={{
        scale:1.1,
    }}
    >
        
    </motion.div>
  )
}

export default HoverTapAnimation
