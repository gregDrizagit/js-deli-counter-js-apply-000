var katzDeliLine = []

function takeANumber(katzDeliLine, name)
{
  if(katzDeliLine.length == 0)
  {
    katzDeliLine[0] = name;//if there is nobody in line, add the first person to the list and just print that they're first. 
    return "Welcome, "+name+"."+ " You are number 1 in line.";
  }else
  {
    katzDeliLine[katzDeliLine.length] = name;//.length is used to access the back of the list. 

    return "Welcome, "+name+"."+ " You are number "+ katzDeliLine.length +" in line.";//.length can also be the non zero indexed position in the list. 
  }

}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length == 0)
  {
    return "There is nobody waiting to be served!";// if there is nobody in line return null 
  }else
  {
    var serving = "Currently serving"+" "+ katzDeliLine[0]+".";//save the first index in a temp. 
    katzDeliLine.shift();//shift() pops the first item off the list and shifts the entire list forward
    return serving; //return the temp 
  }
}



function currentLine(katzDeliLine)
{
  if(katzDeliLine.length == 0)
  {//if there is nobody in line, return null
    return "The line is currently empty."

  }else
  {
    var theLine = "The line is currently: ";
    for(var i = 1; i <= katzDeliLine.length; i++)//start at 1 instead of 0 because
    {                                            //we need to return the list without zero indexing
      if(i < katzDeliLine.length)
      {
        theLine += i +". "+ katzDeliLine[i-1]+", ";//i-1 to access the item at the 0th index. Append the items to the end of the string. 
      }else if(i == katzDeliLine.length)           
      {//this if else is used to att this stupid period to the end of the string to please the compiler. 
        theLine += i +". "+ katzDeliLine[i-1];// 

      }
    }
    return theLine;

  }

}
