window.addEventListener("load", () => {
    const progress = document.getElementById("percentageScroller");
    requestAnimationFrame(carga);

    function carga(){
        progress.style.width = `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`;
        requestAnimationFrame(carga);
    }
});
