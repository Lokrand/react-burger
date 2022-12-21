import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";

export const fetchPassword = (email: string, redirect: VoidFunction) => {
  if (email.length > 0) {
    commonFetch(`${BASE_URL}/password-reset`, {
      method: "POST",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((data) => {
        if (data.success === true) {
          redirect();
        }
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }
};
