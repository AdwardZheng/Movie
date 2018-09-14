import {observable, computed, autorun, action, configure, runInAction} from 'mobx';
import Server from '../Server/server';
configure({enforceActions: 'always'});
class Store {
    @observable comingList = [];
    @observable comingEnd = 0;
    @observable isLoading = false;
    @observable loadMore = false;

    constructor() {
        autorun(() => console.log(this.comingList));
    }

    @computed get isLoadMore() {
        return this.comingEnd > 0;
    }

    @action
    updateList = (list) => {
        this.comingList = [...this.comingList, ...list];
    }

    @action  
    getList = async() => {
        this.isLoadMore ? this.changeLoding(true) : this.changeLoadMore(true);
        const data = await Server.willComing({
            start: 0,
            count: 9,
        }).then(result => {
            const movies = result.data.subjects;
            return movies;
        }).catch(err => {
            console.log(err);
        });
        runInAction(() => {
            console.log(data);
            this.updateList(data);
            this.endLoad();
        })   
    }

    @action 
    changeLoding = (bol) => {
        this.isLoading = bol;
    }
    @action 
    changeLoadMore = (bol) => {
        this.loadMore = bol;
    }
    @action 
    endLoad = () => {
        this.changeLoadMore(false);
        this.changeLoding(false);
    }
}

const comingStore = new Store();
export default comingStore;