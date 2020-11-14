import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  List as Lista,
  ListItemText,
  ListItem,
} from "@material-ui/core";

import { useState, useEffect } from "react";
import { connection as Api } from "../../services/FakeStoreApi";

function List() {
  const [users, setUsers] = useState([]);

  function addUser() {
    setUsers([
      ...users,
      {
        id: 1,
        email: "John@gmail.com",
        username: "johnd",
        password: "m38rmF$",
        name: {
          firstname: "John",
          lastname: "Doe",
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      },
    ]);
  }

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await Api.get("/users");
      setUsers(response.data);
    };
    getAllUsers();
  }, []);

  useEffect(() => {
    console.log("Mudou o users");
  }, [users]);

  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <button onClick={addUser}>Adicionar usuario</button>
      {users.map((user, index) => {
        return (
          <Grid item xs={6} sm={6}>
            <Card>
              <CardMedia component="img" src={user.image} />
              <CardContent>
                <Typography variant="h4">{user.name.firstName}</Typography>
                <Lista>
                  <ListItem>
                    <ListItemText>{user.email}</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>{user.phone}</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>{user.address.city}</ListItemText>
                  </ListItem>
                </Lista>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default List;
