import { OwlOptions } from 'ngx-owl-carousel-o';

export const owlOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 200,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    margin: 20,
    responsiveRefreshRate: 0,
    slideBy: 'page',
    smartSpeed: 600,
    rewind:false,
    items:6,
    nav: true,
    responsive:{
        0:{
            items:3
        },
        576:{
            items:4
        },
        767:{
            items:6
        },
        992:{
            items:7
        }
    }
}