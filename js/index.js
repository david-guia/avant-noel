$("#loader").delay(2000).fadeOut("slow");
$(function () {
  $('.color-panel').on("click", function (e) {
    e.preventDefault();
    $('.color-changer').toggleClass('color-changer-active');
  });
  $('.colors a').on("click", function (e) {
    e.preventDefault();
    var attr = $(this).attr("title");
    console.log(attr);
    $('head').append('<link rel="stylesheet" href="css/' + attr + '.css">');
  });
});
$(function () {
  $('.menubar').on('click', function () {
    gsap.to('#navigation-content', .6, { y: 0 });
  })
  $('.navigation-close').on('click', function () {
    gsap.to('#navigation-content', .6, { y: "-100%" });
  });
});

$(function () {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 50 - Math.random() * 25; // Apparition plus rapide (était 200-100)

    if (this.isDeleting) { delta /= 4; } // Disparition plus rapide (était /2)

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = 3000; // Pause de 3 secondes une fois le texte complet
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 50; // Transition rapide vers le prochain texte (était 100)
    }

    // Stocker la référence du timeout pour pouvoir l'arrêter
    var that = this;
    this.timeout = setTimeout(function () {
      that.tick();
    }, delta);
  };

  // Fonction globale accessible pour la réinitialisation
  window.TxtRotate = TxtRotate;

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        // Stocker l'instance dans l'élément pour pouvoir la manipuler plus tard
        elements[i].txtRotateInstance = new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
    document.body.appendChild(css);
  };
})
$(function () {

  $('#statistics-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#help', 0, { display: "none" });
    gsap.to('#memory', 0, { display: "none" });
    gsap.to('#resources', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
    gsap.to('#statistics', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  })

  $('#help-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#statistics', 0, { display: "none" });
    gsap.to('#memory', 0, { display: "none" });
    gsap.to('#resources', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
    gsap.to('#help', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  })

  $('#memory-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#statistics', 0, { display: "none" });
    gsap.to('#help', 0, { display: "none" });
    gsap.to('#resources', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
    gsap.to('#memory', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  })

  $('#resources-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#statistics', 0, { display: "none" });
    gsap.to('#help', 0, { display: "none" });
    gsap.to('#memory', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
    gsap.to('#resources', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  })

  $('#home-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#statistics', 0, { display: "none" });
    gsap.to('#help', 0, { display: "none" });
    gsap.to('#memory', 0, { display: "none" });
    gsap.to('#resources', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
    gsap.to('#header', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  })

})
$(function () {
  var body = document.querySelector('body');
  var $cursor = $('.cursor')
  function cursormover(e) {

    gsap.to($cursor, {
      x: e.clientX,
      y: e.clientY,
      stagger: .002
    })
  }
  function cursorhover(e) {
    gsap.to($cursor, {
      scale: 1.4,
      opacity: 1
    })

  }
  function cursor(e) {
    gsap.to($cursor, {
      scale: 1,
      opacity: .6
    })
  }
  $(window).on('mousemove', cursormover);
  $('.menubar').hover(cursorhover, cursor);
  $('a').hover(cursorhover, cursor);
  $('.navigation-close').hover(cursorhover, cursor);

})

// Calcul automatique des féminicides jusqu'à Noël
function calculateFeminicidesUntilChristmas() {
  const today = new Date();
  const currentYear = today.getFullYear();
  
  // Date de Noël de cette année
  let christmas = new Date(currentYear, 11, 25); // 25 décembre
  
  // Si Noël est déjà passé cette année, on prend Noël de l'année prochaine
  if (today > christmas) {
    christmas = new Date(currentYear + 1, 11, 25);
  }
  
  // Calcul du nombre de jours jusqu'à Noël
  const timeDifference = christmas.getTime() - today.getTime();
  const daysUntilChristmas = Math.ceil(timeDifference / (1000 * 3600 * 24));
  
  // Calcul basé sur la statistique : 140 féminicides par an = 1 tous les 2,6 jours environ
  const feminicidesPerDay = 140 / 365;
  const estimatedFeminicides = Math.ceil(daysUntilChristmas * feminicidesPerDay);
  
  return {
    feminicides: estimatedFeminicides,
    days: daysUntilChristmas
  };
}

// Mise à jour automatique du compteur
$(document).ready(function() {
  const data = calculateFeminicidesUntilChristmas();
  
  // Mise à jour du contenu HTML avec le nombre calculé
  $('.firstline1.count').text(data.feminicides);
  
  // Optionnel : mise à jour du texte pour indiquer le nombre de jours
  // Vous pouvez décommenter cette ligne si vous voulez afficher les jours restants
  // $('#sup').html(`Encore <small style="font-size:0.6em;">(${data.days} jours)</small>`);
  
  // Animation du compteur
  $('.count').each(function () {
    const finalCount = $(this).text();
    $(this).prop('Counter', 0).animate({
      Counter: finalCount
    }, {
      duration: 15000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  
  // Mise à jour quotidienne automatique (optionnel)
  // Le compteur se mettra à jour automatiquement chaque jour
  setInterval(function() {
    const newData = calculateFeminicidesUntilChristmas();
    if (newData.feminicides !== data.feminicides) {
      $('.firstline1.count').text(newData.feminicides);
      data.feminicides = newData.feminicides;
      data.days = newData.days;
    }
  }, 24 * 60 * 60 * 1000); // Vérifie une fois par jour
});



