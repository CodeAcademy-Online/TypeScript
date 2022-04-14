"use strict";
const inputField = document.querySelector('#input');
const result = document.querySelector('#result');
if (inputField === null)
    throw new Error('Neteisingas įvesties lauko selektorius');
if (result === null)
    throw new Error('Neteisingas rezultatų konteinerio selektorius');
const handleFieldChange = (event) => {
    const element = event.target;
    result.innerHTML = element.value;
};
inputField.addEventListener('keyup', handleFieldChange);
//# sourceMappingURL=event-listener.js.map