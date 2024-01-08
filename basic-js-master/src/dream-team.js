const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members) || !members) return false;
  const lengthMembers = members.length;
  let result = [];
  for(let i=0; i<lengthMembers; i++) {
    if(typeof members[i] == 'string' && members[i].length != 0 && members[i]) {
      result.push(members[i].trim().slice(0,1).toUpperCase());
    }
  }
  return result.sort().sort().join('');
}

module.exports = {
  createDreamTeam
};
