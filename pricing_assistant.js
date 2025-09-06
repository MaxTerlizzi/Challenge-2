
const productName = "Computer"
const costPerUnit = "399.99"
const basePrice ="1399.99"
const discountRate = ".20"
const salesTaxRate = ".07"
const fixedMonthlyCosts = "12500"

let discountedPrice = (basePrice * (1 - discountRate))
let finalPriceWithTax = (discountedPrice * (1 + salesTaxRate))
let profitPerUnit = (finalPriceWithTax - costPerUnit)
let breakEvenUnits = (Math.ceil(fixedMonthlyCosts / profitPerUnit))
let isProfitablePerUnit = profitPerUnit > 0

console.log(`Product Name: ${productName}`)
console.log(`Discounted Price: $${discountedPrice}`)
console.log(`Final Price with Tax: $${finalPriceWithTax}`)
console.log(`Profit per Unit: $${profitPerUnit}`)
console.log(`Break-even Units: ${breakEvenUnits}`)
console.log(`Per-unit profitability: ${isProfitablePerUnit}`)

