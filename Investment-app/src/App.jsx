import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue
      }
    });
  }
  const isValidInput = userInput.duration <= 0;
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {isValidInput && <p className="center">Please enter value which is more than 0 and less than 100</p> }
      {!isValidInput && <Results userInput={userInput}/>}
    </>

  )
}

export default App
