function renderPage(newRoute){
  var currentCrumbs = JSON.parse(window.sessionStorage.getItem('ins_breadcrumbs'));
  var insRendererEl = parent.document.querySelector('ins-renderer');
  currentCrumbs.push(newRoute);
  insRendererEl.updateRoute(currentCrumbs);
}

function goToAddContactPage() {
  var newRoute = {
    label: 'Add New Contact',
    link: '/admin/crm/add-contact',
    withSubmenu: false,
    app: true
  }
  renderPage(newRoute);
}

function goToAddCompanyPage() {
  var newRoute = {
    label: 'Add New Company',
    link: '/admin/crm/add-company',
    withSubmenu: false,
    app: true
  }
  renderPage(newRoute);
}

function gotoCustomerDetailsPage() {
  var newRoute = {
    label: 'Customer Details',
    link: '/admin/crm/customer-details',
    withSubmenu: false,
    app: true
  }
  renderPage(newRoute);
}

function gotoEditCustomerDetailsPage() {
  var newRoute = {
    label: 'Edit Customer Details',
    link: '/admin/crm/edit-company',
    withSubmenu: false,
    app: true
  }
  renderPage(newRoute);
}

function gotoContactDetailsPage() {
  var newRoute = {
    label: 'Contact Details',
    link: '/admin/crm/contact-details',
    withSubmenu: false,
    app: true
  }
  renderPage(newRoute);
}

function gotoEditContactDetailsPage() {
  var newRoute = {
    label: 'Edit Contact Details',
    link: '/admin/crm/edit-contact',
    withSubmenu: false,
    app: true
  }
  renderPage(newRoute);
}

function successHandler(response) {
  console.log('response', response);
}

function errorHandler(error) {
  console.log('error', error);
}

var options = {
  method: 'GET',
  contentType: 'application/json',
  success: successHandler,
  error: errorHandler
};

$.ajax('/sandbox/get-contact-us-data.json', options);