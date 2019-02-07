var doc=document.body

var qst=document.createElement('div');
qst.textContent='문제'
doc.append(qst);

var form=document.createElement('form');
doc.append(form);

var tbox=document.createElement('input');
form.append(tbox);

var btn=document.createElement('button');
btn.textContent='입력';
form.append(btn);

var rst=document.createElement('div');
rst.textContent='결과'
doc.append(rst)
function makeqst(){
  var a=Math.ceil(Math.random()*9);
  var b=Math.ceil(Math.random()*9);
  qst.textContent=a+'X'+b+'=?'
  return a*b;
}
var ab=makeqst();

form.addEventListener('submit', function(e){
  e.preventDefault();
    if(Number(tbox.value)===ab){
    rst.textContent='딩동';
    tbox.value='';
    tbox.focus();
    ab=makeqst();
  }else{
    rst.textContent="땡";
    tbox.value='';
    tbox.focus();
  }
})
