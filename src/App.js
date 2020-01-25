import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";
import List from "./components/List.js";

export default function App() {
  return (
    <main>
      <Header />
        <Route className="route1" exact path="/" component={WelcomePage}/>
        <Route className="route1" path="/List" component={List}/>
    </main>
  );
}

