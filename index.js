function appendNewShoppingItem() {
  // Maneja la adición de nuevos elementos
    $("#js-shopping-list-form").submit("click", function(e){
      // Previene el comportamiento predeterminado del formulario
      e.preventDefault();
      // Obtiene el valor del campo de entrada
      var inputVal = $(".js-shopping-list-entry").val();
      // Agrega un nuevo elemento a la lista
      $(".shopping-list").append("<li><span class='shopping-item'>" + inputVal + "</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>");
    });
  }
  
  function removeShoppingItem() {
    $(".shopping-list").on( "click", ".shopping-item-delete", function(event) {
      // Elimina el elemento de la lista
      $(this).closest("li").remove();
    });
  }
  
  function toggleCheckShoppingItem() {
    // Maneja el marcado/desmarcado de los elementos
    $(".shopping-list").on( "click", ".shopping-item-toggle", function(event) {
      // Alterna la clase "shopping-item__checked" para marcar/desmarcar
      $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });
  }
  
  $(function(){
    appendNewShoppingItem();
    removeShoppingItem();
    toggleCheckShoppingItem();
  })