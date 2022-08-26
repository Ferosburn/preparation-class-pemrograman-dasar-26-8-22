const fruits = ['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon'];

const noJambu = (arr) => {
  return arr.filter(item => item !== 'Jambu');
};

console.log(
  noJambu(fruits)
);