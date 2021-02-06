import React from "react";
import ReactDom from "react-dom";

import { root } from './index.module.css'


const App = () => <h1 className={root}>Hello!</h1>;

ReactDom.render(<App />, document.getElementById("app"));