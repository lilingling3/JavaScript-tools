var obj ={name:'ling',age:'12'};
for(var key in obj){
  if(key == 'name') delete obj[key];
};
