function scuberGreetingForFeet(ride){
  let result
  if (ride <= 400){
    result = 'This one is on me!'
  } 
  else if(ride < 2000){
    result = 'That will be twenty bucks.'
  }
  else {(ride > 2000) ;
    result = 'I will gladly take your thirty bucks.'
  }
  if (ride > 2500) {
    result = 'No can do.' 
  }
  return result
}

function ternaryCheckCity(city){
   return city === "NYC" ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous' :
      return 'Thank you so much.';
    case 'not as generous' :
      return 'Thank you.';
    default:
      return 'Bye.'
  }
}
