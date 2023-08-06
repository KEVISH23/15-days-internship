import { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Div,
  Input,
  Label,
  Typography,
} from "./components/StyledComponent";
import context from "./components/Context";

function App() {
  useEffect(() => {
    if (localStorage.getItem("LoggedIn")) {
      onLoginHandler("","",true)
    }
  }, []);

  const { isLoggedIn, isErrorInInput, onLoginHandler, onLogoutHandler } =
    useContext(context);
  const emailRef = useRef();
  const passRef = useRef();
  const logandarHandler = () => {
    let uemail = emailRef.current.value;
    let upass = passRef.current.value;
    onLoginHandler(uemail, upass);
  };
  const logbaharHandler = () => {
    // console.log("logbahar")
    onLogoutHandler();
  };
  // if(!localStorage.getItem("LoggedIn")&&!isLoggedIn){
  //   return (
  //     <>
  //       <Div>
  //         <Card>
  //           <Input placeholder="Email" ref={emailRef} type="email" />
  //           <Input placeholder="Password" ref={passRef} type="password" />
  //           {isErrorInInput ? <Typography>Invalid Credentials</Typography> : null}
  //           <Button onClick={logandarHandler}>Login</Button>
  //         </Card>
  //       </Div>
  //     </>
  //   );
  // }else{
  // return (
  //   <>
  //     <Div>
  //       <Card>
  //         <Button onClick={logbaharHandler}>LogOut</Button>
  //       </Card>
  //     </Div>
  //   </>
  // );

  // }
  return (
    <>
      {!isLoggedIn ? (
        <Div>
          <Card>
            <Label>Email</Label>
            <Input placeholder="Email" ref={emailRef} type="email" />
            <Label>Password</Label>
            <Input placeholder="Password" ref={passRef} type="password" />
            {isErrorInInput ? (
              <Typography>Invalid Credentials</Typography>
            ) : null}
            <Button onClick={logandarHandler}>Login</Button>
          </Card>
        </Div>
      ) : (
        <Div>
          <Card>
            <Button onClick={logbaharHandler}>LogOut</Button>
          </Card>
        </Div>
      )}
    </>
  );
}

export default App;
