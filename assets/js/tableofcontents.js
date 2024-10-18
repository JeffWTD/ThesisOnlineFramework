// Get all headings
var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

// Create TOC container
var toc = document.getElementById("thesis-toc");

if (toc !== null) {


    // Iterate over headings
    for (var i = 0; i < headings.length; i++) {
        var heading = headings[i];

        // Create TOC list item
        var li = document.createElement("li");

        if (heading.tagName === 'H1')
            li.classList.add("thesis-toc-h1");
        else if (heading.tagName === 'H2')
            li.classList.add("thesis-toc-h2");
        else if (heading.tagName === 'H3')
            li.classList.add("thesis-toc-h3");

        li.innerHTML = heading.textContent;

        // Add hyperlink to TOC list item
        var link = document.createElement("a");
        link.href = "#" + heading.id;
        link.appendChild(li);

        // Add TOC list item to TOC container
        toc.appendChild(link);
    }
}