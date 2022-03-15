import "./App.css";
import Container from "./components/Container";
import { BaseProvider } from "./context/BaseContext";
import {Data} from "./data/Data"

function App() {
  return (
    <BaseProvider>
      <Data />
      <Container />
    </BaseProvider>
  );
}

export default App;
