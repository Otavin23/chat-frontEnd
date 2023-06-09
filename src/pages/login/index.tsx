import { Link } from "react-router-dom";
import * as S from "./style";
import axios from "axios";

const Login = () => {
  axios
    .post("http://localhost:3000/user/", {
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
          <S.Title__NameForm>Log in</S.Title__NameForm>
          <input type="text" placeholder="@gmail" required />
          <input type="password" placeholder="Password" required />
          <S.buttonForm>Log in</S.buttonForm>
          <S.title__subForm>
            dont you have an{" "}
            <Link to="/register">
              <a href="">account</a>
            </Link>{" "}
            yet ?
          </S.title__subForm>
        </S.formContent>
      </S.mainContainer>
    </S.mainBackground>
  );
};

export default Login;
