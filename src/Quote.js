import { Component, useState } from "react";

const Quote = () => {
    const [quote, setQuote] = useState('An apple a day, keeps the doctor away.');

    const getQuotes = () => {
        fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(data => {
            let index = Math.floor(Math.random() * data.length);
            setQuote(data[index]);
        });
    }


    //const name = getName();
    return (
        <div className="Quote" id="quote-box">
            <p id="text">{quote.text}</p>
            <p id="author">{quote.author}</p>
            <div className="btnContainer" >
            <button id="new-quote" className="btn" onClick={getQuotes}>Get Quote</button>
            <a id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text=${quote.text}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
            >Tweet</a>
            </div>

        </div>
    )
}

export default Quote;