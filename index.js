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

function reduce(array, func, startingPoint=0)
{
  let out = 0;
  if (func != undefined)
  {
    out = false
    for(let i=0; i<array.length; i++)
    {
      if(func(array[i]))
      {
        out = true
      }
    }
    return out;

  }
  else
  {
    for(let i=0; i<array.length; i++)
    {
      out += array[i]
    }
    return out+ startingPoint;
  }
}
