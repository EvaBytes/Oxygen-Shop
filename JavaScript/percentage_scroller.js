window.addEventListener("load", () => {
    const progress = document.getElementById("percentageScroller");

    window.addEventListener ("scroll", () => {
        const h = this.document.documentElement;

        const st = h.scrollTop || this.document.body.scrollTop;
    
        const sh = h.scrollHeight || this.document.body.scrollHeight;
    
        const percent = (st / (sh - h.clientHeight)) * 100;
    
        progress.style.width = percent + "%";
        
    })

});
