export const testCases = [
  {
    id: 1,
    title: "Login Functionality",
    description: "Verify that a user can log in with valid credentials.",
    steps: [
      "Step 1: Navigate to the login page.",
      "Step 2: Enter a valid username and password.",
      "Step 3: Click the 'Login' button.",
      "Step 4: Verify that the user is redirected to the dashboard.",
    ],
  },
  {
    id: 2,
    title: "Password Reset",
    description: "Verify that the password reset process works correctly.",
    steps: [
      "Step 1: Navigate to the login page.",
      "Step 2: Click on the 'Forgot Password' link.",
      "Step 3: Enter a registered email address.",
      "Step 4: Check the email inbox for a reset link and click it.",
      "Step 5: Set a new password and verify it's accepted.",
    ],
  },
  {
    id: 3,
    title: "Search Functionality",
    description: "Ensure the search bar returns accurate results.",
    steps: [
      "Step 1: Navigate to the home page.",
      "Step 2: Enter a query into the search bar.",
      "Step 3: Press the 'Search' button or hit 'Enter'.",
      "Step 4: Verify that relevant search results are displayed.",
    ],
  },
  {
    id: 4,
    title: "User Profile Update",
    description: "Ensure the user can update their profile information.",
    steps: [
      "Step 1: Navigate to the profile page.",
      "Step 2: Update the desired profile fields (e.g., name, email).",
      "Step 3: Click the 'Save' button.",
      "Step 4: Verify that the updated information is saved correctly.",
    ],
  },
  {
    id: 5,
    title: "Search Functionality Test",
    description:
      "Verify that the search function works as expected across the site.",
    steps: [
      "Step 1: Go to any page with a search bar.",
      "Step 2: Enter a search term into the search bar.",
      "Step 3: Verify that the correct search results are displayed.",
    ],
  },
  {
    id: 6,
    title: "Add to Cart Functionality",
    description: "Verify that the add-to-cart functionality works as expected.",
    steps: [
      "Step 1: Navigate to a product page.",
      "Step 2: Click the 'Add to Cart' button.",
      "Step 3: Verify that the product is added to the cart.",
    ],
  },
  {
    id: 7,
    title: "Remove from Cart Functionality",
    description:
      "Verify that the remove-from-cart functionality works as expected.",
    steps: [
      "Step 1: Navigate to the shopping cart page.",
      "Step 2: Click the 'Remove' button next to a product.",
      "Step 3: Verify that the product is removed from the cart.",
    ],
  },
  {
    id: 8,
    title: "Checkout Workflow",
    description: "Ensure the checkout workflow functions correctly.",
    steps: [
      "Step 1: Add products to the cart.",
      "Step 2: Navigate to the checkout page.",
      "Step 3: Enter shipping and payment details.",
      "Step 4: Click the 'Complete Order' button.",
      "Step 5: Verify that the order confirmation page is displayed.",
    ],
  },
  {
    id: 9,
    title: "Payment Gateway Integration",
    description:
      "Verify that the payment gateway processes payments correctly.",
    steps: [
      "Step 1: Add items to the cart.",
      "Step 2: Navigate to the checkout page.",
      "Step 3: Enter payment details.",
      "Step 4: Click the 'Pay Now' button.",
      "Step 5: Verify that the payment is processed successfully.",
    ],
  },
  {
    id: 10,
    title: "Order History Retrieval",
    description: "Ensure that users can view their order history.",
    steps: [
      "Step 1: Navigate to the 'Order History' page.",
      "Step 2: Verify that past orders are listed.",
      "Step 3: Click on an order to view the details.",
    ],
  },
  {
    id: 11,
    title: "Responsive Design Validation",
    description:
      "Verify that the website is responsive on different screen sizes.",
    steps: [
      "Step 1: Open the website on a desktop.",
      "Step 2: Resize the browser window to simulate different screen sizes.",
      "Step 3: Verify that the layout adapts appropriately.",
    ],
  },
  {
    id: 12,
    title: "API Status Code Test",
    description: "Ensure that API requests return the correct status codes.",
    steps: [
      "Step 1: Send a GET request to an API endpoint.",
      "Step 2: Verify that the correct status code (200 OK) is returned.",
      "Step 3: Repeat the process for other endpoints.",
    ],
  },
  {
    id: 13,
    title: "Session Timeout Validation",
    description: "Ensure that session timeouts work as expected.",
    steps: [
      "Step 1: Log in to the website.",
      "Step 2: Wait for the session timeout period to elapse.",
      "Step 3: Verify that the user is logged out after the timeout.",
    ],
  },
  {
    id: 14,
    title: "File Upload Functionality",
    description: "Verify that users can upload files to the website.",
    steps: [
      "Step 1: Navigate to the file upload page.",
      "Step 2: Select a file to upload.",
      "Step 3: Click the 'Upload' button.",
      "Step 4: Verify that the file is uploaded successfully.",
    ],
  },
  {
    id: 15,
    title: "Pagination on Search Results",
    description: "Ensure that pagination works correctly on search results.",
    steps: [
      "Step 1: Perform a search that returns multiple pages of results.",
      "Step 2: Click on the 'Next' button to go to the next page.",
      "Step 3: Verify that the correct results are displayed on the next page.",
    ],
  },
  {
    id: 16,
    title: "Sort Functionality on Product Page",
    description:
      "Verify that products can be sorted correctly on the product page.",
    steps: [
      "Step 1: Navigate to the product page.",
      "Step 2: Select a sorting option (e.g., price, rating).",
      "Step 3: Verify that the products are sorted correctly.",
    ],
  },
  {
    id: 17,
    title: "Error Message Validation",
    description:
      "Verify that error messages are displayed correctly for invalid actions.",
    steps: [
      "Step 1: Attempt an invalid action (e.g., submitting a form with missing fields).",
      "Step 2: Verify that the correct error message is displayed.",
    ],
  },
  {
    id: 18,
    title: "Multi-Tab Functionality Test",
    description:
      "Ensure that the website functions correctly when multiple tabs are open.",
    steps: [
      "Step 1: Open the website in two separate tabs.",
      "Step 2: Perform actions in one tab (e.g., log in).",
      "Step 3: Switch to the other tab and verify that the changes are reflected.",
    ],
  },
  {
    id: 19,
    title: "Third-Party API Integration",
    description: "Verify that third-party API integrations work as expected.",
    steps: [
      "Step 1: Make a request to the third-party API.",
      "Step 2: Verify that the correct data is returned.",
    ],
  },
  {
    id: 20,
    title: "Accessibility Compliance Test",
    description:
      "Ensure that the website complies with accessibility standards.",
    steps: [
      "Step 1: Use an accessibility tool to analyze the website.",
      "Step 2: Review the findings and verify that issues are resolved.",
    ],
  },
];
