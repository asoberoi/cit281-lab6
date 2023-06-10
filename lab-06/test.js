const students = [
    {
      id: 1,
      last: "Last1",
      first: "First1",
    },
    {
      id: 2,
      last: "Last2",
      first: "First2",
    },
    {
      id: 3,
      last: "Last3",
      first: "First3",
    }
  ];
  
  console.log(students.map((st, index) => {
    return index + " : " + st.last;
  }));
  
  console.log(students.filter((st, index) => {
    return st.id < 3;
  }));
  
  console.log(students.find((st, index) => {
    return st.id > 1;
  }));

  console.log(students.reduce(function(accumulator, currentElement){
    
    return accumulator + currentElement.first; 
  }," "))
  