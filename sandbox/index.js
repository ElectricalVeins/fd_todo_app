'use strict';

/*
const orderList = [
  {
    name: 'product1',
    price: 100.2,
    count: 12,
  },
  {
    name: 'product2',
    price: 780.2,
    count: 2,
  },
];

function twentyPercentDiscount (totalPrice) {
  return totalPrice * 0.2;
}

function thirtyPercentDiscount () {
  return totalPrice * 0.3;
}

/!**
 *
 * @param {Array<object>} order
 * @param {Function} getDiscount
 *!/
function getTotalOrderPrice (order, getDiscount) {
  const totalPrice = order.reduce((sum, item) => {
    return sum += item.price * item.count;
  }, 0);

  return totalPrice - getDiscount(totalPrice);
}

console.log(getTotalOrderPrice(orderList, twentyPercentDiscount));
//example of high-order function
//===================================================================
*/

/*
function getOrderPriceWithDiscount (discountPercent, price, count) {
  const totalPrice = price * count;
  return totalPrice - totalPrice * (discountPercent / 100);
}

const price1 = getOrderPriceWithDiscount(10, 5454, 2);
const price2 = getOrderPriceWithDiscount(10, 2424, 4);
const price3 = getOrderPriceWithDiscount(10, 3400, 3);
const price4 = getOrderPriceWithDiscount(10, 12400, 1);
const price5 = getOrderPriceWithDiscount(20, 12000, 1);

function getDiscountPrice (discountPercent) {
  return (price) => {
    return (count) => {
      const totalPrice = price * count;
      return totalPrice - totalPrice * (discountPercent / 100);
    };
  };
}

const result = getDiscountPrice(10)(5400)(2);
console.log(result);
*/

//example of carrying

function partial (fn, ...args) {
  return (..._arg) => {
    return fn(...args, ..._arg);
  };
}