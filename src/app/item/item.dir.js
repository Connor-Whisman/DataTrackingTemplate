// ------ ITEM DISPLAY ------
app.directive('itemDiv', function() {
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

// ------ NEW ITEM OPT MODAL ------
app.directive('newItemOpt', function() {
    return {
        templateUrl: 'item/templates/modals/newItemOpt.html'
    }
})