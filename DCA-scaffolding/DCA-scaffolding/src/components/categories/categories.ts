
export enum Attributes{
    "categoriesname" = "categoriesname"
}

class categories extends HTMLElement {

    categoriesname?: string

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }
    static get observedAttributes(){
        const atrs: Record<Attributes,null> = {
            categoriesname: null
        }
        return Object.keys(atrs);
    }
    attributeChangedCallback(
        propName:Attributes,
        _: unknown,
        newValue:string
    ){ 
        switch (propName) {
            
        
            default:
                this[propName] = newValue
                break;
        }

    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) 
        this.shadowRoot.innerHTML= `
        <button class = categories>${this.categoriesname}</button>`;
       
    }
}

customElements.define('my-categories', categories)
export default categories;







