import { useEffect, useState } from "react";


//the main API that is used to convert the currency
let apiUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

function useCurrency(currency){

        const [data, setData] = useState({});

        useEffect( () => {

                //fetch API
                fetch(apiUrl)

                //the data which comes is string, we have to convert it into JSON
                .then( (res) => res.json() )

                //saving the value of the res.json() using useState and setData()
                .then( (res) => setData(res[currency]) )
                console.log(data);

        }, [currency] )

        console.log(data);

        return data;

}

export default useCurrency;