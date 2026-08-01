// ============================================================
//  PORTFOLIO — Filtros + Tilt 3D + Spotlight + Scroll Entry
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

    // ---- 1. FILTROS POR CATEGORÍA ----
    var portfolioItems = document.querySelectorAll('.portfolio-img');
    var portfolioFilters = document.querySelectorAll('#portfolio-flters li');

    portfolioFilters.forEach(function(filter) {
        filter.addEventListener('click', function () {
            portfolioFilters.forEach(function(f) { f.classList.remove('active'); });
            this.classList.add('active');

            var category = this.getAttribute('data-filter');

            portfolioItems.forEach(function(item) {
                var classes = item.className.split(' ');
                var visible = classes.indexOf(category) !== -1 || category === 'all';

                if (visible) {
                    item.style.display = 'block';
                    item.style.opacity = '1';
                    item.style.transform = 'none';
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.85)';
                    setTimeout(function() {
                        item.style.display = 'none';
                    }, 400);
                }
            });
        });
    });

    // ---- 2. TILT 3D + SPOTLIGHT ----
    var pcardOuters = document.querySelectorAll('.pcard-outer');

    pcardOuters.forEach(function(outer) {
        var card = outer.querySelector('.pcard');
        var spotlight = outer.querySelector('.pcard-spotlight');

        if (!card) return;

        outer.addEventListener('mousemove', function (e) {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var cx = rect.width / 2;
            var cy = rect.height / 2;

            var rotX = ((y - cy) / cy) * -10;
            var rotY = ((x - cx) / cx) * 10;
            var spX = (x / rect.width) * 100;
            var spY = (y / rect.height) * 100;

            card.style.transform =
                'perspective(900px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) translateZ(8px)';
            card.style.transition = 'transform 0.1s ease';

            if (spotlight) {
                spotlight.style.background =
                    'radial-gradient(circle at ' + spX + '% ' + spY + '%, rgba(0,212,255,0.07) 0%, transparent 62%)';
            }
        });

        outer.addEventListener('mouseleave', function () {
            card.style.transform = 'none';
            card.style.transition = 'transform 0.55s ease, box-shadow 0.45s ease';
            if (spotlight) spotlight.style.background = 'none';
        });
    });

});
