import styled from "styled-components";

const SignupContaimer = styled.div`
  flex: 1;
  outline: 1px solid #cfcdcd8b;
  max-width: 300px;
  background-color: #fff;
  height: 500px;
  padding-left: 35px;
  padding-right: 35px;
  border-radius: 20px;
  button {
    width: 100%;
    color: #fff;
  }
`;
const Form = styled.form`
  width: 100%;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const InputContainer = styled.div`
  margin-bottom: 10px;
  outline: 1px solid #cfcdcd8b;
  padding: 10px;
  input {
    border: none;
    width: 100%;
    height: 30px;
    outline: none;
    font-size: 15px;
  }
`;
const Account = styled.p`
  font-size: 12px;
  text-align: center;
  font-weight: 700;

  span {
    color: #3a7ff9;
    cursor: pointer;
  }
`;
type Props = {
  setsignin: React.Dispatch<React.SetStateAction<boolean>>;
};
const Signup = ({ setsignin }: Props) => {
  return (
    <SignupContaimer>
      <div>
        <p>Start your journey</p>
        <h2>Sign up to E-templates </h2>
      </div>
      <Form>
        <InputContainer>
          <input type="text" name="names" id="names" placeholder="Fullnames" />
        </InputContainer>
        <InputContainer>
          <input type="email" name="email" id="email" placeholder="Email" />
        </InputContainer>

        <InputContainer>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </InputContainer>
        <InputContainer>
          <input
            type="password"
            name="password"
            id="Confirm password"
            placeholder="password"
          />
        </InputContainer>
      </Form>
      <button>Sign up</button>
      <Account>
        Already have an account?{" "}
        <span onClick={() => setsignin((prev) => !prev)}>Sign in</span>
      </Account>
    </SignupContaimer>
  );
};

export default Signup;
