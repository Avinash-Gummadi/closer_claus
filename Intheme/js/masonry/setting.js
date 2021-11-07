// (function ($) {
//   "use strict";
//
//   var masonryGrid = function () {
//     var self = $("#gallery");
//     self.masonry({
//       isAnimated: true,
//       columnWidth: ".grid-sizer",
//       itemSelector: ".grid-item",
//     });
//
//     $(".filter-items li a").on("click", function (e) {
//       e.preventDefault();
//
//       var filter = $(this).attr("data-filter");
//
//       $(".filter-items  li a").removeClass("active");
//       $(this).addClass("active");
//
//       self.masonryFilter({
//         filter: function () {
//           if (!filter) return true;
//           return $(this).attr("data-filter") == filter;
//         },
//       });
//     });
//   };
//
//   masonryGrid();
//   $(window).on("load", function () {
//     setTimeout(masonryGrid, 1000);
//   });
// })(jQuery);
$(document).ready(function () {
  $(".filter-items li a").on("click", function (e) {
    e.preventDefault();
    $(".filter-items li a").removeClass("active");
    $(this).addClass("active");
    var filter = $(this).attr("data-filter");
    if (filter == "connect") {
      $(".grid-item").removeClass("show");
      $(".connect").addClass("show");
    } else if (filter == "manage") {
      $(".grid-item").removeClass("show");
      $(".manage").addClass("show");
    } else if (filter == "collaborate") {
      $(".grid-item").removeClass("show");
      $(".collaborate").addClass("show");
    } else if (filter == "crm") {
      $(".grid-item").removeClass("show");
      $(".crm").addClass("show");
    } else if (filter == "training") {
      $(".grid-item").removeClass("show");
      $(".training").addClass("show");
    } else if (filter == "sales_pipeline") {
      $(".grid-item").removeClass("show");
      $(".sales_pipeline").addClass("show");
    } else if (filter == "payments") {
      $(".grid-item").removeClass("show");
      $(".payments").addClass("show");
    } else if (filter == "support") {
      $(".grid-item").removeClass("show");
      $(".support").addClass("show");
    }
  });
});
