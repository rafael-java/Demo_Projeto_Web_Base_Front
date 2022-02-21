import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import { postFun } from "./api.js";

const divStyle = {
  color: "red",
  margin: "100px",
  fontSize: "30px",
};

let res = {};

const dados = {
  linha: 0,
  coluna: 0,
  umBool: false,
};

export const HelloWorld = () => {
  const [show, setShow] = useState(false);
  const [linha, setLinha] = useState(0);
  const [coluna, setColuna] = useState(0);
  const [check, setCheck] = useState(false);

  function aumentar() {
    console.log("antigo dados");
    console.log(dados);
    dados.linha++;
    dados.coluna++;
    dados.umBool = !dados.umBool;
    console.log("novo dados");
    console.log(dados);
  }

  function processa(e) {
    e.preventDefault();
    console.log("processa:");
    console.log(dados);
    postFun(dados)
      .then((response) => {
        console.log("resposta");
        console.log(response);
        console.log("-----");
        res = response;
        console.log("res");
        console.log(res);
        console.log("-----");
        setShow(!show);
      })
      .catch((error) => {
        console.log("error - " + error.response.status);
      });
  }

  useEffect(() => {
    dados.linha = linha;
    console.log("Linha:", dados.linha);
  }, [linha]);

  useEffect(() => {
    dados.coluna = coluna;
    console.log("Coluna:", dados.coluna);
  }, [coluna]);

  useEffect(() => {
    dados.umBool = check;
    console.log("Check:", dados.umBool);
  }, [check]);

  return (
    <form style={divStyle}>
      <div>
        <label>Diga a linha: </label>
        <input
          value={linha}
          onChange={(e) => {
            e.persist();
            setLinha(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Diga a coluna: </label>
        <input
          value={coluna}
          onChange={(e) => {
            e.persist();
            setColuna(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="checkbox"
          id="subscribeNews"
          name="subscribe"
          checked={check}
          onChange={(e) => {
            e.persist();
            setCheck(!check);
          }}
        />
        <label htmlFor="subscribeNews"> Escolha: </label>
      </div>
      <div>
        <button onClick={(e) => processa(e)}>Click Me!</button>
        {show ? (
          <div>
            {console.log("res")}
            {console.log(res)}
            <div>Nova Linha: {res.data.linha_nova}</div>
            <div>Nova Coluna: {res.data.coluna_nova}</div>
            <div>Novo Bool: {res.data.umBool_novo.toString()}</div>
            {/* {aumentar()} */}
          </div>
        ) : null}
      </div>
    </form>
  );
};

// <img style={{ height: "500px" }} src={logo} />
