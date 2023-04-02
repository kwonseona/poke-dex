import React from 'react';
import PageNavigator from "./PageNavigator";
import {BrowserRouter} from "react-router-dom";
import PageHeader from "./Common/PageHeader";

function App() {
  return (
    <BrowserRouter>
      <main>
        <PageHeader/>
        <PageNavigator/>
      </main>
    </BrowserRouter>
  );
}

export default App;
