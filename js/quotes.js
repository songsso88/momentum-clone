const quotes = [
  {
    quote: "The wat to get started is to quit talking and begin 1",
    author: "Walt Disney1",
  },
  {
    quote: "The wat to get started is to quit talking and begin 2",
    author: "Walt Disney2",
  },
  {
    quote: "The wat to get started is to quit talking and begin 3",
    author: "Walt Disney3",
  },
  {
    quote: "The wat to get started is to quit talking and begin 4",
    author: "Walt Disney4",
  },
  {
    quote: "The wat to get started is to quit talking and begin 5",
    author: "Walt Disney5",
  },
  {
    quote: "The wat to get started is to quit talking and begin 6",
    author: "Walt Disney6",
  },
  {
    quote: "The wat to get started is to quit talking and begin 7",
    author: "Walt Disney7",
  },
  {
    quote: "The wat to get started is to quit talking and begin 8",
    author: "Walt Disney8",
  },
  {
    quote: "The wat to get started is to quit talking and begin 9",
    author: "Walt Disney9",
  },
  {
    quote: "The wat to get started is to quit talking and begin 10",
    author: "Walt Disney10",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNum = Math.random() * quotes.length;
const roundNum = Math.floor(randomNum);

quote.innerText = quotes[roundNum].quote;
author.innerText = quotes[roundNum].author;
