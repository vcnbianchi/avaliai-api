import dotenv from 'dotenv';

dotenv.config();

const env = {
  "PORT": Number.parseInt(process.env.PORT!) ?? 3000,
  "HOST": process.env.HOST ?? "0.0.0.0"
};

export default env;