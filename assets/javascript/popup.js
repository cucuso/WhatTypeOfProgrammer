function myfunction() {

    var listOfLanguages = ["Java", "C", "C++", "PHP", "C#", "Visual Basic", "Python", "Objective-C", "Perl", "Javascript", "Ruby"];
    var mostPopular = "not a programmer";
    var totalResults = 0;


    for (var i = 0, len = listOfLanguages.length; i < len; i++) {
        (function (i) {
            setTimeout(function () {

                chrome.history.search({
                    text: listOfLanguages[i],
                    maxResults: 500
                }, function (callback) {

                    var countOfResults = callback.length;
                    var langOfResults = listOfLanguages[i];


                    if (countOfResults > totalResults) {
                        totalResults = countOfResults;
                        mostPopular = langOfResults;
                    }

                    if (i == 10) {
                        var lang = mostPopular;
						console.log(mostPopular);

                        switch (lang) {
                        case "Java":
                            document.write('<img src="assets/images/java.png"/>');
                            break;						
                        case "C#":
                            document.write('<img src="assets/images/C#.jpg"/>');
                            break;
                        case "C":
                            document.write('<img src="assets/images/C.png"/>');
                            break;
                        case "C++":
                            document.write('<img src="assets/images/c++.png"/>');
                            break;
                        case "Objective-C":
                            document.write('<img src="assets/images/objectivec.png"/>');
                            break;
                        case "Perl":
                            document.write('<img src="assets/images/perl.gif"/>');
                            break;
                        case "PHP":
                            document.write('<img src="assets/images/php.png"/>');
                            break;
                        case "Python":
                            document.write('<img src="assets/images/python.jpg"/>');
                            break;
                        case "Ruby":
                            document.write('<img src="assets/images/ruby.png"/>');
                            break;
                        case "Visual Basic":
                            document.write('<img src="assets/images/vb.png"/>');

                        default:
                            document.write('<img src="assets/images/noprog.png"/>');

                        }




                    }

                });

            }, i * 1000);
        })(i);
    }



}




window.onload = myfunction;