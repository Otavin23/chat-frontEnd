import styled from "styled-components";


export const mainBackground = styled.main`
  width: 100%;
  height: 100vh;
  padding: 1rem;
`

export const chatContent = styled.div`
  height: 100%;
  display: flex;

`
export const menuAside = styled.aside`
  background: #081C34;
  height: 100%;
  width: 4.5%;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0.8rem;
`

export const listOptions = styled.ul`
  list-style: none;
  width: 100%;

  li{
    margin: 2rem 0;
    cursor: pointer;
    width: 100%;
    padding: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    transition: 0.3s;
    border: 1px solid transparent;
  }

  .li_activeLocal,
  li:hover{
    background: #6785FF;
    border: 1px solid #29417B;
  }

  li:first-child{
    margin: 0;
  }
`

export const userAccount = styled.div``

export const listChatMessage = styled.section``

export const chatUserPerson = styled.div``

