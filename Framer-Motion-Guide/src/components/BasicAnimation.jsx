import React from 'react'
import {motion} from 'motion/react'
import "./styles/Basic-Animation.css"
function BasicAnimation() {
  return (
    <div>
        <motion.div
        animate={{
            x:1000,
            y:200
        }}
        transition={{
            duration:2,
            delay:1,
            repeat:Infinity,
            repeatType:"reverse",
            repeatDelay:1
        }}
        className='box'>

        </motion.div>
    </div>
  )
}

export default BasicAnimation
