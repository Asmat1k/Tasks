module.exports = function toReadable (number) {
  const one = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  const dez = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const ten = ['ten', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let res = '';
  let num = number.toString().split('');
  if(number<10)
    return one[number];
  else if(number>9 && number <20)
        return dez[number-10];
        else if(number>9 && number <100) {
                res += ten[num[0]-1];
                if(num[1]!=0)
                    res += ' ' + one[num[1]];
                return res;
        }
  else {
    console.log(num);
    res = one[num[0]] + ' hundred';
    if(num[1]=='0' && num[2]=='0')
        return res;
    else if(num[1]=='0' && num[2]!='0') 
        res += ' ' + one[num[2]];
        else if(num[1]=='1')
            res += ' ' + dez[num[2]];
                else if(num[2]=='0')
                    res += ' ' + ten[num[1]-1];
                    else 
                        res += ' ' + ten[num[1]-1] + ' ' + one[num[2]];
    return res;
  }
}
