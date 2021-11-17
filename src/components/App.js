import React from "react";
import Header from "./Header";
import StoreControl from "./StoreControl";

function App() {
  const containerStyles = {
    margin: 'auto',
    paddingTop: '50px',
    width: '80vw',
    textAlign: 'center'
  }
  return (
    <React.Fragment>
      <div style={containerStyles}>
        <Header />
        <StoreControl />
      </div>
    </React.Fragment>
  );
}

export default App;
