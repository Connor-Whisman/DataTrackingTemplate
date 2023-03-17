class Container {
    constructor(name, item) {
        this.name = name || '<Container X>';
        this.item = item || new Item();
        this.dateCreated = new Date();
    }
    // set item(object) {
    //     this.item = object;
    // }
}