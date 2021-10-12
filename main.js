const containerFizzBuzz = document.getElementsByClassName("container")[1];
/* console.log(containerFizzBuzz); */



const row = document.createElement("div");
row.classList.add("row");

for (let i = 1; i <= 100; i++){
    const fizz = i % 3 === 0;
    const buzz = i % 5 === 0;
    const fizzBuzz = (i % 3 === 0) && (i % 5 === 0);

    row.innerHTML +=    `<div class="col-7 p-0 justify-content-center align-items-center">
                                <div class="box d-flex justify-content-center align-items-center">
                                    <div> ${i} </div>
                                </div>
                            </div>`;
        
    containerFizzBuzz.append(row);
}

