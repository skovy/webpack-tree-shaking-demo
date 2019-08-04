import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import App from "./components/app";

// Add all the solid Font Awesome icons as usable icons.
library.add(fas);

const wrapper = document.getElementById("root");
ReactDOM.render(<App />, wrapper);
