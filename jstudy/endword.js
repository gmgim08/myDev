var doc=document.body;

var word=document.createElement('div');
word.textContent='김경민';
document.body.append(word);

var form=document.createElement('form');
document.body.append(form)

var textbox=document.createElement('input');
form.append(textbox);

var button=document.createElement('button');
button.textContent='입력';
form.append(button);

var result=document.createElement('div');
document.body.append(result);

form.addEventListener('submit',function(e){
  e.preventDefault();
  if(word.textContent[word.textContent.length-1]===textbox.value[0]){
    result.textContent='딩동댕';
    word.textContent=textbox.value;
    textbox.value='';
    textbox.focus();
  }else{
    result.textContent='땡';
    textbox.value='';
    textbox.focus();
  }
});
