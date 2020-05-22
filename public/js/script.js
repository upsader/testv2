window.addEventListener('DOMContentLoaded', function() {
    let itemDelete = document.querySelectorAll('.close'),
        products = document.querySelectorAll('.product-item');

        // plain JavaScript
        itemDelete.forEach(function(item, i){
            item.addEventListener('click', function() {
                products[i].remove();
            });
        });
        // jQuery
        function deleteAll() {
            $('.close-modal').click(function(){
                $('#modal').css('display', "none");
            });

            $('#btn1').click(function(){
                $('#modal').css('display', "block");
            });

            $('#btn2').click(function(){
                $('#modal').css('display', "none");
            });

            $('#btn3').click(function(){
                let checkbox = $('input[type="checkbox"]');
                let products = $('.product-item');
                for (let i=0; i < checkbox.length; i++){
                    if (checkbox[i].checked) {
                        products[i].remove();
                    }
                }
                $('#modal').css('display', "none");
            });
        }
        
        deleteAll();  
        
});
        

// let products = $('.product-item');
// for (let i = 0; i < products.length; i++ ) {
//         products.remove();
