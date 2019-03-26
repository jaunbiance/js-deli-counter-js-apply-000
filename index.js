function takeANumber (katzDeliLine, customer){
  katzDeliLine.push(customer);
  return 'Welcome, '+customer+'. You are number '+ katzDeliLine.length +' in line.';
}

function nowServing (katzDeliLine){
  if (katzDeliLine.length>0){
    return 'Currently serving '+katzDeliLine.shift()+'.';
  }else{
   return 'There is nobody waiting to be served!';
  }
}

function currentLine (katzDeliLine){
  if (katzDeliLine.length>0){
    var string = '';
    var i = 0;
    do {
      //string += i+1 +'. '+katzDeliLine[i]+', ';
      string += `${i+1}. ${katzDeliLine[i]}, `;
      i++;
    }while (i<katzDeliLine.length);
      return 'The line is currently: '+string.slice(0,-2);
  }else{
    return 'The line is currently empty.';
  }
}