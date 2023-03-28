import * as S from "./style";
import HomeImage from "../../assets/chat/casa.png";
import MessageImage from "../../assets/chat/sms.png";
import SquareMenuImage from "../../assets/chat/squares.png";
import ConfigImage from "../../assets/chat/config.png";
import UserImage from "../../assets/chat/usuario.png";
import bloomImage from "../../assets/listChatMessages/pesquisa.png";

const Message = () => {
  return (
    <S.mainBackground>
      <S.chatContent>
        <S.groupMessagesMenu>
          <S.menuAside>
            <S.listOptions>
              <li>
                <img src={HomeImage} alt="" width="30" height="30" />
              </li>

              <li className="li_activeLocal">
                <img src={MessageImage} alt="" width="30" height="30" />
              </li>
              <li>
                <img src={SquareMenuImage} alt="" width="30" height="30" />
              </li>
              <li>
                <img src={ConfigImage} alt="" width="30" height="30" />
              </li>
            </S.listOptions>
            <S.userAccount>
              <img src={UserImage} alt="" width="40" height="40" />
            </S.userAccount>
          </S.menuAside>

          <S.listChatMessages>
            <S.inputSearchPersonMessages>
              <img src={bloomImage} alt="" width="25" height="25" />
              <input type="text" placeholder="Search" />
            </S.inputSearchPersonMessages>

            <S.listPeopleMessages>
              <li className="li__activeLocalMessage">
                <img src={UserImage} alt="" width="50" height="50" />
                <div className="information__nameAbout">
                  <h4 className="title__namePersonMessage">Calos</h4>
                  <p className="title_descriptionAboutProject">
                    Desenvolvedor Java
                  </p>
                </div>
              </li>

              <li>
                <img src={UserImage} alt="" width="50" height="50" />
                <div className="information__nameAbout">
                  <h4 className="title__namePersonMessage">Gabriel</h4>
                  <p className="title_descriptionAboutProject">
                    Desenvolvedor Java
                  </p>
                </div>
              </li>

              <li>
                <img src={UserImage} alt="" width="50" height="50" />
                <div className="information__nameAbout">
                  <h4 className="title__namePersonMessage">Felipe</h4>
                  <p className="title_descriptionAboutProject">
                    Desenvolvedor Java
                  </p>
                </div>
              </li>
            </S.listPeopleMessages>
          </S.listChatMessages>
        </S.groupMessagesMenu>

        <S.chatUserPerson>
          <S.chatUserInformationPerson>
            <span className="background__userMessage">
              <img src={UserImage} alt="" width="30" height="30" />
            </span>
            <h3 className="title__namePersonMessage">Carlos</h3>
          </S.chatUserInformationPerson>

          <S.mainChatMessage>
            <S.groupTextMessage>
              <S.backgroundMessageSend>
                <S.messageSend>
                  Opa eu me chamo Nelson e sou um Desenvolvedor Full Stack
                </S.messageSend>
              </S.backgroundMessageSend>

              <S.backgroundMessageSend>
                <S.messageSend>
                  Tenho mias de 2 anos de experiência em PHP | Javascript
                </S.messageSend>
              </S.backgroundMessageSend>

              <S.backgroundMessageReceive>
                <S.messageReceive>
                  Opa eu me chamo Carlos e sou um Desenvolvedor Front End
                </S.messageReceive>
              </S.backgroundMessageReceive>
            </S.groupTextMessage>
            <S.InputSendMessage>
              <input type="text" placeholder="Send a Message..." />
              <S.buttonSendMessage></S.buttonSendMessage>
            </S.InputSendMessage>
          </S.mainChatMessage>
        </S.chatUserPerson>
      </S.chatContent>
    </S.mainBackground>
  );
};
export default Message;
