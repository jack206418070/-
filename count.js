const buttonHandler  = document.querySelector('.button')
const reslut = document.querySelector('.result')


buttonHandler.addEventListener('click',function(e){
    e.preventDefault()
    const allMoney = +document.querySelector('#one').value
    const allPeople = +document.querySelector('#two').value
    const otherPeople = +document.querySelector('#three').value
    const killBoss = document.querySelector('#four').value


    let avgMoney = (allMoney / allPeople).toFixed(2)
    let otherMoney=[], killBossAry, moneySum = 0, str;

        killBossAry = killBoss.split(',')
        killBossAry.forEach((item, index) => {
            otherMoney[index] = (avgMoney*(item / 8)).toFixed(0)
            moneySum += +otherMoney[index]
        })
        avgMoney = ((allMoney - moneySum) / (allPeople - otherPeople)).toFixed(1)
    

    function callAry(){
        str = `<p>完整出席->${allPeople - otherPeople}人分 : ${avgMoney} G</p>`
        otherMoney.forEach((item,index) => {
            str += `<p>早退第${index+1} -> 分: ${item} G`
        })
    }

    callAry()
    reslut.innerHTML = str
    
},false)

