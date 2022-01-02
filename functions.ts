// Types are enforced by the compiler, not by the runtime
export function getName(user: { first: string, last: string}): string {
  return `${user.first} ${user.last}`;
}

function addNumbers(a: number, b: number): number {
    return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string): string => `${str1} ${str2}`;

// Union types
export const format = (title: string, param: string | number): string => `${title}: ${param}`;

// Void function
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
}

// Promise function
export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

// Rest parameters
function introduce (salutation: string, ...names: string[]): string{
  return `${salutation} ${names.join(' ')}`;
}