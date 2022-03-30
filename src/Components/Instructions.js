import React from "react";
import Styles from "./Instructions.module.css";

const Instructions  = () => {
    return(
        <div className={Styles.instructionsMain}>
            <div className={Styles.instructionsTop}><h1>Instructions</h1></div>
            <div className={Styles.instructionsBtm}>
                <ul>
                    <li>Write a 2 digit positive number for the room size.</li>
                    <li>Current Position takes in 3 values without any spaces in between with the first 2 values being +ve single digit numbers followed by a letter that represents direction e.g. N,E,W,S</li>
                    <li>Directions can only take in 2 values at a time without any spaces in between with each being a combination of these three letters i.e L,R,F</li>
                    <li>Directions always needs a minimum of 2 values</li>
                    <li>"L" indicates a left turn, "R" indicates a right turn and "F" indicates moving forward in that direction.</li>
                    <li>If the room size is specified and if the entered values exceeds beyond the mentioned size or goes -ve then the user will receive an alert.</li>
                </ul>
            </div>
        </div>
    )
}

export default Instructions;