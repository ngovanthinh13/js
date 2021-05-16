//The isConnected read-only property of the Node interface returns a boolean indicating whether the node is connected (directly or indirectly) to the context object,

var isItConnected = nodeObjectInstance.isConnected

//true if the node is connected to its relevant context object, and false if not.
let test = document.createElement('p');
console.log(test.isConnected); // Returns false
document.body.appendChild(test);
console.log(test.isConnected); // Returns true

// Create a shadow root
var shadow = this.attachShadow({mode: 'open'});

// Create some CSS to apply to the shadow dom
var style = document.createElement('style');
console.log(style.isConnected); // returns false

style.textContent = `
.wrapper {
  position: relative;
}

.info {
  font-size: 0.8rem;
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background: white;
  border-radius: 10px;
  opacity: 0;
  transition: 0.6s all;
  positions: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 3
}
`;

// Attach the created style element to the shadow dom

shadow.appendChild(style);
console.log(style.isConnected); // Returns true
