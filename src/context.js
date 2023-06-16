import React, { useState, useEffect } from "react";

// create context
const DataContext = React.createContext();

// create provider component
function DataProvider({ children }) {
  // const [allSenators, setAllSenators] = useState([]);
  // const [allHouse, setAllHouse] = useState([]);
  const [allCongress, setAllCongress] = useState([]);
  const house = "https://api.propublica.org/congress/v1/118/house/members.json";
  const senate = "https://api.propublica.org/congress/v1/118/senate/members.json";
  const proPublicaHeader = {"X-API-Key": "tNm5YIP9zO7SCYymYDfjB73IRmhUzMmC8beETVXI", 
                             "Content-Type": "application/json",};
  let congressData = [];

    useEffect(() => {
      Promise.all([
        fetch(senate, {
          headers: {
            "X-API-Key": "tNm5YIP9zO7SCYymYDfjB73IRmhUzMmC8beETVXI",
            "Content-Type": "application/json",
         },
        }),
        fetch(house, {
          headers: {
            "X-API-Key": "tNm5YIP9zO7SCYymYDfjB73IRmhUzMmC8beETVXI",
            "Content-Type": "application/json",
          },
        }),
      ])
        .then(([resSenate, resHouse]) => 
          Promise.all([resSenate.json(), resHouse.json()])
        )
        .then(([dataSenate, dataHouse]) => {
          // console.log(dataSenate.results[0].members, dataHouse.results[0].members)
          // setAllSenators(dataSenate); //.results[0].members
          // setAllHouse(dataHouse);
          // congressData = [dataSenate.results[0].members, dataHouse.results[0].members].flat(1);
          setAllCongress([dataSenate.results[0].members, dataHouse.results[0].members].flat(1));

          // console.log(allCongress);
        });
      }, []);
      
      console.log(allCongress)


    // useEffect(() => {
    //   fetch(senate, {
    //     headers: {
    //       "X-API-Key": "tNm5YIP9zO7SCYymYDfjB73IRmhUzMmC8beETVXI",
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data.results[0].members)
    //     // setAllCongress(data);
    //   });
    // }, []);
    
    // console.log("From Context:" + allCongress)



    return (
        <DataContext.Provider value={allCongress}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext, DataProvider };