import React, { useState, useEffect } from "react";

// create context
const DataContext = React.createContext();

// create provider component
function DataProvider({ children }) {
  const [allCongress, setAllCongress] = useState([]);
  const house = "https://api.propublica.org/congress/v1/117/house/members.json";
  const senate = "https://api.propublica.org/congress/v1/117/senate/members.json";
  const localApi = "http://localhost:3000/members";

  useEffect(() => {
    fetch(localApi, {
        headers: {
          // "X-API-Key": "tNm5YIP9zO7SCYymYDfjB73IRmhUzMmC8beETVXI",
          "Content-Type": "application/json",
        },
     })
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((data) => setAllCongress(data))

    // Promise.all([
    //   fetch(senate, {
    //     headers: {
    //       "X-API-Key": "tNm5YIP9zO7SCYymYDfjB73IRmhUzMmC8beETVXI",
    //       "Content-Type": "application/json",
    //     },
    //   }),
    //   fetch(house, {
    //     headers: {
    //       "X-API-Key": "tNm5YIP9zO7SCYymYDfjB73IRmhUzMmC8beETVXI",
    //       "Content-Type": "application/json",
    //     },
    //   }),
    // ])
    //   .then(([resSenate, resHouse]) => 
    //     Promise.all([resSenate.json(), resHouse.json()])
    //   )
    //   .then(([dataSenate, dataHouse]) => {
    //     setAllCongress([dataSenate.results[0].members, dataHouse.results[0].members].flat(1));
    //   });
  }, []);
      
    return (
        <DataContext.Provider value={allCongress}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext, DataProvider };