$(function() {
        // get initial top offset of navigation 
        var floating_navigation_offset_top = $('#nav').offset().top;
        // define the floating navigation function
        var floating_navigation = function(){
        // current vertical position from the top
        var scroll_top = $(window).scrollTop(); 
        // if scrolled more than the navigation, change its position to fixed to float to top, otherwise change it back to relative
        if (scroll_top > floating_navigation_offset_top) { 
                $('#nav').css({
                'position': 'fixed',
                'top':0, 'box-shadow': '0px 5px 5px rgba(68,68,68,0.5)',
                'background-color': 'rgba(142,99,55,0.75)'
                });
        } else {
                $('#nav').css({
                'position': 'relative',
                'box-shadow': 'none',
                'background-color': 'rgba(142,99,55,0)'
                }); 
        }   
        };
        // run function on load
        floating_navigation();
        // run function every time you scroll
        $(window).scroll(function() {
                floating_navigation();
        });
        });
