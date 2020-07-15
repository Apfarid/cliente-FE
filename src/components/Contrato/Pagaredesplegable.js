import React, { useState, useEffect } from "react";
import { ContratoStyle } from "./ContratoStyle";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { formateador } from "../../Helper";
import clienteAxios from "../../config/axios";

const Pagare = () => {
  const classes = ContratoStyle();

  const [data, setData] = useState([]);
  const [usuario, setUsuario] = useState([]);

  const creditoInfo = async () => {
    const respuestaHome = await clienteAxios.get("/credito", {
      headers: {
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token")}`,
      },
    });
    setData(respuestaHome.data.credito);
  };

  const usuarioInfo = async () => {
    const respuesta = await clienteAxios.get("/clientes", {
      headers: {
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token")}`,
      },
    });
    setUsuario(respuesta.data);
  };

  useEffect(() => {
    creditoInfo();
    usuarioInfo();
  }, []);

  let idDocumento = data.id ? data.id : null;
  let valorAprobadoDocumento = data.valorAprobado ? data.valorAprobado : 0;
  let fechaDesembolsadoDocumento = data.fechaDesembolsado
    ? data.fechaDesembolsado
    : null;
  let diasPrestamoDocumento = data.diasPrestamo ? data.diasPrestamo : 0;
  let apellidoDocumento = usuario.apellidos ? usuario.apellidos : "null";
  let nombreDocumento = usuario.nombres ? usuario.nombres : "";
  let cedulaDocumento = usuario.cedula ? usuario.cedula : 0;

  let telefonoFijoDocumento = usuario.telefonoFijo
    ? usuario.telefonoFijo
    : null;

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>CONTRATO</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid item xs={12}>
            <Typography>
              <span className={classes.negrilla}>
                TÉRMINOS Y CONDICIONES DEL CUPO DE CRÉDITO EASYCREDIT COLOMBIA
                S.A.S
              </span>
              <br />
              1.Información Completa del ACREEDOR:
              <span className={classes.negrilla}>
                EASYCREDIT COLOMBIA S.A.S NIT: 901.011.172-4
              </span>
              Dirección: calle 44 # 79-86 of 207, Medellín, Colombia Teléfono:
              3173658787 Correo Electrónico: soporte@easycreditcolombia.com
              <br />
              2. Información Completa del Cliente en adelante EL DEUDOR
              Consecutivo:{" "}
              <span className={classes.negrilla}> {idDocumento} </span>
              Cliente:
              <span className={classes.negrilla}>
                {" "}
                {`${nombreDocumento} ${apellidoDocumento}`}{" "}
              </span>
              , CC:{" "}
              <span className={classes.negrilla}>
                {" "}
                {formateador(cedulaDocumento)}
              </span>{" "}
              Dirección: <span className={classes.negrilla}>*******</span>{" "}
              Teléfono:{" "}
              <span className={classes.negrilla}>{telefonoFijoDocumento}</span>{" "}
              Correo Electrónico:{" "}
              <span className={classes.negrilla}>__________________</span>
              <br />
              3. Descripción de los Servicios y Productos:{" "}
              <span className={classes.negrilla}>
                EASYCREDIT COLOMBIA S.A.S
              </span>
              : Es el servicio de préstamos online de libre destinación y a
              corto plazo. Con{" "}
              <span className={classes.negrilla}>EASYCREDIT COLOMBIA</span>{" "}
              decides sin exceder el cupo de crédito otorgado para el servicio,
              cuánto dinero necesitas y el periodo de tiempo para pagar. Las
              principales características de este producto son su flexibilidad,
              rapidez y la ausencia de trámites físicos. La utilización de este
              servicio se puede hacer a partir de un monto mínimo de disposición
              de CIENTO VEINTE MIL PESOS ($120.000) y un plazo de financiación
              mínimo de 1 día. Las principales características del servicio son
              su flexibilidad, rapidez y la ausencia de trámites físicos. Se
              trata de créditos únicos, diseñados a la medida de las necesidades
              del cliente y tramitados 100% por Internet. El servicio de{" "}
              <span className={classes.negrilla}>EASYCREDIT COLOMBIA</span>{" "}
              tiene costos asociados y puede afectar tu historia crediticia. El
              atraso en el pago genera intereses de mora, gastos de cobranza y
              reporte en las centrales de riesgo.{" "}
              <span className={classes.negrilla}>EASYCREDIT COLOMBIA</span> no
              desarrolla actividades de intermediación o captación de dineros
              del público u otras actividades similares que sean privativas de
              las instituciones financieras. Del mismo modo, la sociedad tampoco
              tendrá dentro de su objeto social la administración, gestión o
              inversión de recursos de terceros en títulos inscritos en la Bolsa
              de Valores de Colombia.{" "}
              <span className={classes.negrilla}>
                EASYCREDIT COLOMBIA NUNCA
              </span>{" "}
              comparte información de clientes con terceras personas o cobra
              comisiones o gastos por anticipado.{" "}
              <span className={classes.negrilla}>NO</span> usamos intermediarios
              para diligenciar, estudiar o agilizar tu solicitud o desembolsar y
              procesar tu crédito.
              <br />
              <span className={classes.negrilla}>
                CLÁUSULAS CLÁUSULA PRIMERA. CONDICIONES
              </span>
              :
              <br />
              El DEUDOR declara que conoce y acepta los siguientes términos del
              crédito. Monto del crédito otorgado de acuerdo a la calificación:
              $ {formateador(valorAprobadoDocumento)}. Fecha de concesión:{" "}
              <span className={classes.negrilla}>
                {fechaDesembolsadoDocumento}
              </span>{" "}
              Fecha de vencimiento:{" "}
              <span className={classes.negrilla}>
                {diasPrestamoDocumento} días calendario
              </span>{" "}
              desde la concesión del crédito. El cupo de crédito, el cual puede
              ser otorgado hasta por un máximo de _________________________${" "}
              {formateador(valorAprobadoDocumento)} y 30 días calendario de
              plazo; te lo indicamos en el valor máximo a financiar y la fecha
              de vencimiento que te informamos, es asignado de acuerdo con
              nuestras políticas de riesgo y podrá ser usado por ti en una o
              varias transacciones hasta la fecha de vencimiento o cualquiera de
              las prórrogas automáticas que podremos otorgarte de manera
              unilateral por períodos iguales al inicialmente pactado. El valor
              del cupo de crédito otorgado podrá ser modificado por{" "}
              <span className={classes.negrilla}>
                EASYCREDIT COLOMBIA S.A.S
              </span>{" "}
              en cualquier momento, de acuerdo con nuestras políticas de riesgo.
              En caso de modificaciones así te lo informaremos. Una vez
              informada la modificación, las próximas utilizaciones del cupo
              serán tomadas por nosotros como tu aceptación a los cambios
              realizados. En cada caso y antes de tu aceptación, te
              informaremos, a través de la sección Mi cuenta en la página web de
              la entidad o a través de correo electrónico, las condiciones
              específicas del crédito solicitado dentro de las cuales se
              encuentran: Monto del dinero
              <span className={classes.negrilla}> </span>
              dispuesto (usado): 260000 Interés Remuneratorio: 25% EA Interés
              Moratorio: Tasa máxima legalmente permitida Fecha de vencimiento:
              2020-04-19 Cargos tecnológicos: 7350 Administración: 20.000 Valor
              del seguro: $0
              <span className={classes.negrilla}> </span>
              EL DEUDOR, se obliga irrevocablemente a llevar a cabo el pago del
              monto del capital inherente al crédito otorgado, más los intereses
              comerciales y moratorios, de acuerdo con su causación. Es
              importante que tengas presente, que cuando tengas moras en los
              pagos de las obligaciones que con este contrato se pactan,
              cualquier pago que hagas se imputa primero a intereses de mora,
              gastos de cobranza si los mismos se han generado y luego sí a los
              componentes de la obligación (interés remuneratorio, capital y
              primas de seguros): así lo establece la ley.
              <br />
              <span className={classes.negrilla}>
                CLÁUSULA SEGUNDA: MODIFICACIÓN DE LAS CONDICIONES:{" "}
              </span>
              Los datos que encuentras en este documento se refieren al
              desembolso solicitado en el momento en que completas los
              requisitos solicitados por{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              Las características y condiciones pactadas en torno a los nuevos
              desembolsos solicitados sobre el cupo de crédito autorizado y que
              se realicen dentro de su vigencia te serán comunicadas a través
              del correo electrónico:{" "}
              <span className={classes.negrilla}>__________________</span>
              <br />
              <span className={classes.negrilla}>
                CLÁUSULA TERCERA: DEPÓSITO DE DINERO:{" "}
              </span>
              Nosotros depositaremos el valor del préstamo solicitado una vez
              conocidas y aceptadas las condiciones del mismo por ti a través de
              la sección Mi cuenta en la página web de la entidad y de correo
              electrónico. El desembolso se realizará por nuestra parte a más
              tardar dentro del día hábil siguiente a la confirmación de la
              aprobación del crédito por nosotros en el número de cuenta que nos
              has suministrado para el efecto, de la cual, sin excepción, debes
              ser el titular, bajo el entendido que nosotros, de acuerdo con
              nuestras políticas de seguridad, no realizaremos ningún desembolso
              a favor o en cuentas de terceros. Adicionalmente deberá tenerse en
              cuenta, que al plazo anterior, se le debe sumar el término que se
              demore el banco en el cual tiene su cuenta para completar la
              transacción.
              <br />
              <span className={classes.negrilla}>
                CLÁUSULA CUARTA. CONDICIÓN SUSPENSIVA:{" "}
              </span>
              <br />
              Las obligaciones del contrato sólo nacerán a las partes, una vez
              se verifique que el número de cuenta aportado corresponde a la
              misma persona que solicitó y se le otorgó el crédito. En caso de
              que aportes un número de cuenta de la cual no eres titular, el
              contrato se entenderá inexistente y no nacerán obligaciones de
              ningún tipo por parte de EASYCREDIT COLOMBIA S.A.S. En caso de
              existir algún tipo de descuento otorgado por nosotros a tu favor,
              por buen manejo de tus productos, éste se perderá en caso de que
              presentes mora en el pago de tus obligaciones de acuerdo con lo
              establecido en el numeral 5.5.3.
              <br />
              <span className={classes.negrilla}>CLÁUSULA QUINTA</span> 5.1.
              Administración: Cargo administrativo que se genera por efecto de
              la creación y manutención de un cupo de crédito a tu favor y a tu
              disposición para su utilización; la facilidad de pago por
              diferentes canales como PSE (Pago Online), Efecty, y
              consignaciones por entidades bancarias, etc, como un beneficio
              para ti, esta cuota de manejo únicamente será objeto de cobro al
              momento de cualquier utilización del cupo de crédito otorgado.
              <br />
              5.2. Cargos tecnológicos: En EASYCREDIT COLOMBIA S.A.S, con el fin
              de prestar un tipo de servicios novedosos en el mercado que hacen
              mucho más fácil para ti tener acceso a créditos, aún sin tener
              historia crediticia o antecedentes de pagos previos, debemos
              realizar grandes inversiones en servicios especializados y
              desarrollos tecnológicos que nos permitan el estudio de los
              clientes, por esta razón incurrimos en costos que redundan en
              beneficios para ti y los otros clientes y sin cuyos cargos se
              haría imposible la prestación del servicio, de esta manera
              realizamos a todos nuestros clientes un cobro de tecnología por un
              valor de{" "}
              <span className={classes.negrilla}>
                {" "}
                mil cincuenta pesos ($1.050)
              </span>{" "}
              diarios el cual será efectuado únicamente al momento de utilizar
              nuestros servicios y que es el resultado de la posibilidad que te
              brindamos de uso de nuestra plataforma digital a la cual tienes
              acceso sin limitaciones de tiempo o fecha pudiendo consultar y
              manejar tus productos. Cobramos un solo cargo sin que para el
              efecto haga diferencia que estés haciendo uso de uno o varios de
              nuestros productos y pudiendo hacer los pagos a través de la
              página web por medio de reconocido establecimiento de pago
              digital.
              <br />
              <span className={classes.negrilla}> </span>
              <br />
              5.4. Forma de pago de las obligaciones: Realizarás el pago en la
              fecha establecida, realizando la transferencia a través de la
              página www.easycreditcolombia.com en la sección Mi Cuenta, o a
              través de una consignación en una de las cuentas de EASYCREDIT
              COLOMBIA S.A.S. o de las otras facilidades de pago a través de PSE
              (Pago Online) y EFECTY. Si lo deseas, podrás realizar el pago del
              crédito de manera total o parcial en cualquier fecha anticipada al
              vencimiento, para el cual, se hará la consiguiente liquidación de
              intereses y cargos al día del pago y no habrá ningún tipo de
              sanción económica por tal hecho. Para el efecto, como nuestro
              cliente estás obligado incondicional e irrevocablemente a realizar
              el pago de la totalidad del monto de capital del crédito otorgado,
              más los correspondientes intereses remuneratorios y moratorios (de
              ser el caso) y cargos indicados al momento de la solicitud del
              producto.
              <br />
              5.5. Retardo en el Pago: En caso de no realizar el pago en la
              fecha acordada, EL DEUDOR asume las siguientes consecuencias:
              <br />
              5.5.1. Interés de mora: Deberás pagar los intereses de mora
              correspondientes a los días adicionales que tomes para realizar el
              pago a la tasa moratoria máxima permitida en Colombia. En caso de
              que consideres que no vas a poder cumplir con el pago en la fecha
              acordada, te recomendamos que te comuniques con nuestro sistema de
              Servicio al Cliente para intentar llegar a un acuerdo sobre la
              forma como se realizará el mismo, sin que por tal motivo tengamos
              la obligación de realizar modificación alguna al crédito o llegar
              a un acuerdo contigo.
              <br />
              5.5.2. Gastos de Cobranza: En adición a los intereses de mora,
              deberás cancelar la totalidad de los gastos de cobranza legalmente
              causados. Este valor será cargado según las gestiones de cobro
              realizadas con el fin de cubrir los costos en que incurre{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              para la realización de la gestión de cobranza a través de
              empleados contratados para tal fin o firmas externas
              especializadas.
              <br />
              5.5.3. Pérdida de beneficios: Perderás los beneficios previamente
              otorgados por{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>
              , principalmente aquellos correspondientes a los descuentos que se
              realizan sobre el producto actualmente objeto de utilización y
              futuros créditos o solicitudes de otros productos en materia de
              tasas de interés y cargos a cancelar que hayan sido resultado de
              tu buen comportamiento anterior. De esta manera podremos cobrar el
              monto del crédito, sus intereses remuneratorios y de mora, así
              como los cargos haciendo caso omiso de cualquier descuento
              ofrecido, no obstante que los valores indicados y aceptados al
              momento de la solicitud así los haya contemplado.
              <br />
              5.5.5. Pérdida del cupo de crédito. Una vez entras en mora
              nosotros podremos de manera unilateral disminuir el valor o aún
              más dar por terminado el contrato de cupo de crédito que había
              sido previamente otorgado a tu favor.
              <br />
              5.5.6. Vencimiento de todas las obligaciones: La mora en el pago
              de cualquiera de tus obligaciones nos autoriza a declarar de
              manera automática el vencimiento e inmediata exigibilidad de todas
              las obligaciones que tengas con nosotros como resultado de la
              utilización de cualquiera de nuestros productos.
              <br />
              5.6. Centrales de información de riesgo crediticio: En caso de no
              realizar el pago a más tardar 20 días calendario después haber
              sido informado sobre el particular, la mora en tu obligación será
              reportada a las centrales de riesgo crediticio, sin perjuicio de
              las demás acciones que podamos adelantar para el cobro de las
              obligaciones a nuestro favor. Para efectos de la comunicación de
              aviso de reporte a las centrales de riesgo, remitiremos la
              información de manera escrita mediante comunicación dirigida a tu
              domicilio registrado en nuestras bases de datos o por cualquier
              tipo de mensaje de datos incluyendo SMS, correo electrónico o
              cualquier medio del que quede registro para posteriores consultas.
              <br />
              5.7. Autorización débito automático: No obstante lo establecido en
              el punto 5.4. (forma de Pago), mediante tu aceptación al presente
              documento nos autorizas de forma irrevocable para que el día de
              pago establecido por las partes realicemos el débito automático de
              la totalidad o parte del monto adeudado (capital, cargos e
              intereses y cuota de manejo) de la cuenta reportada al momento de
              la solicitud y/o cualquier otra cuenta o cuentas que sean
              registradas por ti, ya sea al momento de aceptación de las
              condiciones de utilización de nuestros productos o con
              posterioridad a través de la página de{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              o de correo electrónico u otro medio de información. Igualmente
              autorizas a que realicemos el débito automático de las sumas que
              se causen por concepto de intereses de mora, gastos de cobranza,
              los perjuicios establecidos en LA CLÁUSULA SÉPTIMA de este
              contrato y los costos que puedan surgir en caso de que no existan
              fondos suficientes en la cuenta o cuentas reportadas el día de la
              realización del débito aquí autorizado para cubrir la totalidad de
              tus obligaciones o no recibamos el pago por cualquiera otro de los
              medios de pago indicados en el punto 5.4 mencionado.{" "}
              <span className={classes.negrilla}>
                ENTIDAD BANCARIA: Bancolombia. NUMERO DE CUENTA:{" "}
                {usuario.numeroCuenta}. TITULAR DE LA CUENTA:{" "}
                {`${nombreDocumento} ${apellidoDocumento}`}.
              </span>{" "}
              En caso de no poder realizar el débito automático por no existir
              fondos depositados en la cuenta o cuentas autorizadas o
              adelantarse únicamente de manera parcial por no haber depósitos
              suficientes para cubrir la totalidad de las obligaciones,
              seguiremos realizando intentos de débito automático a la cuenta o
              cuentas hasta obtener la recuperación total de las obligaciones
              junto con todos los cargos que se mencionan en este punto.
              <br />
              5.8. Información Personal: Autorizas a{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              y a quien en el futuro ostente la calidad de acreedor para:
              <br />
              (1) Realizar ante los operadores de información (Datacrédito,
              Cifin, procredito operado por FENALCO y/o cualquier otra entidad
              que llegue a manejar bases de datos con los mismos objetivos), las
              siguientes actividades: (a) Reportar con fines estadísticos, de
              control, supervisión, evaluación de riesgos y demás que señalen
              las políticas de{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              y/o las normas vigentes colombianas, tus datos personales
              (incluyendo financieros y comerciales) y la información
              relacionada con el surgimiento de cualquier obligación, novedad,
              modificación, extinción, cumplimiento o incumplimiento de las
              obligaciones contraídas o que llegues a contraer en favor de{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              y b- Reportar cualquier otro dato que se estime pertinente con
              relación a la existencia de deudas vencidas sin cancelar o con la
              utilización indebida de los productos y/o servicios prestados u
              ofrecidos por{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>
              .
              <br />
              (2) Solicitar y consultar a los operadores de información tus
              datos (incluyendo financieros y comerciales) con el fin de: a -
              Obtener información referente a las relaciones comerciales
              establecidas con cualquier entidad financiera o comercial y b-
              Confirmar datos para iniciar o mantener una relación contractual.
              Como nuestro cliente entiendes que la permanencia de la
              información del dato positivo o negativo, según sea el caso, será
              la que la legislación señale.
              <br />
              (3) Igualmente, de manera expresa autorizas a{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              a utilizar, compartir e intercambiar con sus entidades filiales,
              matrices, aliadas y/o con entidades financieras, tu información
              personal contenida en las bases de datos de la entidad con fines
              de control de riesgos, comerciales, estadísticos y la realización
              de actividades de mercadeo de sus servicios y publicidad.
              <br />
              (4) Así mismo autorizas expresamente a{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              para que contrate con terceros localizados en Colombia o en el
              exterior, servicios relacionados con el procesamiento de tus datos
              con las finalidades autorizadas por este medio. Aceptas conocer
              que ese proceso puede implicar la recolección, archivo,
              procesamiento y transmisión de dicha información entre compañías
              vinculadas o relacionadas contractualmente con{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              localizadas dentro o fuera de Colombia. En todo caso, esas
              entidades estarán igualmente sujetas a las mismas obligaciones de
              confidencialidad en el manejo de la información a que está sujeto
              el{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              con las limitaciones legales impuestas por las leyes aplicables
              sobre la materia, en la jurisdicción donde ésta se recolecte,
              archive, procese o transmita.
              <br />
              (5) Autorizas expresamente a{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              para que te contacte con fines comerciales y promocionales ya sea
              sobre sus propios servicios y productos, o los de terceros con los
              que{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              tenga relaciones comerciales o alianzas, a través de correo,
              teléfono, celular, correo electrónico o cualquier otro medio
              conocido o por conocer, a través del cual se te pueda contactar.
              <br />
              5.9. Comentarios, artículos, fotos, videos y otros contenidos:
              Nuestra página de internet te permite en muchas ocasiones
              compartir comentarios, artículos, blogs y otros datos. Si entregas
              información de cualquiera de las formas mencionadas u otra
              permitida por nuestra página, los derechos de propiedad
              intelectual seguirán siendo tuyos y si incluyes cualquier tipo de
              información personal tuya o correspondiente a terceros tendrás que
              asegurarte de contar con todas las autorizaciones por parte de sus
              titulares, de tal manera que en{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              no nos haremos responsables por ninguno de los contenidos que
              entregues, aunque si nos reservamos los derechos para publicarlos
              o eliminarlos. Al subir contenido correspondiente a imágenes
              tuyas, comentarios, fotografías, videos etc., a nuestra página de
              internet o entregarlo por otros medios a{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              nos autorizas para presentarlo en nuestra página de internet,
              Facebook, Twitter y otros medios de comunicación y utilizarlos
              como parte de nuestras campañas comerciales o de mercadeo
              dirigidas al público en general a través de distintos medios de
              comunicación. Podrás ejercer tu habeas data incluyendo la
              posibilidad de solicitar la actualización, modificación o
              supresión de tu información ante{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              contactándote a través del siguiente correo electrónico:
              soporte@easycreditcolombia.com o número telefónico 3112384 en
              Medellín. Si deseas obtener mayor información acerca del
              tratamiento de tus datos personales y tus derechos sobre los
              mismos te recomendamos acceder a nuestro manual de manejo de
              información y política de privacidad publicada en la página de
              internet www.easycreditcolombia.com 5.10. Cambios en la
              información suministrada: Como cliente te comprometes a
              notificarnos de cualquier cambio en la información suministrada en
              el proceso de aplicación o durante la duración de la relación
              comercial entre las partes. En la página web de nuestra compañía
              tendrás la opción de modificar, actualizar o darte de baja.
              <br />
              <span className={classes.negrilla}>
                {" "}
                CLÁSULA SEXTA. VERACIDAD:{" "}
              </span>
              Mediante la aceptación del presente documento declaras que la
              información compartida con{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              es completa, actual y veraz, resultando de tu entera
              responsabilidad cualquier disconformidad entre los datos
              entregados y la realidad, bajo la premisa que en tal caso podrías
              convertirte en autor de los delitos de estafa, falsedad en
              documento privado y/o falsedad personal los cuales se encuentran
              penalizados de acuerdo con lo establecido al respecto por los
              artículos 246, 289 y 296 del Código Penal Colombiano. Así mismo,
              declaras que los recursos solicitados y objeto del contrato serán
              usados para fines lícitos y de ninguna manera para la comisión de
              cualquiera de los actos establecidos como delitos de acuerdo con
              la misma legislación penal.
              <br />
              <span className={classes.negrilla}>
                {" "}
                CLÁUSULA SÉPTIMA. PERJUICIOS:{" "}
              </span>
              En adición a las sanciones penales a las que te puedes ver avocado
              por los delitos mencionados en la CLÁUSULA SEXTA de este
              documento, en caso de no brindar a{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              información real y veraz, o no actualizarla dentro del transcurso
              de la vigencia de la relación comercial, se causan perjuicios a{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              que, para efectos de su tasación inicial y en adición a todos
              aquellos perjuicios que se establezcan dentro del proceso judicial
              correspondiente, ascienden valor correspondiente al cien por
              ciento (100%) de la suma adeudada por cualquier concepto más los
              impuestos generados por este concepto. Los perjuicios aquí
              estimados podrán ser cobrados junto con el capital, intereses
              remuneratorios, intereses de mora y demás gastos, incluidos los de
              cobranza, que surjan de la obligación bajo el entendido que los
              perjuicios aquí indicados y los otros cobros señalados no resultan
              incompatibles al tener surgimiento en dos situaciones
              perfectamente distinguibles, los unos de la falta de veracidad o
              actualidad de la información y los otros del contrato celebrado y
              sus costos conexos.
              <br />
              <span className={classes.negrilla}>
                {" "}
                CLÁUSULA OCTAVA. TRANSACCIONES ADICIONALES:{" "}
              </span>
              Entiendes y aceptas que el presente documento se entiende como
              formulario de vinculación a los servicios de{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              y que en tal virtud deberás leerlo cuidadosamente antes de
              aceptarlo a través de los medios electrónicos puestos a tu
              disposición para el efecto, así como que las condiciones para cada
              nueva transacción que realices deberás aceptarlas en su momento a
              través de la página web de{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              o del correo electrónico establecido por ti para el envío y
              recepción de comunicaciones. Cada vez que haya una modificación en
              el monto o plazo del cupo de crédito, o demás aspectos del
              presente acuerdo, las modificaciones serán puestas a tu
              consideración y se entenderán aceptadas con la utilización de
              cualquiera de nuestros servicios. No obstante las modificaciones
              que se realicen, los servicios y montos de crédito utilizados con
              anterioridad mantendrán las condiciones establecidas al momento de
              su aprobación y deberás cancelarlos de acuerdo con ellas. Nos
              reservamos el derecho a solicitarte y verificar información
              adicional de cualquier tipo, en cualquier momento durante el
              proceso de solicitud del crédito y hasta el momento de su
              desembolso.
              <br />
              <span className={classes.negrilla}>
                CLÁUSULA NOVENA. PODER OTORGADO POR EL DEUDOR PODER IRREVOCABLE
                PARA SUSCRIBIR PAGARÉ Y CARTA DE INSTRUCCIONES:{" "}
              </span>
              Mediante documento aparte, tu como DEUDOR otorgarás a{" "}
              <span className={classes.negrilla}>
                EASYCREDIT COLOMBIA S.A.S.
              </span>
              , poder especial irrevocable para suscribir y firmar en tu nombre
              uno o varios pagarés mientras existan las obligaciones derivadas
              de éste contrato, y para firmar, en tu nombre una o varias
              libranzas con tu presente o futuro empleador o fondo de pensiones,
              que garanticen el pago de las obligaciones por ti adquiridas
              dentro de nuestra plataforma de{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>{" "}
              CLÁUSULA DÉCIMA. DISPOSICIONES FINALES: Este es un contrato a
              distancia, enmarcado en la Ley de Comercio Electrónico 527 de
              1999. Como contraparte tu como DEUDOR aceptas que a través de los
              mecanismos electrónicos utilizados en la plataforma de{" "}
              <span className={classes.negrilla}>
                {" "}
                EASYCREDIT COLOMBIA S.A.S.
              </span>
              , suscribirás este contrato y que mediante el ingreso de los dos
              (2) códigos que se te envían separadamente por email y SMS, como
              mensaje de datos, tu como DEUDOR aceptas el contenido integral de
              este instrumento y que por tanto no te puedes oponer a lo aquí
              estipulado una vez lo aceptes. AL ACEPTAR LOS TÉRMINOS Y
              CONDICIONES DEL PRESENTE DOCUMENTO EL DEUDOR DECLARA QUE ACEPTA DE
              MANERA EXPRESA E INEQUIVOCA LOS TÉRMINOS Y CONDICIONES DEL CRÉDITO
              Y LAS DEMAS ESTIPULACIONES PREVISTAS EN ESTE ACUERDO. En
              constancia de haber leído, entendido y aceptado todo lo anterior.
            </Typography>
            <Grid item xs={12}>
              <Typography>
                EL DEUDOR firma mediante la inserción de los códigos únicos
                enviados al celular y a el correo electrónico registrados por EL
                DEUDOR, aceptando este documento de manera electrónica a través
                de la plataforma tecnológica en el sitio <br />
                https: // www. easycreditcolombia. com/admin_usuarios/login.{" "}
                <br />
              </Typography>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            {" "}
            PAGARÉ A LA ORDEN
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Ciudad , Fecha de Creación:{" "}
            <span className={classes.negrilla}>
              {fechaDesembolsadoDocumento}
            </span>
            . No. <span className={classes.negrilla}>{idDocumento}</span> por ${" "}
            <span className={classes.negrilla}>VALOR CREDITO</span>,
            identificados como aparece al pie de nuestras firmas declaramos:
            <br />
            <span className={classes.negrilla}>PRIMERA. OBJETO</span>- Que por
            virtud del PRESENTE TÍTULO VALOR PAGAREMOS INCONDICIONALMENTE, A LA
            ORDEN DE{" "}
            <span className={classes.negrilla}>EASYCREDIT COLOMBIA S.A.S.</span>
            , identificada con NIT 901.011.172-4 registrada en la Cámara de
            Comercio de Medellín, en la ciudad de Medellín en la dirección Calle
            44 No. 79-86 Of. 207, en las fechas de amortización por cuotas
            señaladas en la cláusula segunda de este mismo pagaré, la suma de{" "}
            <span className={classes.negrilla}>
              valor en letras ($_______________)
            </span>
            .
            <br />
            <span className={classes.negrilla}>SEGUNDA. PLAZO</span>- Que
            pagaremos la suma indicada en la cláusula anterior mediante cuotas
            (mensuales, quincenales, semanales) ______________ sucesivas
            correspondientes cada una a la cantidad de{" "}
            <span className={classes.negrilla}>
              valor en letras? ($_______________)
            </span>
            . La primera cuota se efectuará el día
            <span className={classes.negrilla}>____</span> de{" "}
            <span className={classes.negrilla}>____</span> de{" "}
            <span className={classes.negrilla}>____</span>.
            <br />
            <span className={classes.negrilla}>TERCERA. INTERESES</span>
            - Sobre las cuotas o instalamentos insolutos, se generará a partir
            de su vencimiento un interés moratorio del ______% (o la tasa máxima
            autorizada por la Superintendencia Bancaria).
            <br />
            <span className={classes.negrilla}>
              CUARTO. CLÁUSULA ACELERATORIA
            </span>
            - El tenedor podrá declarar insubsistente los plazos de esta
            obligación o de las cuotas que constituyen el saldo y exigir su pago
            inmediato judicial o extrajudicialmente en los siguientes casos: a)
            Cuando los deudores incumplan una cualquiera de las obligaciones
            derivadas del presente documento, y b) Cuando los deudores inicien
            trámite de liquidación obligatoria o voluntaria, se sometan a
            proceso concordatario o convoquen a concurso de acreedores.
            <br />
            <span className={classes.negrilla}>QUINTA. IMPUESTO DE TIMBRE</span>
            - Los gastos originados por concepto de impuesto de timbre correrán
            a cargo de los deudores.
            <br />
            <span className={classes.negrilla}>SEXTO. HONORARIOS</span>- En el
            evento de incumplir o quedar en mora con cualquiera de las
            obligaciones crediticias adquiridas en este título, acepto pagar los
            honorarios que se le generen a mi acreedor por concepto del cobro
            prejurídico o judicial que tenga que inciar en mi contra, así como
            los gastos y costas que se le generen por el retiro y/o
            actualización de las Bases de Datos en la que me encuentre reportado
            por causa de mi incumplimiento o mora.
            <span className={classes.negrilla}>
              EASY CREDIT COLOMBIA S.A.S
            </span>{" "}
            901.011.172-4
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            HOJA DE INSTRUCIONES
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <span className={classes.negrilla}>
              {`${nombreDocumento} ${apellidoDocumento}`}
            </span>
            , identificados como aparece al pie de nuestras firmas, autorizamos
            a <span className={classes.negrilla}>EASYCREDIT COLOMBIA SAS</span>{" "}
            con NIT número 901.011.172-4 para que, haciendo uso de las
            facultades conferidas en el articulo 622 del Código de Comercio,
            llene los espacios que se han dejado en blanco en
            _________________________(el pagaré o la letra de cambio) número
            _consecutivo______, para lo cual deberá ceñirse a las siguientes
            instrucciones: Autorizamos para que se llene el nombre del (los)
            deudor (es), domicilio, Cédula. El monto será igual al valor de
            todas las obligaciones exigibles que a cargo nuestro y en favor de
            _________________________ existan al momento de ser llenados los
            espacios. Los espacios en blanco se llenarán cuando ocurra una
            cualquiera de las siguientes circunstancias: Mora en el pago de las
            obligaciones de ______ o más cuotas. Cuando el pago mediante cheque
            salga sin suficientes fondos. La fecha será aquella en que se llenen
            los espacios en blanco. La ciudad será Medellín. Los interesés
            moratorios serán del 3% mensual, contados a partir de la
            completación del _________________ (pagaré o letra de cambio).
            Firmado en la ciudad de Medellín a los _____ días del mes de
            _____________ de ________. EASY CREDIT COLOMBIA S.A.S 901.011.172-4
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Pagare;
