import { Link } from "react-router-dom";
import * as S from "./style";
import axios from "axios";

const Register = () => {
  axios
    .post("http://localhost:3000/user/register", {
      firstName: "Santos",
      lastName: "Dumont",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });

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
