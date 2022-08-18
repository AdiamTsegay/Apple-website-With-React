let h3 = $(".footer-links-wrapper h3");
console.log(h3);
if (window.innerWidth < 768) {
  h3.each(function (index, singleH3) {
    console.log(singleH3);
    console.log(index);
    $(singleH3).on("click", function () {
      let singleUl = $(singleH3).next();
      singleUl.slideToggle();
      $(singleH3).toggleClass("expanded");
    });
  });
}
$(window).on("resize", function () {
  console.log(window.innerWidth);
  location.reload();
});
