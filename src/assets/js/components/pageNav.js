import btnScroll from "./btnScroll.js";

const pageNav = (selector, container) => {
    const buttons = document.querySelectorAll(selector);
    

    if(buttons.length>0){
        const parent = document.getElementById(container);
        const parentHeight = parent.offsetHeight + 26; // 26 maring-bottom

        let lastId;
        
        const scrollItems = Array.from(buttons).map( (item)=>{
            const arr = document.getElementById(item.dataset.target)  
            return arr;
        });

        btnScroll(selector, parentHeight)

        window.addEventListener('scroll', (e)=>{
            
            const yOffset = window.pageYOffset + 10 + parentHeight;
            let currentSection = scrollItems.filter((item)=>{
                const top = item.getBoundingClientRect().top + window.scrollY;
                
                if( top < yOffset ) {
                    return item
                }
            });
            
            currentSection = currentSection[currentSection.length-1];
            let id = currentSection ? currentSection.id : "";
            
            if( lastId !== id ) {
                lastId = id;
            }
            
            buttons.forEach( (item)=>{
                if(id){
                    item.classList.remove('active');
                    parent.querySelector(`[data-target="${id}"]`).classList.add('active')
                }
            })
        })
    }
    
}

export default pageNav;