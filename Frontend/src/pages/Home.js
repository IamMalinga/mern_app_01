import { motion } from "framer-motion"
export default function Home() {
  return (
    <motion.div className="home"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <motion.div className="title" initial={{width:0}} animate={{width:"80%"}} exit={{x:window.innerWidth , transition:{duration: 0.5 }}}>
        <span >Pera<br/> New Year Fiesta</span>
    </motion.div>
    <div className="cover"></div>
    <video src={require("../assets/video/background.mp4")} autoPlay loop muted></video>
    </motion.div>
  )
}
