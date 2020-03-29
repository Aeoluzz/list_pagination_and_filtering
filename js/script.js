/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   

/*** 
  Generate two global variables for the entire project
***/
let list = document.querySelectorAll('ul.student-list')[0].children; // li elements stored as HTMLCollection
list = Array.from(list); // convert li elements from HTMLCollection to Array
let itemsPerPage = 10; 

/***
 * Create the showPage function to determing the amount of list elements to display per page
 */

function showPage(list, page) {
   let startIndex = (page * itemsPerPage) - itemsPerPage; // start of items to be displayed on a page at a time
   let endIndex = page * itemsPerPage; // end of items to be displayed on a page at a time
   for (let i=0; i<list.length; i++) {
      if (list.indexOf(list[i]) >= startIndex && list.indexOf(list[i]) < endIndex) { 
         list[i].style.display = 'block'; // display the list item if the condition is true
      } else {
         list[i].style.display = 'none';
      }
   }
}


/*** 
   Create the appendPageLinks function to add paginated links to the bottom of the page dynamically
***/


function appendPageLinks(list) {
   let maxNumOfPages = Math.ceil(list.length/10); // Generate the number of pages
   let div = document.createElement('div'); // create the div element
   div.className = 'pagination'; // add the class pagination to the pagination div element
   let pageDiv = document.querySelector('.page'); // select the parent div
   let ul = document.createElement('ul'); // create the unordered list element
   for (var i=0; i<maxNumOfPages; i++) { // create an li,a element with text for each page
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.textContent = i+1; // add 1 to the index count since variable i is initially set to 0
      a.href = '#';
      li.appendChild(a); // append the link to the list element
      ul.appendChild(li); // append the list element to the unordered list
   } // End for loop
   div.appendChild(ul); // append the unordered list to the div with the class of pagination
   pageDiv.appendChild(div);  // append div.pagination to div.page
   ul.firstElementChild.firstElementChild.className = 'active';
   const allLinks = document.querySelectorAll('.pagination ul a'); // add class of active to first li element
   allLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
         e.preventDefault();
         allLinks.forEach((a) => {
            a.classList.remove('active'); // remove class active from all links
         }); 
         e.target.className = 'active'; // add active class to the link clicked
         showPage(list, e.target.textContent); // execute the showPage function when a li element is clicked
      }); // end click event
   }); // End forEach loop
}
showPage(list, 1);
appendPageLinks(list);

// Remember to delete the comments that came with this file, and replace them with your own code comments.