const comparePagination = () => {

    // Compare header fixed on scroll
    const fixedSelector = document.getElementById('compare__fixed');
    if(fixedSelector) {
        
        function initCompareFixed(){
            window.addEventListener('scroll', compareFixedHeader);
            compareFixedHeader();
        }
        function compareFixedHeader(){
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            const detailsContainer = document.getElementById('compare__details');
            const topNextElement = detailsContainer.getBoundingClientRect().top  + window.scrollY - fixedSelector.offsetHeight;
            const endScroll = detailsContainer.getBoundingClientRect().top + detailsContainer.offsetHeight + window.scrollY - fixedSelector.offsetHeight;
            if ( scrolled >= topNextElement && scrolled <= endScroll) {
                fixedSelector.classList.add('fixed-show');
            } else {
                fixedSelector.classList.remove('fixed-show');
            }
        }
        initCompareFixed()
    }

    // Compare pagination
    const itemsContainer = document.querySelectorAll('.compare__row'); 
    
    if(itemsContainer.length>0) {
        const paginationContainer = document.querySelectorAll('.card__pagination-item');

        function setFirstActive(selector, pagination) {
            const container = document.querySelector(selector)
            const pag = container.querySelectorAll(pagination)
            if (pag[0]) pag[0].children[0].classList.add('active');
            if (pag[1]) pag[1].children[1].classList.add('active');
        }
    
        function swapElements(obj1, obj2) {
            let temp = document.createElement("div");
            obj1.parentNode.insertBefore(temp, obj1);
            obj2.parentNode.insertBefore(obj1, obj2);
            temp.parentNode.insertBefore(obj2, temp);
            temp.parentNode.removeChild(temp);
        }

        setFirstActive('.compare__list-header', '.card__pagination')

        setFirstActive('.compare__list-fixed', '.card__pagination')

        paginationContainer.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const selectedElement = e.target.dataset.item;
                const currentElement = e.target.closest('.compare__item').dataset.index;

                itemsContainer.forEach(element => {
                    const nodeItems = element.children

                    let currentNode = null;
                    let selectedNode = null;

                    for (const node of nodeItems) {
                        if (node.dataset.index == currentElement) {
                            const oldPagActive = node.querySelectorAll('.card__pagination-item')[currentElement - 1]
                            if (oldPagActive) oldPagActive.classList.add('active')
                            currentNode = node
                        }
                        if (node.dataset.index == selectedElement) {
                            const newPagActive = node.querySelectorAll('.card__pagination-item')[selectedElement - 1]
                            if (newPagActive) newPagActive.classList.add('active')
                            selectedNode = node
                        }
                    }
                    swapElements(currentNode, selectedNode)
                });
            })
        })
    }
}

export default comparePagination;