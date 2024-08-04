// Get references to the filter elements
const categoryFilter = document.getElementById('category');
const priceFilter = document.getElementById('price');
const fabricFilter = document.getElementById('fabric');

// Get references to all product elements
const products = document.querySelectorAll('.pro');

// Get references to all section headings and paragraphs
const categoryHeadings = document.querySelectorAll('h2');
const categoryParagraphs = document.querySelectorAll('p');

// Get reference to the pagination element
const pagination = document.getElementById('pagination');

// Add an event listener to the Apply Filters button
document.querySelector('.fillbut').addEventListener('click', filterProducts);

// Define the filterProducts function
function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedPrice = priceFilter.value;
    const selectedFabric = fabricFilter.value;
  
    // Loop through all products and show/hide them based on selected filters
    products.forEach((product) => {
      const productCategory = product.getAttribute('data-category');
      const productPrice = parseFloat(product.getAttribute('data-price'));
      const productFabric = product.getAttribute('data-fabric');
  
      const categoryMatch = selectedCategory === 'all' || selectedCategory === productCategory;
      const priceMatch =
        selectedPrice === 'all' ||
        (selectedPrice === '0-5000' && productPrice <= 5000) ||
        (selectedPrice === '5000-10000' && productPrice > 5000 && productPrice <= 10000) ||
        (selectedPrice === '10000-15000' && productPrice > 10000 && productPrice <= 15000) ||
        (selectedPrice === '15000-20000' && productPrice > 15000 && productPrice <= 20000) ||
        (selectedPrice === '20000-25000' && productPrice > 20000 && productPrice <= 25000);
      const fabricMatch = selectedFabric === 'all' || selectedFabric === productFabric;
  
      // Show or hide the product based on filter matches
      if (categoryMatch && priceMatch && fabricMatch) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  
    // Hide all category headings and paragraphs
    categoryHeadings.forEach((heading) => {
      heading.style.display = 'none';
    });
  
    categoryParagraphs.forEach((paragraph) => {
      paragraph.style.display = 'none';
    });
  
    // Show the heading and paragraph for the selected category
    if (selectedCategory !== 'all') {
      const selectedCategoryHeading = document.querySelector(`#${selectedCategory} h2`);
      const selectedCategoryParagraph = document.querySelector(`#${selectedCategory} p`);
  
      selectedCategoryHeading.style.display = 'block';
      selectedCategoryParagraph.style.display = 'block';
      
      // Hide all pagination elements when a specific category is selected
      document.querySelectorAll('.pagination').forEach((page) => {
        page.style.display = 'none';
      });
    } else {
      // Show all pagination elements when 'all' is selected for all filters
      document.querySelectorAll('.pagination').forEach((page) => {
        page.style.display = 'block';
      });
    }
  }
  