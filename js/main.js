'use strict';

$(document).ready(function () {
    $('.button').click(function() {
        $('div p:first-child').before($('div p:last-child'));
        
    })
    
    $('.reverse').click(function() {
        $('div p:last-child').after($('div p:first-child'));
    }
                       
                       )
    
});