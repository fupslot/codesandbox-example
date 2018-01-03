import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import ms from "ms";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = ({name}) => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>
      Start 12 editing to see {name} some dhshmagic happen {"\u2728"}
    </h2>
  </div>
);

render(<App name="hello"/>, document.getElementById("root"));
