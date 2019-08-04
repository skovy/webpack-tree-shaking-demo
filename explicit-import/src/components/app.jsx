import React from "react";
import _ from "lodash";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Heading from "./heading";

const App = () => (
  <div>
    <Heading>
      <FontAwesomeIcon icon={faCoffee} /> {_.join(["Hello", "webpack"], " ")}
    </Heading>
  </div>
);

export default App;
