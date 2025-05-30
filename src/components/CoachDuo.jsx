import DuoOne from "../assets/duoone.png"
import DuoTwo from "../assets/duotwo.png"

function CoachDuo(){
    return(
         <div className="flex justify-center gap-5 mb-20">
          <img src={DuoOne} alt="" />
          <img src={DuoTwo} alt="" />
        </div>
    )
}

export default CoachDuo