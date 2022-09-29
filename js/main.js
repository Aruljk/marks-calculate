let namee=document.getElementById("name"),
tamil=document.getElementById("tamil"),
english=document.getElementById("english"),
maths=document.getElementById("maths"),
science=document.getElementById("science"),
social=document.getElementById("social"),
btn=document.getElementById("one");

function tab(){
    let table=document.getElementById("table");
     let row=table.insertRow(table.length);
     let a1=row.insertCell(0);
     let a2=row.insertCell(1);
     let a3=row.insertCell(2);
     let a4=row.insertCell(3);
     let a5=row.insertCell(4);
     let a6=row.insertCell(5);
     let a7=row.insertCell(6);
     let a8=row.insertCell(7);
     let a9=row.insertCell(8);

     a1.innerText=namee.value;
     a2.innerText=tamil.value;
     a3.innerText=english.value;
     a4.innerText=maths.value;
     a5.innerText=science.value;
     a6.innerText=social.value;

     let totall =parseInt(tamil.value)+parseInt(english.value)+parseInt(maths.value)+parseInt(science.value)+parseInt(social.value)
    a7.innerText=totall;

    let average=totall/5
    a8.innerText=average;
}
btn.addEventListener("click",tab)