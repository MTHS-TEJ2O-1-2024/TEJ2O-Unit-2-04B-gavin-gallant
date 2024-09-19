/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: gavin gallant
 * Created on: Sep 2024
 * This program says the tempeture 
*/

basic.clearScreen()
basic.pause(1000)


let tempeture = 0 

input.onButtonPressed(Button.A, function () {
    tempeture = input.temperature()
    basic.showString('Temp=')
    basic.showNumber(tempeture)
})