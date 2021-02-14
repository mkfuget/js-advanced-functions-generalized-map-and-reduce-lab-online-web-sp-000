// Add your functions here
function map(array, func)
{
  let out = [];
  for(let i=0; i<array.length; i++)
  {
    out.push(func(array[i]))
  }
  return out;
}

function reduce(array, func)
{
  let out = 0;
  for(let i=0; i<array.length; i++)
  {
    out+=func(array[i])
  }
  return out;
}
