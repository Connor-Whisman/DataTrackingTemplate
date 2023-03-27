// ------ ITEM DISPLAY ------
app.directive('itemDiv', function() {
    return {
        templateUrl: 'item/templates/item.html'
    }
})

// ------ ADD ITEM MODAL ------
app.directive('addItemToContainer', function() {
    return {
        templateUrl: 'item/templates/addItem.html'
    }
})

// ------ NEW ITEM OPT MODAL ------
app.directive('createItem', function() {
    return {
        templateUrl: 'item/createItem/createItem.html'
    }
})