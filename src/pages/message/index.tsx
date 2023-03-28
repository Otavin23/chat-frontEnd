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

        <S.chatUserPerson>
          <S.chatUserInformationPerson>
            <span>
              <img src={UserImage} alt="" />
            </span>
            <h4>Carlos</h4>
          </S.chatUserInformationPerson>

          <S.mainChatMessage></S.mainChatMessage>
        </S.chatUserPerson>
      </S.chatContent>
    </S.mainBackground>
  );
};
export default Message;
