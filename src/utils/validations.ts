import * as Yup from "yup";

export const validationSchema = Yup.object({
  correoElectronico: Yup.string()
    .email("Correo inválido")
    .required("Campo requerido*"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Campo requerido*"),
});

export const validationSchemaCredit = Yup.object({
  nombres: Yup.string()
    .required("Nombres es un campo requerido")
    .min(2, "Nombres debe tener al menos 2 caracteres")
    .max(50, "Nombres no puede exceder los 50 caracteres"),
  apellidos: Yup.string()
    .required("Apellidos es un campo requerido")
    .min(2, "Apellidos debe tener al menos 2 caracteres")
    .max(50, "Apellidos no puede exceder los 50 caracteres"),
  correoElectronico: Yup.string()
    .email("Correo inválido")
    .required("Correo es un campo requerido"),
  tipoIdentificacion: Yup.string().required(
    "Tipo de identificación es un campo requerido"
  ),
  numeroIdentificacion: Yup.string().when(
    "tipoIdentificacion",
    (tipoIdentificacion, schema) => {
      if (typeof tipoIdentificacion !== "string") {
        return schema;
      }

      if (tipoIdentificacion === "DUI") {
        return schema
          .matches(/^\d{8}-\d{1}$/, "El DUI debe seguir el formato 00000000-0")
          .required("Número de identificación es requerido para DUI");
      }

      if (tipoIdentificacion === "NIT") {
        return schema
          .matches(
            /^\d{4}-\d{6}-\d{3}-\d{1}$/,
            "El NIT debe seguir el formato 0000-000000-000-0"
          )
          .required("Número de identificación es requerido para NIT");
      }

      if (tipoIdentificacion === "Pasaporte") {
        return schema
          .matches(
            /^[a-zA-Z0-9]{9}$/,
            "El pasaporte debe tener 9 caracteres alfanuméricos"
          )
          .required("Número de identificación es requerido para pasaporte");
      }
      
      return schema.required("Número de identificación es requerido");
    }
  ),
});
