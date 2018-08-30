'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var SELECTOR = '[data-multiple-files]';
var SELECTOR_FILE_CONTAINER = '[data-multiple-files-item]';
var SELECTOR_INPUT_ID = '[data-multiple-files-input="id"]';
var SELECTOR_INPUT_DESTROY = '[data-multiple-files-input="destroy"]';
var SELECTOR_ADD_BUTTON = '[data-multiple-files-button="add"]';
var SELECTOR_REMOVE_BUTTON = '[data-multiple-files-button="remove"]';
var SELECTOR_CUSTOM_FILE_INPUT = '.custom-file-input';
var CONTAINER = document.querySelector(SELECTOR);

var DEFAULT_LABEL = 'Choose file';

var qa = function qa(s) {
  return [].concat(_toConsumableArray(document.querySelectorAll(s)));
};
var q = function q(s) {
  return document.querySelector(s);
};
var getNextIndex = function getNextIndex() {
  return qa(SELECTOR_FILE_CONTAINER).length;
};

var updateClone = function updateClone(element) {
  var elements = element.querySelectorAll('[name]');
  var attachmentId = element.querySelector(SELECTOR_INPUT_ID); 
  elements.forEach(function (el) {
    return el.name = el.name.replace('[0]', '[' + getNextIndex() + ']');
  }); // increment id
  element.querySelector('label').innerText = DEFAULT_LABEL; // reset label
  attachmentId.value = attachmentId.value + 1; // increment attachment id
  return element;
};

var addNewFile = function addNewFile(event) {
  var original = q(SELECTOR_FILE_CONTAINER);
  var clone = original.cloneNode(true);
  var updated = updateClone(clone);
  console.log(updated + " ||||| " + event.target);
  CONTAINER.insertBefore(updated, event.target);
};

var removeFile = function removeFile(event) {
  var currentFileContainer = event.target.closest(SELECTOR_FILE_CONTAINER);
  var destroyInput = currentFileContainer.querySelector(SELECTOR_INPUT_DESTROY);
  currentFileContainer.classList.add('hidden'); // hide row in the UI
  destroyInput.value = 1; // make sure this file will be deleted
};

var updateFileName = function updateFileName(event) {
  var label = $(event.target).val().replace(/^.*[\\\/]/, '') || DEFAULT_LABEL;
  $(event.target).next('label').addClass('selected').html(label);
};

var initialize = function initialize() {
  $(SELECTOR_ADD_BUTTON).on('click', addNewFile);
  $(SELECTOR).on('click', SELECTOR_REMOVE_BUTTON, removeFile);
  $(SELECTOR).on('change', SELECTOR_CUSTOM_FILE_INPUT, updateFileName);
};

initialize();