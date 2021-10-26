const dotenv = require('dotenv');

dotenv.config();

// memanggil isi file dari .env untuk di exports
module.exports = {
  serviceName: process.env.SERVICE_NAME,
  urlDb: process.env.MONGO_URL,
};
