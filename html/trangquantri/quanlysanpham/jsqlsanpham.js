// Hiện thị thông tin của sản phẩm
var indexchange;
function nutHienThi(declareDad){
    console.log(declareDad+' td:nth-child(2)')
    var masSp,maLsp,tenSp,imgSp,giaGoc,giaBan,giaKM;
    masSp = $('.'+declareDad+' td:nth-child(2)').html()
    maLsp = $('.'+declareDad+' td:nth-child(3)').html()
    tenSp = $('.'+declareDad+' td:nth-child(4)').html()
    imgSp = $('.'+declareDad+' td:nth-child(5) img').attr('src')
    giaGoc = $('.'+declareDad+' td:nth-child(7)').html()
    giaBan =$('.'+declareDad+' td:nth-child(8)').html()
    giaKM = $('.'+declareDad+' td:nth-child(9)').html()

    var thongtinsanpham = '<div class="table-them" id="table-hien-them">\
    <div class="table-them-container" >\
        <div class="table-them-header">\
            <span>Thông tin sản phẩm</span>\
            <div class="button-thoat" id="button-thoat-id" onclick()="thoat()">\
                <img src="../../../object/icon/32x32/1484685359_Remove.png" alt="">\
            </div>\
        </div>\
        <div class="table-them-containers">\
            <div class="table-them-container-code">\
                <div class="container-code-sp">\
                    <span>Mã sản phẩm</span>\
                    <input type="text" name="" value="'+masSp+'">\
                </div>\
                <div class="container-code-lsp">\
                    <span>Loại sản phẩm</span>\
                    <input type="text" name="" value="'+maLsp+'">\
                </div>\
            </div>\
            <div class="table-them-container-desc">\
                <div class="container-desc-name">\
                    <span>Tên sản phẩm</span>\
                    <input type="text" name="" id="" value="'+tenSp+'">\
                </div>\
                <div class="container-desc-img">\
                    <input type="file" name="file" id="file" accept="image/*" class="inputfile" >\
                    <label for="file">Hình ảnh</label>\
                    <img src="'+imgSp+'" id="load" class="imgload" alt="">\
                </div>\
            </div>\
            <div class="table-them-container-cash">\
                <div class="container-cash-goc">\
                    <span>Giá gốc</span>\
                    <input type="number" name="" id="" value="'+giaGoc+'">\
                </div>\
                <div class="container-cash-ban">\
                    <span>Giá bán</span>\
                    <input type="number" name="" id="" value="'+giaBan+'">\
                </div>\
                <div class="container-cash-km">\
                    <span>Khuyến mại</span>\
                    <input type="number" name="" id="" value="'+giaKM+'">\
                </div>\
            </div>\
        </div>\
    </div>\
</div> '
    var valueHtml =  $('body').html()
    $('body').html(valueHtml+thongtinsanpham)
    $('#table-hien-them').css('display','flex')
    
}


// Click nút thêm để hiện màn hình thêm
$(".menu-main-container-button-them").click(function(){
    $(".table-them.them").css('display','flex')
})

// Click nút hiện thị màn hình sửa
// $(".chucnang-sua").click(function(){
//     $(".table-them.sua").css('display','flex')
// })
function goisua()
{
 
    var thongTinGocMasp=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(2)").html()
    var thongTinGocMalsp=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(3)").html()
    var thongTinGocTensp=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(4)").html()
    var thongTinGocImg= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(5) img").attr("src")
    var thongTinGocGiaGoc= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(7)").html()
    var thongTinGocGiaBan= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(8)").html()
    var thongTinGocGiaKM= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(9)").html()


    $('.table-them-containers #sua-masp').val(thongTinGocMasp)
   $('.table-them-containers #sua-lsp').val(thongTinGocMalsp)
    $('.table-them-containers #sua-tensp').val(thongTinGocTensp)
     $('.table-them-containers .suaload').attr('src',thongTinGocImg)   
    $('.table-them-containers #sua-giaGoc').val(thongTinGocGiaGoc)
   $('.table-them-containers #sua-giaBan').val(thongTinGocGiaBan)
     $('.table-them-containers #sua-giaKM').val(thongTinGocGiaKM)


    $(".table-them.sua").css('display','flex')
    
}

