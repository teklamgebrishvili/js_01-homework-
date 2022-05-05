const countries = ['Georgia', 'Italy', 'Poland', 'Austria', 'England']

console.log(countries.slice(1));
// მასივის ახალ ობიექტში დაბრუნდება Italy და შემდეგ ჩამოთვლილი ელემენტები,ბოლოს გარდა
console.log(countries.slice(2, 4));
// დაგვიბრუნებს ელემენტებს Poland, Austria 2დან 4ელემენტამდე,რადგან ბოლო არ შედის 




const number = [12, 23, 34, 48, 89];

const found = number.find(element => element > 56);

console.log(found);
// დააბრუნებს undefined რადგან პირველი მნიშვნელობა 23 არ არის მეტი 56ზე
