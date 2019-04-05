// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});

// bind filter on select change
$('.filters-select').on('change', function () {
    // get filter value from option value
    var filterValue = this.value;
    // use filterFn if matches value
    filterValue = filterValue;
    $grid.isotope({
        filter: filterValue
    });
});