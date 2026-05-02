const quotes = [
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
    },
    {
        text: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        text: "Knowledge is power.",
        author: "Sir Francis Bacon",
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
    },
    {
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
];

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const button = document.getElementById("newQuoteBtn");

button.addEventListener("click", function(){
    const randomIdx = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIdx];

    quoteText.innerText = `"${randomQuote.text}"`;
    quoteAuthor.innerText = `🖋️ ${randomQuote.author}`;
});