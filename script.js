const logo = document.querySelectorAll('#logo path');
console.log(logo);
for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i + 1} is ${logo[i].getTotalLength()}`);
}
