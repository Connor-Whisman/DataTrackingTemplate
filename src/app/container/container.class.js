class Container {
    constructor(name, itemObj) {
        this.name = name || '<Container X>';
        this.item = itemObj || {};
        this.dateCreated = new Date();
    }
}