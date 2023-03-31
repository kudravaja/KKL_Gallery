  // section1

$(document).ready(function() {
  let y;
  $(window).on('scroll', function() {
    y = $(window).scrollTop();
    $('.ttop').css('background-size', 80 + parseInt(y / 10) + 'vw');
  });

  let x;
  $(window).on('scroll', function() {
    x = $(window).scrollTop();
    $('.t').css('background-size', 50 + parseInt(x / 6) + 'vw');
  });

  let z;
  $(window).on('scroll', function() {
    z = $(window).scrollTop();
    $('.tsecond').css('background-size', -500 + parseInt(z / 1) + 'vw');
  });
  let z1;
  $(window).on('scroll', function() {
    z1 = $(window).scrollTop();
    $('.tsecond2').css('background-size', -500 + parseInt(z1 / 1) + 'vw');
  });


  window.onscroll = function() {myFunction()};
  function myFunction() {
    if (document.documentElement.scrollTop <0.5*window.innerHeight) {
      document.getElementById("myP").className = "ttop";
    }
    else if (document.documentElement.scrollTop <1.5*window.innerHeight) {
      document.getElementById("myP").className = "t";
    }
    else if (document.documentElement.scrollTop <2.35*window.innerHeight) {
      document.getElementById("myP").className = "tsecond";
    }
    else if (document.documentElement.scrollTop <2.45*window.innerHeight) {
      document.getElementById("myP").className = "tsecond2";
    }
    else if (document.documentElement.scrollTop >2.45*window.innerHeight) {
      document.getElementById("myP").classList.remove("tsecond2","tsecond","t","ttop");
    }

  }

  // section2

$(window).on("scroll", () => {
let scroll_height = $(window).scrollTop();
let vw_height = parseInt($(window).height()) * 2.40;
let start_point = parseInt(scroll_height - vw_height);

  if (scroll_height => vw_height) {
    let blur = start_point * (0.00025) +'vw'
    let x = start_point * (-0.155/2.3) + 'vw'
    let y = start_point * (0.25/2.3) + 'vw'
    let z = start_point * (0) + 'vw'
    let scale = parseInt(start_point) * (0.0055)

    let x2 = start_point * (0.3/2.3) + 'vw'
    let y2 = start_point * (0.2/2.3) + 'vw'
    let z2 = start_point * (0) + 'vw'

    let x3 = start_point * (0.2/2.3) + 'vw'
    let y3 = start_point * (-0.2/2.3) + 'vw'
    let z3 = start_point * (0) + 'vw'

    let x4 = start_point * (-0.05/2.3) + 'vw'
    let y4 = start_point * (-0.3/2.3) + 'vw'
    let z4 = start_point * (0) + 'vw'

    $('.image1').css('transform', `translate3d(${x},${y},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image1').css('filter', `blur(${blur})`);

    $('.image2').css('transform', `translate3d(${x2},${y2},${z2}) scale3d(${scale},${scale},${scale})`);
    $('.image2').css('filter', `blur(${blur})`);

    $('.image3').css('transform', `translate3d(${x3},${y3},${z3}) scale3d(${scale},${scale},${scale})`);
    $('.image3').css('filter', `blur(${blur})`);

    $('.image4').css('transform', `translate3d(${x4},${y4},${z4}) scale3d(${scale},${scale},${scale})`);
    $('.image4').css('filter', `blur(${blur})`);
  }
});
  $(window).on("scroll", () => {
 let scroll_height = $(window).scrollTop();
 let vw_height = parseInt($(window).height()) * 2.43;
 let start_point = parseInt(scroll_height - vw_height);

   if (scroll_height => vw_height) {
     let opacity = start_point

     $('.image1').css('opacity', opacity - 30);
     $('.image2').css('opacity', opacity - 30);
     $('.image3').css('opacity', opacity - 30);
     $('.image4').css('opacity', opacity - 30);
   }
 });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 2.48;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height => vw_height) {
    let blur = start_point * (0.00025) +'vw'
    let x5 = start_point * (0.2/2.3) + 'vw'
    let y5 = start_point * (-0.25/2.3) + 'vw'
    let z5 = start_point * (0) + 'vw'
    let scale = parseInt(start_point) * (0.0055)

    let x6 = start_point * (0.2/2.3) + 'vw'
    let y6 = start_point * (0.1/2.3) + 'vw'
    let z6 = start_point * (0) + 'vw'

    let x7 = start_point * (-0.20/2.3) + 'vw'
    let y7 = start_point * (-0.05/2.3) + 'vw'
    let z7 = start_point * (0) + 'vw'

    $('.image5').css('transform', `translate3d(${x5},${y5},${z5}) scale3d(${scale},${scale},${scale})`);
    $('.image5').css('filter', `blur(${blur})`);

    $('.image6').css('transform', `translate3d(${x6},${y6},${z6}) scale3d(${scale},${scale},${scale})`);
    $('.image6').css('filter', `blur(${blur})`);

    $('.image7').css('transform', `translate3d(${x7},${y7},${z7}) scale3d(${scale},${scale},${scale})`);
    $('.image7').css('filter', `blur(${blur})`);
   }
 });
 $(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 2.51;
  let start_point = parseInt(scroll_height - vw_height);

    if (scroll_height => vw_height) {
      let opacity = start_point

      $('.image5').css('opacity', opacity - 30);
      $('.image6').css('opacity', opacity - 30);
      $('.image7').css('opacity', opacity - 30);
    }
  });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 2.56;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height => vw_height) {
    let blur = start_point * (0.00025) +'vw'
    let x8 = start_point * (0.3/2.3) + 'vw'
    let y8 = start_point * (0.2/2.3) + 'vw'
    let z8 = start_point * (0) + 'vw'
    let scale3 = parseInt(start_point) * (0.0055)

    let x9 = start_point * (-0.25/2.3) + 'vw'
    let y9 = start_point * (0.1/2.3) + 'vw'
    let z9 = start_point * (0) + 'vw'

    let x10 = start_point * (0.2/2.3) + 'vw'
    let y10 = start_point * (-0.25/2.3) + 'vw'
    let z10 = start_point * (0) + 'vw'

    let x11 = start_point * (-0.25/2.3) + 'vw'
    let y11 = start_point * (-0.2/2.3) + 'vw'
    let z11 = start_point * (0) + 'vw'

    $('.image8').css('transform', `translate3d(${x8},${y8},${z8}) scale3d(${scale3},${scale3},${scale3})`);
    $('.image8').css('filter', `blur(${blur})`);

    $('.image9').css('transform', `translate3d(${x9},${y9},${z9}) scale3d(${scale3},${scale3},${scale3})`);
    $('.image9').css('filter', `blur(${blur})`);

    $('.image10').css('transform', `translate3d(${x10},${y10},${z10}) scale3d(${scale3},${scale3},${scale3})`);
    $('.image10').css('filter', `blur(${blur})`);

    $('.image11').css('transform', `translate3d(${x11},${y11},${z11}) scale3d(${scale3},${scale3},${scale3})`);
    $('.image11').css('filter', `blur(${blur})`);
   }
 });
 $(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 2.59;
  let start_point = parseInt(scroll_height - vw_height);

    if (scroll_height => vw_height) {
      let opacity = start_point

      $('.image8').css('opacity', opacity - 30);
      $('.image9').css('opacity', opacity - 30);
      $('.image10').css('opacity', opacity - 30);
    }
  });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 2.64;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height > vw_height) {
     let blur = start_point * (0.00025) +'vw'
     let x1 = start_point * (-0.15/2.3) + 'vw'
     let y1 = start_point * (-0.3/2.3) + 'vw'
     let z = start_point * (0) + 'vw'
     let scale = parseInt(start_point) * (0.0055)

     let x2 = start_point * (-0.155/2.3) + 'vw'
     let y2 = start_point * (0.2/2.3) + 'vw'

     let x3 = start_point * (0.25/2.3) + 'vw'
     let y3 = start_point * (-0.2/2.3) + 'vw'

     $('.image12').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image12').css('filter', `blur(${blur})`);

     $('.image13').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image13').css('filter', `blur(${blur})`);

     $('.image14').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image14').css('filter', `blur(${blur})`);
    }
  });
  $(window).on("scroll", () => {
   let scroll_height = $(window).scrollTop();
   let vw_height = parseInt($(window).height()) * 2.67;
   let start_point = parseInt(scroll_height - vw_height);

    if (scroll_height => vw_height) {
       let opacity = start_point

       $('.image12').css('opacity', opacity - 30);
       $('.image13').css('opacity', opacity - 30);
       $('.image14').css('opacity', opacity - 30);
     }
   });

$(window).on("scroll", () => {
    let scroll_height = $(window).scrollTop();
    let vw_height = parseInt($(window).height()) * 2.72;
    let start_point = parseInt(scroll_height - vw_height);
    if (scroll_height => vw_height) {
      let blur = start_point * (0.00025) +'vw'
      let x1 = start_point * (-0.055/2.3) + 'vw'
      let y1 = start_point * (0.2/2.3) + 'vw'
      let z = start_point * (0) + 'vw'
      let scale = parseInt(start_point) * (0.0055)

      let x2 = start_point * (0.05/2.3) + 'vw'
      let y2 = start_point * (0.35/2.3) + 'vw'

      let x3 = start_point * (-0.155/2.3) + 'vw'
      let y3 = start_point * (-0.1/2.3) + 'vw'

      let x4 = start_point * (0.15/2.3) + 'vw'
      let y4 = start_point * (-0.3/2.3) + 'vw'

      let x5 = start_point * (0.25/2.3) + 'vw'
      let y5 = start_point * (-0.05/2.3) + 'vw'

      $('.image15').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
      $('.image15').css('filter', `blur(${blur})`);

      $('.image16').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
      $('.image16').css('filter', `blur(${blur})`);

      $('.image17').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
      $('.image17').css('filter', `blur(${blur})`);

      $('.image18').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
      $('.image18').css('filter', `blur(${blur})`);

      $('.image19').css('transform', `translate3d(${x5},${y5},${z}) scale3d(${scale},${scale},${scale})`);
      $('.image19').css('filter', `blur(${blur})`);

     }
   });
  $(window).on("scroll", () => {
    let scroll_height = $(window).scrollTop();
    let vw_height = parseInt($(window).height()) * 2.75;
    let start_point = parseInt(scroll_height - vw_height);

      if (scroll_height => vw_height) {
        let opacity = start_point

        $('.image15').css('opacity', opacity - 30);
        $('.image16').css('opacity', opacity - 30);
        $('.image17').css('opacity', opacity - 30);
        $('.image18').css('opacity', opacity - 30);
        $('.image19').css('opacity', opacity - 30);
      }
    });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 2.8;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height => vw_height) {
     let blur = start_point * (0.00025) +'vw'
     let x1 = start_point * (-0.055/2.3) + 'vw'
     let y1 = start_point * (-0.3/2.3) + 'vw'
     let z = start_point * (0) + 'vw'
     let scale = parseInt(start_point) * (0.0055)

     let x2 = start_point * (0.35/2.3) + 'vw'
     let y2 = start_point * (-0.25/2.3) + 'vw'

     let x3 = start_point * (0.2/2.3) + 'vw'
     let y3 = start_point * (-0.15/2.3) + 'vw'

     let x4 = start_point * (-0.15/2.3) + 'vw'
     let y4 = start_point * (0.25/2.3) + 'vw'


     $('.image20').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image20').css('filter', `blur(${blur})`);

     $('.image21').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image21').css('filter', `blur(${blur})`);

     $('.image22').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image22').css('filter', `blur(${blur})`);

     $('.image23').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image23').css('filter', `blur(${blur})`);
    }
});
  $(window).on("scroll", () => {
 let scroll_height = $(window).scrollTop();
 let vw_height = parseInt($(window).height()) * 2.83;
 let start_point = parseInt(scroll_height - vw_height);

   if (scroll_height => vw_height) {
     let opacity = start_point

     $('.image20').css('opacity', opacity - 30);
     $('.image21').css('opacity', opacity - 30);
     $('.image22').css('opacity', opacity - 30);
     $('.image23').css('opacity', opacity - 30);
   }
 });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 2.88;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height => vw_height) {
    let blur = start_point * (0.00025) +'vw'
    let x1 = start_point * (0.05/2.3) + 'vw'
    let y1 = start_point * (-0.25/2.3) + 'vw'
    let z = start_point * (0) + 'vw'
    let scale = parseInt(start_point) * (0.0055)

    let x2 = start_point * (0.05/2.3) + 'vw'
    let y2 = start_point * (0.25/2.3) + 'vw'

    let x3 = start_point * (0.3/2.3) + 'vw'
    let y3 = start_point * (0.15/2.3) + 'vw'

    let x4 = start_point * (-0.05/2.3) + 'vw'
    let y4 = start_point * (0.2/2.3) + 'vw'

    $('.image24').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image24').css('filter', `blur(${blur})`);

    $('.image25').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image25').css('filter', `blur(${blur})`);

    $('.image26').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image26').css('filter', `blur(${blur})`);

    $('.image27').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image27').css('filter', `blur(${blur})`);

   }
});
 $(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 2.91;
  let start_point = parseInt(scroll_height - vw_height);

    if (scroll_height => vw_height) {
      let opacity = start_point

      $('.image24').css('opacity', opacity - 30);
      $('.image25').css('opacity', opacity - 30);
      $('.image26').css('opacity', opacity - 30);
      $('.image27').css('opacity', opacity - 30);

    }
});

$(window).on("scroll", () => {
   let scroll_height = $(window).scrollTop();
   let vw_height = parseInt($(window).height()) * 2.96;
   let start_point = parseInt(scroll_height - vw_height);
   if (scroll_height => vw_height) {
     let blur = start_point * (0.00025) +'vw'
     let x1 = start_point * (0.2/2.3) + 'vw'
     let y1 = start_point * (0.25/2.3) + 'vw'
     let z = start_point * (0) + 'vw'
     let scale = parseInt(start_point) * (0.0055)

     let x2 = start_point * (-0.255/2.3) + 'vw'
     let y2 = start_point * (-0.25/2.3) + 'vw'

     $('.image28').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image28').css('filter', `blur(${blur})`);

     $('.image29').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image29').css('filter', `blur(${blur})`);
    }
});
  $(window).on("scroll", () => {
   let scroll_height = $(window).scrollTop();
   let vw_height = parseInt($(window).height()) * 2.99;
   let start_point = parseInt(scroll_height - vw_height);

     if (scroll_height => vw_height) {
       let opacity = start_point
       $('.image28',).css('opacity', opacity - 30);
       $('.image29',).css('opacity', opacity - 30);
     }
   });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 3.04;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height => vw_height) {
    let blur = start_point * (0.00025) +'vw'
    let x1 = start_point * (-0.055/2.3) + 'vw'
    let y1 = start_point * (-0.3/2.3) + 'vw'
    let z = start_point * (0) + 'vw'
    let scale = parseInt(start_point) * (0.0055)

    let x2 = start_point * (0.35/2.3) + 'vw'
    let y2 = start_point * (-0.25/2.3) + 'vw'

    let x3 = start_point * (-0.155/2.3) + 'vw'
    let y3 = start_point * (0.15/2.3) + 'vw'

    let x4 = start_point * (-0.155/2.3) + 'vw'
    let y4 = start_point * (-0.1/2.3) + 'vw'


    $('.image30').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image30').css('filter', `blur(${blur})`);

    $('.image31').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image31').css('filter', `blur(${blur})`);

    $('.image32').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image32').css('filter', `blur(${blur})`);

    $('.image33').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image33').css('filter', `blur(${blur})`);
   }
});
  $(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 3.07;
  let start_point = parseInt(scroll_height - vw_height);

    if (scroll_height => vw_height) {
      let opacity = start_point

      $('.image30').css('opacity', opacity - 30);
      $('.image31').css('opacity', opacity - 30);
      $('.image32').css('opacity', opacity - 30);
      $('.image33').css('opacity', opacity - 30);
    }
  });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 3.12;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height => vw_height) {
     let blur = start_point * (0.00025) +'vw'
     let x1 = start_point * (0.05/2.3) + 'vw'
     let y1 = start_point * (-0.25/2.3) + 'vw'
     let z = start_point * (0) + 'vw'
     let scale = parseInt(start_point) * (0.0055)

     let x2 = start_point * (-0.15/2.3) + 'vw'
     let y2 = start_point * (-0.25/2.3) + 'vw'

     let x3 = start_point * (0.35/2.3) + 'vw'
     let y3 = start_point * (0.2/2.3) + 'vw'

     let x4 = start_point * (-0.05/2.3) + 'vw'
     let y4 = start_point * (0.05/2.3) + 'vw'

     $('.image34').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image34').css('filter', `blur(${blur})`);

     $('.image35').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image35').css('filter', `blur(${blur})`);

     $('.image36').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image36').css('filter', `blur(${blur})`);
    }
});
  $(window).on("scroll", () => {
   let scroll_height = $(window).scrollTop();
   let vw_height = parseInt($(window).height()) * 3.15;
   let start_point = parseInt(scroll_height - vw_height);

     if (scroll_height => vw_height) {
       let opacity = start_point

       $('.image34').css('opacity', opacity - 30);
       $('.image35').css('opacity', opacity - 30);
       $('.image36').css('opacity', opacity - 30);
     }
  });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 3.20;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height => vw_height) {
       let blur = start_point * (0.00025) +'vw'
       let x1 = start_point * (0.1/2.3) + 'vw'
       let y1 = start_point * (0.25/2.3) + 'vw'
       let z = start_point * (0) + 'vw'
       let scale = parseInt(start_point) * (0.0055)

       let x2 = start_point * (0.25/2.3) + 'vw'
       let y2 = start_point * (-0.25/2.3) + 'vw'

       let x3 = start_point * (0.35/2.3) + 'vw'
       let y3 = start_point * (0.2/2.3) + 'vw'

       $('.image37').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
       $('.image37').css('filter', `blur(${blur})`);

       $('.image38').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
       $('.image38').css('filter', `blur(${blur})`);

       $('.image39').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
       $('.image39').css('filter', `blur(${blur})`);
      }
});
  $(window).on("scroll", () => {
    let scroll_height = $(window).scrollTop();
    let vw_height = parseInt($(window).height()) * 3.23;
    let start_point = parseInt(scroll_height - vw_height);

      if (scroll_height => vw_height) {
         let opacity = start_point

         $('.image37').css('opacity', opacity - 30);
         $('.image38').css('opacity', opacity - 30);
         $('.image39').css('opacity', opacity - 30);
       }
  });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 3.28;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height => vw_height) {
         let blur = start_point * (0.00025) +'vw'
         let x1 = start_point * (0.1/2.3) + 'vw'
         let y1 = start_point * (-0.25/2.3) + 'vw'
         let z = start_point * (0) + 'vw'
         let scale = parseInt(start_point) * (0.0055)

         let x2 = start_point * (-0.15/2.3) + 'vw'
         let y2 = start_point * (-0.25/2.3) + 'vw'

         let x3 = start_point * (-0.15/2.3) + 'vw'
         let y3 = start_point * (0.15/2.3) + 'vw'

         $('.image40').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
         $('.image40').css('filter', `blur(${blur})`);

         $('.image41').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
         $('.image41').css('filter', `blur(${blur})`);

         $('.image42').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
         $('.image42').css('filter', `blur(${blur})`);
        }
});
  $(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 3.31;
  let start_point = parseInt(scroll_height - vw_height);

   if (scroll_height => vw_height) {
           let opacity = start_point

           $('.image40').css('opacity', opacity - 30);
           $('.image41').css('opacity', opacity - 30);
           $('.image42').css('opacity', opacity - 30);
         }
  });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 3.36;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height > vw_height) {
           let blur = start_point * (0.00025) +'vw'
           let x1 = start_point * (0.01/2.3) + 'vw'
           let y1 = start_point * (-0.25/2.3) + 'vw'
           let z = start_point * (0) + 'vw'
           let scale = parseInt(start_point) * (0.0055)

           let x2 = start_point * (-0.15/2.3) + 'vw'
           let y2 = start_point * (-0.25/2.3) + 'vw'

           let x3 = start_point * (0.2/2.3) + 'vw'
           let y3 = start_point * (0.05/2.3) + 'vw'

           let x4 = start_point * (-0.255/2.3) + 'vw'
           let y4 = start_point * (0.05/2.3) + 'vw'

           let x5 = start_point * (0.35/2.3) + 'vw'
           let y5 = start_point * (0.25/2.3) + 'vw'

           $('.image43').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image43').css('filter', `blur(${blur})`);

           $('.image44').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image44').css('filter', `blur(${blur})`);

           $('.image45').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image45').css('filter', `blur(${blur})`);

           $('.image46').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image46').css('filter', `blur(${blur})`);

           $('.image47').css('transform', `translate3d(${x5},${y5},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image47').css('filter', `blur(${blur})`);
          }
});
  $(window).on("scroll", () => {
    let scroll_height = $(window).scrollTop();
    let vw_height = parseInt($(window).height()) * 3.39;
    let start_point = parseInt(scroll_height - vw_height);

    if (scroll_height => vw_height) {
    let opacity = start_point

     $('.image43').css('opacity', opacity - 30);
     $('.image44').css('opacity', opacity - 30);
     $('.image45').css('opacity', opacity - 30);
     $('.image46').css('opacity', opacity - 30);
     $('.image47').css('opacity', opacity - 30);
    }
  });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 3.42;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height > vw_height) {
   let blur = start_point * (0.00025) +'vw'
   let x1 = start_point * (0.35/2.3) + 'vw'
   let y1 = start_point * (-0.25/2.3) + 'vw'
   let z = start_point * (0) + 'vw'
   let scale = parseInt(start_point) * (0.0055)

   let x2 = start_point * (-0.15/2.3) + 'vw'
   let y2 = start_point * (-0.25/2.3) + 'vw'

   let x3 = start_point * (0.3/2.3) + 'vw'
   let y3 = start_point * (-0.1/2.3) + 'vw'

   let x4 = start_point * (-0.255/2.3) + 'vw'
   let y4 = start_point * (0.05/2.3) + 'vw'


   $('.image48').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
   $('.image48').css('filter', `blur(${blur})`);

   $('.image49').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
   $('.image49').css('filter', `blur(${blur})`);

   $('.image50').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
   $('.image50').css('filter', `blur(${blur})`);

   $('.image51').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
   $('.image51').css('filter', `blur(${blur})`);
  }
});
  $(window).on("scroll", () => {
    let scroll_height = $(window).scrollTop();
    let vw_height = parseInt($(window).height()) * 3.45;
    let start_point = parseInt(scroll_height - vw_height);

    if (scroll_height => vw_height) {
      let opacity = start_point
      $('.image48').css('opacity', opacity - 30);
      $('.image49').css('opacity', opacity - 30);
      $('.image50').css('opacity', opacity - 30);
      $('.image51').css('opacity', opacity - 30);
    }
  });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 3.5;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height > vw_height) {
   let blur = start_point * (0.00025) +'vw'
   let x1 = start_point * (0.05/2.3) + 'vw'
   let y1 = start_point * (-0.25/2.3) + 'vw'
   let z = start_point * (0) + 'vw'
   let scale = parseInt(start_point) * (0.0055)

   let x2 = start_point * (-0.255/2.3) + 'vw'
   let y2 = start_point * (-0.15/2.3) + 'vw'

   let x3 = start_point * (0.28/2.3) + 'vw'
   let y3 = start_point * (-0.18/2.3) + 'vw'

   $('.image52').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
   $('.image52').css('filter', `blur(${blur})`);

   $('.image53').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
   $('.image53').css('filter', `blur(${blur})`);

   $('.image54').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
   $('.image54').css('filter', `blur(${blur})`);
  }
});
  $(window).on("scroll", () => {
    let scroll_height = $(window).scrollTop();
    let vw_height = parseInt($(window).height()) * 3.53;
    let start_point = parseInt(scroll_height - vw_height);

    if (scroll_height => vw_height) {
      let opacity = start_point
      $('.image52').css('opacity', opacity - 30);
      $('.image53').css('opacity', opacity - 30);
      $('.image54').css('opacity', opacity - 30);
    }
  });

