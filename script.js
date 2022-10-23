console.log("hello world")

// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('searchBar');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("column");
//     li = ul.getElementById('row1');
  
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }

// function search_food() {
//     let input = document.getElementById('searchBar').value
//     input=input.toLowerCase();
//     let x = document.getElementsByClassName('food');
      
//     for (i = 0; i < x.length; i++) { 
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display="none";
//         }
//         else {
//             x[i].style.display="list-item";                 
//         }
//     }
// }

// get search bar element
const searchInput = document.getElementById("searchBar");

// store name elements in array-like object
const ingredients = ["Rice", "Onion", "Tomato", "Chicken"];

// listen for user events
searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;

    // get user search input converted to lowercase
    const searchQuery = value.toLowerCase();

    for (const ingE of ingredients) {
        // store name text and convert to lowercase
        let ing = ingE.textContent.toLowerCase();

        // compare current name to search input
//!! change this to display the name of the ingredient in dark green
        if (ing.includes(searchQuery)) {
            // found name matching search, display it
            ingE.style.display = "block";
        } else {
            // no match, don't display name
            ingE.style.display = "none";
        }
    }
});