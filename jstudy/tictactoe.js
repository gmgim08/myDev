var body=document.body;
var table=document.createElement('table');
var lines=[];
var rooms=[];
var turn='X'

var callBack=function(e){
  console.log(e.target);
  console.log(e.target.parentNode);
  console.log(e.target.parentNode.parentNode);

  var lineNum=lines.indexOf(e.target.parentNode);
  console.log(lineNum);
  var roomNum=rooms[lineNum].indexOf(e.target);
  console.log(roomNum);

  if(rooms[lineNum][roomNum].textContent===''){ //칸이 채워져 있는가
    console.log('빈칸입니다');
    rooms[lineNum][roomNum].textContent=turn;
    if(turn==='O'){
      turn='X';
    }else{
      turn='O';
    }
  }else{
    console.log('빈칸아닙니다');
  }
}

for(i=0; i<3; i+=1){
  var line=document.createElement('tr');
  lines.push(line);
  rooms.push([]);
  for(var j=0; j<3; j+=1){
    var room=document.createElement('td');
    room.addEventListener('click', callBack)
    rooms[i].push(room);
    line.append(room);
  }
  table.append(line);
}
body.append(table)
console.log(lines, rooms)
