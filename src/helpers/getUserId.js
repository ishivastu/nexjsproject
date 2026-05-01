import jwt from "jsonwebtoken";

export const getUserId = async (request) => {
  try {
    const token = request.cookies.get("jwt")?.value || "";

    if (!token) return null;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return decoded.userId;
  } catch (error) {
    console.log(error.message);

    return null;
  }
};
