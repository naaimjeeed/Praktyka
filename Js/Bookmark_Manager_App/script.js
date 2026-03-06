const mainSection = document.getElementById('main-section');
const formSection = document.getElementById('form-section');
const addBookmarkButton = document.getElementById('add-bookmark-button');
const categoryName = document.querySelector(".category-name");
const categoryDropdown = document.getElementById("category-dropdown");
const closeFormButton = document.getElementById("close-form-button");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const viewCategoryButton = document.getElementById("view-category-button");
const categoryList = document.getElementById("category-list");
const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");



const getBookmarks = () =>{
    try{
        const bookmarks = JSON.parse(localStorage.getItem("bookmarks")); 

        if (!Array.isArray(bookmarks)){ 
            return []; 
        }

        if(!bookmarks.every(b => typeof b === "object" && b.name && b.url)){ 
            return [];
        }
        return bookmarks; 
    } catch{
        return []; 
    }
};

const displayOrCloseForm = () => {
    mainSection.classList.toggle("hidden");
    formSection.classList.toggle("hidden");
}

addBookmarkButton.addEventListener("click", () => {
    categoryName.innerText = categoryDropdown.value;
    displayOrCloseForm();
});

closeFormButton.addEventListener("click", () => {
    displayOrCloseForm();
})

addBookmarkButtonForm.addEventListener("click", (e) => {
    e.preventDefault(); //powstrzymuje domyślną akcję przeglądarki, która normalnie zdarzyłaby się po danym wydarzeniu.
    const bookmarks = getBookmarks();
    const newBookmark = {
        name: nameInput.value, 
        category: categoryDropdown.value, 
        url: urlInput.value
    }
    bookmarks.push(newBookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    nameInput.value = "";
    urlInput.value = "";
    displayOrCloseForm();
});

const displayOrHideCategory = () => {
    mainSection.classList.toggle("hidden");
    bookmarkListSection.classList.toggle("hidden");
};

viewCategoryButton.addEventListener("click", () => {
    categoryName.innerText = categoryDropdown.value;
    renderCategoryList(categoryName.innerText);
    displayOrHideCategory();
});

const renderCategoryList = (category) => {
    const bookmarks = getBookmarks();
    categoryList.innerHTML = "";
    const filteredBookmarks = bookmarks.filter(b => b.category === category);
    if(filteredBookmarks.length === 0){
        const p = document.createElement("p");
        p.innerText = "No Bookmarks Found";
         categoryList.appendChild(p);
    }else{
        filteredBookmarks.forEach(bookmark => {
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.id = bookmark.name;
        radio.value = bookmark.name;
        radio.name = "bookmark-radio"

        const label = document.createElement("label");
        label.htmlFor = bookmark.name;

        const a = document.createElement("a");
        a.href = bookmark.url;
        a.innerText = bookmark.name;
        label.appendChild(a);
        categoryList.appendChild(radio);
        categoryList.appendChild(label);
        });
    }

}

closeListButton.addEventListener("click", () => {
    bookmarkListSection.classList.add("hidden");
    mainSection.classList.remove("hidden");
});

deleteBookmarkButton.addEventListener("click", () => {
    const radios = document.getElementsByName("bookmark-radio");
    let selectedRadio;
    radios.forEach(radio => {
        if(radio.checked){
            selectedRadio = radio;
        }
    });
    const bookmarks = getBookmarks();
    const updatedBookmarks = bookmarks.filter(b => !(b.name === selectedRadio.value && b.category === categoryName.innerText));
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    renderCategoryList(categoryName.innerText);
})



