import React, { useState } from "react";
import Styles from "./MainForm.module.css";

const MainForm = () => {
    const [data, setData] = useState(
        {
            "roomSize" : "",
            "currentPos" : "",
            "directions" : "",
            "finalDestination" : ""
        }
    );

    const [display, setDisplay] = useState([]);

    const handleChange = (event) => {
        setData(    { ...data, [event.target.name] : event.target.value }   )
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const tempObj = {
            "roomSize" : data["roomSize"],
            "currentPos" : data["currentPos"],
            "directions" : data["directions"],
            "finalDestination" : ""
        }

        const maxA = Number(data["roomSize"][0]);
        const maxB = Number(data["roomSize"][1]);

        let tempDestination;
        let x;
        let y;
        let z;

        // if (data["currentPos"][1] === undefined) {
        //     data["currentPos"][1] = "00N";
        // }

        if (data["currentPos"][2] === "N") {
            // for (const letter of data["directions"]) {
            //     // console.log(letter);
            //     if (letter === "F") {
                    // x = data["currentPos"][0];
                    // y = Number(data["currentPos"][1]) + 1;
                    // y.toString();
            //         z = "N"

            //         tempDestination = `${x}${y}${z}`
            //     }
            // }

            for(const letter1 in data["directions"]) {
                for(const letter2 in data["directions"]) {
                    if (letter2 > letter1) {
                        // console.log(data["directions"][letter1]);
                        if (data["directions"][letter1] === "L" && data["directions"][letter2] === "F") {
                            z = "W"
                            x = Number(data["currentPos"][0]) - 1;
                            y = data["currentPos"][1];
                            x.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "R" && data["directions"][letter2] === "F") {
                            z = "E"
                            x = Number(data["currentPos"][0]) + 1;
                            y = data["currentPos"][1];
                            x.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "F" && data["directions"][letter2] === "L") {
                            z = "W"
                            x = data["currentPos"][0];
                            y = Number(data["currentPos"][1]) + 1;
                            y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "F" && data["directions"][letter2] === "R") {
                            z = "E"
                            x = data["currentPos"][0];
                            y = Number(data["currentPos"][1]) + 1;
                            y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "L" && data["directions"][letter2] === "L") {
                            z = "S"
                            x = data["currentPos"][0];
                            y = data["currentPos"][1];
                            // y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "R" && data["directions"][letter2] === "R") {
                            z = "S"
                            x = data["currentPos"][0];
                            y = data["currentPos"][1];
                            // y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "F" && data["directions"][letter2] === "F") {
                            z = "N"
                            x = data["currentPos"][0];
                            y = Number(data["currentPos"][1]) + 2;
                            y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "R" && data["directions"][letter2] === "L") {
                            z = "N"
                            x = data["currentPos"][0];
                            y = data["currentPos"][1];
                            // y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "L" && data["directions"][letter2] === "R") {
                            z = "N"
                            x = data["currentPos"][0];
                            y = data["currentPos"][1];
                            // y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                    }
                }
            }
        }

        if (data["currentPos"][2] === "E") {
            // for (const letter of data["directions"]) {
            //     if (letter === "F") {
                    // x = Number(data["currentPos"][0]) + 1;
                    // y = data["currentPos"][1];
                    // x.toString();
            //         z = "E"

            //         tempDestination = `${x}${y}${z}`
            //     }
            // }

            for(const letter1 in data["directions"]) {
                for(const letter2 in data["directions"]) {
                    if (letter2 > letter1) {
                        // console.log(data["directions"][letter1]);
                        if (data["directions"][letter1] === "L" && data["directions"][letter2] === "F") {
                            z = "N"
                            x = data["currentPos"][0];
                            y = Number(data["currentPos"][1]) + 1;
                            y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "R" && data["directions"][letter2] === "F") {
                            z = "S"
                            x = data["currentPos"][0];
                            y = Number(data["currentPos"][1]) - 1;
                            y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "F" && data["directions"][letter2] === "L") {
                            z = "N"
                            x = Number(data["currentPos"][0]) + 1;
                            y = data["currentPos"][1];
                            x.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "F" && data["directions"][letter2] === "R") {
                            z = "S"
                            x = Number(data["currentPos"][0]) + 1;
                            y = data["currentPos"][1];
                            x.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "L" && data["directions"][letter2] === "L") {
                            z = "W"
                            x = data["currentPos"][0];
                            y = data["currentPos"][1];
                            // y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "R" && data["directions"][letter2] === "R") {
                            z = "W"
                            x = data["currentPos"][0];
                            y = data["currentPos"][1];
                            // y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "F" && data["directions"][letter2] === "F") {
                            z = "E"
                            x = Number(data["currentPos"][0]) + 2;
                            y = data["currentPos"][1];
                            x.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "R" && data["directions"][letter2] === "L") {
                            z = "E"
                            x = data["currentPos"][0];
                            y = data["currentPos"][1];
                            // y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "L" && data["directions"][letter2] === "R") {
                            z = "E"
                            x = data["currentPos"][0];
                            y = data["currentPos"][1];
                            // y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                    }
                }
            }
        }

        if (data["currentPos"][2] === "W") {
            // for (const letter of data["directions"]) {
            //     if (letter === "F") {
                    // x = Number(data["currentPos"][0]) - 1;
                    // y = data["currentPos"][1];
                    // x.toString();
            //         z = "W"

            //         tempDestination = `${x}${y}${z}`
            //     }
            // }

            for(const letter1 in data["directions"]) {
                for(const letter2 in data["directions"]) {
                    if (letter2 > letter1) {
                        // console.log(data["directions"][letter1]);
                        if (data["directions"][letter1] === "L" && data["directions"][letter2] === "F") {
                            z = "S"
                            x = data["currentPos"][0];
                            y = Number(data["currentPos"][1]) - 1;
                            y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "R" && data["directions"][letter2] === "F") {
                            z = "N"
                            x = data["currentPos"][0];
                            y = Number(data["currentPos"][1]) + 1;
                            y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "F" && data["directions"][letter2] === "L") {
                            z = "S"
                            x = Number(data["currentPos"][0]) - 1;
                            y = data["currentPos"][1];
                            x.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "F" && data["directions"][letter2] === "R") {
                            z = "N"
                            x = Number(data["currentPos"][0]) - 1;
                            y = data["currentPos"][1];
                            x.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "L" && data["directions"][letter2] === "L") {
                            z = "E"
                            x = data["currentPos"][0];
                            y = data["currentPos"][1];
                            // y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "R" && data["directions"][letter2] === "R") {
                            z = "E"
                            x = data["currentPos"][0];
                            y = data["currentPos"][1];
                            // y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "F" && data["directions"][letter2] === "F") {
                            z = "W"
                            x = Number(data["currentPos"][0]) - 2;
                            y = data["currentPos"][1];
                            x.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "R" && data["directions"][letter2] === "L") {
                            z = "W"
                            x = data["currentPos"][0];
                            y = data["currentPos"][1];
                            // y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "L" && data["directions"][letter2] === "R") {
                            z = "W"
                            x = data["currentPos"][0];
                            y = data["currentPos"][1];
                            // y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                    }
                }
            }
        }

        if (data["currentPos"][2] === "S") {
            // for (const letter of data["directions"]) {
            //     if (letter === "F") {
                    // x = data["currentPos"][0];
                    // y = Number(data["currentPos"][1]) - 1;
                    // y.toString();
            //         z = "S"

            //         tempDestination = `${x}${y}${z}`
            //     }
            // }

            for(const letter1 in data["directions"]) {
                for(const letter2 in data["directions"]) {
                    if (letter2 > letter1) {
                        // console.log(data["directions"][letter1]);
                        if (data["directions"][letter1] === "L" && data["directions"][letter2] === "F") {
                            z = "E"
                            x = Number(data["currentPos"][0]) + 1;
                            y = data["currentPos"][1];
                            x.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "R" && data["directions"][letter2] === "F") {
                            z = "W"
                            x = Number(data["currentPos"][0]) - 1;
                            y = data["currentPos"][1];
                            x.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "F" && data["directions"][letter2] === "L") {
                            z = "E"
                            x = data["currentPos"][0];
                            y = Number(data["currentPos"][1]) - 1;
                            y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "F" && data["directions"][letter2] === "R") {
                            z = "W"
                            x = data["currentPos"][0];
                            y = Number(data["currentPos"][1]) - 1;
                            y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "L" && data["directions"][letter2] === "L") {
                            z = "N"
                            x = data["currentPos"][0];
                            y = data["currentPos"][1];
                            // y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "R" && data["directions"][letter2] === "R") {
                            z = "N"
                            x = data["currentPos"][0];
                            y = data["currentPos"][1];
                            // y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "F" && data["directions"][letter2] === "F") {
                            z = "S"
                            x = data["currentPos"][0];
                            y = Number(data["currentPos"][1]) - 2;
                            y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "R" && data["directions"][letter2] === "L") {
                            z = "S"
                            x = data["currentPos"][0];
                            y = data["currentPos"][1];
                            // y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                        if (data["directions"][letter1] === "L" && data["directions"][letter2] === "R") {
                            z = "S"
                            x = data["currentPos"][0];
                            y = data["currentPos"][1];
                            // y.toString();
                            tempDestination = `${x}${y}${z}`
                        }
                    }
                }
            }
        }

        if (x < 0 || x > maxA) {
            return alert("Please enter a positive value that doesn't exceed the specified length for the x-axis");
        }
        if (y < 0 || y > maxB) {
            return alert("Please enter a positive value that doesn't exceed the specified length for the y-axis");
        }


        tempObj["finalDestination"] = tempDestination;

        setDisplay([...display, tempObj])

        // if (display.length > 1) {
        //     setDisplay(display.filter( (obj) => obj !== display[display.length - 1]))
        // }

        // console.log(data["currentPos"]);

        setData({
            "roomSize" : "",
            "currentPos" : "",
            "directions" : "",
            "finalDestination" : ""
        })
    }

    return(
        <div className={Styles.formMain}>
            <div className={Styles.formTop}>
                <form>
                    <label>Room Size:</label>
                    <input type="text" name="roomSize" value={data["roomSize"]} onChange={handleChange} />
                    <label>Current Position:</label>
                    <input type="text" name="currentPos" value={data["currentPos"]} onChange={handleChange} />
                    <label>Directions:</label>
                    <input type="text" name="directions" value={data["directions"]} onChange={handleChange} />
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            {
                //eslint-disable-next-line
                display.map( (obj,index) => 
                {
                    if(obj === display[display.length - 1]) {
                        return(
                            <div key={index} className={Styles.formBtm}>
                                <div>Current Position:</div>
                                <div>{obj["finalDestination"]}</div>
                            </div>
                        )
                    }
                }
            )
            }
        </div>
    )
}

export default MainForm;