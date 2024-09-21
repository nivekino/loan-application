import { Box, SelectChangeEvent } from "@mui/material";
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
import { CustomPhoneInput } from "./CustomPhoneInput";
import { departamentos, municipios } from "../utils/dataContry";
import FileUpload from "./FileUpload";
import SelfieCapture from "./SelfieCapture";

const RegisterForm = () => {
  // const [loading, setLoading] = useState<boolean>(false);
  const [mask, setMask] = useState<string>("");
  const [selectedDepartamento, setSelectedDepartamento] = useState<string>("");
  const [filteredMunicipios, setFilteredMunicipios] = useState<
    { label: string; value: string }[]
  >([]);

  console.log(selectedDepartamento);

  const handleDepartamentoChange = (event: SelectChangeEvent<unknown>) => {
    const selectedValue = event.target.value as string;
    setSelectedDepartamento(selectedValue);
    setFilteredMunicipios(municipios[selectedValue] || []);
  };

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
    const formData = new FormData();

    // Append all the text fields to FormData
    formData.append("nombres", values.nombres);
    formData.append("apellidos", values.apellidos);
    formData.append("correoElectronico", values.correoElectronico);
    formData.append("numeroTelefono", values.numeroTelefono);
    formData.append("tipoIdentificacion", values.tipoIdentificacion);
    formData.append("numeroIdentificacion", values.numeroIdentificacion);
    formData.append("departamento", values.departamento);
    formData.append("municipio", values.municipio);
    formData.append("direccion", values.direccion);
    formData.append("ingresosMensuales", values.ingresosMensuales);
    formData.append("selfie", values.selfie);
    values.documentoIdentidad.forEach((file) => {
      formData.append("documentoIdentidad", file);
    });

    try {
      console.log("Form Data: ", formData);
      const response = await createCredit(formData);
      console.log("response", response);
      toast.dismiss(errorToastId);
      toast.success("Registro exitoso", {
        position: "bottom-right",
      });
    } catch (error: unknown) {
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
              as={CustomPhoneInput}
              id="numeroTelefono"
              name="numeroTelefono"
              label="Número de teléfono"
              value={values.numeroTelefono}
              onChange={(value: string) =>
                setFieldValue("numeroTelefono", value)
              }
              onBlur={handleBlur}
              error={touched.numeroTelefono && Boolean(errors.numeroTelefono)}
              helperText={
                touched.numeroTelefono ? errors.numeroTelefono : undefined
              }
              borderBottomColor="#98A2B3"
              borderBottomColorHover="#195DFA"
              borderBottomColorAfter="#195DFA"
              colorLabel="#101828"
              colorHelperText="#B32318"
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

            <Field
              as={CustomSelect}
              id="departamento"
              name="departamento"
              label="Departamento"
              value={values.departamento}
              onChange={(e: SelectChangeEvent<unknown>) => {
                setFieldValue("departamento", e.target.value);
                handleDepartamentoChange(e);
              }}
              onBlur={handleBlur}
              error={touched.departamento && Boolean(errors.departamento)}
              helperText={
                touched.departamento ? errors.departamento : undefined
              }
              options={departamentos}
              borderBottomColor="#98A2B3"
              borderBottomColorHover="#195DFA"
              borderBottomColorAfter="#195DFA"
              colorLabel="#101828"
              colorHelperText="#B32318"
            />

            <Field
              as={CustomSelect}
              id="municipio"
              name="municipio"
              label="Municipio"
              value={values.municipio}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.municipio && Boolean(errors.municipio)}
              helperText={touched.municipio ? errors.municipio : undefined}
              options={filteredMunicipios}
              borderBottomColor="#98A2B3"
              borderBottomColorHover="#195DFA"
              borderBottomColorAfter="#195DFA"
              colorLabel="#101828"
              colorHelperText="#B32318"
              placeholder="Seleccionar municipio"
            />

            <Field
              as={CustomInput}
              id="direccion"
              name="direccion"
              label="Dirección"
              value={values.direccion}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.direccion && Boolean(errors.direccion)}
              helperText={touched.direccion ? errors.direccion : undefined}
              borderBottomColor="#98A2B3"
              borderBottomColorHover="#195DFA"
              borderBottomColorAfter="#195DFA"
              colorLabel="#101828"
              colorHelperText="#B32318"
              placeholder="Ingresar dirección"
            />

            <Field
              as={CustomInput}
              id="ingresosMensuales"
              name="ingresosMensuales"
              label="Ingresos mensuales"
              type="number"
              value={values.ingresosMensuales}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.ingresosMensuales && Boolean(errors.ingresosMensuales)
              }
              helperText={
                touched.ingresosMensuales ? errors.ingresosMensuales : undefined
              }
              borderBottomColor="#98A2B3"
              borderBottomColorHover="#195DFA"
              borderBottomColorAfter="#195DFA"
              colorLabel="#101828"
              colorHelperText="#B32318"
              placeholder="$0.00"
            />

            <FileUpload setFieldValue={setFieldValue} />

            <Field
              component={SelfieCapture}
              name="selfie"
              setFieldValue={setFieldValue}
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
