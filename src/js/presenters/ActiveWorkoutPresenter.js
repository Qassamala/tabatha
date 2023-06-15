import React from "react";
import ActiveWorkoutView from "../views/ActiveWorkoutView";

function ActiveWorkoutPresenter(props) {
    const [timeLeft, setTimeLeft] = React.useState(props.model.workOutInterval);
    const [restingTimeLeft, setRestingTimeLeft] = React.useState(props.model.restingInterval);
    const [roundsLeft, setRoundsLeft] = React.useState(props.model.numberOfRounds);   

    React.useEffect(
        () => {

          if(roundsLeft < 1){ 
            props.model.setEndWorkOut()
          }

          let timer;

          if (timeLeft > 0) {
            timer = setTimeout(() => setTimeLeft(prevTime => prevTime-1), 1000);
          } else if (timeLeft === 0) {

          } else if(restingTimeLeft > 0) {
                timer = setTimeout(() => setRestingTimeLeft(prevTime => prevTime-1), 1000);
          } else {
            setTimeLeft(props.model.workOutInterval);
            setRestingTimeLeft(props.model.restingInterval);
            setRoundsLeft(prev => prev-1)
          }
    
          // this will clear Timeout
          return () => {
            clearTimeout(timer);
          };
        },
        // useEffect will run only one time with empty []
        // if you pass a value to array,
        // like this - [data]
        // than clearTimeout will run every time
        // this value changes (useEffect re-run)
        [timeLeft, restingTimeLeft, roundsLeft, props.model, props.model.workOutInterval, props.model.restingInterval]
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