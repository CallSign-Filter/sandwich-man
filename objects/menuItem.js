class MenuItem {
    constructor(itemName, price, mealServed, itemClass, isCombo = false) {
        this.itemName = itemName;
        this.price = price;
        this.mealServed = mealServed;
        this.itemClass = itemClass;
        this.isCombo = isCombo;
    }

    getMealServed(mealServed) {
        if (this.mealServed === mealServed) {
            return this;
        }
    }

    getItemClass(itemClass) {
        if (this.itemClass === itemClass) {
            return this;
        }
    }
}

