import React from 'react';

function ActiveWorkoutView(props) {
    
    return(
        <div>
            <label>Rounds left:{props.roundsLeft}</label>
            <div id="activeWorkout">
                <div>
                {props.timeLeft > 5
                    ? <span id="normalSecondsSpan">{props.timeLeft}</span>
                    : <span id="lastSecondsSpan">{props.timeLeft}</span>
                }               
                </div>
                <div>
                {props.restingTimeLeft > 5
                    ? <span id="normalSecondsSpan">{props.restingTimeLeft}</span>
                    : <span id="lastSecondsSpan">{props.restingTimeLeft}</span>
                } 
                </div>
            </div>
            <button id="endButton" onClick={() => props.endWorkout()}>
                    End workout
            </button>
        </div>
    );
}

export default ActiveWorkoutView;