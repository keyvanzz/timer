args = process.argv.slice(2);

const beep = (number) => {
    setTimeout(() => {
        process.stdout.write(`\x07`);
    }, number * 1000);
}

for (const num of args) {
    if (num > 0) {
        beep(num);
    }
}