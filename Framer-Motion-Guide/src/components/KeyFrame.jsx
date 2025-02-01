import React from 'react'
import {motion} from 'motion/react' 
function KeyFrame() {
  return (
    <motion.img
    animate={{
      x:[0,800,800,600,600,0,0],
      y:[0,0,100,100,50,0,0,0]
    }}
    transition={{
      duration:4,
      repeat:Infinity,
      ease:'anticipate',
      repeatType:'reverse'
    }}
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFIEdpO2j1EEIZSVsdX7rm9pugJjddvh3Iw&s'
    className='image'
    />
  )
}

export default KeyFrame
