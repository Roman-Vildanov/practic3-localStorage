import throttle from 'lodash.throttle'
import '../css/common.css';
import '../css/03-feedback.css';


const STORAGE_KEY = 'feedback-form-state';
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('input'),
};
let formData = {};

const onTextareaInput = (evt) => {
    formData[evt.target.name] = evt.target.value;
    const stringifiedData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, stringifiedData);
}

refs.form.addEventListener('input', throttle(onTextareaInput, 500));

const onSubmit = (evt) => {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

refs.form.addEventListener('submit', onSubmit);

const  populateTextarea = () => {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedMessage) {
    formData = savedMessage
    refs.textarea.value = savedMessage['message'] || '';
    refs.input.value = savedMessage['email'] || '';
    }
}

populateTextarea();