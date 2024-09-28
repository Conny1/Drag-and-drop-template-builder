import { useState } from "react";
import { Signin, Signup } from "../components/auth";
import styled from "styled-components";

const AuthContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px solid red;
  background-color: #f4f6f8;
`;

const Auth = () => {
  const [signin, setsignin] = useState(true);
  return (
    <AuthContainer>
      {signin ? (
        <Signin setsignin={setsignin} />
      ) : (
        <Signup setsignin={setsignin} />
      )}
    </AuthContainer>
  );
};

export default Auth;
