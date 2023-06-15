import React from "react";
import SetupWorkoutView from "../views/SetupWorkoutView";



function SetupPresenter(props) {

    return(
        <div>
            <SetupWorkoutView
                setWorkoutInterval = {e => props.model.setWorkoutInterval(e)}
                setRestingInterval = {e => props.model.setRestingInterval(e)}
                setNumberOfRounds = {e => props.model.setNumberOfRounds(e)}
                startWorkout = {e => props.model.setStarted(true)}
             />
        </div>
        
    );   
}

export default SetupPresenter;