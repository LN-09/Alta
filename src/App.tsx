import "./App.css";
import { Private } from "./Components/Auth/Private";
import { Profile } from "./Components/Auth/Profile";
// import { ThemeContextProvider } from "./Components/context/themeContext";
// import { Box } from "./Components/context/Box";
// import { UserContextProvider } from "./Components/context/UserContext";
// import { User } from "./Components/context/user";
// import { Counter } from "./Components/class/Counter";
function App() {
  return (
    <div className="App">
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <Counter message="The count value is" /> */}
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
