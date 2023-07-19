import { useState } from "react";
import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from './';


export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes/20"
  );
  const [quoteCounter, setQuoteCounter] = useState(0);
  const { author, quote } = !!data && data[quoteCounter];

  const handleNextQuote = () => {
    if (quoteCounter < data.length - 1) {
      setQuoteCounter(quoteCounter + 1);
    } else {
      // Si llega al final de las citas, puedes optar por mostrar un mensaje o reiniciar el contador.
      // Aquí, simplemente reiniciaremos el contador a 0.
      setQuoteCounter(0);
    }
  };

  return (
    <>
      <h1> BreakingBad Quotes </h1>
      <hr />

      {
      isLoading 
        ? < LoadingQuote />
        : < Quote author = { author } quote = { quote }/>
      }

      <button className="btn btn-primary" onClick={handleNextQuote}>
        Next Quote
      </button>
    </>
  );
};
