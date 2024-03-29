/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer'
import fs from "fs"

const question = [
    {
        type: 'input',
        name: 'link',
        message: 'Manda o link'
    }
]
import qr from 'qr-image'


inquirer.prompt(question).then((answers) => {
    var qr_svg= qr.image(answers.link, {type: 'png'})
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'))
  })