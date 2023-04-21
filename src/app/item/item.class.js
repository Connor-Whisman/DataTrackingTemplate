class Item {
    constructor(name, description, records,  date, container, index) {
        this.name        = name         || '<Default Item>';
        this.description = description  || 'New Description';
        this.records     = records      || [];
        this.dateCreated = date         || new Date();
        this.container   = container    || "";
        this.index       = index
    }
}