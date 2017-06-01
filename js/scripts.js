$(document).ready(function(){
    var randomQuote = "Arise Awake Stop Not Till the Goal Has been Reached";
   $("#quoteFinder").click(function(){
     $.ajax({
        type: "GET",
        url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
        contentType: "application/jsonp; charset=utf-8",
        async: false,
        dataType: "jsonp",
        success: function (data, textStatus, jqXHR) {
            console.log(data["quoteText"]);
            console.log(data["quoteAuthor"]);
            randomQuote = data["quoteText"];
            $("#quoteText").html(data["quoteText"]);
            $("#quoteAuthor").html(data["quoteAuthor"]);
            
        }

        });
   });
   $("#twitterPost").click(function(){
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + randomQuote);
    $(this).attr("target",'_blank');
   });
});