function generatecolorcode() {

    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    document.getElementById("code").innerText = randomColor;

    console.log(`Your New Random Color-code is ${randomColor}`);
};

const genColorBtn = document.getElementById("gen-color-btn");
genColorBtn.addEventListener("click",generatecolorcode);