// Add your functions here
function map(array, func)
{
  out = [];
  for(let i=0; i<array.length; i++)
  {
    out.push(func(array[i]))
  }
  return out;
}

function map(array, func)
{
  out = 0;
  for(let i=0; i<array.length; i++)
  {
    out+=func(array[i]))
  }
  return out;
}
