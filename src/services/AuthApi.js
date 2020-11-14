import axios from "axios";

const connection = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Content-Type": "application/json",
  },
});

const implantations = {
  async getToken(email, password) {
    try {
      const response = await connection.post("/login", { email, password });

      if (response.status !== 200) {
        throw new Error(response.data.message);
      }
      return {
        error: false,
        data: response.data.token,
      };
    } catch (err) {
      console.log(err);

      return {
        error: true,
        details: err.message,
      };
    }
  },

  async registerUser(user) {
    try {
      const response = await connection.post("/register", user);
      return {
        error: false,
        data: response.data,
      };
    } catch (err) {
      console.error(err);
      return {
        error: true,
        details: err.message,
      };
    }
  },
};

export { connection, implantations };
