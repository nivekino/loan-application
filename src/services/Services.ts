import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const loginUser = async (data: {
  correoElectronico: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error en la solicitud:", error.response?.data);
      throw new Error(
        error.response?.data.message || "Error en el inicio de sesión"
      );
    }
    throw new Error("Error desconocido");
  }
};

export const getAllCredits = async (token: string) => {
  try {
    const limit: number = 100;
    const response = await axios.get(`${baseUrl}/credits`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: limit,
      },
    });

    const credits = response.data;

    return credits;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error en la solicitud:", error.response?.data);
      throw new Error(
        error.response?.data.message || "Error al obtener los créditos"
      );
    }
    throw new Error("Error desconocido");
  }
};

export const getCreditById = async (token: string, id: string) => {
  try {
    const response = await axios.get(`${baseUrl}/credits/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const credits = response.data;

    return credits;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error en la solicitud:", error.response?.data);
      throw new Error(
        error.response?.data.message || "Error al obtener los créditos"
      );
    }
    throw new Error("Error desconocido");
  }
};
