/*
-->with empty object
const heading1 = React.createElement("h1", {}, "Hello world");
const rt = ReactDOM.createRoot(document.getElementById("root"));
rt.render(heading1);
*/

/*
-->how to add attributes to tags 
//here we are giving attribute(id) to h1 tag
const heading1 = React.createElement("h1", { id: "heading" }, "Hello world");
const rt = ReactDOM.createRoot(document.getElementById("root"));
rt.render(heading1);
*/

/*
-->write React code for nested div tags
*<div id="parent">
*    <div id="child">
*        <h1>Iam h1 tag</h1>
*    </div>
*</div>

const parent = React.createElement("div",{ id: "parent" },React.createElement("div",{ id: "child" },React.createElement("h1", {}, "Im h1 tag")));
const rt = ReactDOM.createRoot(document.getElementById("root"));
rt.render(parent);
*/

/*
-->write React code for nested div tags with  multiple siblings h1 and h2
*<div id="parent">
*    <div id="child">
*        <h1>Iam h1 tag</h1>
         <h2>Iam h2 tag</h2>
*    </div>
*</div>

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im h1 tag"),
    React.createElement("h2", {}, "Im h2 tag"),
  ])
);
const rt = ReactDOM.createRoot(document.getElementById("root"));
rt.render(parent);
*/

/*
-->write React code for nested div tags with  multiple siblings h1 and h2
*<div id="parent">
     <h1>Iam h1 tag</h1>
     <h2>Iam h2 tag</h2>
*    <div id="child">
*        <h1>Iam h1 tag</h1>
         <h2>Iam h2 tag</h2>
*    </div>
*</div>
*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "Im h1 tag"),
  React.createElement("h2", {}, "Im h2 tag"),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im h1 tag"),
    React.createElement("h2", {}, "Im h2 tag"),
  ]),
]);
const rt = ReactDOM.createRoot(document.getElementById("root"));
rt.render(parent);
