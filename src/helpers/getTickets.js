import { ticketApi } from "../api";

export const getTickets = async () => {
  const res = await ticketApi.get("/api/tickets");
  console.log(res);
  return res.data.ultimos;
};
