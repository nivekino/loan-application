import { Box } from "@mui/material";
import { Formik, Field, Form } from "formik";
import Logo from "../assets/images/logo.svg";
import { CustomInput } from "./CustomInput";
import { CustomSelect } from "./CustomSelect";
import { useState } from "react";
import { ICredit } from "../interfaces/Icredit";
import { createCredit } from "../services/Services";
import { toast } from "react-toastify";
import { validationSchemaCredit } from "../utils/validations";
import { CustomInputMask } from "./CustomInputMask";

const RegisterForm = () => {
  // const [loading, setLoading] = useState<boolean>(false);
  const [mask, setMask] = useState<string>("");

  const errorToastId: string = "login-error";
  const titleTitle: string = "text-Roboto text-[24px] font-[500]";

  const handleMaskChange = (identificationType: string) => {
    switch (identificationType) {
      case "DUI":
        setMask("00000000-0");
        break;
      case "NIT":
        setMask("0000-000000-000-0");
        break;
      case "Pasaporte":
        setMask("*********");
        break;
      default:
        setMask("");
    }
  };

  const initialValues: ICredit = {
    nombres: "",
    apellidos: "",
    correoElectronico: "",
    numeroTelefono: "",
    tipoIdentificacion: "",
    numeroIdentificacion: "",
    departamento: "",
    municipio: "",
    direccion: "",
    ingresosMensuales: "",
    selfie: new Blob(),
    documentoIdentidad: [],
  };

  const handleSubmit = async (values: ICredit) => {
    try {
      // setLoading(true);
      const response = await createCredit(values);
      console.log("response", response);
      toast.dismiss(errorToastId);
      toast.success("Registro exitoso", {
        position: "bottom-right",
      });
      // setLoading(false);
    } catch (error: unknown) {
      // setLoading(false);

      if (!toast.isActive(errorToastId)) {
        toast.error(`${error}`, {
          toastId: errorToastId,
          position: "bottom-right",
        });
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaCredit}
      onSubmit={handleSubmit}
    >
      {({
        errors,
        touched,
        handleChange,
        handleBlur,
        values,
        setFieldValue,
      }) => (
        <Form>
          <Box>
            <img src={Logo} alt="logo" className="w-[100px] h-auto mx-auto" />
            <h2 className={titleTitle}>Registro</h2>

            <Field
              as={CustomInput}
              id="nombres"
              name="nombres"
              label="Nombres"
              value={values.nombres}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.nombres && Boolean(errors.nombres)}
              helperText={touched.nombres ? errors.nombres : undefined}
              borderBottomColor="#98A2B3"
              borderBottomColorHover="#195DFA"
              borderBottomColorAfter="#195DFA"
              colorLabel="#101828"
              colorHelperText="#B32318"
              placeholder="Ingresar nombres"
            />

            <Field
              as={CustomInput}
              id="apellidos"
              name="apellidos"
              label="Apellidos"
              value={values.apellidos}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.apellidos && Boolean(errors.apellidos)}
              helperText={touched.apellidos ? errors.apellidos : undefined}
              borderBottomColor="#98A2B3"
              borderBottomColorHover="#195DFA"
              borderBottomColorAfter="#195DFA"
              colorLabel="#101828"
              colorHelperText="#B32318"
              placeholder="Ingresar apellidos"
            />

            <Field
              as={CustomInput}
              id="correoElectronico"
              name="correoElectronico"
              label="Correo"
              value={values.correoElectronico}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.correoElectronico && Boolean(errors.correoElectronico)
              }
              helperText={
                touched.correoElectronico ? errors.correoElectronico : undefined
              }
              borderBottomColor="#98A2B3"
              borderBottomColorHover="#195DFA"
              borderBottomColorAfter="#195DFA"
              colorLabel="#101828"
              colorHelperText="#B32318"
              placeholder="ejemplo@gmail.com"
            />

            <Field
              as={CustomSelect}
              id="tipoIdentificacion"
              name="tipoIdentificacion"
              label="Tipo de identificación"
              placeholder="Seleccionar"
              value={values.tipoIdentificacion}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("tipoIdentificacion", e.target.value);
                handleMaskChange(e.target.value);
              }}
              onBlur={handleBlur}
              error={
                touched.tipoIdentificacion && Boolean(errors.tipoIdentificacion)
              }
              helperText={
                touched.tipoIdentificacion
                  ? errors.tipoIdentificacion
                  : undefined
              }
              options={[
                { label: "DUI", value: "DUI" },
                { label: "NIT", value: "NIT" },
                { label: "Pasaporte", value: "Pasaporte" },
              ]}
              borderBottomColor="#98A2B3"
              borderBottomColorHover="#195DFA"
              borderBottomColorAfter="#195DFA"
              colorLabel="#101828"
              colorHelperText="#B32318"
            />

            <Field
              as={CustomInputMask}
              id="numeroIdentificacion"
              name="numeroIdentificacion"
              label="Número de identificación"
              value={values.numeroIdentificacion}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("numeroIdentificacion", event.target.value);
              }}
              onBlur={handleBlur}
              error={
                touched.numeroIdentificacion &&
                Boolean(errors.numeroIdentificacion)
              }
              helperText={
                touched.numeroIdentificacion
                  ? errors.numeroIdentificacion
                  : undefined
              }
              mask={mask}
              placeholder="Ingrese el número de identificación"
              borderBottomColor="#98A2B3"
              borderBottomColorHover="#195DFA"
              borderBottomColorAfter="#195DFA"
              colorLabel="#101828"
              colorHelperText="#B32318"
            />

            <button type="submit" className="btn-submit">
              Registrar
            </button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
