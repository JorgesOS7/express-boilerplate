import Express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = Express();

app.use(cors());
app.use(helmet());
app.use(Express.json());
app.use(Express.urlencoded({extended: false}));



export default app;