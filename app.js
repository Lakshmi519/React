/*
 * <div id="Parent">
 *   <div id="child">
 *        <h1>I'm h1 tag</h1>
 *        <h2>I'm a h2 tag</h2>
 *    </div>
 *    <div id="child2">
 *        <h1>I'm h1 tag</h1>
 *        <h2>I'm a h2 tag</h2>
 *    </div>
 * </div>
 *
 * ReactElement(Object) => HTML(browser understands)
 * render() - method replaces the existing element
 * createElement() - API takes 3 arguments, 1: element name, 2: attribute lists, 3: content of the element
 */

const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");


const parent = React.createElement("div",{id:"parent"}, 
[ React.createElement("div",{id:"child"}, [
    React.createElement("h1",{},"I'm a h1 tag"),
    React.createElement("h2",{},"I'm a h2 tag")
]),
React.createElement("div",{id:"child2"}, [
    React.createElement("h1",{},"I'm a h1 tag"),
    React.createElement("h2",{},"I'm a h2 tag")
])]);

//console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);