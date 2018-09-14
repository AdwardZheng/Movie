import {observable, computed, autorun, action, configure, runInAction} from 'mobx';
import Server from '../Server/server';
configure({enforceActions: 'always'});
class Store {
    @observable comingList = [];
    @observable comingEnd = 0;
    @observable loading = false;
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
    updateComingend = () => {
        this.comingEnd = this.comingEnd + 9;
    }

    @action  
    getList = async() => {
        if(this.loading || this.loadMore) return;
        this.isLoadMore ? this.changeLoadMore(true) : this.changeLoding(true);
        const data = await Server.willComing({
            start: this.comingEnd,
            count: 9,
        }).then(result => {
            const movies = result.data.subjects;
            return movies;
        }).catch(err => {
            console.log(err);
        });
        runInAction(() => {
            this.updateList(data);
            this.updateComingend();
            this.endLoad();
        })   
    }

    @action 
    changeLoding = (bol) => {
        this.loading = bol;
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