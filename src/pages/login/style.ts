import styled from "styled-components";



export const mainBackground = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const mainContainer = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding:5rem 8rem;
`

export const formContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input{
    width: 100%;
    margin: 0 0 0.5rem 0;
    height: 35px;
    padding: 0 0.5rem;
    outline: none;
    border: 1px solid #E2E2E2;
  }
  
  input::placeholder{
    color: #8C9CAD;
  }

`

export const Title__NameForm = styled.h1`
  font-weight: 500;
  font-size: 25px;
  color: #474C59;
  margin: 0 0 1rem 0;
`

export const buttonForm = styled.button`
  margin: 1.5rem 0;
  border: 1px solid #C4CFFD;
  background: #6E89FB;
  width: 100%;
  height: 45px;
  border-radius: 0.2rem;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  transition: 0.3s;
  cursor: pointer;

  &:hover{
    background: #5466B3;
  }
`

export const title__subForm = styled.p`
  font-size: 16px;


  a{
    color: #8094FB; 
  }
`