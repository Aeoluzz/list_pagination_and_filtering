/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
let list = document.querySelectorAll('ul.student-list')[0].children;
list = Array.from(list);
let itemsPerPage = 10;


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const students = [];
for (let i=0; i<list.length; i++) {
   students.push(list[i]);
}
// console.log(students);

// let page = 1;


function showPage(list, page) {
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;
   for (let i=0; i<list.length; i++) {
      if (list.indexOf(list[i]) >= startIndex && list.indexOf(list[i]) < endIndex) {
         console.log(list[i]);
      }
   }
}

// showPage(students, page);
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


function appendPageLinks(list) {
   let maxNumOfPages = Math.ceil(list.length/10);
   let div = document.createElement('div'); // create the div element
   div.className = 'pagination'; // add the class pagination to the pagination div element
   let pageDiv = document.querySelector('.page'); // select the parent div
   
   let ul = document.createElement('ul'); // create the unordered list element
   // need to create a loop somehow
   for (var i=0; i<maxNumOfPages; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.textContent = i+1;
      a.href = '#';
      li.appendChild(a);
      ul.appendChild(li);
   }
   div.appendChild(ul);
   pageDiv.appendChild(div);
   ul.firstElementChild.firstElementChild.className = 'active';
   const allLinks = document.querySelectorAll('.pagination ul a');
   allLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
         e.preventDefault();
         allLinks.forEach((a) => {
            a.classList.remove('active');
         })// remove class active from all links
         e.target.className = 'active'; // add active class to the link clicked
         showPage(students, e.target.textContent);
      }); // end click event
   });
  
   // console.log(pageDiv);
}
showPage(list, 1);
appendPageLinks(list);

// Remember to delete the comments that came with this file, and replace them with your own code comments.