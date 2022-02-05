//animate the sentence revelaing 1 char at a time

const sentence = "hello there from lighthouse labs!";
let delay = 0;
for(const char of sentence)
{
    delay = delay + 50;
    setTimeout(() => {
        process.stdout.write(char);
    },delay)
}


