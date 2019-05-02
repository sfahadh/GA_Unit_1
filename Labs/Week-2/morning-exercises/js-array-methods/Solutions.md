1. Filter the list of inventors for those who were born in the 1500's.
  ```js
  function filterYear(value){
      const birthYear = value.year;
      if (birthYear > 1500 && birthYear < 1600){
          console.log(value)
      }     
  }
  inventors.filter(filterYear)
  ```

2. Give us an array of the inventors' first and last names.
   ```js
   inventors.map(function(el){
       let names = el.first + ' ' + el.last;
       return names
   })
   ```

3. Sort the inventors by birthdate, oldest to youngest.
   ```js
   inventors.sort(function(a, b){
       return a.year - b.year;
   })
   ```

4. How many years did all the inventors live?
   ```js
   for (let item of inventors){
       const birth = item.year;
       const death = item.passed;
       const age = death - birth
   }
   ```

5. Sort the inventors by years lived.
   ```js
   const age_array = []
   for (let item of inventors){
       const birth = item.year;
       const death = item.passed;
       const age = death - birth
       age_array.push(age)
   }
   age_array.sort(function(a, b){
       return a - b
   })
   ```

6. Sum up the instances of each item in the following array.
   ```js
   const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
   data.reduce(function (accumulator, currentVal){
         if (typeof accumulator[currentVal] == 'undefined') {
           accumulator[currentVal] = 1;
         } else {
           accumulator[currentVal] += 1;
         }
       return accumulator;
   }, {})
   ```
