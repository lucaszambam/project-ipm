// BOTÃO SCROLL UP
mybutton = document.getElementById("go-up-button");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  } else {
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// SEARCH SUGGESTIONS
function autocomplete(inp, arr) {
  var currentFocus;

  function removeAcentuacao(s) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }

  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;

    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;

    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");

    this.parentNode.appendChild(a);

    for (i = 0; i < arr.length; i++) {
      if (removeAcentuacao(arr[i].substr(0, val.length).toUpperCase()) == val.toUpperCase()) {
        b = document.createElement("DIV");


        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);

        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

        b.addEventListener("click", function (e) {

          inp.value = this.getElementsByTagName("input")[0].value;

          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
var suggestions = ['Bastardos Inglórios', 'Até o Último Homem', 'O Senhor dos Anéis: A Sociedade do Anel', 'O Senhor dos Anéis: As Duas Torres', 'O Senhor dos Anéis: O Retorno do Rei', 'Mulher-Maravilha', 'O Homem de Aço', 'Esquadrão Suicida', 'Aquaman', 'Liga da Justiça', 'Um Sonho de Liberdade', 'O Poderoso Chefão', 'A Lista de Schindler', 'Touro Indomável', 'Casablanca', 'O Mágico de OZ', 'Forest Gump: O contador de histórias', '12 Homens e uma Sentença', 'Star Wars', 'E.T. O Extraterrestre',];

autocomplete(document.getElementById("myInput"), suggestions);


// MODAL IMAGES








var modal2 = document.getElementById('myModal2');
var images2 = document.getElementsByClassName('bg-notice');
var modalImg2 = document.getElementById("bg01");

for (var i = 0; i < images2.length; i++) {
  var img2 = images2[i];

  img2.onclick = function() {
    modal2.style.display = "block";
    modalImg2.style.backgroundImage = this.style.backgroundImage;
    document.body.style.overflow ="hidden";

  }
}

var span2 = document.getElementsByClassName("close2")[0];

span2.onclick = function() {
  modal2.style.display = "none";
  document.body.style.overflow ="scroll";
}

// CAROUSEL

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// HIDE BODY

$('.notices').css('cursor', 'pointer');

axios.get('http://localhost/api/noticias').then((res) => {


    var noticias = res.data;

    noticias.map((noticia) => {

     var noticiaAtual = $('[data-id='+ noticia.codigo +']');

      var tituloAtual  = $('.titulo-noticia', noticiaAtual[0]);

      var imagemAtual = $('.img-notice', noticiaAtual[0] );



      tituloAtual.html(noticia.titulo);
      imagemAtual.attr('src', noticia.image);

    });

      $('.titulo').html(dadosNoticia.titulo);
      $('.descricao').html(dadosNoticia.descricao);
      $('.data').html(dadosNoticia.data);
      $('.autor').html(dadosNoticia.autor);
      $('#img-desc').html('Foto por: '+dadosNoticia.autor);
      $("#image").attr('src', dadosNoticia.image);
      $('#conteudo').html(dadosNoticia.conteudo);

  });

$('.notices').on('click', (e) => {

  var noticiaClicada = $(e.currentTarget).data('id');

  

  axios.get('http://localhost/api/noticias/' + noticiaClicada).then((res) => {


    var dadosNoticia = res.data;

      $('.titulo').html(dadosNoticia.titulo);
      $('.descricao').html(dadosNoticia.descricao);
      $('.data').html(dadosNoticia.data);
      $('.autor').html(dadosNoticia.autor);
      $('#img-desc').html('Foto por: '+dadosNoticia.autor);
      $("#image").attr('src', dadosNoticia.image);
      $('#conteudo').html(dadosNoticia.conteudo);

  });


});

  $('.notices').click(function(e){

    $('.notices').css('cursor', 'pointer');
    $('#main-page-body').hide();
    $('body').scrollTop();
    $('.open-notice').show();
});

  $('.close-notice').click(function(){
    $('.open-notice').hide();
    $('#main-page-body').show();
});





