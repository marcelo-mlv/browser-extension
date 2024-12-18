document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById("os-toggle");

    element.style.backgroundColor = '222';

    element.onclick = function() {
        element.style.backgroundColor = element.style.backgroundColor === 'rgb(102, 255, 102)' ? '222' : 'rgb(102, 255, 102)';
        console.log(element.style.backgroundColor);
    }
});
