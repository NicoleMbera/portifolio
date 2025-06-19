
 document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slide');
    var idx = 0;

    function show(i) {
      for (var j = 0; j < slides.length; j++) {
        slides[j].classList.remove('active');
      }
      var current = (i + slides.length) % slides.length;
      slides[current].classList.add('active');
    }

    document.getElementById('prev').onclick = function() {
      idx--;
      show(idx);
    };

    document.getElementById('next').onclick = function() {
      idx++;
      show(idx);
    };

    // 🔁 Autoplay every 5 seconds
    setInterval(function() {
      idx++;
      show(idx);
    }, 7000);
  });


