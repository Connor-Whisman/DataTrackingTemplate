app.directive('item', function() {
    return {
        templateUrl: 'item/templates/item.html'
    }
})

app.directive('addItemToContainer', function() {
    return {
        templateUrl: 'item/templates/modals/addItem.html'
    }
})