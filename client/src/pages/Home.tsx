import styled from "styled-components";
import { TemplateCreater } from "../components/dashboard";

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const Home = () => {
  return (
    <HomeContainer>
      <TemplateCreater />
    </HomeContainer>
  );
};

export default Home;
