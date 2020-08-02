document.addEventListener('DOMContentLoaded', () => {

const quoteList = [
    "All our dreams can come true, if we have the courage to pursue them", 
    "The secret of getting ahead is getting started",
    "The best time to plant a tree was 20 years ago. The second best time is now",
    "It’s hard to beat a person who never gives up",
    "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
    "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.",
    "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.",
    "Do what you feel in your heart to be right – for you’ll be criticized anyway."
]

const authorList = [
    "~ Walt Disney",
    "~ Mark Twain",
    "~ Old Chinese Proverb",
    "~ Babe Ruth",
    "~ Michele Ruiz",
    "~ Mary Kay Ash",
    "~ Michael Jordan",
    "~ Arianna Huffington",
    "~ Eleanor Roosevelt"
]

const quoteBtn = document.querySelector('#new-quote');

var firstDisplay = Math.floor(Math.random()*quoteList.length)
document.getElementById('text').innerHTML = quoteList[firstDisplay];
document.getElementById('author').innerHTML = authorList[firstDisplay];


quoteBtn.addEventListener('click',() => {
    var random = Math.floor(Math.random()*quoteList.length)
    document.getElementById('text').innerHTML = quoteList[random];
    document.getElementById('author').innerHTML = authorList[random];
})


})