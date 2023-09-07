import React from "react";
import ActiveWorkoutView from "../views/ActiveWorkoutView";

function ActiveWorkoutPresenter(props) {
    const [timeLeft, setTimeLeft] = React.useState(props.model.workOutInterval);
    const [restingTimeLeft, setRestingTimeLeft] = React.useState(props.model.restingInterval);
    const [roundsLeft, setRoundsLeft] = React.useState(props.model.numberOfRounds);
    const [isResting, setIsResting] = React.useState(false);  

    React.useEffect(
        () => {

          if(roundsLeft < 1){ 
            props.model.setEndWorkOut()
          }

          let activeTimer;
          let restTimer;

          // Decrement active time
          if (timeLeft > 0 && !isResting) {
            activeTimer = setTimeout(() => setTimeLeft(prevTime => prevTime-1), 1000);
          } else if(!isResting && roundsLeft > 0) {
            console.log("abdi")
            setIsResting(true);
            setRoundsLeft(prev => prev-1)
          }

          // Decrement resting time
          if (isResting && restingTimeLeft > 0 && roundsLeft > 0) {
            console.log("abdi2")
            restTimer = setTimeout(() => setRestingTimeLeft(prevTime => prevTime-1), 1000);
          } else if (isResting && roundsLeft > 0) {
            setIsResting(false)
            setTimeLeft(props.model.workOutInterval);
            
            console.log("roundsleft: ", roundsLeft)
            if(roundsLeft > 1){
              setRestingTimeLeft(props.model.restingInterval);
            }
          }


    
          // this will clear Timeout
          return () => {
            clearTimeout(activeTimer);
            clearTimeout(restTimer);
          };
        },
        [isResting, timeLeft, restingTimeLeft, roundsLeft, props.model, props.model.workOutInterval, props.model.restingInterval]
      );


    return(
        <div>
            <ActiveWorkoutView
                workOutInterval = {props.model.workOutInterval}
                restingInterval = {props.model.restingInterval}
                timeLeft = {timeLeft}
                restingTimeLeft = {restingTimeLeft}
                roundsLeft = {roundsLeft}
                endWorkout = {e => props.model.setEndWorkOut()}
             />
        </div>
        
    );   
}

export default ActiveWorkoutPresenter;