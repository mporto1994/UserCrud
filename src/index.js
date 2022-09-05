// Primeiro importamos o express utilizando a função require.

import express from 'express';
import userRouter from "./routes/users.routes"

// Criamos uma instancia do express com "express()".
const app = express();

app.use(express.json())

app.use("/users",userRouter)



// Porta onde será executada.
const port = 3000;

// E finalmente, mapeamos o express para ouvir a porta definida a cima.
app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});