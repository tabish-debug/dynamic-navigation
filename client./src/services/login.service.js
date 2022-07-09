import axios from "axios";

class LoginServices {
  async rLogin() {
    const response = await axios.get("rLogin");
    return response.data;
  }
}

export default new LoginServices();
