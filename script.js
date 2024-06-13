
    let li = document.querySelectorAll('li');
    let k = 1 / li.length;
    for(let i = li.length-1; i >= 0; i --){

        li[i].style = `--time: ${i * k }s;`
    }
