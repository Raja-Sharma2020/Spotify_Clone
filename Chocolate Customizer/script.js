document.addEventListener("DOMContentLoaded", function () {
    const chocolates = [
      { id: 1, name: "Milk Chocolate", price: 10.50 },
      { id: 2, name: "Dark Chocolate", price: 15.00 },
      { id: 3, name: "White Chocolate", price: 2.75 },
      { id: 4, name: "Dairy Chocolate", price: 9.50 },
      { id: 5, name: "Kitkat Chocolate", price: 8.00 },
      { id: 6, name: "Punch Chocolate", price: 5.75 },
      { id: 7, name: "5 Star Chocolate", price: 4.50 },
      { id: 8, name: "Park Chocolate", price: 4.00 },
    ];
  
    const selectedChocolates = [];
  
    function updateCustomPack() {
      const totalPriceElement = document.getElementById("total-price");
      let totalPrice = 0;
  
      selectedChocolates.forEach(chocolate => {
        totalPrice += chocolate.quantity * chocolate.price;
      });
  
      totalPriceElement.textContent = totalPrice.toFixed(2);
    }
  
    function renderChocolates() {
      const chocolateListElement = document.getElementById("chocolate-list");
  
      chocolates.forEach(chocolate => {
        const chocolateItem = document.createElement("div");
        chocolateItem.innerHTML = `
          <input type="checkbox" id="choco${chocolate.id}" value="${chocolate.id}">
          <label for="choco${chocolate.id}">${chocolate.name} - $${chocolate.price.toFixed(2)}</label>
          <br>
        `;
  
        chocolateItem.addEventListener("change", function () {
          const checkbox = this.querySelector("input[type='checkbox']");
          const quantity = checkbox.checked ? 1 : 0;
  
          const existingChocolate = selectedChocolates.find(choco => choco.id === chocolate.id);
  
          if (existingChocolate) {
            existingChocolate.quantity = quantity;
          } else {
            selectedChocolates.push({ id: chocolate.id, name: chocolate.name, price: chocolate.price, quantity });
          }
  
          updateCustomPack();
        });
  
        chocolateListElement.appendChild(chocolateItem);
      });
    }
  
    renderChocolates();
  });
  