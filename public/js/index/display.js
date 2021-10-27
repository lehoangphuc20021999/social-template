function display() {

  $(document).ready(function () {

    //- DISPLAY NONE ALL SECTION WHEN IN PERSONAL PAGE
    if ($('body').hasClass('personal-page')) {
      $('#main-sidebar').addClass('open')
      $('#main-sidebar-mobile').addClass('open');
    }

    //- DISPLAY NONE ALL SECTION WHEN IN LOGIN, REGISTER PGE
    if ($('body').hasClass('login-page') || $('body').hasClass('register-page')) {
      $('header, #main-sidebar, #main-sidebar-mobile').css({ "display": "none", "transition": "none" });
      $('.main').addClass('normalMP');
    }

    //- DROPDOWN
    $('.dropdown').click(function (e) {
      e.preventDefault();
      $(this).find('ul').slideToggle();
      $(this).find('.icon-arrow').toggleClass('rotate');
    })

    $('.dropdown > ul').click(function (e) {
      e.stopPropagation(); // Now the event won't bubble up
    })

    //- UPLOAD STATUS
    $("#textarea-activity").click(function () {
      $('#textarea-activity, .upload-filelist, .form-bottom').addClass('open')
      $('input[type="reset"]').css({ "display": "inline-block" });
      $(this).parent().css({ "margin-bottom": "0" });
    })

    $('#btn-cancel').click(function () {
      $('#textarea-activity, .upload-filelist, .form-bottom').removeClass('open');
      $('.activity-form .form-group').css({ "margin-bottom": "1rem" });
      $('#textarea-activity').css({ "height": "45px" });
      $(this).css({ "display": "none" });
    })

    //- DATETIMEPICKER
    $('#datetimepicker').datetimepicker({
      format: 'd.m.Y H:i',
      inline: true,
      lang: 'vi',
      timepicker: false,
      theme: 'light',
      maxDate: 0,
    });

    //- PREVIEW MULTIPLE IMAGES
    function previewImages() {
      let preview = document.querySelector('.file-thumb').getElementsByClassName("row")[0];

      if ($('.upload-file').css('display') == 'none') {
        $('.upload-file').css('display', 'block')
      }

      if (this.files) {
        [].forEach.call(this.files, readAndPreview);
      }

      function readAndPreview(file) {
        // Make sure `file.name` matches our extensions criteria
        if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
          return alert(file.name + " is not an image");
        } // else...

        let reader = new FileReader();

        reader.addEventListener("load", function () {
          let image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = this.result;

          let div = document.createElement('div');
          div.classList.add('inner-image')
          div.innerHTML = "<img height='" + image.height + "' title='" + image.title + "' src='" + image.src + "'>"

          preview.appendChild(div);
        });

        reader.readAsDataURL(file);

      }
    }
    let preview = document.querySelector('#files');
    if (preview) {
      preview.addEventListener("change", previewImages)
    }
    else {
      preview = null;
    }

    /**
     * Initiate lightbox 
     */
    const imageLightbox = GLightbox({
      selector: '.image-lightbox',
      openEffect: 'zoom',
      closeEffect: 'fade'
    });

    /**
     * Initiate isotope
     */
    const isotope = $('.isotope-container').isotope({
      itemSelector: '.isotope-item',
    });

    //- CHANGE NAVIGATION-SIDEBAR
    $('#navigation-menu').click(function () {
      if ($('#main-sidebar').hasClass('open')) {
        $('header, main').addClass('closeDiv');
        $('#main-sidebar, body').removeClass('open')
        $('#main-sidebar-mobile').addClass('open');
      }
      else {
        $('.overlay, body, #main-sidebar').addClass('open');
        $('#main-sidebar-mobile').removeClass('open');
        $('header, main').removeClass('closeDiv');
      }

      // Need time to reactive isotope
      setTimeout(function () {
        isotope.isotope()
      }, 500);
    })

    // Every time we resize browser, it will reactive to arrange image in post
    $(window).resize(function () {
      setTimeout(function () {
        isotope.isotope()
      }, 500);
    });

    //- FIXED BUG FOR NAVIGATION
    if ($(window).width() < 992) {
      $('#main-sidebar').removeClass('open');
    }

    $(window).resize(function () {
      if ($(window).width() >= 992) {
        $('#main-sidebar').addClass('open');
        $('header, main').removeClass('closeDiv');
      } else {
        $('#main-sidebar, .overlay, body').removeClass('open')
      }
    });

    $('#hide-sidebar-mobile').click(function () {
      if ($('#main-sidebar').hasClass('open')) {
        $('#main-sidebar, .overlay, body').removeClass('open')
      } else {
        $('#main-sidebar').addClass('open');
      }
    });

    $('.overlay').click(function () {
      if ($('#main-sidebar').hasClass('open')) {
        $('#main-sidebar, .overlay, body').removeClass('open');
      }
    });

    //- TOGGLE DOTS
    $('.dots').click(function () {
      if ($(this).next('ul').hasClass('open')) {
        $(this).next('ul').removeClass('open');
        $(this).removeClass('toggle-bg-color');
      } else {
        $(this).next('ul').addClass('open')
        $(this).addClass('toggle-bg-color');
      }
    })

    //- CLICK OUTSIDE AND CLOSE ACTION MENU
    $(document).on("click", function (e) {
      const container = $('.dots-icon')

      if ((!container.is(e.target) && container.has(e.target).length === 0) || $(e.target).hasClass('dots')) {
        $('.dots-icon > .actions').removeClass('open');
        $('.dots-icon > .dots').removeClass('toggle-bg-color');
      }
    })

    //- OPEN COMMENT SECTION
    $('.btn-comment-post, .total-comment').click(function (e) {
      e.preventDefault();
      $(this).closest('.comment-area').find('.btn-wrapper, .comments, > .your-reply').toggleClass('hideDiv');
    })

    //- REPLY COMMENTS
    $('.your-reply textarea').click(function () {
      $(this).keyup(function (e) {
        if ($(this).val().trim().length > 0) {
          if (e.key === 'Enter' || e.keyCode === 13) {
            $(this).closest("form").submit();
          }
          $(this).next('button[type="submit"]').css("display", "block");
        } else {
          $(this).next('button[type="submit"]').css("display", "none");
        }
      });
    })

    //- BTN REPLY
    $('.btn-reply').click(function () {
      $(this).closest('.acomment').find('> .d-flex > .your-reply.sub').toggleClass('closeDiv');
    })

    //- MAKE TEXTARE NOT OVERFLOW: AUTO AND DISAPPEAR SCROLLBAR
    $("textarea").each(function () {
      this.setAttribute("style", "overflow-y:hidden; height: 45px;");
    }).on("input", function () {
      this.style.height = "auto";
      this.style.height = (this.scrollHeight - 17) + "px";
    });

    //- DISPLAY: NONE AND DELETE IMAGE PREVIEW
    $('.activity-form .file-action').click(function () {
      $(this).closest('.upload-file').css({ "display": "none" });
      $(this).prev().find('.inner-image').empty();
    })
  })
}

export { display };