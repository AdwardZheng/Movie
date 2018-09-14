import {observable, computed, autorun, action, configure} from 'mobx';
configure({enforceActions: 'always'});
class Store {
    @observable comingList = [];
    @observable comingEnd = 0;

    constructor() {
        autorun(() => console.log(this.comingList));
    }

    @action updateList = (list) => {
        this.comingList.concat(list);
    }
}

const comingStore = new Store();
export default comingStore;