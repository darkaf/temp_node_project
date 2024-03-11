const _ = require('lodash');

const itemList = [1,[2,[3,[4]]]];

const updated_itemlist = _.flattenDeep(itemList);

console.log (updated_itemlist);