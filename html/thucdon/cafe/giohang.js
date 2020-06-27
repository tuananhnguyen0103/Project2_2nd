function themgio(elm,id)
{
    var images=elm.parent().parent().parent().parent().find('.details-container-border-img img').attr('src')
    
    var cashOld=$.trim(elm.parent().parent().parent().find('span.desc-cash-details').html())
    var cashChange = $.trim(cashOld.substr(0,cashOld.length-3))
    var res = cashChange.split(".");
    var cashResult=res[0].concat(res[1])
    var name=$.trim(elm.parent().parent().parent().parent().parent().find('.wrapper-row-container-details-tittle span h2').html())
    var thongtinsanpham='<div class="header-container-item">\
    <div class="header-container-item-img">\
        <img src="'+images+'" alt="">\
    </div>\
    <div class="header-container-item-desc">\
        <div class="header-container-item-name">\
            <span>\
                '+name+'\
            </span>\
        </div>\
        <div class="header-container-item-monney">\
            <span>\
                Giá :\
                    <span>\
                    '+cashResult+' \
                    </span>\
                VNĐ\
            </span>\
            <span class="header-container-item-delete" onclick="xoaGioHang($(this))">\
                 <img src="../../../../object/icon/32x32/1484686539_TrashBin.png" alt="">\
             </span>\
        </div>\
    </div>\
</div>'

    var valueHtml =  $('.header-container-list-item').html()
    $('.header-container-list-item').html(valueHtml+thongtinsanpham)
    localStorage.setItem("img"+id,images)
    localStorage.setItem("cash"+id,cashResult)
    localStorage.setItem("name"+id,name)
    UpdateThemSoTien(id)
}

// XÓa giỏ hàng
function xoaGioHang(elm){
    elm.parent().parent().parent().remove()
    
    var arrayItem = ['cafe','freeze','tra','banhmi','khac']
    for(var i=0;i<arrayItem.length;i++){
        for(var j=1;j<10;j++){
            var gia=  localStorage.getItem("cash"+arrayItem[i]+"sp"+j)
            var img = localStorage.getItem("img"+arrayItem[i]+"sp"+j)
            var name = localStorage.getItem("name"+arrayItem[i]+"sp"+j)
            if(gia!==null){
                    var gia1=$(".shopping-wapper-header-cash span").html()
                    var price= localStorage.getItem("cash"+arrayItem[i]+"sp"+j)
                    var k= (Number(gia1)-Number(price)).toString()
                    $(".shopping-wapper-header-cash span").html(k)
                    localStorage.removeItem("cash"+arrayItem[i]+"sp"+j)
                    localStorage.removeItem("img"+arrayItem[i]+"sp"+j)
                    localStorage.removeItem("name"+arrayItem[i]+"sp"+j)
                }
        }

    }

}


function UpdateThemSoTien(id){
    var idsp=id.substr(0,id.length-1)

    for(var i=0;i<30;i++)
    {   var gia=$(".shopping-wapper-header-cash span").html()
       var price= localStorage.getItem("cash"+idsp+i)
           var k= (Number(gia)+Number(price)).toString()
            $(".shopping-wapper-header-cash span").html(k)
    }

  }
$(document).ready(function(){
    var arrayItem = ['cafe','freeze','tra','banhmi','khac']
    for(var i=0;i<arrayItem.length;i++){
        for(var j=1;j<10;j++){
            var gia=  localStorage.getItem("cash"+arrayItem[i]+"sp"+j)
            var img = localStorage.getItem("img"+arrayItem[i]+"sp"+j)
            var name = localStorage.getItem("name"+arrayItem[i]+"sp"+j)
            var thongtinsanpham='<div class="header-container-item">\
            <div class="header-container-item-img">\
                <img src="'+img+'" alt="">\
                </div>\
                <div class="header-container-item-desc">\
                    <div class="header-container-item-name">\
                        <span>\
                            '+name+'\
                        </span>\
                    </div>\
                    <div class="header-container-item-monney">\
                        <span>\
                            Giá :\
                                <span>\
                                '+gia+' \
                                </span>\
                            VNĐ\
                        </span>\
                        <span class="header-container-item-delete" onclick="xoaGioHang($(this))">\
                            <img src="../../../../object/icon/32x32/1484686539_TrashBin.png" alt="">\
                        </span>\
                    </div>\
                </div>\
            </div>'
            if(gia!==null){
                var valueHtml =  $('.header-container-list-item').html()
                $('.header-container-list-item').html(valueHtml+thongtinsanpham)
              
                    var gia1=$(".shopping-wapper-header-cash span").html()
                    var price= localStorage.getItem("cash"+arrayItem[i]+"sp"+j)
                    var k= (Number(gia1)+Number(price)).toString()
                    $(".shopping-wapper-header-cash span").html(k)
                }
                
            
        }
    }
})