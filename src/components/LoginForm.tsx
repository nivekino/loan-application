import { Button, CircularProgress } from "@mui/material";
import { Formik, Form } from "formik";
import { validationSchema } from "../utils/validations";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/Services";
import { CustomInput } from "./CustomInput";
import { toast } from "react-toastify";
import { useState } from "react";
import Logo from "../assets/images/logo.svg";

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const errorToastId: string = "login-error";

  const handleSubmit = async (values: {
    correoElectronico: string;
    password: string;
  }) => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await loginUser(values);
      login(response.token);

      toast.dismiss(errorToastId);

      toast.success("Inicio de sesión exitoso", {
        position: "bottom-right",
      });
      setLoading(false);
      navigate("/dashboard");
    } catch (error: unknown) {
      setLoading(false);

      if (!toast.isActive(errorToastId)) {
        toast.error(`${error}`, {
          toastId: errorToastId,
          position: "bottom-right",
        });
      }
    }
  };

  return (
    <div className="flex flex-col justify-center w-full h-[70vh] mx-auto p-5 lg:w-[75%] lg:p-0">
      <img src={Logo} alt="logo" className="w-[100px] h-auto mx-auto" />
      <h1 className="text-center mt-5 font-Roboto text-[#8C7A7A] font-[800] text-[24px]">
        Iniciar Sesión
      </h1>
      <Formik
        initialValues={{ correoElectronico: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form>
            <CustomInput
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

            <CustomInput
              id="password"
              name="password"
              label="Contraseña"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password ? errors.password : undefined}
              borderBottomColor="#98A2B3"
              borderBottomColorHover="#195DFA"
              borderBottomColorAfter="#195DFA"
              colorLabel="#101828"
              colorHelperText="#B32318"
              placeholder="Contraseña"
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                borderRadius: "8px",
                backgroundColor: "primary.main",
                color: "#fff",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "primary.dark",
                  boxShadow: "none",
                },
                "&.Mui-disabled": {
                  backgroundColor: "primary.main",
                  color: "#fff",
                },
              }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={20} sx={{ color: "white" }} />
              ) : (
                "Ingresar"
              )}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
