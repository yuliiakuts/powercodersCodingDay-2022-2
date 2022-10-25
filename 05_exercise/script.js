var books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        sold: false,
        inStock: true,
        price: 45,
    }, 
    {
        title: 'Der Gesang der Flusskrebse',
        author: 'Delia Owens',
        sold: false,
        inStock: true,
        price: 80,
    },
    {
        title: 'Lake Paradise',
        author: 'Manuela Inusa',
        sold: true,
        inStock: false,
        price: 100,
    }
];

let sortedBooks = books.sort(
    (t1, t2) => (t1.title > t2.title) ? 1 : (t1.title < t2.title) ? -1 : 0);

let listElement = document.createElement("ul");
sortedBooks.forEach(element => {
    let liElement = document.createElement("li");
    liElement.innerHTML = `Title: ${element.title}<br>Author: ${element.title}<br>Ptice: ${element.price} Fr.<br>`;
    document.body.append(liElement);
    console.log(liElement);
    let checkSold = document.createElement("input");
    let checkSoldLabel = document.createElement("label");
        checkSoldLabel.setAttribute("for", "sold");
        checkSoldLabel.innerText = "Sold";
        checkSold.setAttribute("type", "checkbox");
        checkSold.setAttribute("name", "sold");
        checkSold.setAttribute("id", "sold");
    if (element.sold == true){
        checkSold.setAttribute('checked', 'true');
    }
    liElement.append(checkSold);
    liElement.append(checkSoldLabel);
    let checkInStock = document.createElement("input");
    let checkInStockLabel = document.createElement("label");
        checkInStockLabel.setAttribute("for", "inStock");
        checkInStockLabel.innerText = "In stock";
        checkInStock.setAttribute("type", "checkbox");
        checkSold.setAttribute("name", "inStock");
        checkSold.setAttribute("id", "inStock");
    if (element.inStock == true){
        checkInStock.setAttribute('checked', 'true');
    }
    liElement.append(checkInStockLabel);
    liElement.append(checkInStock);
    
});