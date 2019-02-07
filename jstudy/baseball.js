var body=document.body;
var numArray;
var xcnt;

var rst=document.createElement('h1');
body.append(rst);

var frm=document.createElement('form');
body.append(frm);

var tbox=document.createElement('input');
tbox.type='text';
tbox.maxLength=4;
frm.append(tbox)

var btn=document.createElement('button');
btn.textContent='입력';
frm.append(btn);

var cnt=document.createElement('div');
body.append(cnt);
cnt.textContent='0';

function makeNumSet(){
  numArray=[];
  xcnt=0;
  cnt.textContent=xcnt;
  var numSet=[1,2,3,4,5,6,7,8,9];
  for(var i=0; i<4; i+=1){
    var tnum=numSet.splice(Math.floor(Math.random()*(9-i)),1)[0];
    numArray.push(tnum);
  }
  console.log(numArray);
}
makeNumSet();


frm.addEventListener('submit', function(e){
  e.preventDefault();
  var ans=tbox.value;
  //console.log(ans, numArray, ans===numArray.join(''))
  if(ans==numArray.join('')){
    rst.textContent='홈런';
    tbox.value='';
    tbox.focus();
    makeNumSet();
  }else{
    var ansArray=ans.split('')
    var s=0;
    var b=0;
    xcnt+=1;
    cnt.textContent=xcnt;
    if(xcnt>=10){
      alert('답은'+numArray.join('')+'입니다');
      rst.textContent='새로운 문제를 시작합니다';
      tbox.value='';
      tbox.focus();
      makeNumSet();
    }else{
      for(var i=0; i<4; i+=1){
        if(Number(ansArray[i])==numArray[i]){
          s+=1;
        }else if(numArray.indexOf(Number(ansArray[i]))>-1){
          b+=1;
        }
      }
      rst.textContent=s+'스트라이크'+b+'볼';
      tbox.value='';
      tbox.focus();
    }
  }
});
