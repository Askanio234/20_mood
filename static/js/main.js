  $(document).ready(function() {

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
      },
      {
        "phrase": "Приходит программист к окулисту. Тот его усаживает напротив таблицы, берет указку: — Читайте! — БНОПНЯ... Доктор, у вас что—то не то с кодировкой!"
      },
      {
        "phrase": "Тонет программист. И во все горло орет: — F1, F1, F1, тьфу ты, помогите, помогите, помогите!!!"
      }
    ]

  var randomQuote;
  var randomNum;
  var author;
  getQuote();

  function getQuote() {
    randomNum = Math.floor(Math.random()*jokes.length);
    randomJoke = jokes[randomNum];
    randomQuote = randomJoke.phrase;

    if ("signature" in randomJoke) {
      author = randomJoke.signature

    } else {
      author = ""

    }

    $(".js-quote").text(randomQuote);
    $(".js-author").text(author);
  }

  function fixedEncodeURIComponent (str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16);

    });
  }

  $('#js-tweet').on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + fixedEncodeURIComponent(randomQuote) + " " + fixedEncodeURIComponent(author));

  });
    
  $("#js-newQuote").on("click", function() {
    getQuote();

  });
});