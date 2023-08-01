import axios from "axios";

const BASE_URL = "https://64ac30839edb4181202f410a.mockapi.io";

const usersAPI = axios.create({ baseURL: BASE_URL });

export const fetchAllUsers = async () => {
  const response = await usersAPI.get("/users");

  return response.data;
};

export const updateFollowers = async ({ id, updatedFollowers, isFollowed }) => {
  const response = await usersAPI.put(`/users/${id}`, {
    followers: updatedFollowers,
    isFollowed,
  });

  return response;
};
