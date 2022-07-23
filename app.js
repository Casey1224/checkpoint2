let clickUpgrades = {
    pickaxe: {
        price: 100,
        quantity: 0,
        multiplier: 1
    },
    graphicsCard: {
        price: 200,
        quantity: 0,
        multiplier: 2
    }

};

let autoUpgrades = {
    tesla: {
        price: 500,
        quantity: 0,
        multiplier: 20
    },
    elonMusk: {
        price: 1000,
        quantity: 0,
        multiplier: 50
    }
}





let coin = 0;
let TCM = 0;
let CPS = 0;


function mine() {
    coin += 1
    if (clickUpgrades.pickaxe.quantity >= 1) [
        coin += clickUpgrades.pickaxe.quantity
    ]
    if (clickUpgrades.graphicsCard.quantity >= 1) [
        coin += clickUpgrades.graphicsCard.multiplier * clickUpgrades.graphicsCard.quantity
    ]

    update()
}
mine()

function update() {
    let template = ''
    template += `
<div class="row update justify-content-between text-light text-center">
                <div class="col-3">
                    <div>
                        <h1>Stats</h1>
                    </div>
                    <div class="border rounded bg-dark ">
                        <p>CPS: ${CPS}</p>
                        <p>TCM: ${TCM}</p>
                    </div>
                </div>
                <div class="col-6 mt-4">
                    <img class="img-boss" onclick="mine()"
                        src="kisspng-doge-pixel-art-youtube-5af30a3aa73177.9273366415258773066848.png" alt="">
                </div>
                <div class="col-3 ">
                    <div>
                        <h1>Inventory</h1>
                    </div>
                    <div class="border rounded bg-dark ">
                        <p id="coins">Coins: ${coin}</p>
                        <p>pickaxe: ${clickUpgrades.pickaxe.quantity}</p>
                        <p>graphics card: ${clickUpgrades.graphicsCard.quantity}</p>
                        <p>teslas: ${autoUpgrades.tesla.quantity}</p>
                        <p>elonMusk: ${autoUpgrades.elonMusk.quantity}</p>
                    </div>
                </div>

            </div>
`
    let updateElm = document.getElementById('update')
    updateElm.innerHTML = template
}


function buyPickAxe() {

    let pickaxe = clickUpgrades.pickaxe
    if (coin >= pickaxe.price) {
        coin -= pickaxe.price
        pickaxe.quantity += 1
        pickaxe.price += 50
    }
    update()
    drawStore()


}
function buyGraphicsCard() {

    let graphics = clickUpgrades.graphicsCard
    if (coin >= graphics.price) {
        coin -= graphics.price
        graphics.quantity += 1
        graphics.price += 100

    }
    update()
    drawStore()
}
function buyTesla() {

    let tesla = autoUpgrades.tesla
    if (coin >= tesla.price) {
        coin -= tesla.price
        tesla.quantity += 1
        tesla.price += 100

    }
    update()
    drawStore()
}
function buyelonMusk() {

    let elonMusk = autoUpgrades.elonMusk
    if (coin >= elonMusk.price) {
        coin -= elonMusk.price
        elonMusk.quantity += 1
        elonMusk.price += 200

    }
    update()
    drawStore()
}
function drawStore() {
    let template = ''
    template +=
        ` <div id="Store" class="row justify-content-center text-light text-center mt-4">
            <div class="col-10">
                <div>
                    <h1>Store</h1>
                </div>
                <div class="border rounded bg-dark d-flex justify-content-between ">
                    <div class="col-5">
                        <div>
                            <h4>click upgrades</h4>
                        </div>
                        <div>
                            <button type="button" class="btn btn-warning m-2" onclick="buyPickAxe()" >PickAxe</button>
                            = ${clickUpgrades.pickaxe.price}
                        </div>
                        <div>
                            <button type="button" class="btn btn-warning m-2" onclick="buyGraphicsCard()">GraphicsCard</button>
                            = ${clickUpgrades.graphicsCard.price}
                        </div>
                    </div>
                    <div class="col-5">
                        <div>
                            <h4>auto upgrades</h4>
                        </div>
                        <div>
                            <button type="button" class="btn btn-warning m-2 "onclick="buyTesla()">Buy Tesla</button>
                            = ${autoUpgrades.tesla.price}
                        </div>
                        <div>
                            <button type="button" class="btn btn-warning m-2"onclick="buyelonMusk()">Buy ElonMusk!</button>
                            = ${autoUpgrades.elonMusk.price}
                        </div>
                    </div>
                </div>

            </div>
        </div>
        `
    let storeElm = document.getElementById('Store')
    storeElm.innerHTML = template


}
drawStore()

function collectAutoUpgrades() {
    let autocoin = autoUpgrades.tesla.multiplier * autoUpgrades.tesla.quantity;
    let eloncoin = autoUpgrades.elonMusk.multiplier * autoUpgrades.elonMusk.quantity;
    coin += (autocoin + eloncoin)

    update()
}
function tCoinM() {
    let autocoin = autoUpgrades.tesla.multiplier * autoUpgrades.tesla.quantity;
    let eloncoin = autoUpgrades.elonMusk.multiplier * autoUpgrades.elonMusk.quantity;
    TCM = (autocoin + eloncoin)

    update()
}
function clicksPerSec() {
    let axeCoin = clickUpgrades.pickaxe.multiplier * clickUpgrades.pickaxe.quantity;
    let graphicsCoin = clickUpgrades.graphicsCard.multiplier * clickUpgrades.graphicsCard.quantity;
    CPS = (axeCoin + graphicsCoin)
    update()
}
setInterval(collectAutoUpgrades, 3000)
setInterval(tCoinM, 3000)
setInterval(clicksPerSec, 3000)