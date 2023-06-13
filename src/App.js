import './css/App.css';
import React from 'react';
import SetupPresenter from './js/presenters/SetupPresenter';
import ActiveWorkoutPresenter from './js/presenters/ActiveWorkoutPresenter';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App(props) {
  const [started, setStarted] = React.useState(props.model.started);

  React.useEffect( 
    function () {
        function obs(){
          // console.log("was here")
          // console.log(props.model.started)
          // console.log(started)

            setStarted(props.model.started);
            // console.log(started)
        }
        props.model.addObserver(obs);
        return function() { 
            props.model.removeObserver(obs);
        }
    }, [props.model,started]);
    
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route 
              path="workout" 
              element={props.model.started ? <ActiveWorkoutPresenter model={props.model} /> : <Navigate to="/" />} 
            />
            <Route 
              path="/" 
              element={props.model.started ? <Navigate to="/workout"/> : <SetupPresenter model={props.model}/> }
              />
            <Route
              path="*"
              element={ <Navigate to="/"/> }
            />
          </Routes>
        </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