$(window).on("scroll", () => {
    let scroll_height = $(window).scrollTop();
    let vw_height = parseInt($(window).height()) * 3.58;
    let start_point = parseInt(scroll_height - vw_height);
    if (scroll_height > vw_height) {
             let blur = start_point * (0.00025) +'vw'
             let x1 = start_point * (-0.255/2.3) + 'vw'
             let y1 = start_point * (-0.15/2.3) + 'vw'
             let z = start_point * (0) + 'vw'
             let scale = parseInt(start_point) * (0.0055)

             let x2 = start_point * (-0.15/2.3) + 'vw'
             let y2 = start_point * (-0.25/2.3) + 'vw'

             let x3 = start_point * (-0.155/2.3) + 'vw'
             let y3 = start_point * (-0.1/2.3) + 'vw'

             let x4 = start_point * (-0.255/2.3) + 'vw'
             let y4 = start_point * (0.1/2.3) + 'vw'

             let x5 = start_point * (0.25/2.3) + 'vw'
             let y5 = start_point * (0.15/2.3) + 'vw'

             $('.image55').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
             $('.image55').css('filter', `blur(${blur})`);

             $('.image56').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
             $('.image56').css('filter', `blur(${blur})`);

             $('.image57').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
             $('.image57').css('filter', `blur(${blur})`);

             $('.image58').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
             $('.image58').css('filter', `blur(${blur})`);

            }
  });
  $(window).on("scroll", () => {
      let scroll_height = $(window).scrollTop();
      let vw_height = parseInt($(window).height()) * 3.61;
      let start_point = parseInt(scroll_height - vw_height);

      if (scroll_height => vw_height) {
               let opacity = start_point

               $('.image55').css('opacity', opacity - 30);
               $('.image56').css('opacity', opacity - 30);
               $('.image57').css('opacity', opacity - 30);
               $('.image58').css('opacity', opacity - 30);
             }
    });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 3.66;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height > vw_height) {
           let blur = start_point * (0.00025) +'vw'
           let x1 = start_point * (0.05/2.3) + 'vw'
           let y1 = start_point * (0.35/2.3) + 'vw'
           let z = start_point * (0) + 'vw'
           let scale = parseInt(start_point) * (0.0055)

           let x2 = start_point * (0.25/2.3) + 'vw'
           let y2 = start_point * (-0.25/2.3) + 'vw'

           let x3 = start_point * (0.05/2.3) + 'vw'
           let y3 = start_point * (-0.25/2.3) + 'vw'

           let x4 = start_point * (-0.05/2.3) + 'vw'
           let y4 = start_point * (-0.15/2.3) + 'vw'

           let x5 = start_point * (0.25/2.3) + 'vw'
           let y5 = start_point * (0.25/2.3) + 'vw'

           $('.image59').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image59').css('filter', `blur(${blur})`);

           $('.image60').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image60').css('filter', `blur(${blur})`);

           $('.image61').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image61').css('filter', `blur(${blur})`);

           $('.image62').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image62').css('filter', `blur(${blur})`);

           $('.image63').css('transform', `translate3d(${x5},${y5},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image63').css('filter', `blur(${blur})`);
          }
});
  $(window).on("scroll", () => {
    let scroll_height = $(window).scrollTop();
    let vw_height = parseInt($(window).height()) * 3.69;
    let start_point = parseInt(scroll_height - vw_height);

    if (scroll_height => vw_height) {
             let opacity = start_point

             $('.image59').css('opacity', opacity - 30);
             $('.image60').css('opacity', opacity - 30);
             $('.image61').css('opacity', opacity - 30);
             $('.image62').css('opacity', opacity - 30);
             $('.image63').css('opacity', opacity - 30);
           }
  });

$(window).on("scroll", () => {
let scroll_height = $(window).scrollTop();
let vw_height = parseInt($(window).height()) * 3.74;
let start_point = parseInt(scroll_height - vw_height);

  if (scroll_height => vw_height) {
    let blur = start_point * (0.00025) +'vw'
    let x1 = start_point * (-0.15/2.3) + 'vw'
    let y1 = start_point * (0.25/2.3) + 'vw'
    let z = start_point * (0) + 'vw'
    let scale = parseInt(start_point) * (0.0055)

    let x2 = start_point * (0.15/2.3) + 'vw'
    let y2 = start_point * (0.25/2.3) + 'vw'


    $('.image64').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image64').css('filter', `blur(${blur})`);

    $('.image65').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image65').css('filter', `blur(${blur})`);
  }
});
  $(window).on("scroll", () => {
 let scroll_height = $(window).scrollTop();
 let vw_height = parseInt($(window).height()) * 3.77;
 let start_point = parseInt(scroll_height - vw_height);

   if (scroll_height => vw_height) {
     let opacity = start_point

     $('.image64').css('opacity', opacity - 30);
     $('.image65').css('opacity', opacity - 30);
   }
 });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 3.82;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height => vw_height) {
    let blur = start_point * (0.00025) +'vw'
    let x5 = start_point * (0.3/2.3) + 'vw'
    let y5 = start_point * (-0.2/2.3) + 'vw'
    let z = start_point * (0) + 'vw'
    let scale = parseInt(start_point) * (0.0055)

    let x6 = start_point * (0.05/2.3) + 'vw'
    let y6 = start_point * (0.25/2.3) + 'vw'

    let x7 = start_point * (-0.20/2.3) + 'vw'
    let y7 = start_point * (0.02/2.3) + 'vw'

    let x4 = start_point * (0.05/2.3) + 'vw'
    let y4 = start_point * (-0.25/2.3) + 'vw'

    $('.image66').css('transform', `translate3d(${x5},${y5},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image66').css('filter', `blur(${blur})`);

    $('.image67').css('transform', `translate3d(${x6},${y6},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image67').css('filter', `blur(${blur})`);

    $('.image68').css('transform', `translate3d(${x7},${y7},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image68').css('filter', `blur(${blur})`);

    $('.image69').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image69').css('filter', `blur(${blur})`);
   }
 });
 $(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 3.85;
  let start_point = parseInt(scroll_height - vw_height);

    if (scroll_height => vw_height) {
      let opacity = start_point

      $('.image66').css('opacity', opacity - 30);
      $('.image67').css('opacity', opacity - 30);
      $('.image68').css('opacity', opacity - 30);
      $('.image69').css('opacity', opacity - 30);
    }
  });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 3.9;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height => vw_height) {
    let blur = start_point * (0.00025) +'vw'
    let x8 = start_point * (0.3/2.3) + 'vw'
    let y8 = start_point * (-0.2/2.3) + 'vw'
    let z = start_point * (0) + 'vw'
    let scale = parseInt(start_point) * (0.0055)

    let x9 = start_point * (0.35/2.3) + 'vw'
    let y9 = start_point * (-0.05/2.3) + 'vw'

    let x10 = start_point * (0.4/2.3) + 'vw'
    let y10 = start_point * (-0.25/2.3) + 'vw'


    $('.image70').css('transform', `translate3d(${x8},${y8},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image70').css('filter', `blur(${blur})`);

    $('.image71').css('transform', `translate3d(${x9},${y9},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image71').css('filter', `blur(${blur})`);

    $('.image72').css('transform', `translate3d(${x10},${y10},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image72').css('filter', `blur(${blur})`);

   }
 });
 $(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 3.93;
  let start_point = parseInt(scroll_height - vw_height);

    if (scroll_height => vw_height) {
      let opacity = start_point

      $('.image70').css('opacity', opacity - 30);
      $('.image71').css('opacity', opacity - 30);
      $('.image72').css('opacity', opacity - 30);
    }
  });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 3.98;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height > vw_height) {
     let blur = start_point * (0.00025) +'vw'
     let x1 = start_point * (-0.15/2.3) + 'vw'
     let y1 = start_point * (-0.3/2.3) + 'vw'
     let z = start_point * (0) + 'vw'
     let scale = parseInt(start_point) * (0.0055)

     let x2 = start_point * (-0.055/2.3) + 'vw'
     let y2 = start_point * (0.2/2.3) + 'vw'

     let x3 = start_point * (-0.155/2.3) + 'vw'
     let y3 = start_point * (-0.1/2.3) + 'vw'

     let x4 = start_point * (0.05/2.3) + 'vw'
     let y4 = start_point * (-0.15/2.3) + 'vw'

     $('.image73').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image73').css('filter', `blur(${blur})`);

     $('.image74').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image74').css('filter', `blur(${blur})`);

     $('.image75').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image75').css('filter', `blur(${blur})`);

     $('.image76').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image76').css('filter', `blur(${blur})`);
    }
  });
  $(window).on("scroll", () => {
   let scroll_height = $(window).scrollTop();
   let vw_height = parseInt($(window).height()) * 4.01;
   let start_point = parseInt(scroll_height - vw_height);
    if (scroll_height => vw_height) {
       let opacity = start_point

       $('.image73').css('opacity', opacity - 30);
       $('.image74').css('opacity', opacity - 30);
       $('.image75').css('opacity', opacity - 30);
       $('.image76').css('opacity', opacity - 30);
     }
   });

$(window).on("scroll", () => {
    let scroll_height = $(window).scrollTop();
    let vw_height = parseInt($(window).height()) * 4.06;
    let start_point = parseInt(scroll_height - vw_height);
    if (scroll_height => vw_height) {
      let blur = start_point * (0.00025) +'vw'
      let x1 = start_point * (-0.055/2.3) + 'vw'
      let y1 = start_point * (-0.5/2.3) + 'vw'
      let z = start_point * (0) + 'vw'
      let scale = parseInt(start_point) * (0.0055)

      let x2 = start_point * (0.15/2.3) + 'vw'
      let y2 = start_point * (-0.3/2.3) + 'vw'

      let x3 = start_point * (-0.255/2.3) + 'vw'
      let y3 = start_point * (-0.05/2.3) + 'vw'

      let x4 = start_point * (0.15/2.3) + 'vw'
      let y4 = start_point * (-0.25/2.3) + 'vw'

      $('.image77').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
      $('.image77').css('filter', `blur(${blur})`);

      $('.image78').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
      $('.image78').css('filter', `blur(${blur})`);

      $('.image79').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
      $('.image79').css('filter', `blur(${blur})`);

      $('.image80').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
      $('.image80').css('filter', `blur(${blur})`);

     }
   });
  $(window).on("scroll", () => {
    let scroll_height = $(window).scrollTop();
    let vw_height = parseInt($(window).height()) * 4.09;
    let start_point = parseInt(scroll_height - vw_height);

      if (scroll_height => vw_height) {
        let opacity = start_point

        $('.image77').css('opacity', opacity - 30);
        $('.image78').css('opacity', opacity - 30);
        $('.image79').css('opacity', opacity - 30);
        $('.image80').css('opacity', opacity - 30);
      }
    });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 4.14;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height => vw_height) {
     let blur = start_point * (0.00025) +'vw'
     let z = start_point * (0) + 'vw'
     let scale = parseInt(start_point) * (0.0055)

     let x2 = start_point * (0.35/2.3) + 'vw'
     let y2 = start_point * (-0.25/2.3) + 'vw'

     let x3 = start_point * (0.2/2.3) + 'vw'
     let y3 = start_point * (-0.15/2.3) + 'vw'

     let x4 = start_point * (-0.25/2.3) + 'vw'
     let y4 = start_point * (0.15/2.3) + 'vw'


     $('.image81').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image81').css('filter', `blur(${blur})`);

     $('.image82').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image82').css('filter', `blur(${blur})`);

     $('.image83').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
     $('.image83').css('filter', `blur(${blur})`);
    }
});
  $(window).on("scroll", () => {
 let scroll_height = $(window).scrollTop();
 let vw_height = parseInt($(window).height()) * 4.17;
 let start_point = parseInt(scroll_height - vw_height);

   if (scroll_height => vw_height) {
     let opacity = start_point

     $('.image81').css('opacity', opacity - 30);
     $('.image82').css('opacity', opacity - 30);
     $('.image83').css('opacity', opacity - 30);
   }
 });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 4.22;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height => vw_height) {
         let blur = start_point * (0.00025) +'vw'
         let x1 = start_point * (0.3/2.3) + 'vw'
         let y1 = start_point * (-0.05/2.3) + 'vw'
         let z = start_point * (0) + 'vw'
         let scale = parseInt(start_point) * (0.0055)

         let x2 = start_point * (-0.15/2.3) + 'vw'
         let y2 = start_point * (-0.25/2.3) + 'vw'

         let x3 = start_point * (-0.15/2.3) + 'vw'
         let y3 = start_point * (0.15/2.3) + 'vw'

         let x4 = start_point * (0.25/2.3) + 'vw'
         let y4 = start_point * (-0.25/2.3) + 'vw'

         let x5 = start_point * (0.1/2.3) + 'vw'
         let y5 = start_point * (0.25/2.3) + 'vw'

         $('.image84').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
         $('.image84').css('filter', `blur(${blur})`);

         $('.image85').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
         $('.image85').css('filter', `blur(${blur})`);

         $('.image86').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
         $('.image86').css('filter', `blur(${blur})`);

         $('.image87').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
         $('.image87').css('filter', `blur(${blur})`);

         $('.image88').css('transform', `translate3d(${x5},${y5},${z}) scale3d(${scale},${scale},${scale})`);
         $('.image88').css('filter', `blur(${blur})`);
        }
});
  $(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 4.23;
  let start_point = parseInt(scroll_height - vw_height);

   if (scroll_height => vw_height) {
           let opacity = start_point

           $('.image84').css('opacity', opacity - 30);
           $('.image85').css('opacity', opacity - 30);
           $('.image86').css('opacity', opacity - 30);
           $('.image87').css('opacity', opacity - 30);
           $('.image88').css('opacity', opacity - 30);
         }
  });

$(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 4.28;
  let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height > vw_height) {
           let blur = start_point * (0.00025) +'vw'
           let x1 = start_point * (-0.05/2.3) + 'vw'
           let y1 = start_point * (0.3/2.3) + 'vw'
           let z = start_point * (0) + 'vw'
           let scale = parseInt(start_point) * (0.0055)

           let x2 = start_point * (0.35/2.3) + 'vw'
           let y2 = start_point * (0.25/2.3) + 'vw'

           let x3 = start_point * (0.25/2.3) + 'vw'
           let y3 = start_point * (0.1/2.3) + 'vw'

           let x4 = start_point * (-0.055/2.3) + 'vw'
           let y4 = start_point * (-0.35/2.3) + 'vw'

           let x5 = start_point * (-0.055/2.3) + 'vw'
           let y5 = start_point * (-0.2/2.3) + 'vw'

           let x6 = start_point * (-0.25/2.3) + 'vw'
           let y6 = start_point * (-0.1/2.3) + 'vw'

           let x7 = start_point * (0.15/2.3) + 'vw'
           let y7 = start_point * (-0.35/2.3) + 'vw'

           $('.image89').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image89').css('filter', `blur(${blur})`);

           $('.image90').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image90').css('filter', `blur(${blur})`);

           $('.image91').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image91').css('filter', `blur(${blur})`);

           $('.image92').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image92').css('filter', `blur(${blur})`);

           $('.image93').css('transform', `translate3d(${x5},${y5},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image93').css('filter', `blur(${blur})`);

           $('.image94').css('transform', `translate3d(${x6},${y6},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image94').css('filter', `blur(${blur})`);

           $('.image95').css('transform', `translate3d(${x7},${y7},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image95').css('filter', `blur(${blur})`);
          }
});
  $(window).on("scroll", () => {
    let scroll_height = $(window).scrollTop();
    let vw_height = parseInt($(window).height()) * 4.31;
    let start_point = parseInt(scroll_height - vw_height);

    if (scroll_height => vw_height) {
    let opacity = start_point

     $('.image89').css('opacity', opacity - 30);
     $('.image90').css('opacity', opacity - 30);
     $('.image91').css('opacity', opacity - 30);
     $('.image92').css('opacity', opacity - 30);
     $('.image93').css('opacity', opacity - 30);
     $('.image94').css('opacity', opacity - 30);
     $('.image95').css('opacity', opacity - 30);
    }
  });

$(window).on("scroll", () => {
let scroll_height = $(window).scrollTop();
let vw_height = parseInt($(window).height()) * 2.27;
let start_point = parseInt(scroll_height - vw_height);

  if (scroll_height => vw_height) {
    let blur = start_point * (0.00025) +'vw'
    let x = start_point * (-0.15/2.3) + 'vw'
    let y = start_point * (-0.3/2.3) + 'vw'
    let z = start_point * (0) + 'vw'
    let scale = parseInt(start_point) * (0.0055)

    let x2 = start_point * (-0.25/2.3) + 'vw'
    let y2 = start_point * (-0.15/2.3) + 'vw'

    let x3 = start_point * (0.05/2.3) + 'vw'
    let y3 = start_point * (0.25/2.3) + 'vw'

    let x4 = start_point * (-0.055/2.3) + 'vw'
    let y4 = start_point * (0.3/2.3) + 'vw'

    let x5 = start_point * (0.15/2.3) + 'vw'
    let y5 = start_point * (-0.2/2.3) + 'vw'

    $('.image96').css('transform', `translate3d(${x},${y},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image96').css('filter', `blur(${blur})`);

    $('.image97').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image97').css('filter', `blur(${blur})`);

    $('.image98').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image98').css('filter', `blur(${blur})`);

    $('.image99').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image99').css('filter', `blur(${blur})`);

    $('.image100').css('transform', `translate3d(${x5},${y5},${z}) scale3d(${scale},${scale},${scale})`);
    $('.image100').css('filter', `blur(${blur})`);
  }
});
  $(window).on("scroll", () => {
 let scroll_height = $(window).scrollTop();
 let vw_height = parseInt($(window).height()) * 2.3;
 let start_point = parseInt(scroll_height - vw_height);
   if (scroll_height => vw_height) {
     let opacity = start_point

     $('.image96, .image97, .image98, .image99, .image100').css('opacity', opacity - 30);

   }
 });

// ---- circle
 $(window).on("scroll", () => {
 let scroll_height = $(window).scrollTop();
 let vw_height = parseInt($(window).height()) * 4.5;
 let start_point = parseInt(scroll_height - vw_height);

   if (scroll_height > vw_height) {
     let scale = parseInt(start_point) * (0.01)
     $('.ellipse').css('transform', `scale3d(${scale},${scale},${scale})`);
   }
 });
 $(window).on("scroll", () => {
let scroll_height = $(window).scrollTop();
let vw_height = parseInt($(window).height()) * 4.5;
let start_point = parseInt(scroll_height - vw_height);
  if (scroll_height => vw_height) {
    let opacity = start_point
    $('.ellipse').css('opacity', opacity - 1);
  }
});

// $(window).on("scroll", () => {
// let scroll_height = $(window).scrollTop();
// let vw_height = parseInt($(window).height()) * 4.5;
// let start_point = parseInt(scroll_height - vw_height);
//
//   if (scroll_height > vw_height) {
//     $(".three").css({
//       backgroundSize: (start_point + scroll_height/10) + 'vw'
//     })
//   }
// });

$(window).on("scroll", () => {
let scroll_height = $(window).scrollTop();
let vw_height = parseInt($(window).height()) * 6.4;
let start_point = parseInt(scroll_height - vw_height);

  if (scroll_height > vw_height) {
    let scale = parseInt(start_point) * (0.1)
    $('.ellipsewhite').css('transform', `scale3d(${scale},${scale},${scale})`);
  }
});
$(window).on("scroll", () => {
let scroll_height = $(window).scrollTop();
let vw_height = parseInt($(window).height()) * 6.45;
let start_point = parseInt(scroll_height - vw_height);
 if (scroll_height => vw_height) {
   let opacity = start_point
   $('.ellipsewhite').css('opacity', opacity - 1);
 }
});
// ----text

$(window).on("scroll", () => {
let scroll_height = $(window).scrollTop();
let vw_height = parseInt($(window).height()) * 5.3;
let start_point = parseInt(scroll_height - vw_height);

  if (scroll_height > vw_height) {
    let translate = parseInt(start_point) * (-0.45) + 'vw'
    $('.text2').css('transform', `translateX(${translate})`);
}
});
$(window).on("scroll", () => {
let scroll_height = $(window).scrollTop();
let vw_height = parseInt($(window).height()) * 5.35;
let start_point = parseInt(scroll_height - vw_height);

  if (scroll_height > vw_height) {
    let translate = parseInt(start_point) * (-0.45) + 'vw'
    $('.text3').css('transform', `translateX(${translate})`);
}
});
$(window).on("scroll", () => {
let scroll_height = $(window).scrollTop();
let vw_height = parseInt($(window).height()) * 5.4;
let start_point = parseInt(scroll_height - vw_height);

  if (scroll_height > vw_height) {
    let translate = parseInt(start_point) * (-0.45) + 'vw'
    $('.text4').css('transform', `translateX(${translate})`);
}
});


  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 0.5*window.innerHeight){
      $('.text').css("display", "none");
    } else if (($(window).scrollTop() < 0.5*window.innerHeight)) {
      $('.text').css("display", "block");
    }

 });
});
// $( "image3" ).click(function() {
//   if ($('.two').hasClass('image3')) {
//     $('.slider').slick({
//       initialSlide: 1,
//   });
// };
// } else if ($('.two').hasClass('blue')) {
//
// }


$(document).ready(function() {
    $('.slider').slick({
      infinite: false,
      slidesToShow: 3,
      // speed: 500,
      // easing: 'ease',
      // slides start
      initialSlide: 0,
      swipe:false,
      touchTreshold: 5,
      waitForAnimate: false,
      variableWidth: true,
      centerMode: true,
      centerPadding: '376vw',

      responsive: [{
        breakpoint: 1,
        settings: {
          arrows: false,
          centerMode: true,
          margin: 10,
          slidesToShow: 3
          // asNavFor: '.imja klassa kuritsi'
        }},
      {
        breakpoint: 2,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0 10%',
          slidesToShow: 1
          // asNavFor: '.imja slaider'
        }
      }
    ]
  });
});


document.getElementById("image1").onclick = function() {slider()};
document.getElementById("image2").onclick = function() {slider()};
document.getElementById("image3").onclick = function() {slider()};
document.getElementById("image4").onclick = function() {slider()};
document.getElementById("image5").onclick = function() {slider()};
document.getElementById("image6").onclick = function() {slider()};
document.getElementById("image7").onclick = function() {slider()};
document.getElementById("image8").onclick = function() {slider()};
document.getElementById("image9").onclick = function() {slider()};
document.getElementById("image10").onclick = function() {slider()};
document.getElementById("image11").onclick = function() {slider()};
document.getElementById("image12").onclick = function() {slider()};
document.getElementById("image13").onclick = function() {slider()};
document.getElementById("image14").onclick = function() {slider()};
document.getElementById("image15").onclick = function() {slider()};
document.getElementById("image16").onclick = function() {slider()};
document.getElementById("image17").onclick = function() {slider()};
document.getElementById("image18").onclick = function() {slider()};
document.getElementById("image19").onclick = function() {slider()};
document.getElementById("image20").onclick = function() {slider()};
document.getElementById("image21").onclick = function() {slider()};
document.getElementById("image22").onclick = function() {slider()};
document.getElementById("image23").onclick = function() {slider()};
document.getElementById("image24").onclick = function() {slider()};
document.getElementById("image25").onclick = function() {slider()};
document.getElementById("image26").onclick = function() {slider()};
document.getElementById("image27").onclick = function() {slider()};
document.getElementById("image28").onclick = function() {slider()};
document.getElementById("image29").onclick = function() {slider()};
document.getElementById("image30").onclick = function() {slider()};
document.getElementById("image31").onclick = function() {slider()};
document.getElementById("image32").onclick = function() {slider()};
document.getElementById("image33").onclick = function() {slider()};
document.getElementById("image34").onclick = function() {slider()};
document.getElementById("image35").onclick = function() {slider()};
document.getElementById("image36").onclick = function() {slider()};
document.getElementById("image37").onclick = function() {slider()};
document.getElementById("image38").onclick = function() {slider()};
document.getElementById("image39").onclick = function() {slider()};
document.getElementById("image40").onclick = function() {slider()};
document.getElementById("image41").onclick = function() {slider()};
document.getElementById("image42").onclick = function() {slider()};
document.getElementById("image43").onclick = function() {slider()};
document.getElementById("image44").onclick = function() {slider()};
document.getElementById("image45").onclick = function() {slider()};
document.getElementById("image46").onclick = function() {slider()};
document.getElementById("image47").onclick = function() {slider()};
document.getElementById("image48").onclick = function() {slider()};
document.getElementById("image49").onclick = function() {slider()};
document.getElementById("image50").onclick = function() {slider()};
document.getElementById("image51").onclick = function() {slider()};
document.getElementById("image52").onclick = function() {slider()};
document.getElementById("image53").onclick = function() {slider()};
document.getElementById("image54").onclick = function() {slider()};
document.getElementById("image55").onclick = function() {slider()};
document.getElementById("image56").onclick = function() {slider()};
document.getElementById("image57").onclick = function() {slider()};
document.getElementById("image58").onclick = function() {slider()};
document.getElementById("image59").onclick = function() {slider()};
document.getElementById("image60").onclick = function() {slider()};
document.getElementById("image61").onclick = function() {slider()};
document.getElementById("image62").onclick = function() {slider()};
document.getElementById("image63").onclick = function() {slider()};
document.getElementById("image64").onclick = function() {slider()};
document.getElementById("image65").onclick = function() {slider()};
document.getElementById("image66").onclick = function() {slider()};
document.getElementById("image67").onclick = function() {slider()};
document.getElementById("image68").onclick = function() {slider()};
document.getElementById("image69").onclick = function() {slider()};
document.getElementById("image70").onclick = function() {slider()};
document.getElementById("image71").onclick = function() {slider()};
document.getElementById("image72").onclick = function() {slider()};
document.getElementById("image73").onclick = function() {slider()};
document.getElementById("image74").onclick = function() {slider()};
document.getElementById("image75").onclick = function() {slider()};
document.getElementById("image76").onclick = function() {slider()};
document.getElementById("image77").onclick = function() {slider()};
document.getElementById("image78").onclick = function() {slider()};
document.getElementById("image79").onclick = function() {slider()};
document.getElementById("image80").onclick = function() {slider()};
document.getElementById("image81").onclick = function() {slider()};
document.getElementById("image82").onclick = function() {slider()};
document.getElementById("image83").onclick = function() {slider()};
document.getElementById("image84").onclick = function() {slider()};
document.getElementById("image85").onclick = function() {slider()};
document.getElementById("image86").onclick = function() {slider()};
document.getElementById("image87").onclick = function() {slider()};
document.getElementById("image88").onclick = function() {slider()};
document.getElementById("image89").onclick = function() {slider()};
document.getElementById("image90").onclick = function() {slider()};
document.getElementById("image91").onclick = function() {slider()};
document.getElementById("image92").onclick = function() {slider()};
document.getElementById("image93").onclick = function() {slider()};
document.getElementById("image94").onclick = function() {slider()};
document.getElementById("image95").onclick = function() {slider()};
document.getElementById("image96").onclick = function() {slider()};
document.getElementById("image97").onclick = function() {slider()};
document.getElementById("image98").onclick = function() {slider()};
document.getElementById("image99").onclick = function() {slider()};
// document.getElementById("image100").onclick = function() {slider()};
// // document.getElementById("image101").onclick = function() {slider()};
// //

function slider() {
  document.getElementById("slider").style.display = "block";
  document.getElementById("close").style.display = "block";
}


document.getElementById("close").onclick = function() {sliderclose()};

function sliderclose() {
  document.getElementById("slider").style.display = "none";
  document.getElementById("close").style.display = "none";
}



document.getElementById("trail").onclick = function() {trail()};

function trail() {
  document.getElementById("content").style.display ="flex"
}

function slide() {
  var x = document.getElementById("slider");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

  $( "image3" ).click(function() {
       {  $( '.slider').slick({
            initialSlide:5,
          });
      }
  });

function setup() {
  background(255, 230, 0);
  let canvas = createCanvas(windowWidth/2.5, windowWidth/2.5);
  canvas.parent('chicken5');

}
function draw() {
  if (mouseIsPressed) {
   fill(252, 86, 93);
 } else {
   fill(255, 255, 255);
 }
 ellipse(mouseX, mouseY, windowWidth/25, windowWidth/25);
};

var t5 = function( p ) {
let t = 0;
p.setup = function() {
p.createCanvas(windowWidth/2.5, windowWidth/2.5);
p.noStroke();
p.fill(252, 86, 93);
}

p.draw = function() {
p.background(255, 230, 0);
for (let x = 0; x <= width; x = x + 30) {
  for (let y = 0; y <= height; y = y + 30) {
    const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
    const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
    const angle = xAngle * (x / width) + yAngle * (y / height);

    const myX = x + 20 * cos(2 * PI * t + angle);
    const myY = y + 20 * sin(2 * PI * t + angle);

    p.ellipse(myX, myY, 12);
  }
}

t = t + 0.01;
}
};
var myp5 = new p5(t5, 'chicken2');

var t8 = function( p ) {
let dim;
p.setup = function() {
p.createCanvas(windowWidth/2.5, windowWidth/2.5);
dim = width / 2;
p.background(255,255,255);
p.colorMode(HSB, 360, 170, 105);
p.noStroke();
p.ellipseMode(RADIUS);
p.frameRate(1);
}
p.draw = function() {
background(0);
for (let x = 0; x <= width; x += dim) {
p.drawGradient(x, height / 2);
}
}
p.drawGradient = function(x, y) {
let radius = dim / 1.1;
let h = p.random(0, 360);
for (let r = radius; r > 0; --r) {
p.fill(h, 100, 100);
p.ellipse(x, y, r, r);
h = (h + 1) % 360;
}
}
};

// var myp5 = new p5(t5, 'chicken2');
//
// var t8 = function( p ) {
// let dim;
// p.setup = function() {
//   p.createCanvas(windowWidth/2.5, windowWidth/2.5);
//   dim = width / 2;
//   p.background(252,86,93);
//   p.colorMode(HSB, 360, 160, 100);
//   p.noStroke();
//   p.ellipseMode(RADIUS);
//   p.frameRate(1);
// }
// p.draw = function() {
//   background(0);
//   for (let x = 0; x <= width; x += dim) {
//     p.drawGradient(x, height / 2);
//   }
// }
// p.drawGradient = function(x, y) {
//   let radius = dim / 2;
//   let h = p.random(0, 360);
//   for (let r = radius; r > 0; --r) {
//     p.fill(h, 100, 100);
//     p.rect(x, y, 100, 100);
//     h = (h + 1) % 360;
//   }
// }
// };
var myp5 = new p5(t8, 'chicken8');

var t6 = function( p ) {
  p.setup = function() {
    p.createCanvas(windowWidth/2.5, windowWidth/2.5);
    p.noStroke();
    p.background(252, 86, 93);
    rectWidth = width / 1;
    }
    p.draw = function() {
    }
    p.keyPressed = function() {
    let keyIndex = -1;
    if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    if (keyIndex === -1) {
    p.background(252, 86, 93);
    } else {
    randFill_r = Math.floor(Math.random() * 255 + 1);
    randFill_g = Math.floor(Math.random() * 255 + 1);
    randFill_b = Math.floor(Math.random() * 255 + 1);
    p.fill(randFill_r, randFill_g, randFill_b);
    let x = map(keyIndex, 0, 25, 0, width - rectWidth);
    p.rect(x, 0, rectWidth, height);
    }
  }
};var myp5 = new p5(t6, 'chicken4');

var t7 = function( p ) {
let x = 1;
let y = 1;
let easing = 0.05;

p.setup = function() {
p.createCanvas(windowWidth/2.5, windowWidth/2.5);
p.noStroke();
}
p.draw = function() {
p.background(49, 207, 244);
let targetX = mouseX;
let dx = targetX - x;
x += dx * easing;
let targetY = mouseY;
let dy = targetY - y;
y += dy * easing;
p.ellipse(x, y, 70, 70);
}
};
var myp5 = new p5(t7, 'chicken6');

var t6 = function( p ) {
p.setup = function() {
p.createCanvas(windowWidth/2.5, windowWidth/2.5);
p.noStroke();
p.background(255);
rectWidth = width / 1;
}
p.draw = function() {
}
p.keyPressed = function() {
let keyIndex = -1;
if (key >= 'a' && key <= 'z') {
keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
}
if (keyIndex === -1) {
p.background(255);
} else {
randFill_r = Math.floor(Math.random() * 255 + 1);
randFill_g = Math.floor(Math.random() * 255 + 1);
randFill_b = Math.floor(Math.random() * 255 + 1);
p.fill(randFill_r, randFill_g, randFill_b);
let x = map(keyIndex, 0, 25, 0, width - rectWidth);
p.rect(x, 0, rectWidth, height);
}}
};
// var myp5 = new p5(t6, 'chicken4');
//
// var t7 = function( p ) {
// let x = 1;
// let y = 1;
// let easing = 0.05;
//
//   p.setup = function() {
//   p.createCanvas(windowWidth/2.5, windowWidth/2.5);
//   p.noStroke();
// }
//
//   p.draw = function() {
//   p.background(255);
//   let targetX = mouseX;
//   let dx = targetX - x;
//   x += dx * easing;
//
//   let targetY = mouseY;
//   let dy = targetY - y;
//   y += dy * easing;
//
//   p.ellipse(x, y, 66, 66);
// }
// };
// var myp5 = new p5(t7, 'chicken6');

var t = function( p ) {
var x = 100;
var y = 220;
var speed = 30;
var x2 = 100;
var y2 = 20;
var speed2 =350;
var x3 = 100;
var y3 = 420;
var speed3 = 30;
var x4 = 100;
var y4 = 620;
var speed4 = 30;
p.setup = function() {
p.createCanvas(windowWidth/2.5, windowWidth/2.5);
};
p.draw = function() {
p.fill(49,207,244);
x += speed;
if(x > p.width){
  x = 0;
}
p.ellipse(x,y,120,120);
p.fill(255,230,0);
x2 += speed;
if(x2 > p.width){
  x2 = 0;
}
p.ellipse(x2,y2,120,120);
p.fill(253,177,87);
x3 += speed;
if(x3 > p.width){
  x3 = 0;
}
p.ellipse(x3,y3,120,120);
p.fill(252,86,93);
x4 += speed;
if(x4 > p.width){
  x4 = 0;
}
p.ellipse(x4,y4,120,120);
};
};
var myp5 = new p5(t, 'chicken');

var t9 = function( p ) {
const barWidth = 20;
let lastBar = -1;
p.setup = function() {
p.createCanvas(windowWidth/2.5, windowWidth/2.5);
p.colorMode(HSB, height, height, height);
p.noStroke();
}
p.draw = function() {
let whichBar = mouseX / barWidth;
if (whichBar !== lastBar) {
let barX = whichBar * barWidth;
p.fill(mouseY, height, height);
p.rect(barX, 0, barWidth, height);
lastBar = whichBar;
}}
};
var myp5 = new p5(t9, 'chicken9');

var t3 = function( p ) {
var x = 100.0;
var y = 150;
p.setup = function() {
p.createCanvas(windowWidth/2.5, windowWidth/2.5);
p.background(252, 86, 93);
};
p.draw = function() {
p.ellipse(x,y,100,100);
p.stroke(255, 255, 255);
p.fill(252, 86, 93);
x = x + random(-1, 1.2);
y = y - 5;
if (y < 0) {
y = height; {

};
}};
};
var myp5 = new p5(t3, 'chicken3');

var t10 = function( p ) {
let xspacing = 15;
let w;
let theta = 0;
let amplitude = 100;
let period = 700;
let dx;
let yvalues;
p.setup = function() {
p.createCanvas(windowWidth/2.5, windowWidth/2.5);
w = width + 16;
dx = (TWO_PI / period) * xspacing;
yvalues = new Array(floor(w / xspacing));
}
p.draw = function() {
p.background(255,230,0);
p.calcWave();
p.renderWave();
}

p.calcWave = function() {
theta += 0.1;

let x = theta;
for (let i = 0; i < yvalues.length; i++) {
yvalues[i] = sin(x) * amplitude;
x += dx;
}
}

p.renderWave = function() {
p.noStroke();
p.fill(252, 86, 93);

for (let x = 0; x < yvalues.length; x++) {
p.rect(x * xspacing, height / 2 + yvalues[x], 18, 18);
}
}
};
var myp5 = new p5(t10, 'chicken10');

// var t10 = function( p ) {
//   let xspacing = 15;
//   let w;
//   let theta = 0;
//   let amplitude = 200; // Height of wave
//   let period = 100; // How many pixels before the wave repeats
//   let dx; // Value for incrementing x
//   let yvalues; // Using an array to store height values for the wave
//
// p.setup = function() {
//   p.createCanvas(windowWidth/2.5, windowWidth/2.5);
//   w = width + 16;
//   dx = (TWO_PI / period) * xspacing;
//   yvalues = new Array(floor(w / xspacing));
// }
//
//   p.draw = function() {
//     p.background(255,230,0);
//     p.calcWave();
//     p.renderWave();
//   }
//
//   p.calcWave = function() {
//   theta += 0.1;
//
//   let x = theta;
//   for (let i = 0; i < yvalues.length; i++) {
//     yvalues[i] = sin(x) * amplitude;
//     x += dx;
//   }
// }
//
// p.renderWave = function() {
//   p.noStroke();
//   p.fill(252, 86, 93);
//
//   for (let x = 0; x < yvalues.length; x++) {
//     p.ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
//   }
// }
// };
// var myp5 = new p5(t10, 'chicken10');

var t11 = function( p ) {
  let a;
  let b;
  let direction;
  p.setup = function() {
    p.createCanvas(windowWidth/2.5, windowWidth/2.5);
    p.colorMode(HSB, width);
    a = 0;
    b = width;
    direction = true;
    p.frameRate(100);
  }
  p.draw = function() {
    a++;
    if (a > width) {
    a = 0;
    direction = !direction;
  }
  if (direction === true) {
    p.stroke(a);
  } else {
    p.stroke(width - a);
  }
    p.line(a, 0, a, height / 2);

  b--;
  if (b < 0) {
    b = width;
  }
  if (direction == true) {
    p.stroke(width - b);
  } else {
    p.stroke(b);
  }
    p.line(b, height / 2 + 1, b, height);
  }
};
var myp5 = new p5(t11, 'chicken11');

var t12 = function( p ) {
let num = 2000;
let range = 6;
let ax = [];
let ay = [];
p.setup = function() {
p.createCanvas(windowWidth/2.5, windowWidth/2.5);
for ( let i = 0; i < num; i++ ) {
  ax[i] = width / 2;
  ay[i] = height / 2;
}
p.frameRate(30);
}
p.draw = function() {
p.background(253,177,87);

for ( let i = 1; i < num; i++ ) {
  ax[i - 1] = ax[i];
  ay[i - 1] = ay[i];
}
ax[num - 1] += random(-range, range);
ay[num - 1] += random(-range, range);
ax[num - 1] = constrain(ax[num - 1], 0, width);
ay[num - 1] = constrain(ay[num - 1], 0, height);
for ( let j = 1; j < num; j++ ) {
  let val = j / num * 204.0 + 51;
  p.stroke(val);
  p.line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
}}
};
var myp5 = new p5(t12, 'chicken12');

$(document).ready(function(){
$("h2").click(function(){
$(this).hide();
});
});

$( function() {
$( "#sortable" ).sortable();
$( "#sortable" ).disableSelection();
} );

$('#colorpicker').on('input', function() {
$('#hexcolor').val(this.value);
});
