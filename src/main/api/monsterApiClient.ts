import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
});

export async function getMonster(id: string) {
  const response = await api.get(`/monster/${id}`);
  return response.data;
}

export async function feedMonster(id: string) {
  const response = await api.get(`/monster/feed/${id}`);
  return response.data;
}

export async function restMonster(id: string) {
  const response = await api.get(`/monster/sleep/${id}`);
  return response.data;
}

export async function playMonster(id: string) {
  const response = await api.get(`/monster/play/${id}`);
  return response.data;
}
