import React from 'react';

function ActiveWorkoutView(props) {
    return(
        <div id="activeWorkout">
            <div>
            <label>WorkoutInterval:</label>
            <span >
                {props.timeLeft}
            </span>
            
            </div>
            <div>
            <label>Resting Interval:</label>
            <span >
                {props.restingTimeLeft}
            </span>
            </div>
            <button id="endButton" onClick={() => props.endWorkout()}>
                End workout
            </button>
        
        </div>
    );
}

export default ActiveWorkoutView;