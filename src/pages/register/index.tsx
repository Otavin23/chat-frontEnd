import { Link } from "react-router-dom";
import * as S from "./style";

const Register = () => {
  return (
    <S.mainBackground>
      <S.mainContainer>
        <S.formContent>
          <S.Title__NameForm>Register</S.Title__NameForm>
          <input type="text" placeholder="name" required />
          <input type="text" placeholder="@gmail" required />
          <input type="password" placeholder="Password" required />
          <S.buttonForm>Log in</S.buttonForm>
          <S.title__subForm>
            You already have an{" "}
            <Link to="/login">
              <a href=""> account </a>
            </Link>{" "}
            ?
          </S.title__subForm>
        </S.formContent>
      </S.mainContainer>
    </S.mainBackground>
  );
};

export default Register;
