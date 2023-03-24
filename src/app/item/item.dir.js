// ------ ITEM DISPLAY ------
app.directive('item', function() {
    return {
        templateUrl: 'item/templates/item.html'
    }
})

// ------ ADD ITEM MODAL ------
app.directive('addItemToContainer', function() {
    return {
        templateUrl: 'item/templates/modals/addItem.html'
    }
})