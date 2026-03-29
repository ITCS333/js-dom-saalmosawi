/**
 * Selects the element with the id 'main-heading' and changes its text content to 'DOM Manipulation Challenge'.
 */
function changeHeadingText() {
  // TODO: Implement this function
   heading = document.getElementById('main-heading');
  heading.textContent = 'DOM Manipulation Challenge';
}
changeHeadingText();
/**
 * Selects the element with the id 'box-to-modify' and changes its background color to 'lightblue'.
 */
function changeBoxColor() {
  // TODO: Implement this function
  const box = document.getElementById('box-to-modify');
  box.style.backgroundColor = 'lightblue';
}
changeBoxColor();
/**
 * Creates a new <li> element, sets its text content to 'New Item', and appends it to the <ul> with the id 'item-list'.
 */
function addNewItem() {
  // TODO: Implement this function
  let newItem = document.createAttribute('li');
  newItem.textContent = 'New Item';
  const itemlist = document.getElementById('item-list');
  itemlist.appendChild(newItem);
}
addNewItem();

/**
 * Selects the paragraph with the class 'content-para' and adds the class 'highlight' to it.
 */
function highlightParagraph() {
  // TODO: Implement this function
}

/**
 * Selects the element with the id 'to-be-removed' and removes it from the DOM.
 */
function removeElement() {
  // TODO: Implement this function
}


// Do not edit the lines below.
// These lines are for testing purposes.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        changeHeadingText,
        changeBoxColor,
        addNewItem,
        highlightParagraph,
        removeElement
    };
}

