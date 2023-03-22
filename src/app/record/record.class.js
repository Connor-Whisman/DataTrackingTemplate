class Record {
    constructor(name, data1, data2, data3) {
        this.name        = name || '<Default Record>';
        this.dateCreated = new Date();
        this.data1       = data1 || 3;
        this.data2       = data2 || 3;
        this.data3       = data3 || 3;
    }
}