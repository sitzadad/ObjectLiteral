var foo={
  init:function(){
    foo.addAllProducts(products);
  },
  addProduct:function(myObject){
    var compiled=_.template(templates.listing);
    $("section").append(compiled(myObject));
    //This works identical to template code (above two lines)
    // $("section").append(
      // "<article>"
      // +"<h1>"+myObject.name+"</h1>"
      // +"<img src=\""+myObject.image+"\"/>"
      // +"<button>"+"Buy now! "+myObject.price+"</button>"
      // +"<p>"+myObject.description+"</p>"
      // +"</article>"
    // );
  },
  addAllProducts:function(myArray){
    _.each(myArray,foo.addProduct);
  }
};

$(document).ready(function(){
  foo.init();
  var bar=$("img").css("width");
  $("img").css("height",bar);

});
