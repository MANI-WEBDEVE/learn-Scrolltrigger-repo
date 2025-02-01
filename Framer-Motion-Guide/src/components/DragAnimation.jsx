import React from 'react'
import {motion} from 'motion/react'
import "./styles/Basic-Animation.css"
function DragAnimation() {
  return (
    <div style={{
        margin: 'auto',
        marginTop: '100px',
        width: '50%',
        height: "50vh",
        display:"flex",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        borderRadius: 10
    }}> 
    <motion.div 
    className='box'
    drag
    dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50
    }}
    whileDrag={{
        scale:0.8
    }}
    dragDirectionLock="true"
    >
      
    </motion.div>
    </div>
  )
}

export default DragAnimation
