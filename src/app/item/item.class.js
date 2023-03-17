class Item {
    constructor(name) {
        this.name        = name || '<Default Item>';
        this.dateCreated = new Date();
        this.description = 'New Description';
        this.records     = [];
    }
    // set records(record) {
    //     this.records.push(record);
    // }
}