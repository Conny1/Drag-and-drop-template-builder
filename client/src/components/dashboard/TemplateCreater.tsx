import React, { useEffect } from "react";

import styled from "styled-components";
import { initializeGrapeJS } from "../../utils/grape"; // Import the function
import "./grape.css";

const TemplateContainer = styled.div`
  /* background-color: red; */
  /* min-height: 100vh; */
  display: flex;
  gap: 20px;
  flex-direction: row-reverse;
  /* justify-content: center; */
  /* align-items: center; */
`;

function TemplateCreater() {
  useEffect(() => {
    const editor = initializeGrapeJS(); // Call the initialization function

    return () => {
      editor.destroy(); // Clean up on component unmount
    };
  }, []);

  return (
    <TemplateContainer>
      <div id="gjs">
        <h1>Hello World Component!</h1>
      </div>
      <div id="blocks"></div>
    </TemplateContainer>
  );
}

export default TemplateCreater;
