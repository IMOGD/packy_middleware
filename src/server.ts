import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import KoaHelmet from 'koa-helmet';
import cors from '@koa/cors';


export const getKoa = async () =>{
  const app = new Koa();
  // app.use(KoaHelmet());
  // app.use(cors());
  app.use(bodyParser())
  app.use(ctx=>{
    ctx.body = 'hi'
  })

  return app;
}
