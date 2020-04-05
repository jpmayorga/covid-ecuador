import React from 'react';
import { Helmet } from 'react-helmet';

interface Entrada {
  titulo: string;
}

const Cabezera = (props: Entrada) => {
  return (
    <Helmet>
      <title>{props.titulo}</title>
      <link href='https://fonts.googleapis.com/css2?family=Amaranth&display=swap' rel='stylesheet'></link>
      <link href='https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&display=swap' rel='stylesheet'></link>
    </Helmet>
  );
};

export default Cabezera;