const containerFizzBuzz = document.getElementsByClassName("container")[1];
/* console.log(containerFizzBuzz); */



const row = document.createElement("div");
row.classList.add("row", "gap-5");

for (let i = 1; i <= 100; i++){
    const fizz = i % 3 === 0;
    const buzz = i % 5 === 0;
    const fizzBuzz = (i % 3 === 0) && (i % 5 === 0);
    
    /* let alertFizzBuzz = "" */
    let bgColor= "";
    let numero = i;

    if (fizzBuzz) { 
        bgColor = "bg-fizzbuzz";
        /* alertFizzBuzz = "fizzbuzz"; */
        numero="fizzbuzz";
    } else if (fizz) {
        bgColor = "bg-fizz";
        /* alertFizzBuzz = "fizz"; */
        numero="fizz";
    } else if (buzz) {
        bgColor = "bg-buzz";
        /* alertFizzBuzz = "buzz"; */
        numero="buzz";
    } else {
        bgColor = "bg-normal";
    }
    

    row.innerHTML +=    `<div class="col-7 p-0">
                            <div class="box d-flex justify-content-center align-items-center ${bgColor}">
                                <div> ${numero} </div>
                            </div>
                        </div>` ;

    

    containerFizzBuzz.append(row);
}

