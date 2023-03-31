class Record {
    constructor(name, data1, data2, data3) {
        this.name        = name || '<Default Record>';
        this.dateCreated = new Date();
        this.data1       = data1;
        this.data2       = data2;
        this.data3       = data3;
    }
}