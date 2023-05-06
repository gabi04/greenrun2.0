import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { HistoryStyles } from "./HistoryStyles";
import moment from "moment";
import Sport from "./Sport";
import LeftArrow from "../../svgs/LeftArrow";

const History = (): JSX.Element => {
  const currentDate = moment().format("DD MMMM");
  const [sports, setSports] = useState<string[]>([]);

  //TODO revisar que no este llamando de nuevo a servidor en el re render
  const getSports = useCallback(() => {
    axios
      .get("https://www.thesportsdb.com/api/v1/json/3/all_leagues.php")
      .then((response) => {
        const sports_aux: string[] = [];
        response.data.leagues.forEach((league: any) => {
          if (!sports_aux.includes(league.strSport)) {
            sports_aux.push(league.strSport);
          }
        });
        setSports(sports_aux);
      })
      .catch(function (error) {
        console.error("getSports error => ", error);
      });
  }, []);

  useEffect(() => {
    getSports();
  }, [getSports]);

  return (
    <HistoryStyles>
      <LeftArrow />
      <h1 className="history__title">History</h1>
      <p className="history__text--one">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p className="history__text--two">{currentDate}</p>
      {/* TODO loader */}
      {sports.map((sport, i) => (
        <Sport sport={sport} i={i} />
      ))}
    </HistoryStyles>
  );
};

export default History;
