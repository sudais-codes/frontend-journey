const users = [
    {id:1,name:"Ali"},
    {id:2,name:"Ahmed"},
    {id:3,name:"Sudais"}
];

const find = users.find(n => n.id==2);
console.log(find);