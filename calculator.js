var data;
var dataH=document.querySelector("#resultH");
var ans=[],eq=[];
var InputData=document.querySelector("#result");
var historyData=document.querySelector("#history");
function apply(show){
 if(InputData.value=="0")
{
InputData.value=show;
}
else{
InputData.value+=show;
}
}
function clr()
{
InputData.value="0";
dataH.value=""
}
function cal()
{
 data=InputData.value+ "=";
 InputData.value=eval(InputData.value);
 dataH.value=data;

 ans.push(eval(InputData.value));
 eq.push(data);
}
function showHistory()
{
var history="<div>";
for(let i=0;i<eq.length;i++)
{
   history+="<p><div class='history'></p>"+ eq[i]+"</p><p>"+ ans[i]+"</p></div>";
}
history+="</div>";
historyData.innerHTML=history;
}

function clearHistory()
{
const cl=confirm("Bhai sach me History Delete kr na hai ?")
if(cl){
historyData.innerHTML="";
eq=[];
answers=[];
}

}
function del()
{
   
InputData.value=InputData.value.slice(0,-1);
}
