  $(document).ready(function(){
  var randomQuote;
  var randomNum;
  var author;
  getQuote();
function getQuote(){
   var jokes = [
      {
        "phrase": "Кукурузные хлопья - теперь без асбеста!",
        "signature": "©Неизвестный маркетолог"
      },
      {
        "phrase": "Собираюсь жить вечно, пока всё идёт нормально"
      },
      {
        "phrase": "Вывеска над кафе — '\u003cМы открылись\u003e'. Что-то не так. Где же '\u003c/Мы открылись\u003e'?"
      },
      {
        "phrase": "Если ты будешь усердно работать по 8 часов в день, то обязательно станешь боссом и начнешь работать по 12"
      }
    ]

    randomNum = Math.floor(Math.random()*jokes.length);
   randomJoke = jokes[randomNum]
   randomQuote = randomJoke.phrase
   if ("signature" in randomJoke) {
    author = randomJoke.signature
   } else {
    author = ""
   }
  $(".quote").text(randomQuote);
    $(".author").text(author);

 

}
    $('#tweet').on("click",function(){
    window.open("https://twitter.com/intent/tweet?text="+randomQuote + " " + author );
  });
    
  $("#newQuote").on("click", function(){
    getQuote();
  });
  

});