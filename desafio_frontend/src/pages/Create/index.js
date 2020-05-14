import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Cadastro } from "./style";
import Button from "@material-ui/core/Button";
import { Grid } from "./style";
import api from "../../services/api";

export default function Index({ history }) {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  function cadastraCliente(event) {
    event.preventDefault();

    const data = {
      nome: userName,
      email: userEmail,
      telefone: userPhone,
    };

    api.post("/", data).then((res) => {
      // console.log(res.data.data);
      history.push("/");
    });
  }

  return (
    <Cadastro>
      <form onSubmit={cadastraCliente}>
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
            Cadastrar
          </Button>
        </React.Fragment>
      </form>
    </Cadastro>
  );
}
