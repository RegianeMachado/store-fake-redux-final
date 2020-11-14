import FormUser from "../../components/FormUser";
import { implantations } from "../../services/FakeStoreApi";
import { connect } from "react-redux";
function Create({ Auth }) {
  console.log(Auth);
  return (
    <>
      <h1 className="text-center my-5">Cadastro de Usuario</h1>
      <FormUser
        actionTitle="Finalizar Cadastro"
        action={implantations.storeUser}
        userData={false}
      />
    </>
  );
}
const mapStateToProps = (state) => ({ Auth: state.Auth });

export default connect(mapStateToProps, {})(Create);
