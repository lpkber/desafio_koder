import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Container, Row, Link, Col, Col2, Table } from "./style";
import { Title } from "../../components/Header/style";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Button from "@material-ui/core/Button";

export default function Index({ history }) {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    api.get("/").then((res) => {
      setClientes(res.data.data);
    });
  }, []);

  function deletaCliente(target) {
    console.log("deletaCliente", target);
    api.delete(`/cliente/${target.id}`).then((res) => {
      setClientes(clientes.filter((cliente) => cliente.id !== target.id));
    });
  }

  function editaCliente(cliente) {
    history.push(`/edit/${cliente.id}`);
  }

  return (
    <Container>
      <Row>
        <Col style={{ flex: 0 }}>
          <div>
            
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Cadastro de Usuário" style={{ whiteSpace: "nowrap" }} onClick={()=> history.push("/create")} />
            </ListItem>
          </div>
        </Col>
        <Col bg="white" style={{ flex: 1 }}>
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Data de criacao</th>
                <th>Deletar</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr>
                  <td>{cliente.nome}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente["Data de criacao"]}</td>
                  <td>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => deletaCliente(cliente)}
                    >
                      Delete
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => editaCliente(cliente)}
                    >
                      Editar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
