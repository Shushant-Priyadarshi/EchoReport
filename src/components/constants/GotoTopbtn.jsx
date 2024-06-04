import { FaArrowCircleUp } from "react-icons/fa";


const GotoTopbtn = () => {
    const GotoTop=()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"});
    }
  return (
    <>
        <FaArrowCircleUp onClick={GotoTop}/>
    </>
  )
}

export default GotoTopbtn