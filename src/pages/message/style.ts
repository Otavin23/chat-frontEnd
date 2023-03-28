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
  width: 90px;
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

export const listChatMessages = styled.section`
  padding: 1rem;
  width: 350px;
`

export const inputSearchPersonMessages = styled.div`
  border: 2px solid #E7E7E7;
  width: 100%;
  height: 50px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  img{
    margin: 0 0.5rem;
  }

  input{
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    color: black;
    font-weight: 500;
    font-size: 16px;
    padding: 0 0.5rem 0 0;
  }
  
  input::placeholder{
    color: #CBCBCB;
    font-weight: 400;
  }
`

export const listPeopleMessages = styled.ul`
  list-style: none;
  li{
    background: #E9E9F3;
    margin: 1.5rem 0;
    display: flex;
    align-items: center;
    padding: 1.5rem 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;

    .information__nameAbout{
      margin: 0 0 0 0.5rem;

      .title__namePersonMessage{
        font-size: 18px;
        color: black;
        font-weight: 500;
      }

      .title_descriptionAboutProject{
        margin: 0.3rem 0 0 0;
        color: #CBCBCB;
      }
    }

  }

  .li__activeLocalMessage{
    background: #6785FF;

    .information__nameAbout{
      .title__namePersonMessage{
        color: #fff;
      }
    }
  }

`

export const chatUserPerson = styled.div``

export const  chatUserInformationPerson = styled.div``

export const mainChatMessage = styled.div``
