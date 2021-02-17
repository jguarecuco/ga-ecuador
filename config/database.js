require('dotenv').config()

module.exports = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql",
  define:{
    timestamps: false,

    //Genera una clave foranea de la siguiente forma: user_id
    underscored: true
  }
}
