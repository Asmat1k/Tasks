module.exports = function check(str, bracketsConfig) {
  let find = [];
  bracketsConfig.forEach(element => {
    find.push(element.join(''));
  });
  if(str.length%2!=0)
    return false;
  else
    for(let i=0; i<str.length; i++) {
      for(let j=0; j<find.length; j++)
        if(str.includes(find[j])) {
          str = str.replace(find[j],'')
          i=0;
        }
    }
  if(str.length>0)
    return false;
  else
    return true; 
}
