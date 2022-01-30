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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [ password, setPasswordShown ] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!password);
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Nome completo" />
        <Input type="email" placeholder="Email" />
        <Input type={password ? 'text' : 'password'} 
        placeholder="Senha" />
        <Input type={password ? 'text' : 'password'} placeholder="Confirme a senha" />
        <button onClick={togglePassword}>Exibir Senha</button>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Cadastrar</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Já é cadastrado?
        <BoldLink href="#" onClick={switchToSignin}>
          Faça o Login!
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
