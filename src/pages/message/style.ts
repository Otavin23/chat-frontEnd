import styled from "styled-components";


export const mainBackground = styled.main`
  width: 100%;
  height: 100vh;
  padding: 1rem;
`

export const chatContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`

export const groupMessagesMenu = styled.div`
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

export const chatUserPerson = styled.div`
  width:75%;
  height: 100%;
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const  chatUserInformationPerson = styled.div`
  display: flex;
  align-items: center;

  .background__userMessage{
    background: #A9A9A9;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title__namePersonMessage{
    margin: 0 0 0 1rem;
  }
`

export const mainChatMessage = styled.div`
  width: 100%;
  height: 100%;
  background: #E9E9F3;
  margin: 1rem 0 0 0;
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;
`

export const groupTextMessage = styled.div``

export const backgroundMessageSend = styled.div`
  display: flex;
  justify-content: end;
  margin: 1rem 0;

`

export const messageSend = styled.p`
  background: #6785FF;
  padding: 0.7rem 1rem;
  color: #fff;
  border-radius: 0.5rem;
  font-size: 16px;
`

export const backgroundMessageReceive = styled.div`
  display: flex;
  justify-content: start;
  margin: 1rem 0;
`

export const messageReceive = styled.p`
  background: #fff;
  padding: 0.7rem 1rem;
  color: #CBCBCB;
  border-radius: 0.5rem;
  font-size: 16px;
`


export const InputSendMessage = styled.div``

export const buttonSendMessage = styled.button``