function goiHienThi(row)
{
    var d = row.parentNode.parentNode.parentNode.rowIndex;
    console.log(d)
    indexchange=d;
    var thongTinGocMasp=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(2)").html()
    var thongTinGocMalsp=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(3)").html()
    var thongTinGocTensp=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(4)").html()
    var thongTinGocImg= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(5) img").attr("src")
    var thongTinGocGiaGoc= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(7)").html()
    var thongTinGocGiaBan= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(8)").html()
    var thongTinGocGiaKM= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(9)").html()


    $('.table-them-containers #thongtin-masp').val(thongTinGocMasp)
   $('.table-them-containers #thongtin-lsp').val(thongTinGocMalsp)
    $('.table-them-containers #thongtin-tensp').val(thongTinGocTensp)
     $('.table-them-containers .thong-tin-load').attr('src',thongTinGocImg)   
    $('.table-them-containers #thongtin-giaGoc').val(thongTinGocGiaGoc)
   $('.table-them-containers #thongtin-giaBan').val(thongTinGocGiaBan)
     $('.table-them-containers #thongtin-giaKM').val(thongTinGocGiaKM)

     
    $(".table-them.thong-tin").css('display','flex')
    
}
// Click nút thoát trong màn hình thêm
$(".button-thoat").click(function(){
    $(".table-them").css('display','none')

})
// Click nút thoát trong màn hình hiện thịtable-hien-them
function thoat(){
    $("#table-hien-them").css('display','none')
}

function nutHuy(){
    // Nút hủy của table Hủy
    $('.table-them-containers #sua-masp').val('')
   $('.table-them-containers #sua-lsp').val('')
    $('.table-them-containers #sua-tensp').val('')
     $('.table-them-containers .suaload').attr('src','')   
    $('.table-them-containers #sua-giaGoc').val('')
   $('.table-them-containers #sua-giaBan').val('')
     $('.table-them-containers #sua-giaKM').val('')

// Nút hủy của table thêm

    $('.table-them-containers #masp').val('')
   $('.table-them-containers #lsp').val('')
    $('.table-them-containers #tensp').val('')
     $('.table-them-containers .imgload').attr('src','')   
    $('.table-them-containers #giaGoc').val('')
   $('.table-them-containers #giaBan').val('')
     $('.table-them-containers #giaKM').val('')
}
// Ấn ngoài bảng nó vẫn bị tắt
// $(".table-them").mousedown(function(){
//     $(".table-them").css('display','none')
// })


/*Thêm ảnh của sản phẩm*/
// Thay đổi thẻ input sau khi chọn file thì sẽ gọi hàm này
$(".inputfile").change(function(){
    // Hàm readImgUrlAndPreview là để cho thẻ img có source vừa chọn
    // Tham số this là sự kiện thay đổi
    // this ở đây là đường dẫn của ảnh
    readImgUrlAndPreview(this);
    function readImgUrlAndPreview(imgsrc){
        if(imgsrc.files){
            var newsrc = new FileReader();
            newsrc.onload = function(eventImg){
                $(".imgload").attr("src",eventImg.target.result)
            }
        }
        newsrc.readAsDataURL(imgsrc.files[0])
    }
})




// Xóa thông tin của sản phẩm
function nutXoa(row){
    var d = row.parentNode.parentNode.parentNode.rowIndex;
    document.getElementById('bangsanphamid').deleteRow(d);
    UpdateXoaSoLuongSanPham()
}

// Lấy hàng cần sửa
function getGiaTri(row){
    console.clear();
    var d = row.parentNode.parentNode.parentNode.rowIndex;
    console.log(d)
    indexchange=d;
    goisua();
    
}
// Sửa thông tin của sản phẩm

