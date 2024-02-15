import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "İstanbul",
        },
      });
      setResults(res.data.businesses);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("bağlantı hatası");
    }
  };
  useEffect(() => {
    searchApi("Toast");
  }, []);
  return [searchApi, results, errorMessage];
};
