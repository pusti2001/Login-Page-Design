import React from 'react'
import styled from 'styled-components';

function Input({type, placeholder}) {
  return (
    
        <StyledInput placeholder={placeholder && placeholder} 
        type={type ? type : "text"}
        required
        autoComplete='off'/>
    
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledInput = styled.input`
    width: 80%;
    max-width: 350px;
    min-width: 275px;
    border: none;
    background: transparent;
`;

export default Input


