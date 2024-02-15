import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);

  const searchApi = async (searchTerm) => {
    const res = await yelp.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: "İstanbul",
      },
    });
    setResults(res.data.businesses);
  };
  useEffect(() => {
    searchApi("Toast");
  }, []);
  return [searchApi, results];
};