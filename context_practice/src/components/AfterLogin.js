import { useContext } from "react";
import context from "./Context";
import { Div,Card,Button } from "./StyledComponent";

const AfterLogin = () =>{
    const { isLoggedIn, isErrorInInput, onLoginHandler, onLogoutHandler } =
      useContext(context);
       const logbaharHandler = () => {
         // console.log("logbahar")
         onLogoutHandler();
       };
     <Div>
       <Card>
         <Button onClick={logbaharHandler}>LogOut</Button>
       </Card>
     </Div>;
}
export default AfterLogin;