// init Isotope
var $grid_1 = $('.area-select').isotope({
    itemSelector: '.area-item',
    layoutMode: 'fitRows'
});

var $grid_2 = $('.result-select').isotope({
    itemSelector: '.result-item',
    layoutMode: 'fitRows'
});

// bind filter on select change
$('.city-select').on('change', function () {
    // get filter value from option value
    var filterValue = this.value;
    // use filterFn if matches value
    filterValue = filterValue;
    $grid_1.isotope({
        filter: filterValue
    });
});

$('.submit-btn').on('click', function () {
    // get filter value from option value
    var filterValue = this.value;
    // use filterFn if matches value
    filterValue = filterValue;
    $grid_2.isotope({
        filter: filterValue
    });
});