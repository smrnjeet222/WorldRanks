import { useState } from "react";
import CountryTable from "../components/CountryTable/CountryTable";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/home.module.scss";

const Home = ({ countries }) => {
  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <div className={styles.counts}>Found {countries.length} countries</div>

        <div className={styles.input}>
          <SearchInput
            placeholder="Filter by Name, Region or SubRegion"
            onChange={onInputChange}
          />
        </div>
      </div>

      <CountryTable countries={filteredCountries} />
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};

export default Home;
