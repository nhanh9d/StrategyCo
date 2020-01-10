jQuery( function($) {

  //Stop scroll for tabs
  $(document).on('click', '.vc_tta-tab  a', function( e ){
    $('html, body').stop();
  });

});

jQuery(document).ready(function($) {
	
	// store UTM params in cookies when we find them
	var source = getUrlParameter('utm_source');
	var medium = getUrlParameter('utm_medium');
	var campaign = getUrlParameter('utm_campaign');

	if (source || medium || campaign) {
		var cookieDomain = location.host.split('.');
		var newUtm = {
			'url': location.href,
			'date': new Date(),
			'source': source,
			'medium': medium,
			'campaign': campaign
		}
		var utmCookie = Cookies.get('utms');
		if (utmCookie) {
			utmCookie = JSON.parse(utmCookie);
			if (utmCookie.length > 5) {
				utmCookie.splice(0, 1);
			}
		} else {
			utmCookie = [];
		}
		utmCookie.push(newUtm);
		var future = new Date();
		future.setDate(future.getDate() + 90);
		Cookies.set('utms', utmCookie, {path: '/', domain: cookieDomain.slice(-2).join('.'), expires: future});
	}

  //VC Our experts
  $('.vc-our-experts .experts .expert-nav').click(function(event) {
    var id = $(this).attr('expert-id');

    $('.vc-our-experts .expert-nav.selected').removeClass('selected');
    $(this).addClass('selected');
    
    $('.vc-our-experts .video.selected').removeClass('selected');
    $('.vc-our-experts .video#expert-video-'+id).addClass('selected');

    $('.vc-our-experts .expert.selected').removeClass('selected');
    $('.vc-our-experts .expert#expert-'+id).addClass('selected');
  });

  //VC How it works
  $('.vc_how-it-works .step-link').click(function(event) {
    var id = $(this).attr('step');

    $('.vc_how-it-works .step-link.active').removeClass('active');
    $('.vc_how-it-works .step-link').removeClass('completed');
    $(this).addClass('active');

    $('.vc_how-it-works .step-link').each(function(index, el) {
      if ( $(this).attr('step') < id ) {
        $(this).addClass('completed');
      };
    });

    $('.vc_how-it-works .step img').removeClass('active');
    $('.vc_how-it-works .step img#step-'+id).addClass('active');
  });

  var runSteps = setInterval(function(){ runStepsFunc() }, 5000);

  function runStepsFunc() {
      var el = $('.vc_how-it-works .step-link.active');
      el.next().trigger('click');
  }

  $('.vc_how-it-works .step-link').on( 'mousedown', function(event) {
    clearInterval(runSteps);
  });


  // Contact Us form
  $('.contact-us-popup').click(function(event) {
    $('#contact-us').show();
  });

  $('#contact-us .close-popup').not('modal').click(function(event) {
    $('#contact-us').hide();
  });


  // Demo form
  $('.demo-popup').click(function(event) {
    $('#emailDemoForm').show();
  });

  $('#emailDemoForm .close-popup').click(function(event) {
    $('#emailDemoForm').hide();
  });

  // Learn Video
  $('#learn-video .close-popup, #learn-video .popup-overlay').click(function(event) {
    console.log("Click");
    $('#learn-video').hide();
  });

  // FAQ Page
  $('.faq #expert').click(function(event) {
    $('.faq #tab1').show();
    $('.faq #tab2').hide();
  });
  $('.faq #business').click(function(event) {
    $('.faq #tab2').show();
    $('.faq #tab1').hide();
  });

  jQuery('.page .site > .x-container.max.width').css({
    'max-width': '900px',
    width: '90%'
  });
});


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var getUrlParameter = function getUrlParameter(sParam, url, defaultValue) {
    if (url && url.indexOf('?') > -1) {
        var sPageURL = url.split('?')[1];
    } else if (!url) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1));
    } else {
        return defaultValue;
    }
    var sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
    return defaultValue;
};