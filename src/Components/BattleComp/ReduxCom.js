import React from "react";
import { runWater } from "../../Redux/InvaderActions";
import { useDispatch } from "react-redux";
import Battle from "./Battle";

const ReduxCom = () => {
  const dispatch = useDispatch();
  const DropsRunnning = () => dispatch(runWater());
  // when button pressed
  const letWaterRun = (e) => {
    e.preventDefault();
    DropsRunnning();
  };
  return (
    <div className="reduxImg">
      <div className="row reduxRows">
        <div className="column heightR">
          <div className="battle-js">
            <Battle />
          </div>
        </div>
      </div>
      <div className="row btn-container reduxRows">
        <button id="left-arr" className="btn-arrows btn-mobile">
          &larr;
        </button>
        <button id="right-arr" className="btn-arrows btn-mobile">
          &rarr;
        </button>
        <button className="btn-redux" id="btn-redux" onClick={letWaterRun}>
          Shoot!
        </button>
      </div>
    </div>
  );
};

export default ReduxCom;
