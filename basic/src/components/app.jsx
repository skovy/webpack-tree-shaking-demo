import React from "react";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Heading from "./heading";

const App = () => (
  <div>
    <Heading>
      <FontAwesomeIcon icon="coffee" /> {_.join(["Hello", "webpack"], " ")}
    </Heading>
  </div>
);

export default App;
