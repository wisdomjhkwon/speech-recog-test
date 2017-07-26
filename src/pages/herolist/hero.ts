export class Hero {
    constructor(
        public id: number,
        public name: string,
        public state = 'inactive') { }

    toggleState() {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    }

}