import React from "react";
import ReactDOM from "react-dom";
import { Range, getTrackBackground } from "react-range";


const STEP = 0.1;
const MIN = 0;
const MAX = 100;

class SuperSimple extends React.Component {
    state = {
        values: [50]
      };
      render() {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "0em"
            }}
          >
            <Range
              values={this.state.values}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => this.setState({ values })}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: "36px",
                    display: "flex",
                    width: "100%"
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "4px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        values: this.state.values,
                        colors: ["#B57BFF", "#e5e7ea"],
                        min: MIN,
                        max: MAX
                      }),
                      alignSelf: "center"
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px #AAA"
                  }}
                >
                  {/* <div
                    style={{
                      height: "16px",
                      width: "5px",
                      backgroundColor: isDragged ? "#548BF4" : "#CCC"
                    }}
                  /> */}
                </div>
              )}
            />
            {/* <output style={{ marginTop: "30px" }} id="output">
              {this.state.values[0].toFixed(1)}
            </output> */}
          </div>
        );
      }
}
export default SuperSimple