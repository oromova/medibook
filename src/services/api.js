const api = axios.create({
  baseURl: "https://686ca37214219674dcc896c0.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
})

export default api;