// ------ ITEM DISPLAY ------
item.directive('itemDiv', function() {
    return {
        templateUrl: 'item/templates/item.html'
    }
})

// ------ ADD ITEM MODAL ------
item.directive('addItemToContainer', function() {
    return {
        templateUrl: 'item/templates/addItem.html'
    }
})

// ------ NEW ITEM OPT MODAL ------
item.directive('createItem', function() {
    return {
        templateUrl: 'item/createItem/templates/createItem.html'
    }
})