function nutSua(){

// Lấy các giá trị của input sẽ được sửa
  var  masSp = $('.table-them-containers #sua-masp').val()
  var  maLsp = $('.table-them-containers #sua-lsp').val()
  var  tenSp = $('.table-them-containers #sua-tensp').val()
  var  imgSp = $('.table-them-containers .suaload').attr('src')   
  var  giaGoc = $('.table-them-containers #sua-giaGoc').val()
  var  giaBan =$('.table-them-containers #sua-giaBan').val()
  var  giaKM = $('.table-them-containers #sua-giaKM').val()


    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(2)").html(masSp)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(3)").html(maLsp)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(4)").html(tenSp)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(5)").attr("src",imgSp)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(7)").html(giaGoc)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(8)").html(giaBan)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(9)").html(giaKM)
    console.clear();
 
   
}
// Sự kiện thêm thông tin sản phẩm vào trong danh sách
function themsanpham(){
    
    var masSp,maLsp,tenSp,soLuong,imgSp,giaGoc,giaBan,giaKM;
    var bool = true;
    
    masSp = $('.table-them-containers #masp').val()
    
    maLsp = $('.table-them-containers #lsp').val()
    
    soLuong = $("tbody tr").length+1
    tenSp = $('.table-them-containers #tensp').val()
    imgSp = $('.table-them-containers #load').attr('src')   
    giaGoc = $('.table-them-containers #giaGoc').val()
    giaBan =$('.table-them-containers #giaBan').val()
    giaKM = $('.table-them-containers #giaKM').val()
    if(/^[a-zA-Z0-9]*$/.test(tenSp) == false||tenSp.trim()=="") {
        confirm("vui lòng nhập đúng định dạng")
    }
    else{
        var thongtin1sanpham = '<tr>\
    <td>'+soLuong+'</td>\
    <td>'+masSp+'</td>\
    <td>'+maLsp+'</td>\
    <td>'+tenSp+'</td>\
    <td><img src="'+imgSp+'" alt=""></td>\
    <td>10</td>\
    <td>'+giaGoc+'</td>\
    <td>'+giaBan+'</td>\
    <td>'+giaKM+'</td>\
    <td>\
    <div class="chucnang">\
        <div class="chucnang-hienthi" onclick="goiHienThi(this)">\
            <img src="../../../object/imgAdmin/binoculars.png" alt="">\
        </div>\
        <div class="chucnang-xoa" onclick="nutXoa(this)">\
             <img src="../../../object/imgAdmin/delete.png" alt="">\
        </div>\
        <div class="chucnang-sua" onclick="getGiaTri(this)">\
            <img src="../../../object/imgAdmin/edit.png" alt="">\
        </div>\
       </div>\
     </td>\
</tr>'
    var valueHtml =  $('.thanbangsanpham').html()
    $('.thanbangsanpham').html(valueHtml+thongtin1sanpham)
    loadChanLe()
    }
    UpdateThemSoLuongSanPham()
}



// Màu nền cho từng sản phẩm
$(document).ready(function(){
    loadChanLe()
})

function loadChanLe(){
    var tenle = $('.thanbangsanpham tr')
    console.log(tenle.length)
    for(var i = 1;i<=tenle.length;i++){
        if(i%2!==0){
            $('.thanbangsanpham tr:nth-child('+i+')').addClass('sanpham_le')
        }
    }
}


/*Update*/

/*Sản phẩm*/
function UpdateThemSoLuongSanPham(){
  var sl= $("tbody tr").length
  $(".menu-main-desc-tittle-content .menu-main-desc-sum-content").html(sl)
}
function UpdateXoaSoLuongSanPham(){
    var sl= $("tbody tr").length
    $(".menu-main-desc-tittle-content .menu-main-desc-sum-content").html(sl)
  }
/*Số lượng*/
