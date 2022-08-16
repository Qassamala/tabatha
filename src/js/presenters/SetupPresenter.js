import React from "react";
import SetupWorkoutView from "../views/SetupWorkoutView";



function SetupPresenter(props) {
    // const [started, setStarted] = React.useState(props.model.started);
    // const [workOutInterval, setWorkoutInterval] = React.useState(props.model.workOutInterval);


    return(
        <div>
            <SetupWorkoutView
                setWorkoutInterval = {e => props.model.setWorkoutInterval(e)}
                setRestingInterval = {e => props.model.setRestingInterval(e)}
                startWorkout = {e => props.model.setStarted(true)}
             />
        </div>
        
    );   
}

export default SetupPresenter;