class Container {
    constructor(name) {
        this.name = name
        this.item = {}
        this.dateCreated = Date.now()
    }
    set item(object) {
        this.item = object
    }
}