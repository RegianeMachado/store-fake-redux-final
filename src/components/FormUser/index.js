import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
// import { Container } from './styles';

function FormUser(props) {
  const [user, setUser] = useState({
    id: "",
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
      geolocation: {
        lat: "-37.3159",
        long: "81.1496",
      },
    },
    phone: "",
  });
  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  async function handleAction() {
    const result = await props.action(user);
    console.log(result);
    if (result.error) {
      //trativa de erro
      return toast.error(result.details, {
        position: "bottom-right",
      });
    }

    return toast.success(result.details, {
      position: "bottom-right",
    });
  }

  useEffect(() => {
    if (props.userData) {
      setUser(props.userData);
      toast.success("😋Dados carregados com sucesso!", {
        position: "bottom-right",
      });
    }
  }, [props.userData]);

  return (
    <form className="container">
      <ToastContainer />
      <div className="row">
        <div className="form-group col-2">
          <label id="name">Nome</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={user.name.firstname}
            onChange={(event) =>
              setUser({
                ...user,
                name: {
                  ...user.name,
                  firstname: event.target.value,
                },
              })
            }
          />
        </div>
        <div className="form-group col-2">
          <label id="name">Sobrenome</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={user.name.lastname}
            onChange={(event) =>
              setUser({
                ...user,
                name: {
                  ...user.name,
                  lastname: event.target.value,
                },
              })
            }
          />
        </div>
      </div>

      <div className="form-group">
        <label id="email">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
      </div>
      <div className="form-group">
        <label id="username">Username</label>
        <input
          type="text"
          className="form-control"
          name="username"
          id="username"
          value={user.username}
          onChange={(event) =>
            setUser({ ...user, username: event.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label id="password">Senha</label>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          value={user.password}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label id="phone">Telefone</label>
        <input
          type="text"
          className="form-control"
          name="phone"
          id="phone"
          value={user.phone}
          onChange={(event) => setUser({ ...user, phone: event.target.value })}
        />
      </div>
      <h4>Endereço</h4>
      <div className="form-group">
        <label id="street">Rua/AV</label>
        <input
          type="text"
          className="form-control"
          name="street"
          id="street"
          value={user.address.street}
          onChange={(event) =>
            setUser({
              ...user,
              address: {
                ...user.address,
                street: event.target.value,
              },
            })
          }
        />
      </div>
      <div className="form-group">
        <label id="number">Numero</label>
        <input
          type="text"
          className="form-control"
          name="number"
          id="number"
          value={user.address.number}
          onChange={(event) =>
            setUser({
              ...user,
              address: {
                ...user.address,
                number: event.target.value,
              },
            })
          }
        />
      </div>
      <div className="row">
        <div className="col-2">
          <div className="form-group">
            <label id="city">Cidade</label>
            <input
              type="text"
              className="form-control"
              name="city"
              id="city"
              value={user.address.city}
              onChange={(event) =>
                setUser({
                  ...user,
                  address: {
                    ...user.address,
                    city: event.target.value,
                  },
                })
              }
            />
          </div>
        </div>
        <div className="col-2">
          <div className="form-group">
            <label id="zipcode">CEP</label>
            <input
              type="text"
              className="form-control"
              name="zipcode"
              id="zipcode"
              value={user.address.zipcode}
              onChange={(event) =>
                setUser({
                  ...user,
                  address: {
                    ...user.address,
                    zipcode: event.target.value,
                  },
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="actions">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAction}
        >
          {props.actionTitle}
        </button>
      </div>
    </form>
  );
}

export default FormUser;
