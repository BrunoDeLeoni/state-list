import { state } from "../state";

export function listComponent(){

    class ListComponent extends HTMLElement {
        shadow = this.attachShadow({ mode: "open"});
        constructor(){
            super();
            this.render();
            this.connectedCallBack();
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
            
            // DIV
            this.shadow.innerHTML =
            `
            <div>
            <h4>Nombre:</h4> 
                <ul>
                ${list.map((item) => `<li>${item}</li>`).join("")}
                </ul>
            </div>
            `
            // STYLE
            var style = document.createElement("style");
            style.innerHTML =
            `
            div{
                margin: 0px auto;
                height: 70vh;
                background: #FF8282;
                display: flex;
                gap: 10px;
                padding: 10px;
                flex-direction: column;
                align-self: center;
                justify-content: flex-start;
            }
            `
            // this.shadow.appendChild(div);
            this.shadow.appendChild(style);
    
        }
    }
    customElements.define("list-custom", ListComponent);
}