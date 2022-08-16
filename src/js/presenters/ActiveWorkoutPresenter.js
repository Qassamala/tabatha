import React from "react";
import ActiveWorkoutView from "../views/ActiveWorkoutView";



function ActiveWorkoutPresenter(props) {
    const [timeLeft, setTimeLeft] = React.useState(props.model.workOutInterval);
    const [restingTimeLeft, setRestingTimeLeft] = React.useState(props.model.restingInterval);
    const [resting, setResting] = React.useState(false);
    

    React.useEffect(
        () => {
          let timer1;
          if (timeLeft > 0 && resting === false) {
            timer1 = setTimeout(() => setTimeLeft(timeLeft-1), 1000);
          } else if(restingTimeLeft > 0 && resting === true) {
                setResting(true)
                timer1 = setTimeout(() => setRestingTimeLeft(restingTimeLeft-1), 1000);
            //   setRestingTimeLeft(props.model.restingInterval);
          } else {
            setTimeLeft(props.model.workOutInterval);
            setRestingTimeLeft(props.model.restingTimeLeft);
            setResting(false)

          }
    
          // this will clear Timeout
          // when component unmount like in willComponentUnmount
          // and show will not change to true
          return () => {
            clearTimeout(timer1);
          };
        },
        // useEffect will run only one time with empty []
        // if you pass a value to array,
        // like this - [data]
        // than clearTimeout will run every time
        // this value changes (useEffect re-run)
        [timeLeft, restingTimeLeft]
      );


    return(
        <div>
            <ActiveWorkoutView
                workOutInterval = {props.model.workOutInterval}
                restingInterval = {props.model.restingInterval}
                timeLeft = {timeLeft}
                restingTimeLeft = {restingTimeLeft}
                endWorkout = {e => props.model.setEndWorkOut()}
             />
        </div>
        
    );   
}

export default ActiveWorkoutPresenter;