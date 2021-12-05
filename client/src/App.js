import Messenger from "./components/Messenger";
import AccountProvider from "./components/context/AccountProvider";
import TemplateProvider from "./theme/TemplateProvider";
const App = () =>{
  return (
    <TemplateProvider>
       <AccountProvider>
          <Messenger/>
       </AccountProvider>
    </TemplateProvider>
  );
}

export default App;
