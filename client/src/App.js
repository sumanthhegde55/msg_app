import Messenger from "./components/Messenger";
import AccountProvider from "./components/context/AccountProvider";
const App = () =>{
  return (
    <AccountProvider>
      <Messenger/>
    </AccountProvider>
  );
}

export default App;
