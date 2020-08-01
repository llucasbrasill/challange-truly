import React from "react";
import Menu from "../menu/Index";
import Search from "../search/Index";

export default function Index() {
  return (
    <header className="text-center m-auto">
      <h2>Desafio Truly</h2>
      <Menu />
      <Search />
    </header>
  );
}
