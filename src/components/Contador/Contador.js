import React, { useEffect, useState, Fragment } from "react";
import ReactDOM from "react-dom";
import "./estilos.css";
import { PerfilStyles } from "./ContadorStyle";
import { useSelector } from "react-redux";
import { sumarDias } from "../../Helper";
import { format, addDays, lightFormat } from "date-fns";

function Contador({ tamañoContador, credito }) {
  const { fechaDesembolsado, diasPrestamo } = credito;

  let fechaLimite = new Date(fechaDesembolsado);
  fechaLimite.setMinutes(
    fechaLimite.getMinutes() + fechaLimite.getTimezoneOffset()
  );
  let dia = addDays(new Date(fechaLimite), diasPrestamo);

  const difference = +new Date(dia) - +new Date();
  console.log(fechaLimite);
  const calculateTimeLeft = () => {
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutos: Math.floor((difference / 1000 / 60) % 60),
        Segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  //console.log(timerComponents[2].props.children[0]);
  //console.log(timeLeft.Segundos);

  //{timerComponents.length ? timerComponents : <span>Time's up!</span>}
  const classes = PerfilStyles();
  return (
    <Fragment>
      <h1 color="secondary">Tu credito vence en: </h1>
      <div className={classes.contenedorContador}>
        <div
          className={
            tamañoContador === "grande"
              ? classes.countdownContainer
              : classes.countdownContainerPequenio
          }
        >
          <div
            className={
              tamañoContador === "grande"
                ? classes.concept
                : classes.conceptPequenio
            }
          >
            Días
          </div>
          <div
            className={
              tamañoContador === "grande"
                ? classes.number
                : classes.numberPequenio
            }
          >
            {timeLeft.dias}
          </div>
        </div>
        <div
          className={
            tamañoContador === "grande"
              ? classes.countdownContainer
              : classes.countdownContainerPequenio
          }
        >
          <div
            className={
              tamañoContador === "grande"
                ? classes.concept
                : classes.conceptPequenio
            }
          >
            Horas
          </div>
          <div
            className={
              tamañoContador === "grande"
                ? classes.number
                : classes.numberPequenio
            }
          >
            {timeLeft.Horas}
          </div>
        </div>
        <div
          className={
            tamañoContador === "grande"
              ? classes.countdownContainer
              : classes.countdownContainerPequenio
          }
        >
          <div
            className={
              tamañoContador === "grande"
                ? classes.concept
                : classes.conceptPequenio
            }
          >
            Minutos
          </div>
          <div
            className={
              tamañoContador === "grande"
                ? classes.number
                : classes.numberPequenio
            }
          >
            {timeLeft.Minutos}
          </div>
        </div>
        <div
          className={
            tamañoContador === "grande"
              ? classes.countdownContainer
              : classes.countdownContainerPequenios
          }
        >
          <div
            className={
              tamañoContador === "grande"
                ? classes.concept
                : classes.conceptPequenio
            }
          >
            Segundos
          </div>
          <div
            className={
              tamañoContador === "grande"
                ? classes.number
                : classes.numberPequenio
            }
          >
            {timeLeft.Segundos}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Contador;
