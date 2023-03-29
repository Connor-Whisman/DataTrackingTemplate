class Item {
    constructor(name, description, records,  date) {
        this.name        = name         || '<Default Item>';
        this.description = description  || 'New Description';
        this.records     = records      || [];
        this.dateCreated = date         || new Date();
    }
    // newRecord(recordObj) {
    //     this.records.push(recordObj || new Record());
    // }
}