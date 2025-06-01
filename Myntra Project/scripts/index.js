let bagItems;

onLoad();
function onLoad() {
  bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];
  displayItems();
  displayBagIcon();
}


function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon(){
  let bagItemCount = document.querySelector('.bag-item-count');
  if(bagItems.length>0){
    bagItemCount.style.visibility ='visible';
    bagItemCount.innerText=bagItems.length;
  }else{
    bagItemCount.style.visibility ='hidden';
  }
}
function displayItems(){
  
  let itemsContainerElement = document.querySelector('.items-container');
  
  if(!itemsContainerElement){
    return;
  }
  let innerHtml ='';
  items.forEach(item =>{
  innerHtml+=`
  <div class="item-container">
          <img class="item-img" src="${item.image}" alt="item image">
          <div class="rating">
            ${item.rating.stars} ⭐| ${item.rating.count}
          </div>
          <div class="company-name">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
          </div>
          <button class="btn-add-bag" onclick="addToBag(${item.id})"${item.id})">Add to Bag</button>
    </div>`;
});
itemsContainerElement.innerHTML=innerHtml;
}


