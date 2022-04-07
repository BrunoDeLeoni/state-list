const state = {
    data:{
        list: [],
    },
    listeners: [],
    getState(){
        return this.data;
    },
    setState(newState){
        this.data = newState;
        for (const cb of this.listeners) {
            cb();
        }
        console.log("State", this.data);
        
    },
    subscribe(callback:(any)=>any){
        this.listeners.push(callback);
    },
    addItem(item: String){
        const cs = this.getState();
        cs.list.push(item);
        this.setState(cs);
        console.log("newCS", cs);
        
    }
}

export { state }