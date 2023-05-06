import { useEffect, useState, useCallback } from "react";
import { AppStyled } from "./AppStyles";
import axios from "axios";
import moment from "moment";
import defaultimage from "./default.jpg";

const App = (): JSX.Element => {
  const [sports, setSports] = useState<string[]>([]);
  const currentDate = moment().format("DD MMMM");
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
    <AppStyled>
      <div className="header">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.3125 15H4.6875 M13.125 6.5625L4.6875 15L13.125 23.4375"
            stroke="#232232"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div className="body">
        <h1 className="body__title">History</h1>
        <p className="body__text--one">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="body__text--two">{currentDate}</p>
        {sports.map((sport, i) => (
          <div className="hisory__sport">
            <div className="hisory__sport__img__container">
              <img
                className="hisory__sport__img"
                src={defaultimage}
                alt="wea"
              />
              <p className="hisory__sport__name">{sport}</p>
            </div>
            <div className="hisory__sport__icon">
              <svg
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.4941 0.000190155C17.2455 0.000190155 17.9958 0.106181 18.7092 0.345553C23.1048 1.77464 24.6887 6.59782 23.3656 10.8136C22.6153 12.968 21.3887 14.9342 19.7822 16.5407C17.4825 18.7677 14.959 20.7446 12.2425 22.4476L11.9448 22.6274L11.6352 22.4357C8.9092 20.7446 6.37137 18.7677 4.05029 16.5288C2.45448 14.9223 1.22665 12.968 0.464473 10.8136C-0.881252 6.59782 0.702655 1.77464 5.14593 0.320544C5.49129 0.201454 5.84737 0.11809 6.20465 0.0716446H6.34755C6.6822 0.0228174 7.01446 0.000190155 7.34792 0.000190155H7.47892C8.22919 0.0228174 8.95564 0.153817 9.65947 0.39319H9.72973C9.77737 0.415817 9.81309 0.440826 9.83691 0.463453C10.1001 0.548008 10.349 0.64328 10.5872 0.77428L11.0397 0.976734C11.1491 1.03506 11.2718 1.12417 11.3779 1.20119C11.4451 1.24998 11.5056 1.29392 11.5518 1.3221C11.5713 1.33356 11.591 1.34509 11.6109 1.35672C11.713 1.41632 11.8194 1.47842 11.9091 1.54718C13.2322 0.536098 14.8387 -0.0117189 16.4941 0.000190155ZM19.6619 8.57505C20.1501 8.56195 20.5669 8.17014 20.6027 7.66877V7.52705C20.6384 5.85859 19.6273 4.34733 18.0899 3.76379C17.6016 3.59587 17.0657 3.85906 16.887 4.35924C16.7203 4.85942 16.9823 5.40724 17.4825 5.58468C18.2459 5.8705 18.7568 6.62196 18.7568 7.45441V7.49133C18.7341 7.76404 18.8163 8.02724 18.983 8.22969C19.1498 8.43214 19.3999 8.55004 19.6619 8.57505Z"
                  fill="#2067F8"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div>navigation bar</div>
    </AppStyled>
  );
};

export default App;
