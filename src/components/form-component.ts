import { state } from "../state";

export function formComponent(){
    
    class FormComponent extends HTMLElement {
        shadow = this.attachShadow({ mode: "open"});
        constructor(){
            super();
            this.render();
        }
        //CONNECTED
        connectedCallback(){
            const form = this.shadow.querySelector(".form")
            form.addEventListener("submit", (e)=>{
                e.preventDefault();

                // const x = e.target as any;
                // state.addItem(x.text.value);

                state.addItem(e.target.text.value)
                form.reset();
                        
            })
        }
        // RENDER
        render(){
            var div = document.createElement("div");
            div.classList.add("root__form");
            // DIV
            div.innerHTML = 
            `
            <form class="form">
                <input name="text"/>
                <button>+</button>
            </form>
            `
            // STYLE
            var style = document.createElement("style");
            style.innerHTML = 
            `
            .form{
                margin: 0px auto;
                width: 100%;
                height: 20vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #CACACA;
                gap: 10px;
            }
            input{
                max-width: 100%;
                height: 20%;
                padding: 10px;
                border: solid 1px;
                font-size: 20px;
                background: #fafafa;
            }
            button{
                font-size: 35px;
                height: 50px;
                width: 50px;
                border: solid 1px;
                background: #9CBBE9;
            }
            `
            this.shadow.appendChild(div);
            this.shadow.appendChild(style);
    
        }
    }
    customElements.define("form-custom", FormComponent);

}    
