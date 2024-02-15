import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer GsmI-haKKM7suEeqoL3uNAEGd0qNjJlJHH5V69Uooi_yh9FdhkZDPLG4gjW8n5CXv8ADkUBRMkPo_M9ZTDzg3ST7UdE9kTuckpQ0gBW-KhmKBw5r7OUzsN4uxZ3NZXYx",
  },
});
