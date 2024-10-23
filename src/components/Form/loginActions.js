// src/components/Form/loginActions.js
import { handleLogin } from "../../api/firebase";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const { user } = await handleLogin(email, password);
    return {
      type: "SUCCESS",
      email: user.email,
      id: user.uid
    };
  } catch (error) {
    return {
      type: "ERROR",
      message: error.message
    };
  }
}