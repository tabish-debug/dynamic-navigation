import axios from "axios";

class OtherServices {
  async rFetchExperiments() {
    const response = await axios.get("rFetchExperiments");
    return response.data;
  }
  async rSubmitSelection() {
    const response = await axios.get("rSubmitSelection");
    return response;
  }
}

export default new OtherServices();
