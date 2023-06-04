import { motion } from "framer-motion"
import { Canvas, events } from "@react-three/fiber"
import cover from "../assets/img/background.png"
import Blob from "../components/Blob"
import cloud_1 from "../assets/img/clouds/cloud1.png"
import cloud_2 from "../assets/img/clouds/cloud2.png"
import cloud_3 from "../assets/img/clouds/cloud3.png"
import cloud_4 from "../assets/img/clouds/cloud4.png"
import cloud_5 from "../assets/img/clouds/cloud5.png"
import background_character from "../assets/img/background_char.png"
import { Link } from "react-router-dom"
export default function Home() {

  const parallax_el = document.querySelectorAll('.parallax');
  let xValue = 0 , yValue = 0;
  window.addEventListener("mouseover",(e)=>{
    xValue = e.clientX - window.innerWidth/2;
    yValue = e.clientY - window.innerHeight/2;
    parallax_el.forEach((el)=>{
      let speedx = el.dataset.speedx
      let speedy = el.dataset.speedy
      el.style.transform = `translate(calc(-50% + ${xValue * speedx}px),calc(-50% + ${yValue * speedy}px))`

    })
  })
  return (
    <motion.div className="container_I"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    data-speedx="0.17"
    >

    <div className="cover">
    <Canvas className="inside parallax" data-speedx="0.25" data-speedy="0.28" camera={{ position: [ 0.0, 0.0, 8.0 ] }}>
        <Blob />
      </Canvas>
    <img className="main-cover" data-speedx="0.1" data-speedy="0.15" src={cover} />
    <img className="main-char parallax" data-speedx="0.2" data-speedy="0.18" src={background_character} />
    </div>

<Link to="login">
    <button className="main-btn" data-speedx="o.15">Register Now</button></Link>
   <div className="banner" data-speedx="0.20">
    <div className="clouds" data-speedx="0.3">
    <img src={cloud_1} style={{ '--i': 1 }}></img>
    <img src={cloud_2} style={{ '--i': 2 }}></img>
    <img src={cloud_3} style={{ '--i': 3 }}></img>
    <img src={cloud_4} style={{ '--i': 4 }}></img>
    <img src={cloud_5} style={{ '--i': 5 }}></img>
    </div>
   </div>
    </motion.div>
  )
}
