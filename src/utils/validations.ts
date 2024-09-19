import * as Yup from "yup";

export const validationSchema = Yup.object({
  correoElectronico: Yup.string()
    .email("Correo inválido")
    .required("Campo requerido*"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Campo requerido*"),
});
