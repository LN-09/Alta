import "./App.css";
import Button from "./Components/Button";
import Container from "./Components/Container";
import Heading from "./Components/Heading";
import ListPerson from "./Components/ListPerson";
import Oscar from "./Components/Oscar";
import { Person } from "./Components/Person";
import Counter from "./Components/State/Counter";
import Login from "./Components/State/Login";
import User from "./Components/State/User";
import Status from "./Components/Status";

function App() {
  const listPersonName = [
    {
      first: "Tom",
      last: "Bob",
    },
    {
      first: "Teens",
      last: "Teens",
    },
  ];
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  return (
    <div className="App">
      <User />
      <Counter />
      {/* <Login /> */}
      {/* <Status status="success" /> */}
      {/* <Oscar>
        <Heading>Oscar</Heading>
      </Oscar>
      <Heading>Heading here</Heading> */}
      {/* <Person name={personName} />
     
      <Status status="success" /> */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("data", event, "id", id);
        }}
      /> */}
      {/* <ListPerson name={listPersonName} /> */}
      {/* <Container
        styles={{ border: "1px black", textAlign: "left", padding: "30px" }}
      /> */}
    </div>
  );
}

export default App;
