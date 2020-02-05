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

//example of carrying

function partial (fn, ...args) {
  return (..._arg) => {
    return fn(...args, ..._arg);
  };
}
*/
/*
class Component {

  execute () {

  }

}

class Leaf extends Component {

  /!**
   *
   * @param {number} count
   *!/
  constructor (count) {
    super();
    this._count = count;
  }

  get count () {
    return this._count;
  }

  set count (value) {
    if (Number.isInteger(value) && value > 0) {
      this._count = value;
    } else {
      throw new Error();
    }
  }

  execute () {
    return this.count;
  }

}

class Composite extends Component {
  /!**
   *
   * @param {Array<Component>} children
   *!/
  constructor (children = []) {
    super();
    this._children = [];

  }

  /!**
   *
   * @param{Array<Component>} value
   *!/
  set children (value) {

  }

  get children () {
    return this._children;
  }

  /!**
   *
   * @param {Component} child
   *!/
  addChild (child) {
    if (child instanceof Component) {
      this.children.push(child);
    }
  }

  execute () {
    return this.children.reduce((count, item) => {
      return count + item.execute();
    });
  }
}
*/

/*

class MenuComponent {

  execute () {}

}

class MenuItem extends MenuComponent {

  /!**
   *
   * @param {String} name
   *!/
  constructor (name) {
    super();
    this._name = name;
  }

  get menuItemName () {
    return this._name;
  }

  set menuItemName (value) {
    this._name = value;
  }

  execute (prefix) {
    console.log(`${prefix} ${this.menuItemName}`);
  }
}

class MenuPosition extends MenuComponent {
  constructor (name,menuChildren=[]) {
    super();
    this._menuChildren = menuChildren;
  }

  get menuChildren () {
    return this._menuChildren;
  }

  set menuChildren (value) {
    this._menuChildren = value;
  }

  addChild (child) {
    if (child instanceof MenuComponent) {
      this.menuChildren.push(child);
    } else {
      throw new TypeError();
    }
  }

  removeChild (child) {
    const childIndex = this.child.findIndex(child);

    if (childIndex !== -1) {
      this.positions.splice(positionIndex, 1);
    } else {
      throw new Error();
    }

  }

  execute (prefix) {
    console.log(`${prefix} ${this.name}`);
    this.menuChildren.forEach((item, index) => {
      console.log(item.execute);
      item.execute(`${prefix
                      ? `\t${prefix}.`
                      : `\t`}${index + 1}`);
    });
  }

}

const Menu = new MenuPosition([
                                new MenuPosition([
                                                   new MenuItem('1.1'),
                                                   new MenuItem('1.2'),
                                                   new MenuItem('1.3'),
                                                   new MenuItem('1.4'),
                                                   new MenuPosition([
                                                                      new MenuItem(
                                                                        '1.4.1'),
                                                                      new MenuItem(
                                                                        '1.4.2'),
                                                                      new MenuItem(
                                                                        '1.4.3'),
                                                                    ]),
                                                   new MenuItem('1.5'),
                                                   new MenuItem('1.6'),
                                                 ]),
                                new MenuPosition([
                                                   new MenuItem('2.1'),
                                                   new MenuItem('2.2'),
                                                   new MenuItem('2.3'),
                                                   new MenuPosition([
                                                                      new MenuItem(
                                                                        '2.3.1'),
                                                                      new MenuItem(
                                                                        '2.3.2'),
                                                                    ]),
                                                   new MenuItem('2.4'),
                                                   new MenuPosition([
                                                                      new MenuItem(
                                                                        '2.4.1'),
                                                                      new MenuItem(
                                                                        '2.4.2'),
                                                                      new MenuItem(
                                                                        '2.4.3'),
                                                                      new MenuItem(
                                                                        '2.4.4'),
                                                                      new MenuPosition(
                                                                        [
                                                                          new MenuItem(
                                                                            '2.4.4.1'),
                                                                          new MenuItem(
                                                                            '2.4.4.2'),
                                                                          new MenuItem(
                                                                            '2.4.4.3'),
                                                                        ])
                                                                    ]),
                                                   new MenuItem('2.5'),
                                                 ]),
                                new MenuPosition([]),
                              ]);
*/

///////////////////////////////
/*
ROLE => ACTION => PROPERTY => VALUE
*/

//CREATE => TASK
//CREATE => USER=>ROLE=>'USER' | 'MODERATOR'
const rule = {
  CREATE: {
    TASK: TRUE,
    USER: {
      ROLE: ['USER', 'MODERATOR']
    },
  },
  READ: {
    TASK: {
      isOwner: TRUE,
    },
    USER: {
      isOwner: TRUE,
    },
  },
  UPDATE: {},
  DELETE: {},
};

const actionOption = {
  action: 'Create',
  entity: 'task',
  value: {
    value: 'task1 test',
  },
  actor: {
    role: [],
    id: 14,
  }
};


class PermissionHandler{

  checkPermission(options){

  }

}

class PermissionComposite extends PermissionHandler{
  constructor (permissionHandlers) {
    super();
    this._permissionHandlers=permissionHandlers
  }

  get permissionHandlers(){
    return this._permissionHandlers
  }

  /*set permissionHandlers(value){
    return this._permissionHandlers = value
  }*/

  checkPermission (options) {

    return this.permissionHandlers
  }
}

class PropertyHandler extends PermissionHandler{


}















































































