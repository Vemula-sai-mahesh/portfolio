const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector(".bar span::before");
            document.querySelector("abbr");

        }
    })
})

observer.observe(document.querySelector(".skills"))