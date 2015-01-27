var templates={};
  templates.listing=[
    "<article>",
    "<h1><%= name %></h1>",
    "<img src=\"<%= image %>\"/>",
    "<button>Buy now! <%= price %></button>",
    "<p><%= description %></p>",
    "</article>"
  ].join("");
