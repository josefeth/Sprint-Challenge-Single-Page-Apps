import React from "react";
import styled from "styled-components";

const Div = styled.div`
font-size:3rem;
background:lightgray;
border-radius:25px;
margin:1%;
`;


export default function Header() {
  return (
    <Div>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header></Div>
  );
}
