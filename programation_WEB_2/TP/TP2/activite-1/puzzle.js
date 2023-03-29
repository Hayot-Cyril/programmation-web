document.querySelector(".plateau");
let plan = ['green','red','orange','yellow','blue','green','','','yellow','orange','green','','orange','yellow','','red','red','orange','','','red','green','orange','yellow','orange','red','green','blue'];
for (var i = 0; i < 28; i++) {
    document.querySelector(".plateau").innerHTML+='<div class="ball '+plan[i]+'"></div>';
}