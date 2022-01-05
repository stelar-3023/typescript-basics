// optional parameters
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? ` ${extra}` : ''}`);
}

printIngredient('1Cup', 'Flour');
printIngredient('1Cup', 'Flour', 'Sugar');

// optional fields
interface User {
  id: string;
  info?: {
    email?: string;
  };
}

// function getEmail(user: User) {
//   if (user.info) {
//     return user.info.email;
//   }
//   return '';
// }
function getEmailEasy(user: User) {
  return user?.info?.email ?? '';
}

// optional callbacks
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log(x + y);
  callback?.(); // will only call if the function exists
}

addWithCallback(1, 2);