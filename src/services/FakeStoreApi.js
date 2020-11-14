import axios from "axios";

const connection = axios.create({
  baseURL: "http://fakestoreapi.com",
});

const implantations = {
  async getUserById(id) {
    try {
      const response = await connection.get(`/users/${id}`);
      if (response.status !== 200) {
        throw new Error(
          "Não foi possivel pegar as infos do usuario, tente novamente"
        );
      }
      return {
        error: false,
        details: "Informações ok",
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
  async storeUser(user) {
    try {
      const response = await connection.post("/users", user);
      if (response.status !== 201) {
        throw new Error(
          "Não foi possivel cadastrar o usuario, tente novamente"
        );
      }
      return {
        error: false,
        details: "Usuario Cadastrado com sucesso!",
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
  async updateUser(user) {
    try {
      const response = await connection.put(`/users/${user.id}`, user);
      if (response.status !== 200) {
        throw new Error(
          "Não foi possivel atualizar o usuario, tente novamente"
        );
      }
      return {
        error: false,
        details: "Usuario atualizado com sucesso!",
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
