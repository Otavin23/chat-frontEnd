import * as S from "./style";
import HomeImage from "../../assets/chat/casa.png";
import MessageImage from "../../assets/chat/sms.png";
import SquareMenuImage from "../../assets/chat/squares.png";
import ConfigImage from "../../assets/chat/config.png";
import UserImage from "../../assets/chat/usuario.png";

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
        <S.listChatMessage>2</S.listChatMessage>
        <S.chatUserPerson>3</S.chatUserPerson>
      </S.chatContent>
    </S.mainBackground>
  );
};
export default Message;
