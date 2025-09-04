function customRender(reactElement,mainContainer){

    /*const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("hreg",reactElement.props.href);
    domElement.setAttribute("target",reactElement.props.taarget);
    mainContainer.appendChild(domElement);*/



    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop]);
    }

    mainContainer.appendChild(domElement);
}


const mainContainer = document.querySelector("#root");

const reactElement = {
    type: "a",
    props: {
        href: "https://goole.com",
        target: "_blank"
    },
    children : "click me to visit google",



}

customRender(reactElement,mainContainer);

