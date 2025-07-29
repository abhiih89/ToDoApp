import React, { useState, useEffect } from "react";

function Quotes (){
    const [quotes, setQuotes] =useState([]);
    
    useEffect(() => {
        fetch('https://api.api-ninjas.com/v1/quotes?category=life' , {
            headers: {
                'X-Api-Key' : 'DljCtdJDbvj+U/Q7KTgWrg==oprOs7yerzGVMIGe'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("fetch quotes:" , data); 
            setQuotes(data);
        })
        .catch((err) => {
            console.error("error fetching quotes:", err);
        });
    }, []);

   return(
    <div>
        <h2>Quote of the day</h2>
        {quotes.length > 0 ? (
        <div>
            <p><strong>"{quotes[0].quote}"</strong></p>
            <p>- {quotes[0].author}</p>
        </div>
    ) : (
    <p>Loading...</p>
    )}

    </div>
   );
}
export default Quotes;