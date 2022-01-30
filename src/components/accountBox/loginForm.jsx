import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  button,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [ password, setPasswordShown ] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!password);
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email ou Usuário" />
        <Input type={password ? 'text' : 'password'} placeholder="Senha" />
        <button onClick={togglePassword}>Exibir Senha</button>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Esqueceu a senha?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Entrar</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Não é cadastrado?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Cadastre-se!
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
