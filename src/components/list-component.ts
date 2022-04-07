import { state } from "../state";

export function listComponent(){

    class ListComponent extends HTMLElement {
        shadow = this.attachShadow({ mode: "open"});
        constructor(){
            super();
            this.render();
        }
        //CONNECTED
        connectedCallBack(){
            state.subscribe(() => {
                this.render();
            })
        }
        // RENDER
        render(){
            const list = state.getState().list
            console.log("List", list);
            
            var div = document.createElement("div");
            div.classList.add("root__list");
            
            // DIV
            div.innerHTML =
            `
            <div>
            <h4>Nombre:</h4> 
            <ul>${list.map((item) => {
                return `<li>${item}</li>`
            })
            .join("")}
            <ul/>
            </div>
            `
            // STYLE
            var style = document.createElement("style");
            style.innerHTML =
            `
            .root__list{
                margin: 0px;
                width: 100%;
                height: 80vh;
            }
            div{
                background: #FF8282;
                display: flex;
                flex-direction: column;
                align-self: center;
                justify-content: center;
                margin: 20px auto;
            }
            `
            this.shadow.appendChild(div);
            this.shadow.appendChild(style);
    
        }
    }
    customElements.define("list-custom", ListComponent);
}