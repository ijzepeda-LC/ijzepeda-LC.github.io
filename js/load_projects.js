// create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// open the file
xhr.open('GET', '../project_list.txt', true);

// set the response type to plain text
xhr.responseType = 'text';

// handle the response
xhr.onload = function() {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        // split the response text into an array of URLs
        var urls = xhr.responseText.split('\n');

        // get a reference to the list element
        var list = document.getElementById('urlList');

        // loop through the URLs and add them to the list
        urls.forEach(function(url) {
            // split the URL into the link name and URL link
            var linkParts = url.split('|');
            var linkName = linkParts[0];
            var linkUrl = linkParts[1];

            // create the list item HTML
            var listItem = '<li>' +
                '<div class="list_inner">' +
                '<div class="details">' +
                '<div class="extra">' +
                '<div class="short">' +
                '<p class="date">By <a href="#">Ivan Zepeda</a> <span>2023</span></p>' +
                '</div>' +
                '</div>' +
                '<h3 class="title"><a href="' + linkUrl + '">' + linkName + '</a></h3>' +
                '<div class="">' +
                '<a href="' + linkUrl + '"><span>GitHub: ' + linkName + '</span></a>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</li>';

            // add the list item to the list
            list.innerHTML += listItem;
        });
    }
};

// send the request
xhr.send();
