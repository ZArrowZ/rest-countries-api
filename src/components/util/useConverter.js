import { useMemo } from "react";
import useLocalStorage from "./useLocalStorage";

const useConverter = ({ countries, currCountry }) => {
  const [bordersNames, setBordersNames] = useLocalStorage("borders", []);
  let borders = [];
  useMemo(() => {
    for (let c = 0; c <= countries.length; c++) {
      currCountry.borders === countries[c]?.borders &&
        countries[c]?.borders?.forEach((border) => {
          for (let i = 0; i <= countries.length; i++) {
            border === countries[i]?.alpha3Code &&
              borders.push(countries[i].name);
            setBordersNames(borders);
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currCountry]);
  return bordersNames;
};

export default useConverter;
