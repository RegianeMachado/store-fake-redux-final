import { useEffect, useState } from "react";
import FormUser from "../../components/FormUser";
import { implantations } from "../../services/FakeStoreApi";
import { useParams } from "react-router-dom";

function Update() {
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const userData = await implantations.getUserById(id);
      setUser(userData.data);
    };

    getUser();
  }, [id]);
  return (
    <>
      <h1 className="text-center my-5">Atualizando um Usuario</h1>
      <FormUser
        actionTitle="Atualizar Cadastro"
        action={implantations.updateUser}
        userData={user}
      />
    </>
  );
}

export default Update;
