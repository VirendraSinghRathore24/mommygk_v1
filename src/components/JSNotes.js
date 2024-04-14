/* 
 * Event Bubbling :
 *      Event bubbles up in the the heirarachy, like child click will be propogated to parent.
 * 
 * Event Trickling or Event Capturing :
 *      Event moves down in the heirarchy, like child click - first it will take parent then child.
 * 
 * addEventListner("click", () => {}, useCapture)
 *      here if useCapture is true then it behaves like event Capturing and if it is false the event bubbling.
 * 
 * document.querySelecter("#parent").addEventListner("click", () => {
 *                          console.log("parent clicked")
 *                        })
 * 
 * document.querySelecter("#child").addEventListner("click", () => {
 *                          console.log("child clicked")
 *                        })
 * 
 *  => when we click on child => child clicked -> parent clicked
 * 
 * document.querySelecter("#parent").addEventListner("click", () => {
 *                          console.log("parent clicked")
 *                        }, true)
 * 
 * document.querySelecter("#child").addEventListner("click", () => {
 *                          console.log("child clicked")
 *                        }, true)
 * 
 *  => when we click on child =>  parent clicked -> child clicked
 * 
 * How to stop event Propagation ?
 * 
 * document.querySelecter("#parent").addEventListner("click", () => {
 *                          console.log("parent clicked")
 *                        }, false)
 * 
 * document.querySelecter("#child").addEventListner("click", (e) => {
 *                          console.log("child clicked");
 *                          e.stopPropagation();
 *                        }, false)
 *  Here child clicked will be printed and it will stop propagation because bubbling starts from bottom and in case of
 *  capturing we have to use stop Propagation in parent method.
 * ===================================================================================================================
 * 
 *  Event Delegation :
 *      Instead of adding event listner to multiple child items, we should add to parent item and then use e.target.id to get
 *      child item access.
 * 
 *    <ul id="category">
 *         <li id="laptop">laptop</li>
 *         <li id="camera">camera</li>
 *    </ul>
 * 
 *  document.querySelector("#category").addEventListner("click", (e) => {
 *                              if(e.target.id == "laptop"){}
 *                              if(e.target.id == " camera"){}
 *                         })
 * Advantage - Memory optimization, need to write less code, easy DOM manipulation
 * Limitation - not all the events are bubbled up - like blur
 * ====================================================================================================================
 * 
 */
