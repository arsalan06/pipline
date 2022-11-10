import logo from "./logo.svg";
import "./App.css";
import Button from "./component/button/Button";
import FormHook from "./component/FormHook/FormHook";
import StripPayment from "./component/stripPayment/StripPayment";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button label="Hello Wrold" /> */}
        {/* <FormHook /> */}
        <StripPayment />
      </header>
    </div>
  );
}

export default App;
