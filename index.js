// Declare customerName in global scope
window.customerName = 'bob';

// Function to change customerName to uppercase
function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

// Function to set bestCustomer
function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer
function overwriteBestCustomer(newBest) {
  window.bestCustomer = newBest;
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'some initial value';

// Function to change leastFavoriteCustomer (should throw error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value';
}
