import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

function Template(props) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Fake Store</Typography>
        </Toolbar>
      </AppBar>

      <Container>{props.children}</Container>
    </>
  );
}

export default Template;
