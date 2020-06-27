function clickSizeSpecies(artical){
    $('.desc-cash-size-species').removeClass('artical');
    artical.addClass("artical")
    if($.trim($('.desc-cash-size-species.artical .size-species-details').html())==="S"){
        $('.desc-cash-details').text('29.000 VNĐ')
    }
    else if($.trim($('.desc-cash-size-species.artical .size-species-details').html())==="M"){
        $('.desc-cash-details').text('39.000 VNĐ')
    }
    else{
        $('.desc-cash-details').text('49.000 VNĐ')
    }
}

$(function(){
    $('.shopping-icon-details').click(function(){
        var clicked = $('.shopping').click();
        if(clicked){
            $('.shopping').css('display','flex');
        }
    })
})

$(function(){
    $('.shopping-wapper-header-icon-exist').click(function(){
        var clicked = $('.shopping').click();
        if(clicked){
            $('.shopping').css('display','none');
        }
    })
})
