module.exports = {
  HOST: "localhost",
  USER: "laizy123456",
  PASSWORD: "123456",
  DB: "user",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
