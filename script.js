const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote')
const authorEl = document.getElementById('author')
const apiUrl = 'https://api.quotable.io/random';


async function getQuote(){
   const response = await fetch(apiUrl);
   const data = await response.json()
   const quoteContent = data.content;
   const authorQuote = data.author;
   quoteEl.innerText = quoteContent;
   authorEl.innerText = authorQuote;
   
}

btnEl.addEventListener('click',getQuote)