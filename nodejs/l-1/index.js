// const fs= require('fs');
// function main(filename){
// fs.readFile(filename,'utf-8',function(err,data){
//     let cnt=0;
//     for(let i=0;i<data.length;i++){
//         if(data[i]==' ') cnt++;
//     }
//      console.log(`contains ${cnt+1} words`);

// })
// }
// main(process.argv[2]);

//  the above code represent the code for command line argument,which takes file path as argument, process.agrv[2] at this index the argument starts... baki normal logic hn to find the no. of words in a file
// --------------------------************************************************----------------
 


const { Command } = require('commander');
const fs = require('fs');

const program = new Command();

program
  .name('text-counter')
  .description('CLI to count words or sentences in a file');

program
  .command('words <filename>')
  .description('Counts the number of words in a file')
  .action((filename) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }
      let cnt = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i] === ' ') cnt++;
      }
      console.log(`Contains ${cnt + 1} words`);
    });
  });

program
  .command('sentences <filename>')
  .description('Counts the number of sentences (lines) in a file')
  .action((filename) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }
      let cnt = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i] === '\n') cnt++;
      }
      console.log(`Contains ${cnt} sentences`);
    });
  });

program.parse();

// program
// .command('function_name <filename>')
// .description(".....")
// .action((filename)=>{

// }) this is the format to write any command line function


// --------------------------************************************************----------------
// import chalk from 'chalk'
// console.log(chalk.red("hello-world"));

// // chalk.color('text')
// // .bg(color),.underline,.bold,
// const log = console.log;

// // Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// // Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'));

// // Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// // Nest styles
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// // Nest styles of the same type even (color, underline, background)
// log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
// 	' that becomes green again!'
// ));

// // ES2015 template literal
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// // Use RGB colors in terminal emulators that support it.
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));