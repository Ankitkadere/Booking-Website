document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector('.circle').classList.add('animate');
    }, 100);
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector('.circle').classList.add('animate');
    }, 100);

    setTimeout(() => {
        document.querySelector('.screen').classList.add('hidden');
    }, 2000); // Adjust timing as needed
});
