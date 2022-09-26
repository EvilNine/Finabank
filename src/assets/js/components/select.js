import Choices from "choices.js";

const select = (item) => {
	const selectItems = document.querySelectorAll(item);
	selectItems.forEach( (select) => {
		new Choices(select, {
			searchEnabled: false,
			itemSelectText: ''
		})
	})
	
}

 export default select;