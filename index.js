const logsElement = document.querySelector('#logs');

/* Default mode - bubble mode */

document.querySelector('#first').addEventListener('click', () => {
        logsElement.innerHTML = logsElement.innerHTML + "<br> <br> Clicked on first element ";
});

document.querySelector('#second').addEventListener('click', () => {
        logsElement.innerHTML = logsElement.innerHTML + "<br> <br> Clicked on second element ";
});

document.querySelector('#third').addEventListener('click', () => {
        logsElement.innerHTML = logsElement.innerHTML + "<br> <br> Clicked on third element ";
});

document.querySelector('#fourth').addEventListener('click', () => {
        logsElement.innerHTML = logsElement.innerHTML + "<br> <br> Clicked on fourth element ";
});

/* Capture mode */

document.querySelector('#first').addEventListener('click', () => {
        logsElement.innerHTML = logsElement.innerHTML + "<br> <br> Capture: Clicked on first element ";
}, true);

document.querySelector('#second').addEventListener('click', () => {
        logsElement.innerHTML = logsElement.innerHTML + "<br> <br> Capture: Clicked on second element ";
}, true);

document.querySelector('#third').addEventListener('click', () => {
        logsElement.innerHTML = logsElement.innerHTML + "<br> <br> Capture: Clicked on third element ";
}, true);

document.querySelector('#fourth').addEventListener('click', () => {
        logsElement.innerHTML = logsElement.innerHTML + "<br> <br> Capture: Clicked on fourth element ";
}, true);

document.querySelector('#clear').addEventListener('click', () => {
    logsElement.innerHTML = "";
});