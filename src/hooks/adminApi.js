import { api } from "../lib/api";

export const createTask = async (task) => {
  try {
    const res = await api.post("/task/create", task);
    return res
  } catch (error) {
    console.log(error)
    throw error?.res?.data?.detail;
  }
};
