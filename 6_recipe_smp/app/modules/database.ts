import pgPromise from 'pg-promise';

//database(postgressへの接続情報)
const pgp = pgPromise({});
const config = {
  db: {
    // 設定項目: https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    max: 10, // size of the connection pool
    query_timeout: 60000, // 60sec
  },
};

//接続情報を渡す
export const sqlExecuter = pgp(config.db);
