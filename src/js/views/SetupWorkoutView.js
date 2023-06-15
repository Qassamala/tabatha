import React from 'react';

function SetupWorkoutView(props) {
    return(
        <div id="setup">
            <label htmlFor="uname">WorkoutInterval:</label><br></br>
            <input type="number" min="10" step="1" placeholder="Enter time for workout interval" value={props.workoutInterval} onChange={(e) => props.setWorkoutInterval(e.target.value)}/><br></br>
            <label htmlFor="uname">RestingInterval:</label><br></br>
            <input type="number" min="10" step="1" placeholder="Enter time for resting interval"  value={props.restingInterval} onChange={(e) => props.setRestingInterval(e.target.value)}/><br></br>
            <label htmlFor="uname">Number of rounds:</label><br></br>
            <input type="number" min="0" step="1" placeholder="Enter number of rounds"  value={props.numberOfRounds} onChange={(e) => props.setNumberOfRounds(e.target.value)}/><br></br>
            <button id="startButton" onClick={() => props.startWorkout()}>
                Start
            </button>
            
        </div>
    );
}

export default SetupWorkoutView;