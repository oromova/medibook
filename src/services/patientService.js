import api from "./api";

export const getPatients = async () => {
  const response = await api.get("/patients");
  return response.data;
};

export const createPatient = async (newPatient) => {
  const response = await api.post("/patients", newPatient);
  return response.data;
}