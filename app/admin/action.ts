import { JWT_CONFIG } from "@/config/jwt";
import axios from "axios";
import { cookies } from "next/headers";

export const getUsers = async () => {
  const token = (await cookies()).get(JWT_CONFIG.cookie.name)?.value;
  const users = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/api/users",
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return users.data.result;
};
    