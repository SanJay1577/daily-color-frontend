import { Switch, Route } from "react-router-dom";
import './App.css';
import { SignUpPage } from "./SignUpPage";
import { LoginPage } from "./LoginPage";
import { EmailVerification } from "./EmailVerification";
import { ForgetPassword } from "./ForgetPassword";
import { PasswordReset } from "./PasswordReset";
import { ColorPage } from "./ColorPage";
import { HomePage } from "./HomePage";
import { Nopage } from "./Nopage";

function App() {


  return (
    <div className="App">
   <div>
   <Switch>
        <Route exact path="/">
       <HomePage/>
        </Route>

        <Route path="/login">
        <LoginPage/>
         </Route>

         <Route path="/signup">
       <SignUpPage/>
         </Route>

         <Route path="/colorPage">
        <ColorPage/> 
         </Route>

        <Route path="/users/:id/verify/:token">
      <EmailVerification/>
        </Route>

        <Route path="/forget-password">
       <ForgetPassword/>
        </Route>

        <Route path="/api/password-reset/:id/:token">
        <PasswordReset/>
        </Route>
        <Route path ="*">
          <Nopage/>
        </Route>

      </Switch>
   </div>
    </div>

  );
}

export default App;



