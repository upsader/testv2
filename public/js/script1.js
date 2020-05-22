window.addEventListener('DOMContentLoaded', function() {
// jQuery-ui
$( "#switch" ).selectmenu({
    change: function( event, data ) {
        let formType = data.item.value;
        if (formType === 'DVD-disc') {
            $(".input-box-size").css("display", "block");
            $(".input-box-weight").css("display", "none");
            $(".input-box-whl").css("display", "none");
        } else if (formType === 'Book'){
            $(".input-box-weight").css("display", "block");
            $(".input-box-size").css("display", "none");
            $(".input-box-whl").css("display", "none");
        } else {
            $(".input-box-whl").css("display", "block");
            $(".input-box-size").css("display", "none");
            $(".input-box-weight").css("display", "none");
        }
    }
   });
});