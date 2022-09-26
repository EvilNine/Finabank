const showAllComments = () => {
    const btn = document.getElementById('show__comments');
    if(btn) {
        const hiddenItems = document.querySelectorAll('.comments__hidden')
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            e.target.style.display = "none";
            hiddenItems.forEach((item)=> {
                item.style.display = "block";
                
            })
        })
    }   
}

export default showAllComments;