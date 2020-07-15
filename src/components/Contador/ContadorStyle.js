import { makeStyles } from "@material-ui/core/styles";

export const PerfilStyles = makeStyles((theme) => ({
  countdownContainer: {
    padding: 18,
    marginBottom: 10,
    webkitBorderRadius: 6,
    mozBorderRadius: 6,
    borderRadius: 10,
  },

  number: {
    fontSize: "calc(1rem + 1vw)",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: 50,
    marginLeft: 50,
    borderRadius: 10,
    color: "#FFFFFF",
    backgroundColor: "#ffde2e",
  },

  concept: {
    fontSize: 50,
    textAlign: "center",
    color: "#000000",
  },

  contenedorContador: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },

  countdownContainerPequenio: {
    padding: 8,
    marginBottom: 10,
    webkitBorderRadius: 6,
    mozBorderRadius: 6,
    borderRadius: 10,
  },

  numberPequenio: {
    fontSize: 20,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: 25,
    marginLeft: 15,
    borderRadius: 10,
    color: "#FFFFFF",
    backgroundColor: "#ffde2e",
  },

  conceptPequenio: {
    fontSize: 20,
    textAlign: "center",
    color: "#000000",
  },

  countdownContainerPequinio: {
    padding: 18,
    marginBottom: 10,
    webkitBorderRadius: 6,
    mozBorderRadius: 6,
    borderRadius: 10,
  },

  countdownContainerPequenios: {
    display: "none",
  },
}));
