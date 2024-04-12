const AddToCart = () => {
    cart_count.innerText++
}

const contact = ()=>{
    popup.style.display = 'revert' 
}

let span = document.getElementById(sortType)

function SortOption() {
    sortType.innerText = Sort.value
}