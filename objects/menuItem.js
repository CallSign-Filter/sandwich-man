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

    getHtml() {
        const numSpaces = 30 - this.itemName.length;
        let spaces = ""
        for (let i = 0; i < numSpaces; i++) {
            spaces += '&nbsp;'
        }
        return '<div class="menuitem card"><span>' + this.itemName + '</span>' + spaces + '<span style="padding-left: 10px"> $' + this.price + '</span></div><hr style="border-color: #222222"/>';
    }
}

