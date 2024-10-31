window.addEventListener("load", () => {
    const progress = document.getElementById("percentageScroller");

    window.addEventListener ("scroll", () => {
        const h = document.documentElement;
        const st = h.scrollTop || document.body.scrollTop;
        const sh = h.scrollHeight || document.body.scrollHeight;
        const percent = (st / (sh - h.clientHeight)) * 100;
    
        progress.style.width = percent + "%";
        
    })

});
