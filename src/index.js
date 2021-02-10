const React = require("react");
const ReactDOM = require("react-dom");

const App = require("./App");

const root = document.createElement("div");
root.id = "root";

document.body.appendChild(root);

ReactDOM.render(<App />,document.getElementById("root"));