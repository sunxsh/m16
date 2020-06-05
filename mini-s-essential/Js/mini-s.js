$(function () {
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        followFinger: false,
        speed: 800,
        mousewheel: {
            releaseOnEdges: true,
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            init: function (swiper) {
                slide = this.slides.eq(0);
                slide.addClass('ani-slide');
            },
            transitionStart: function () {
                for (i = 0; i < this.slides.length; i++) {
                    slide = this.slides.eq(i);
                    slide.removeClass('ani-slide');
                }
            },
            transitionEnd: function () {
                slide = this.slides.eq(this.activeIndex);
                slide.addClass('ani-slide');

            },
        }
    });

 


    // 第三屏选项卡切换
    if($(window).width()>768){
        var zishengaodu = $('.threecon').height();
        $('.threecon video').css('height', zishengaodu);
        $('.threebottomli').click(function () {
            var zuobiao = $(this).index();

            $(this).addClass('threebottomlicur').siblings().removeClass('threebottomlicur');
            $('.threeconleft').animate({ top: -zuobiao * zishengaodu }, 100)
        })
    }
    else{
        $('.threeconleft>video').eq(0).show().siblings().hide();
        $('.threebottomli').click(function () {
            var zuobiao = $(this).index();
            $(this).addClass('threebottomlicur').siblings().removeClass('threebottomlicur');
            $('.threeconleft>video').eq(zuobiao).show().siblings().hide();

        })       
    }



    //第四屏效果
    $('.fourdisan1').hover(function () {
        $('.fourdier1').addClass('fourdier1cur');
        $('.fourdier2').removeClass('fourdier2cur');
    },function () {
            $('.fourdier1').removeClass('fourdier1cur');      
    });
    $('.fourdisan2').hover(function () {
        $('.fourdier2').addClass('fourdier2cur');
        $('.fourdier1').removeClass('fourdier1cur');
    }, function () {
        $('.fourdier2').removeClass('fourdier2cur');
    })


    //第六屏效果
    $('.fivetop3_top>div').hover(function () {
        var zuobiao = $(this).attr('zuobiao');
        console.log(zuobiao);
        $('.fivetop3_bottom img').eq(zuobiao).css('opacity', '1').siblings().css('opacity', '0');
    },function () {
        $('.fivetop3_bottom img').eq(0).css('opacity', '1').siblings().css('opacity', '0');
    });
    $('.fivetop3_top>div').click(function () {
        var zuobiao = $(this).attr('zuobiao');
        console.log(zuobiao);
        $('.fivetop3_bottom img').eq(zuobiao).css('opacity', '1').siblings().css('opacity', '0');
    })



    //第八屏效果
    $('.sevencontop>div').hover(function () {
        var zuobiao2 = $(this).attr('zuobiao2');
        console.log(zuobiao2);
        $('.sevenconbottom>img').eq(zuobiao2).css('opacity', '1').siblings().css('opacity', '0');
    }, function () {
        $('.sevenconbottom>img').eq(0).css('opacity', '1').siblings().css('opacity', '0');
    });
    $('.sevencontop>div').click(function () {
        var zuobiao2 = $(this).attr('zuobiao2');
        console.log(zuobiao2);
        $('.sevenconbottom>img').eq(zuobiao2).css('opacity', '1').siblings().css('opacity', '0');
    })

    $('.sevencontop4,.sevencontop5,.sevencontop6').hover(function () {
        $('.sevencontop1,.sevencontop2,.sevencontop3,.sevenconwenzi').hide();
    },function () {
            $('.sevencontop1,.sevencontop2,.sevencontop3,.sevenconwenzi').show();
    });


    $('.sevencontop1,.sevencontop2,.sevencontop3').hover(function () {
        $('.sevencontop4,.sevencontop5,.sevencontop6,.sevenconwenzi').hide();
    }, function () {
            $('.sevencontop4,.sevencontop5,.sevencontop6,.sevenconwenzi').show();
    });

    $('.sevencon_hei').hover(function () {
        $('.sevenconbottom>img').eq(5).css('opacity', '1').siblings().css('opacity', '0');
        $('.sevenconwenzi').css('opacity', '0');
        $('.sevencontop1,.sevencontop2,.sevencontop3').hide();
    },function () {
            $('.sevenconbottom>img').eq(0).css('opacity', '1').siblings().css('opacity', '0');
            $('.sevenconwenzi').css('opacity', '1');
            $('.sevencontop1,.sevencontop2,.sevencontop3').show();
    });

    $('.sevencon_bai').hover(function () {
        $('.sevenconbottom>img').eq(1).css('opacity', '1').siblings().css('opacity', '0');
        $('.sevenconwenzi').css('opacity', '0');
        $('.sevencontop4,.sevencontop5,.sevencontop6').hide();
    }, function () {
        $('.sevenconbottom>img').eq(0).css('opacity', '1').siblings().css('opacity', '0');
            $('.sevenconwenzi').css('opacity', '1');
            $('.sevencontop4,.sevencontop5,.sevencontop6').show();
    });   
})