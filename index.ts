#! /usr/bin/env node
import inquirer from 'inquirer' ;
//-------------------GAME VARIABLE------------------------
let enemies = ['skeleton','zombie','warrior','assassin'];
let maxEnergyHealth = 75;
let enemyAttackDemageToHearo = 25
//-----------------------player variable ---------------------
let heroHealth = 100;
let AttackDemageToEnemy = 50;
let maxHealthPortion = 3;
let HealthPortionHealAmount = 30;
let HealthPortionDropChance = 50

//---------------------while loop condition --------------------------
let gameRumming = true 
console.log('welcome to Deadzone !');
Game:
while (gameRumming){
    let enemyHealth = Math.floor(Math.random()*maxEnergyHealth +1);
    let enemyIndex = Math.floor(Math.random()*enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`^ ${enemy} has appeared^`);
    
    while (enemyHealth > 0 ){
        console.log(`your health : ${heroHealth}`);
        console.log(`${enemy} health : ${enemyHealth}`);
        let options =await inquirer.prompt({
            name:'ans',
            type:'list',
            message:'what would you like to do',
            choices:['1.attack','2.take health portion','3.run']
        })
        if(options.ans === '1.attack'){
            let damagetoenemy =Math.floor(Math.random()*AttackDemageToEnemy+1);
            let damagetohero = Math.floor(Math.random()*enemyAttackDemageToHearo +1);

            enemyHealth -= damagetoenemy
            heroHealth -= damagetohero
            console.log(`you strike the ${enemy} for ${damagetoenemy}`);
            console.log(`${enemy} strike you to ${damagetohero } damage`)

            if (heroHealth < 1){
                console.log ('you have taken too much damage. you are too weak too continue');
                break;
            }

        }
        else if (options.ans === '2.take health portion'){
            if (maxHealthPortion > 0 ){
                heroHealth += HealthPortionHealAmount
                maxHealthPortion--

                console.log(`you use health portion ${HealthPortionHealAmount}`);
                console.log(`you now have ${heroHealth}health`);
                console.log(`you have ${maxHealthPortion} health portion left.`);
                
            }else{
                console.log('you have no health portion left .defeat enemy to get health portion');
            }
        }
        else if (options.ans === '3.run'){
            console.log(` you run away from ${enemy}---`);
            continue Game;
        }
    }
    if ( heroHealth < 1){
        console.log('you are out from battle .you are too weak !!');
        break
    }
    console.log(`${enemy} was defeated !!`);
    console.log(`you have ${heroHealth} health`);

    let randomNumber = Math.floor(Math.random()*100 +1)
    if (randomNumber < HealthPortionDropChance){
        maxHealthPortion++
        console.log('enemy give you healthy portion ');
        console.log(`your health is ${heroHealth}`);
        console.log(`your health portion is ${maxHealthPortion}`);
    }
    let userOption = await inquirer.prompt({
        name:'ans',
        type:'list',
        message:'what would you like to do now ',
        choices:['1.continue','2. exit']
    })
    if (userOption.ans === '1.continue'){
            console.log('you are continue on your adventure');
    }else{
        console.log('you seccessfully exit from Deadzone');
        break
    }
    console.log('THANKYOU !! for playing\n')
}