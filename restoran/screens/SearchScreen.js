import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useresults from "../hooks/useresults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [term, setTerm] = useState("");

  const [searchApi, results, errorMessage] = useresults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results.length === 0 ? (
        <></>
      ) : (
        <>
          <ResultsList
            title="Ucuz Restoranlar"
            results={filterResultsByPrice("₺")}
          />
          <ResultsList
            title="Uygun Restoranlar"
            results={filterResultsByPrice("₺₺")}
          />
          <ResultsList
            title="Pahalı Restoranlar"
            results={filterResultsByPrice("₺₺₺")}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
