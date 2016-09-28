import uuid from '../node_modules/uuid/uuid.js';

//from MDN
function storageAvailable(type) {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}

const defaultData = [
  {
    title: 'beef bao',
    id: uuid.v4(),
    description: 'It\'s a bao.',
    ingredients: ['1 pound of beef','3 cups of bao mix','1 flower (for garnish)'],
  },
  {
    title: 'ham sandwich',
    id: uuid.v4(),
    description: 'sudo make me a sandwich',
    ingredients: ['2 pieces of bread','1 haunch of ham','1 slice of cheese'],
  },
  {
    title: 'fried chicken',
    id: uuid.v4(),
    description: 'bawk bawk BAWK',
    ingredients: ['3 pounds chicken', '3 cups oil', 'One packet of ketchup'],
  }
]

module.exports = {
  getData: function () {
    if (storageAvailable('localStorage') && localStorage.getItem('_stancheta_recipes')) {
      return JSON.parse(localStorage.getItem('_stancheta_recipes'));
    }
    return defaultData;
  },
	setData: function(r) {
		if (storageAvailable('localStorage')) {
			localStorage.setItem('_stancheta_recipes', JSON.stringify(r));
		}
	}
}
