import axios from "axios";

export const getRandomGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/greetings/random");
      dispatch({ type: "SET_GREETING", payload: response.data.greeting });
    } catch (error) {
      console.error("Error fetching random greeting:", error);
    }
  };
};
