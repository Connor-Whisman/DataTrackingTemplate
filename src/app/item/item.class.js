class Item {
    constructor(name, date, records, description) {
        this.name        = name         || '<Default Item>';
        this.dateCreated = date         || new Date();
        this.description = description  || 'New Description';
        this.records     = records      || [];
    }
    newRecord() {
        this.records.push(new Record());
    }
}