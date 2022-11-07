import logo from "./logo.svg";
import "./App.css";
import Button from "./component/button/Button";
import FormHook from "./component/FormHook/FormHook";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button label="Hello Wrold" /> */}
        <FormHook />
      </header>
    </div>
  );
}

export default App;
