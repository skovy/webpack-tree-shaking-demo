import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import App from "./components/app";

// Add only the solid Font Awesome icons that are used.
library.add(faCoffee);

const wrapper = document.getElementById("root");
ReactDOM.render(<App />, wrapper);
