//1.监听window的滚动
$(function () {
      var num = 0;
      var title = null;
    $(window).mousewheel(function (event) {
        //监听屏幕的上下滚动：1 是向上，-1是向下
        //console.log(event.deltaY);
       /* if(event.deltaY==-1){
            num++;
        }else {
            num--;
        }*/
        clearTimeout(title)
       title=setTimeout(function () {
           num=num-event.deltaY;
           //临界点判断
           if(num>$('.page').length-1){
               num = $('.page').length-1
           }
           if(num<0){
               num = 0;
           }

           //当前页面显示
        /*   $('.page').eq(num).show().siblings('.page').hide();
           //当前指示点
           $('.nav span').eq(num).addClass('active').siblings().removeClass()*/
        fun(num);

       },300)
    })
    $('.nav span').click(function () {
        num = $(this).index();
        fun(num)
    })
});
function fun(num) {
    if(num==0){
        $('.header').css("visibility","hidden")
    }else {
        $('.header').css("visibility","visible")
    }
    $('.page').eq(num).show().siblings('.page').hide();
    //当前指示点
    $('.nav span').eq(num).addClass('active').siblings().removeClass()
    //对每一屏删除active类名,兄弟添加类名让它每次都有动画
    setTimeout(function () {
        $('.page').eq(num).removeClass('active').siblings('.page').addClass('active')
    },1)

}