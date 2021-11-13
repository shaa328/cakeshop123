import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGM5NDNhMzMzNGYyZWEwYzRjMmVjMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjc0MzUzMywiZXhwIjoxNjM3MDAyNzMzfQ.fGaLviiFA9ao_c-AIAbEoJt0B4Yt7b-0hxmJgBqibYM";
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGM5NDNhMzMzNGYyZWEwYzRjMmVjMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjc0MzUzMywiZXhwIjoxNjM3MDAyNzMzfQ.fGaLviiFA9ao_c-AIAbEoJt0B4Yt7b-0hxmJgBqibYM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
