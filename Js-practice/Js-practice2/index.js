const nums = [1,2,3];

console.log(nums[0]);
console.log(nums[2]);

nums[0] = 4

console.log(nums);

nums.push(5, 6)

console.log(nums);

nums[4] = 10
lastNum = nums.pop()

console.log(nums);
console.log(lastNum);

const product = {
    name: "shiny shoes",
    brand: "gucci",
    price: 100,
    color: "black",
    soldOut: false,
}

console.log(product.name, product.brand, product.price)

product.sale = true
product.tags = ['men','luxury']
product.soldOut = true

console.log(product)
