import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Cadastro } from "./style";
import Button from "@material-ui/core/Button";
import { Grid, } from "./style";
import api from "../../services/api";

import { useParams } from "react-router-dom";

export default function Index({ history }) {

  const { clientId } = useParams();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  
  useEffect(() => {
    api.get("/").then((res) => {
      const clientes = res.data.data;

      const target = clientes.find((cliente) => cliente.id == clientId);

      setUserName(target.nome);
      setUserEmail(target.email);
      setUserPhone(target.telefone);
    });
  }, []);

  function atualizaCliente(event) {
    event.preventDefault();

    const data = {
      nome: userName,
      email: userEmail,
      telefone: userPhone,
    };

    api.post(`/cliente/${clientId}`, data).then((res) => {
      // console.log(res.data.data);
      history.push("/");
    });
  }

  return (
    <Cadastro>
      <form onSubmit={atualizaCliente}>
        <React.Fragment>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={userEmail}
              onChange={(event) => setUserEmail(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Telefone"
              variant="outlined"
              value={userPhone}
              onChange={(event) => setUserPhone(event.target.value)}
            />
          </Grid>
          <Button type="submit" variant="contained" color="primary">
            Atualizar
          </Button>
        </React.Fragment>
      </form>
    </Cadastro>
  );
}
