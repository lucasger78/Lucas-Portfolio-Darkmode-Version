//FILTRO PORTFOLIO POR CATEGORÍAS//

document.addEventListener('DOMContentLoaded', function () {
    const portfolioItems = document.querySelectorAll('.portfolio-img');
    const portfolioFilters = document.querySelectorAll('#portfolio-flters li');

    portfolioFilters.forEach(filter => {
        filter.addEventListener('click', function () {
            portfolioFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const categories = item.getAttribute('class').split(' ');

                if (categories.includes(category) || category === 'all') {
                    anime({
                        targets: item,
                        opacity: 1,
                        translateY: 0,
                        scale: 1,
                        duration: 600,
                        easing: 'easeInOutQuad'
                    });
                } else {
                    anime({
                        targets: item,
                        opacity: 0,
                        translateY: -20,
                        scale: 0.8,
                        duration: 600,
                        easing: 'easeInOutQuad',
                        complete: function () {
                            item.style.display = 'none';
                        }
                    });
                }
            });

            setTimeout(function () {
                portfolioItems.forEach(item => {
                    const categories = item.getAttribute('class').split(' ');

                    if (!categories.includes(category) && category !== 'all') {
                        item.style.display = 'none';
                    } else {
                        item.style.display = 'block';
                    }
                });
            }, 600);
        });
    });
});









