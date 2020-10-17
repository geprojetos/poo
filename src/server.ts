import express from 'express';
import { logger } from './helpers/logger';
// import './poo/Pencil';
// import './poo/Account'
// import './poo/RemoteControl'
// import './poo/Fighter'
// import './poo/Person'
// import './poo/Teacher'
// import './poo/Student'

const app = express();

app.listen(8080, () => {
  const showClass = true;

  if(showClass) {

    logger(`
      Bem-vindo ao curso de POO com TypeScript :)
    `);
  }
});
