// Main
  // Posts slick carousel
  $(document).ready(function () {
    $(".three-items").slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true,
      autoplay: true,
      focusOnSelect: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
    });
  });

// Skills show/hide | Skill 1
  $(".s1-toggle-btn").click(function () {
    let toggleBtn = $(this);
    toggleBtn.text() == toggleBtn.data("txt-swap")
      ? toggleBtn.text(toggleBtn.data("txt-original"))
      : toggleBtn.text(toggleBtn.data("txt-swap"));
    $(".s1-other-client").toggle();
  });
  // Class add/remove | Skill 1
  $(function () {
    $("button.s1-toggle-btn").on("click", function () {
      $(".s1-clients-wrap").toggleClass("skills-overflow");
    });
  });

// Skills show/hide | Skill 2
  $(".s2-toggle-btn").click(function () {
    let toggleBtn = $(this);
    toggleBtn.text() == toggleBtn.data("txt-swap")
      ? toggleBtn.text(toggleBtn.data("txt-original"))
      : toggleBtn.text(toggleBtn.data("txt-swap"));
    $(".s2-other-client").toggle();
  });
  // Class add/remove | Skill 2
  $(function () {
    $("button.s2-toggle-btn").on("click", function () {
      $(".s2-clients-wrap").toggleClass("skills-overflow");
    });
  });

// Recommendations
  // comment slick item
  $(document).ready(function () {
    $(".rec-three-items").slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true,
      autoplay: true,
      focusOnSelect: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
    });
  });

// Following show/hide
  $("button.show-more-btn").click(function () {
    let toggleBtn = $(this);
    toggleBtn.text() == toggleBtn.data("txt-swap")
      ? toggleBtn.text(toggleBtn.data("txt-original"))
      : toggleBtn.text(toggleBtn.data("txt-swap"));
    $(".show-follow-item").toggle();
  });

// Site right aside
  // Carousel
  $(document).ready(function () {
    $(".one-time").slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      focusOnSelect: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
    });
  });