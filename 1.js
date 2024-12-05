// import { digitsCounter } from './app.js';
import { handleTapClick } from './app.js';
import { tabs } from './app.js';
import { setupBattleonNavigation } from './app.js';
import { initializeSnackbarFunctionality } from './app.js';
import { barba_umd } from './app.js';
import { onboard } from './app.js';
import {Swiper, initSliders} from './swiper-bundle.min.js';
import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

Swiper();

function digitsCounter() {
    function digitsCountersInit(digitsCountersItems) {
        let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
        if (digitsCounters.length) digitsCounters.forEach((digitsCounter => {
            if (digitsCounter.hasAttribute("data-go")) return;
            digitsCounter.setAttribute("data-go", "");
            digitsCounter.dataset.digitsCounter = digitsCounter.innerHTML;
            digitsCounter.innerHTML = `0`;
            const delay = digitsCounter.dataset.digitsCounterDelay ? parseInt(digitsCounter.dataset.digitsCounterDelay, 10) : 0;
            setTimeout((() => {
                digitsCountersAnimate(digitsCounter);
            }), delay);
        }));
    }
    function digitsCountersAnimate(digitsCounter) {
        let startTimestamp = null;
        const duration = parseFloat(digitsCounter.dataset.digitsCounterSpeed) ? parseFloat(digitsCounter.dataset.digitsCounterSpeed) : 1e3;
        const startValue = parseFloat(digitsCounter.dataset.digitsCounter);
        const format = digitsCounter.dataset.digitsCounterFormat ? digitsCounter.dataset.digitsCounterFormat : " ";
        const startPosition = 0;
        const step = timestamp => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = (progress * (startPosition + startValue)).toFixed(1);
            digitsCounter.innerHTML = typeof digitsCounter.dataset.digitsCounterFormat !== 'undefined' ? (getDigFormat(value, format).toString()).replace(/\./g, ',') : (value.toString()).replace(/\./g, ',');
            if (progress < 1) window.requestAnimationFrame(step); else digitsCounter.removeAttribute("data-go");
        };
        window.requestAnimationFrame(step);
    }
    function digitsCounterAction(e) {
        // const entry = e.detail.entry;
        const targetElement = document.querySelectorAll("[data-digits-counter]");
        digitsCountersInit(targetElement);
    }
    // document.addEventListener("watcherCallback", digitsCounterAction);
    digitsCounterAction();
}

function digitsCounter1() {
    function digitsCountersInit(digitsCountersItems) {
        let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
        if (digitsCounters.length) digitsCounters.forEach((digitsCounter => {
            if (digitsCounter.hasAttribute("data-go")) return;
            digitsCounter.setAttribute("data-go", "");
            digitsCounter.dataset.digitsCounter = digitsCounter.innerHTML;
            digitsCounter.innerHTML = `0`;
            const delay = digitsCounter.dataset.digitsCounterDelay ? parseInt(digitsCounter.dataset.digitsCounterDelay, 10) : 0;
            setTimeout((() => {
                digitsCountersAnimate(digitsCounter);
            }), delay);
        }));
    }
    function digitsCountersAnimate(digitsCounter) {
        let startTimestamp = null;
        const duration = parseFloat(digitsCounter.dataset.digitsCounterSpeed) ? parseFloat(digitsCounter.dataset.digitsCounterSpeed) : 1e3;
        const startValue = parseFloat(digitsCounter.dataset.digitsCounter);
        const format = digitsCounter.dataset.digitsCounterFormat ? digitsCounter.dataset.digitsCounterFormat : " ";
        const startPosition = 0;
        const step = timestamp => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (startPosition + startValue));
            digitsCounter.innerHTML = typeof digitsCounter.dataset.digitsCounterFormat !== 'undefined' ? getDigFormat(value, format) : value;
            if (progress < 1) window.requestAnimationFrame(step); else digitsCounter.removeAttribute("data-go");
        };
        window.requestAnimationFrame(step);
    }
    function digitsCounterAction(e) {
        // const entry = e.detail.entry;
        const targetElement = document.querySelectorAll("[skill-int]");
        digitsCountersInit(targetElement);
    }
    // document.addEventListener("watcherCallback", digitsCounterAction);
    digitsCounterAction();
}

var debugMode = false;
var tg;
var user;
var is_premium;
var api_url = "https://back.corgi-x.com:8090";
var bonus = 0;
var a_hash;
var a_data;
var a_date;
var lastPage = "lotties";
var lastBalance = "";
var lastLevelName = "";
var lastLevel = "";
var lastLevelProgress = "";
var lastAva = "";
var lastDog = "";
var lastPerHour = "";
var lastPerCLick = "";
var lastEnergy = "";
var lastMaxEnergy = "";
var lastEnergyProgress = "";
var lastIntBalance = 0;
var limitsLevel = {0:0, 1:50000,2:500000,3:1000000,4:5000000,5:12000000,6:70000000,7:500000000,8:1300000000,9:5000000000,10:15000000000,11:60000000000,12:240000000000,13:800000000000,14:1600000000000,15:6000000000000,16:30000000000000,17:180000000000000,18:900000000000000,19:1700000000000000};
var userCards = {"b":{"n":"","p":"", "i":""},"c":{"n":"","o":"","r":""},"r":{"o":""}};
var userCardsData = new Object();
var cardsImage = {
    "Р›РёРґРµСЂСЃС‚РІРѕ":"img/improving/skills/01.png",
    "РќРµС‚РІРѕСЂРєРёРЅРі":"img/improving/skills/02.png",
    "Р¤РёРЅР°РЅСЃРѕРІР°СЏ РіСЂР°РјРѕС‚РЅРѕСЃС‚СЊ":"img/improving/skills/03.png",
    "РљРѕРјРјСѓРЅРёРєР°С†РёСЏ":"img/improving/skills/05.png",
    "РњРѕС‚РёРІР°С†РёСЏ СЃРѕС‚СЂСѓРґРЅРёРєРѕРІ":"img/improving/skills/06.png",
    "РљСЂРёР·РёСЃ-РјРµРЅРµРґР¶РјРµРЅС‚":"img/improving/skills/04.png",
    "РњРµРЅРµРґР¶РјРµРЅС‚":"img/improving/skills/04.png",
    "Lamba":"img/improving/buying/07.png",
    "РљРѕС„РµР№РЅСЏ":"img/improving/buying/08.png",
    "РђРІС‚РѕСЃРµСЂРІРёСЃ":"img/improving/buying/09.png",
    "Р—Р°РІРѕРґ":"img/improving/buying/10.png",
    "Р РµСЃС‚РѕСЂР°РЅ":"img/improving/buying/11.png",
    "Р§Р°СЃС‚РЅС‹Р№ СЃР°РјРѕР»РµС‚":"img/improving/buying/12.png",
    "РЇС…С‚Р°":"img/improving/buying/13.png",
    "Bitcoin":"img/improving/invest/14.png",
    "Р—РѕР»РѕС‚Рѕ":"img/improving/invest/15.png",
    "РЎРµСЂРµР±СЂРѕ":"img/improving/invest/16.png",
    "РђРєС†РёРё":"img/improving/invest/17.png",
    "РћР±Р»РёРіР°С†РёРё":"img/improving/invest/18.png",
    "Р’Р°Р»СЋС‚Р°":"img/improving/invest/19.png",
    "РЎР°РјРѕРѕСЂРіР°РЅРёР·Р°С†РёСЏ":"img/improving/skills/20.png",
    "РљСЂРµР°С‚РёРІРЅРѕСЃС‚СЊ":"img/improving/skills/21.png",
    "РђРЅР°Р»РёР· РґР°РЅРЅС‹С…":"img/improving/skills/22.png",
    "РўР°Р№Рј-РјРµРЅРµРґР¶РјРµРЅС‚":"img/improving/skills/23.png",
    "РђРґР°РїС‚РёРІРЅРѕСЃС‚СЊ":"img/improving/skills/24.png",
    "РҐР°СЂРґСЃРєРёР»Р»С‹":"img/improving/skills/25.png",
    "РРЅС‚СѓРёС†РёСЏ":"img/improving/skills/26.png",
    "РЈС‡Р°СЃС‚РёРµ РІ РєРѕРЅС„РµСЂРµРЅС†РёСЏС…":"img/improving/training/27.png",
    "Growth Hacking":"img/improving/training/28.png",
    "ChatGPT":"img/improving/training/29.png",
    "UX/UI Design":"img/improving/training/30.png",
    "ML":"img/improving/training/31.png",
    "РРЅРѕСЃС‚СЂР°РЅРЅС‹Рµ СЏР·С‹РєРё":"img/improving/relocation/32.png",
    "РћС„РёСЃ РЅР° РјР°Р»СЊРґРёРІР°С…":"img/improving/relocation/33.png",
    "Р¤СЂРёР»Р°РЅСЃ РЅР° РўР°Р№Р»Р°РЅРґРµ":"img/improving/relocation/34.png",
    "Р¤СЂРёР»Р°РЅСЃ РІ РўР°Р№Р»Р°РЅРґРµ":"img/improving/relocation/34.png",
    "РЈР¶РёРЅ СЃРѕ Р·РІРµР·РґРѕР№":"img/improving/funny/35.png",
    "РђСЂРµРЅРґР° СЃРїРѕСЂС‚РєР°СЂР°":"img/improving/funny/36.png",
    "Р РѕСЃРєРѕС€РЅС‹Рµ РѕС‚РµР»Рё":"img/improving/funny/37.png",
    "РЁРѕРїРёРЅРі РІ Р±СѓС‚РёРєР°С…":"img/improving/funny/38.png",
    "РџСЂРёРІР°С‚РЅС‹Рµ РІРµС‡РµСЂРёРЅРєРё":"img/improving/funny/39.png",
    "Р“РѕР»СЊС„":"img/improving/funny/40.png",
    "РљРѕСЂРѕР»РµРІСЃРєРёР№ Р±СЂРёРґР¶":"img/improving/funny/41.png",
    "РџРѕРєРµСЂ":"img/improving/funny/42.png",
    "РўРµРЅРЅРёСЃ":"img/improving/funny/43.png",
    "РљР°СЂС‚РёРЅРі":"img/improving/funny/44.png"
};
var appUrl = "https://t.me/CorgiXbot/app";
var refMsg = `РџСЂРёРіР»Р°С€Р°Р№С‚Рµ РґСЂСѓР·РµР№ СЃРєРѕСЂРµРµ!
+5Рє
+25Рє`;
var countTaps = 0;
var newOld = "";
var lastRefsCount = 0;
var lastRefsHtml = "";
var ratingLevel = 1;
var ratingHtml = {
    1:"",
    2:"",
    3:"",
    4:"",
    5:"",
    6:"",
    7:"",
    8:"",
    9:"",
    10:"",
    11:"",
    12:"",
    13:"",
    14:"",
    15:"",
    16:"",
    17:"",
    18:"",
    19:"",
    20:""
};
var lastIntLevel = 1;
var showBalleOnBoard = true;
var lastBattleItems = "";
var stavka = 0;
var battleLevel = 0;
var dotsC = 0;
var lastDogClass = "";
var showBattleOnBoard1 = false;
var lastDailyRevardStyle = "display: none";
var userTasks = new Object();
var lastTasks = "";
var lastTasks1 = "";
var roundTasksFlag = false;
var lastTasksRound = false;
var lastSpentCoins = 0;
var lastStreak = 0;
var streakSumm = {
    1:1000,
    2:2000,
    3:3000,
    4:4000,
    5:5000,
    6:6000,
    7:7000,
    8:8000,
    9:9000,
    10:10000,
    11:11000,
    12:12000,
    13:13000,
    14:14000,
    15:15000,
    16:16000,
    17:17000,
    18:18000,
    19:19000,
    20:20000,
    21:21000
};
let startY = 0;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function typeDots () {
    if (dotsC < 3) {
        $("dots").append(".");
        dotsC++;
    }else{
        $("dots").html("");
        dotsC = 0;
    }
}

function reloadFrontFunction() {
    // digitsCounter();
    handleTapClick();
    tabs();
    setupBattleonNavigation();
    initializeSnackbarFunctionality();
    onboard();
    initSlides();
    $("#goRating").off("click").click(function () {
        location.href = "rating.html";
    });
}

function initSlides() {
    $.ajax({
        url: "./js/appSlide.js",
        cache: false,
        success: (data) => {
            const newScript = document.createElement("script");
            newScript.textContent = data;
            document.body.appendChild(newScript);
            $("#appmin").html(newScript);
        },
    });
    document.addEventListener("swiperSlideChange", function (e) {
        //console.log(e);
    });
}

function initAnim() {
    // $.ajax({
    //     url: "./js/anim.js",
    //     cache: false,
    //     success: (data) => {
    //         const newScript = document.createElement("script");
    //         newScript.textContent = data;
    //         document.body.appendChild(newScript);
    //         $("#animjs").html(newScript);
    //     },
    // });
    const coinsAnim1 = new DotLottie({
        autoplay: true,
        loop: true,
        canvas: document.getElementById("dotlottie-svg"),
        containerClass: "page-coins-anim",
        src: "./files/path/m16urpqp.lottie"
    });
    coinsAnim1.load();
}

function showMain() {
    if (newOld == "new") {
        newOld = "old";
        barba_umd.go("home.html");
        reloadFrontFunction();
    }
    $("#load").attr("style", "display: none;");
    $("[data-barba=container]").attr("style", "display: flex;");
    $(".main-page__panel").attr("style", "");
    if (bonus > 0) {
        location.href = "#popup-of-bonus";
        bonus = 0;
    }
    $("#goRating").off("click").click(function () {
        location.href = "rating.html";
    });
    //console.log("showm");
    // initAnim();

}

function setIntervals(us) {
    setInterval(() => updateOnline(us), 2000);
    setInterval(() => updateMain(us), 2000);
    setInterval(() => updateImproving(us), 2000);
    setInterval(() => updateTasks(us), 2000);
    setInterval(() => updateFriends(us), 2000);
    setInterval(() => checkLvlUp(us), 2000);
    setInterval(() => updateBattleItems(us), 2000);

    document.addEventListener("afterPopupClose", function (e) {
        const currentPopup = e.detail.popup;
        if (currentPopup.hash == "#popup-win" || currentPopup.hash == "#popup-loos") {
            // barba_umd.go("main.html");
            $("main").attr("id", "undefined");
            lastPage = "undefined";
            barba_umd.go("battleon.html");
            //  setTimeout( function () {
            //    $.ajax({
            //      url: api_url+'/api/user/check-battle',
            //      method: 'get',
            //      dataType: 'html',
            //      data: {userId:user.id},
            //      contentType: 'application/json',
            //      success: function(data){
            //        //console.log("battle"+data);
            //      }
            //    });
            //    dotsC = 0;
            //    $("#ava").attr("src", lastAva);
            //    $("#levelName").html(lastLevelName);
            //    $("#level").html(lastLevel);
            //    $("#levelProgress").attr("value", lastLevelProgress);
            //    $("#balance").html(lastBalance);
            //    if (showBalleOnBoard == true) {
            //      if (!showBattleOnBoard1) {
            //        $("#battleOnboard").removeClass("hidenmain-block");
            //        $("#battleOnboard").addClass("hidenmain-block");
            //        $("#battleOnboard").attr("style", "visibility: hidden; transition: visibility 0s ease 0s;");
            //        $("#battleMain").attr("style", "");
            //        $("#battleMain").removeClass("hiddens");
            //        $("#battleMain").removeClass("active-first");
            //        $("#battleMain").addClass("show");
            //        $("#battleMain").addClass("active-first");
            //        showBattleOnBoard1 = false;
            //      }
            //    }
            //    $("#battleItems").html(lastBattleItems);
            //    $("a[battle-lvl]").off("click").click(function () {
            //      nextBattle(user, this);
            //    });
            //    // $(".battleon-grade-training").off("click").click(function () {
            //    //   //console.log("CLICKED");
            //    //   showBattleOnBoard1 = true;
            //    //   barba_umd.go("battleon.html");
            //    // });
            //    $("a[coin-side]").off("click").click(function () {
            //      startBattle(user, this);
            //    });
            //    reloadFrontFunction();
            // }, 500);
            $("body").removeClass("popup-showtwo");
        }
    });
}

function progressPlus() {
    $("#load_pr").attr("value", Number($("#load_pr").attr("value"))+1);
    if (Number($("#load_pr").attr("value")) >= 100) {
        setTimeout(showMain, 1500);
    }
}

function copyToClipboard(msg) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(msg).select();
    document.execCommand("copy");
    $temp.remove();
}

function countForm2(count) {
    if (count < 1000000 && count > 1000) {
        if (count / 100 % 10 == 0) {
            return Math.floor(count / 1000) + "K";
        }else{
            return Math.floor(count / 100) / 10.0 + "K";
        }
    }else if (count >= 1000000 && count < 1000000000){
        if (count / 1000 % 1000 == 0) {
            return Math.floor(count / 1000000) + "M";
        }else{
            return Math.floor(count / 1000) / 1000.0 + "M";
        }
    }else if (count >= 1000000000 && count < 1000000000000){
        if (count / 1000000 % 1000 == 0) {
            return Math.floor(count / 1000000000) + "B";
        }else{
            return Math.floor(count / 1000000) / 1000.0 + "B";
        }
    }else if (count >= 1000000000000){
        if (count / 1000000000 % 1000 == 0) {
            return Math.floor(count / 1000000000000) + "T";
        }else{
            return Math.floor(count / 1000000000) / 1000.0 + "T";
        }
    }else{
        return count;
    }
}

function countForm(count) {
    return (countForm2(count).toString()).replace(/\./g, ',');
}

function countForm1(count) {
    if (count < 1000000 && count > 1000) {
        if (count / 100 % 10 == 0) {
            return [Math.floor(count / 1000),"K"];
        }else{
            return [Math.floor(count / 100) / 10.0, "K"];
        }
    }else if (count >= 1000000 && count < 1000000000){
        if (count / 1000 % 1000 == 0) {
            return [Math.floor(count / 1000000), "M"];
        }else{
            return [Math.floor(count / 1000) / 1000.0, "M"];
        }
    }else if (count >= 1000000000 && count < 1000000000000){
        if (count / 1000000 % 1000 == 0) {
            return [Math.floor(count / 1000000000), "B"];
        }else{
            return [Math.floor(count / 1000000) / 1000.0, "B"];
        }
    }else if (count >= 1000000000000){
        if (count / 1000000000 % 1000 == 0) {
            return [Math.floor(count / 1000000000000), "T"];
        }else{
            return [Math.floor(count / 1000000000) / 1000.0, "T"];
        }
    }else{
        return count;
    }
}

function prettify (num) {
    var n = num.toString();
    var separator = " ";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
}

function updateOnline(us) {
    $.ajax({
        url: api_url+'/api/user/'+us.id+'?hash='+a_hash+'&auth_data='+a_data+'&auth_date='+a_date,
        method: 'get',
        dataType: 'html',
        data: {},
        success: function(data){
            //console.log(data);
        }
    });
}

function getUserData(us, is_prem) {
    var dataObj = "";
    var urlR = "";
    if (typeof(tg.initDataUnsafe.start_param) != "undefined") {
        dataObj = {userId:us.id, username:us.first_name, hasTelegramPremium:is_prem, referralId:tg.initDataUnsafe.start_param, hash:a_hash, auth_data:a_data, auth_date:a_date};
        urlR = api_url+'/api/user/register_or_get?referralId='+tg.initDataUnsafe.start_param+'&auth_data='+a_data;
    }else{
        dataObj = {userId:us.id, username:us.first_name, hasTelegramPremium:is_prem, hash:a_hash, auth_data:a_data, auth_date:a_date};
        urlR = api_url+'/api/user/register_or_get'+'?auth_data='+a_data;
    }
    $.ajax({
        url: urlR,
        method: 'post',
        dataType: 'html',
        data: JSON.stringify(dataObj),
        contentType: 'application/json',
        success: function(data){
            getOfflineEarning(us);
            streakUpdate(us);
            getTasks(us);
            getCards(us);
            getRefs(us);
            getRating(1);
            getRating(2);
            updateBattleItems(us);
            for (var i = 0; i < 25; i++) {
                setTimeout(progressPlus, 350);
            }
            //console.log(data);
            var user_data = JSON.parse(data);
            showBalleOnBoard = user_data.checkBattle;
            lastIntLevel = user_data.userLevel.level;
            setIntervals(us);
            newOld = user_data.creationInfo;
            lastLevelName = user_data.userLevel.name;
            lastLevel = "("+user_data.userLevel.level+" СѓСЂ.)";
            lastAva = "img/levels/ava/"+user_data.userLevel.level+".png";
            $("#ava").attr("src", ("img/levels/ava/"+user_data.userLevel.level+".png"));
            if ($("#dog").attr("src") != "img/levels/dog/21.png") {
                $("#dog").attr("src", ("img/levels/dog/"+user_data.userLevel.level+".png"));
                lastDog = "img/levels/dog/"+user_data.userLevel.level+".png";
            }
            $("#levelName").html(user_data.userLevel.name);
            $("#level").html("("+user_data.userLevel.level+" СѓСЂ.)");
            if (typeof(limitsLevel[user_data.userLevel.level]) != "undefined") {
                $("#levelProgress").attr("value", mathProgress(user_data.spentCoins-limitsLevel[user_data.userLevel.level-1], limitsLevel[user_data.userLevel.level]-limitsLevel[user_data.userLevel.level-1]));
                lastLevelProgress = mathProgress(user_data.spentCoins-limitsLevel[user_data.userLevel.level-1], limitsLevel[user_data.userLevel.level]-limitsLevel[user_data.userLevel.level-1])
            }else{
                $("#levelProgress").attr("value", "100");
                lastLevelProgress = "100";
            }
            lastIntBalance = user_data.balance;
            if (user_data.balance < 1000000) {
                $("#balance").html(prettify(user_data.balance));
                lastBalance = prettify(user_data.balance);
            }else{
                $("#balance").html(countForm(user_data.balance));
                lastBalance = countForm(user_data.balance);
            }
            lastPerHour = "+"+countForm(user_data.profitPerHour);
            lastPerCLick = "+"+countForm(user_data.profitPerTap);
            $("#perHour").html("+"+countForm(user_data.profitPerHour));
            $("#prPerHour").html("+"+countForm(user_data.profitPerHour));
            $("#perClick").html("+"+countForm(user_data.profitPerTap));
            $("#pClick").attr("value", "+"+countForm(user_data.profitPerTap));
            if (user_data.currentEnergy < 10000) {
                $("#currentEnergy").html(prettify(user_data.currentEnergy));
                lastEnergy = prettify(user_data.currentEnergy);
            }else{
                $("#currentEnergy").html(countForm(user_data.currentEnergy));
                lastEnergy = countForm(user_data.currentEnergy);
            }
            if (user_data.energyLimit < 10000) {
                $("#energyLimit").html(prettify(user_data.energyLimit));
                lastMaxEnergy = prettify(user_data.energyLimit);
            }else{
                $("#energyLimit").html(countForm(user_data.energyLimit));
                lastMaxEnergy = countForm(user_data.energyLimit);
            }
            $("#energyProgress").attr("value", mathProgress(user_data.currentEnergy, user_data.energyLimit));
            lastEnergyProgress = mathProgress(user_data.currentEnergy, user_data.energyLimit);
        }
    });
}

function getOfflineEarning(us) {
    //console.log("test2");
    $.ajax({
        url: api_url+'/api/user/offlineEarning'+'?auth_data='+a_data,
        method: 'post',
        dataType: 'html',
        data: {userId:us.id, hash:a_hash, auth_data:a_data, auth_date:a_date},
        success: function(data){
            for (var i = 0; i < 15; i++) {
                setTimeout(progressPlus, 350);
            }
            //console.log(data);
            if (Number(data) > 0) {
                if (Number(data) < 100000) {
                    $("#offlineEarning").html("+"+prettify(data));
                }else{
                    $("#offlineEarning").html("+"+countForm(data));
                }
            }

            bonus = Number(data);
        }
    });
}

function mathProgress(min, max) {
    if (max > 0) {
        return Math.floor(min / max * 100);
    }else{
        return 0;
    }
}

function onTap(us) {
    $.ajax({
        url: api_url+'/api/user/register_or_get'+'?auth_data='+a_data,
        method: 'post',
        dataType: 'html',
        data: JSON.stringify({userId:us.id, hash:a_hash, auth_data:a_data, auth_date:a_date}),
        contentType: 'application/json',
        success: function(data){
            //console.log(data);
            var user_data = JSON.parse(data);
            $.ajax({
                url: api_url+'/api/user/tap'+'?auth_data='+a_data,
                method: 'post',
                dataType: 'html',
                data: JSON.stringify({userId:us.id, count:user_data.profitPerTap, hash:a_hash, auth_data:a_data, auth_date:a_date}),
                contentType: 'application/json',
                success: function(data){
                    //console.log(data);
                    countTaps += 1;
                    //console.log(countTaps);
                    if ($("#dog").attr("src") == "img/levels/dog/21.png") {
                        if (countTaps >= 20) {
                            countTaps = 0;
                            lastDog = "img/levels/dog/"+user_data.userLevel.level+".png";
                            $("#dog").attr("src", lastDog);
                        }
                    }else{
                        if (countTaps >= 100) {
                            countTaps = 0;
                            lastDog = "img/levels/dog/21.png";
                            $("#dog").attr("src", lastDog);
                        }
                    }
                    var currentEnergy = user_data.currentEnergy-user_data.profitPerTap;
                    if (currentEnergy < 10000) {
                        $("#currentEnergy").html(prettify(currentEnergy));
                        lastEnergy = prettify(currentEnergy);
                    }else{
                        $("#currentEnergy").html(countForm(currentEnergy));
                        lastEnergy = countForm(currentEnergy);
                    }
                    if (user_data.energyLimit < 10000) {
                        $("#energyLimit").html(prettify(user_data.energyLimit));
                        lastMaxEnergy = prettify(user_data.energyLimit);
                    }else{
                        $("#energyLimit").html(countForm(user_data.energyLimit));
                        lastMaxEnergy = countForm(user_data.energyLimit);
                    }
                    $("#energyProgress").attr("value", mathProgress(currentEnergy, user_data.energyLimit));
                    lastEnergyProgress = mathProgress(currentEnergy, user_data.energyLimit);
                    var balance = user_data.balance+user_data.profitPerTap;
                    lastIntBalance = balance;
                    if (balance < 1000000) {
                        $("#balance").html(prettify(balance));
                        lastBalance = prettify(balance);
                    }else{
                        $("#balance").html(countForm(balance));
                        lastBalance = countForm(balance);
                    }
                }
            });
        }
    });
}

function updateMain(us) {
    if ($('#lotties').length) {
        $.ajax({
            url: api_url+'/api/user/tap'+'?auth_data='+a_data,
            method: 'post',
            dataType: 'html',
            data: JSON.stringify({userId:us.id, count:0, hash:a_hash, auth_data:a_data, auth_date:a_date}),
            contentType: 'application/json',
            success: function(data){
                //console.log(data);
            }
        });
        $.ajax({
            url: api_url+'/api/user/register_or_get'+'?auth_data='+a_data,
            method: 'post',
            dataType: 'html',
            data: JSON.stringify({userId:us.id, hash:a_hash, auth_data:a_data, auth_date:a_date}),
            contentType: 'application/json',
            cache:false,
            success: function(data){
                //console.log(data);
                var user_data = JSON.parse(data);
                showBalleOnBoard = user_data.checkBattle;
                //console.log("bat"+showBalleOnBoard);
                lastLevelName = user_data.userLevel.name;
                lastLevel = "("+user_data.userLevel.level+" СѓСЂ.)";
                if (user_data.userLevel.level == 3) {
                    lastDogClass = "active-dog";
                }
                $("#dog").addClass(lastDogClass);
                lastAva = "img/levels/ava/"+user_data.userLevel.level+".png";
                $("#ava").attr("src", ("img/levels/ava/"+user_data.userLevel.level+".png"));
                if ($("#dog").attr("src") != "img/levels/dog/21.png") {
                    $("#dog").attr("src", ("img/levels/dog/"+user_data.userLevel.level+".png"));
                    lastDog = "img/levels/dog/"+user_data.userLevel.level+".png";
                }
                lastSpentCoins = user_data.spentCoins;
                $("#levelName").html(user_data.userLevel.name);
                $("#level").html("("+user_data.userLevel.level+" СѓСЂ.)");
                if (typeof(limitsLevel[user_data.userLevel.level]) != "undefined") {
                    $("#levelProgress").attr("value", mathProgress(user_data.spentCoins-limitsLevel[user_data.userLevel.level-1], limitsLevel[user_data.userLevel.level]-limitsLevel[user_data.userLevel.level-1]));
                    //console.log(user_data.spentCoins-limitsLevel[user_data.userLevel.level-1]);
                    lastLevelProgress = mathProgress(user_data.spentCoins-limitsLevel[user_data.userLevel.level-1], limitsLevel[user_data.userLevel.level]-limitsLevel[user_data.userLevel.level-1])
                }else{
                    $("#levelProgress").attr("value", "100");
                    lastLevelProgress = "100";
                }
                lastIntBalance = user_data.balance;
                if (user_data.balance < 1000000) {
                    $("#balance").html(prettify(user_data.balance));
                    lastBalance = prettify(user_data.balance);
                }else{
                    $("#balance").html(countForm(user_data.balance));
                    lastBalance = countForm(user_data.balance);
                }
                lastPerHour = "+"+countForm(user_data.profitPerHour);
                lastPerCLick = "+"+countForm(user_data.profitPerTap);
                $("#perHour").html("+"+countForm(user_data.profitPerHour));
                $("#prPerHour").html("+"+countForm(user_data.profitPerHour));
                $("#perClick").html("+"+countForm(user_data.profitPerTap));
                $("#pClick").attr("value", "+"+countForm(user_data.profitPerTap));
                if (user_data.currentEnergy < 10000) {
                    $("#currentEnergy").html(prettify(user_data.currentEnergy));
                    lastEnergy = prettify(user_data.currentEnergy);
                }else{
                    $("#currentEnergy").html(countForm(user_data.currentEnergy));
                    lastEnergy = countForm(user_data.currentEnergy);
                }
                if (user_data.energyLimit < 10000) {
                    $("#energyLimit").html(prettify(user_data.energyLimit));
                    lastMaxEnergy = prettify(user_data.energyLimit);
                }else{
                    $("#energyLimit").html(countForm(user_data.energyLimit));
                    lastMaxEnergy = countForm(user_data.energyLimit);
                }
                $("#energyProgress").attr("value", mathProgress(user_data.currentEnergy, user_data.energyLimit));
                lastEnergyProgress = mathProgress(user_data.currentEnergy, user_data.energyLimit);
            }
        });

    }
}

function streakUpdate(us) {
    $.ajax({
        url: api_url+'/api/user/register_or_get'+'?auth_data='+a_data,
        method: 'post',
        dataType: 'html',
        data: JSON.stringify({userId:us.id, hash:a_hash, auth_data:a_data, auth_date:a_date}),
        contentType: 'application/json',
        cache:false,
        success: function(data){
            for (var i = 0; i < 35; i++) {
                setTimeout(progressPlus, 350);
            }
            //console.log("ok");
            var user_data = JSON.parse(data);
            //console.log(user_data);
            lastStreak = user_data.currentDayStreak;
            $(".popup-bonus-list").find("li").each(function (i) {
                //console.log(i);
                if (i < user_data.currentDayStreak) {
                    $(this).find("img").attr("src", "img/main/green-check.png");
                }else if (i == user_data.currentDayStreak) {
                    if ((Date.parse(user_data.lastRewardDate == null ? 0 : user_data.lastRewardDate)+60*60*24*1000) <= Date.parse(new Date())) {
                        $(this).find("img").attr("src", "img/main/coins25.svg");
                        $("#getReward").click(() => getReward(us));
                        $("#getReward").removeClass("popup__btn-grey");
                        $("#dailyRound").attr("style", "");
                        lastDailyRevardStyle = "";
                    }else{
                        $(this).find("img").attr("src", "img/main/coins25n.svg");
                        $("#dailyRound").attr("style", "display: none;");
                        $("#getReward").addClass("popup__btn-grey");
                        $("#getReward").click(() => getReward(us));
                        lastDailyRevardStyle = "display: none;";
                    }
                }else{
                    $(this).find("img").attr("src", "img/main/coins25n.svg");
                }

                if ((Date.parse(user_data.lastRewardDate == null ? 0 : user_data.lastRewardDate)+60*60*24*1000) >= Date.parse(new Date())) {
                    if (i == user_data.currentDayStreak-1 || (user_data.currentDayStreak == 0 && i == 0)) {
                        $(this).addClass("active-bonus");
                    }else{
                        $(this).removeClass("active-bonus");
                    }
                }else{
                    if (i == user_data.currentDayStreak) {
                        $(this).addClass("active-bonus");
                    }else{
                        $(this).removeClass("active-bonus");
                    }
                }
            });
            if (lastTasksRound) {
                $(".main-tabs__anim").attr("style", "");
            }else{
                $(".main-tabs__anim").attr("style", "display: none;");
            }
            if (lastDailyRevardStyle == "display: none;") {
                $(".weekly-award").removeClass("active");
            }else{
                $(".weekly-award").addClass("active");
            }
        }
    });
}

function getReward(us) {
    $.ajax({
        url: api_url+'/api/rewards/claim'+'?auth_data='+a_data,
        method: 'post',
        dataType: 'html',
        data: {userId:us.id, hash:a_hash, auth_data:a_data, auth_date:a_date},
        success: function(data){
            $("#getReward").off("click");
            $("#getReward").removeClass("active-bonus");
            $("#getReward").addClass("popup__btn-grey");
            streakUpdate(us);
            //console.log(data);
        }
    });
}

function updateImproving(us) {
    if ($('#improving').length) {
        $.ajax({
            url: api_url+'/api/user/tap'+'?auth_data='+a_data,
            method: 'post',
            dataType: 'html',
            data: JSON.stringify({userId:us.id, count:0, hash:a_hash, auth_data:a_data, auth_date:a_date}),
            contentType: 'application/json',
            success: function(data){
                //console.log(data);
            }
        });
        $.ajax({
            url: api_url+'/api/user/register_or_get'+'?auth_data='+a_data,
            method: 'post',
            dataType: 'html',
            data: JSON.stringify({userId:us.id, hash:a_hash, auth_data:a_data, auth_date:a_date}),
            contentType: 'application/json',
            cache:false,
            success: function(data){
                //console.log(data);
                var user_data = JSON.parse(data);
                lastLevelName = user_data.userLevel.name;
                lastLevel = "("+user_data.userLevel.level+" СѓСЂ.)";
                lastAva = "img/levels/ava/"+user_data.userLevel.level+".png";
                $("#ava").attr("src", ("img/levels/ava/"+user_data.userLevel.level+".png"));
                $("#levelName").html(user_data.userLevel.name);
                $("#level").html("("+user_data.userLevel.level+" СѓСЂ.)");
                if (typeof(limitsLevel[user_data.userLevel.level]) != "undefined") {
                    $("#levelProgress").attr("value", mathProgress(user_data.spentCoins-limitsLevel[user_data.userLevel.level-1], limitsLevel[user_data.userLevel.level]-limitsLevel[user_data.userLevel.level-1]));
                    lastLevelProgress = mathProgress(user_data.spentCoins-limitsLevel[user_data.userLevel.level-1], limitsLevel[user_data.userLevel.level]-limitsLevel[user_data.userLevel.level-1])
                }else{
                    $("#levelProgress").attr("value", "100");
                    lastLevelProgress = "100";
                }
                lastIntBalance = user_data.balance;
                if (user_data.balance < 1000000) {
                    $("#balance").html(prettify(user_data.balance));
                    lastBalance = prettify(user_data.balance);
                }else{
                    $("#balance").html(countForm(user_data.balance));
                    lastBalance = countForm(user_data.balance);
                }
                lastPerHour = "+"+countForm(user_data.profitPerHour);
                $("#perHour").html("+"+countForm(user_data.profitPerHour));
                $("#prPerHour").html("+"+countForm(user_data.profitPerHour));

            }
        });
    }
}

function getCards(us) {
    userCards = {"b":{"n":"","p":"", "i":""},"c":{"n":"","o":"","r":""},"r":{"o":""}};
    $.ajax({
        url: api_url+'/api/cards/userCards'+'?auth_data='+a_data,
        method: 'get',
        dataType: 'html',
        data: {userId:us.id, hash:a_hash, auth_data:a_data, auth_date:a_date},
        success: function(data){
            //console.log(data);
            var cards = JSON.parse(data);
            for (var i = 0; i < cards.length; i++) {
                if (typeof(cardsImage[cards[i]["name"]]) != "undefined" || cards[i]["imageUrl"] != "") {
                    var imgUrl = cards[i]["imageUrl"];
                    if (imgUrl == "") {
                        imgUrl = cardsImage[cards[i]["name"]];
                    }
                    var bgColor = "";
                    if (cards[i]["category"] == "Р‘РёР·РЅРµСЃ") {
                        if (cards[i]["type"] == "РќР°РІС‹РєРё") {
                            bgColor = "#bfd2ff";
                        }else if (cards[i]["type"] == "РџРѕРєСѓРїРєР°") {
                            bgColor = "#d0c7ff";
                        }else if (cards[i]["type"] == "РРЅРІРµСЃС‚РёС†РёРё") {
                            bgColor = "#d0c7ff";
                        }
                    }else if (cards[i]["category"] == "РљР°СЂСЊРµСЂР°") {
                        if (cards[i]["type"] == "РќР°РІС‹РєРё") {
                            bgColor = "#bfd2ff";
                        }else if (cards[i]["type"] == "РћР±СѓС‡РµРЅРёРµ") {
                            bgColor = "#d0c7ff";
                        }else if (cards[i]["type"] == "Р РµР»РѕРєР°С†РёСЏ") {
                            bgColor = "#ffea9e";
                        }
                    }else if (cards[i]["category"] == "Р Р°Р·РІР»РµС‡РµРЅРёСЏ") {
                        if (cards[i]["type"] == "РћС‚РґС‹С…") {
                            bgColor = "#bfd2ff";
                        }
                    }
                    var retMoney = 0;
                    if (cards[i]["level"] > 0) {
                        retMoney = cards[i]["returnMoney"];
                    }
                    var plusPerHour = Math.floor(cards[i]["nextReturnMoney"]-retMoney);
                    var levelHtml = "";
                    if (cards[i]["level"] != 0) {
                        levelHtml = `<svg width="4" height="3" viewBox="0 0 4 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.05127 1.30566V1.31836C3.05127 2.04199 2.47998 2.61328 1.75635 2.61328H1.74365C1.02002 2.61328 0.44873 2.04199 0.44873 1.31836V1.30566C0.44873 0.582031 1.02002 0.0107422 1.74365 0.0107422H1.75635C2.47998 0.0107422 3.05127 0.582031 3.05127 1.30566Z" fill="#B9B8C7" />
            </svg>
            <span>`+cards[i]["level"]+` СѓСЂ.</span>`;
                    }
                    var cardHtml = `<li class="improving-tabs__body-item">
            <a href="#" card-id="`+cards[i]["id"]+`" data-popup="#popup-yellow" class="improving-tabs__body-tap">
              <div class="improving__body-tap-img">
                <img src="`+imgUrl+`" alt="" />
              </div>
              <div class="improving__body-tap-info">
                <p class="improving__body-tap-info-name">
                  `+cards[i]["name"]+`
                </p>
                <p class="improving__body-tap-info-up">
                  <img src="img/main/conis-up.svg" alt="" />
                  +`+countForm(plusPerHour)+`
                  `+levelHtml+`
                </p>
              </div>
              <div class="improving__body-tap-pay">
                <span>
                  <img src="img/main/coins20.svg" alt="" />
                  `+countForm(cards[i]["cost"])+`
                </span>
              </div>
            </a>
          </li>`;
                    userCardsData[cards[i]["id"]] = [imgUrl, cards[i]["name"], cards[i]["description"], "+"+countForm(plusPerHour), countForm(cards[i]["cost"]), cards[i]["cost"], bgColor, retMoney, cards[i]["nextReturnMoney"]];

                    if (cards[i]["category"] == "Р‘РёР·РЅРµСЃ") {
                        if (cards[i]["type"] == "РќР°РІС‹РєРё") {
                            userCards["b"]["n"] = userCards["b"]["n"]+cardHtml;
                        }else if (cards[i]["type"] == "РџРѕРєСѓРїРєР°") {
                            userCards["b"]["p"] = userCards["b"]["p"]+cardHtml;
                        }else if (cards[i]["type"] == "РРЅРІРµСЃС‚РёС†РёРё") {
                            userCards["b"]["i"] = userCards["b"]["i"]+cardHtml;
                        }
                    }else if (cards[i]["category"] == "РљР°СЂСЊРµСЂР°") {
                        if (cards[i]["type"] == "РќР°РІС‹РєРё") {
                            userCards["c"]["n"] = userCards["c"]["n"]+cardHtml;
                        }else if (cards[i]["type"] == "РћР±СѓС‡РµРЅРёРµ") {
                            userCards["c"]["o"] = userCards["c"]["o"]+cardHtml;
                        }else if (cards[i]["type"] == "Р РµР»РѕРєР°С†РёСЏ") {
                            userCards["c"]["r"] = userCards["c"]["r"]+cardHtml;
                        }
                    }else if (cards[i]["category"] == "Р Р°Р·РІР»РµС‡РµРЅРёСЏ") {
                        if (cards[i]["type"] == "РћС‚РґС‹С…") {
                            userCards["r"]["o"] = userCards["r"]["o"]+cardHtml;
                        }
                    }
                }
            }

            if ($('#improving').length) {
                $("#bn").html(userCards["b"]["n"]);
                $("#bp").html(userCards["b"]["p"]);
                $("#bi").html(userCards["b"]["i"]);
                $("#cn").html(userCards["c"]["n"]);
                $("#co").html(userCards["c"]["o"]);
                $("#cr").html(userCards["c"]["r"]);
                $("#ro").html(userCards["r"]["o"]);
                $("a[card-id]").click(function () {
                    showCardInfo(us, this);
                });
            }
        }
    });
}

function showCardInfo(us, el) {
    var cardId = $(el).attr("card-id");
    var cardData = userCardsData[cardId];
    //console.log(cardId);
    $("#cardImage").attr("src", cardData[0]);
    $("#cardTitle").html(cardData[1]);
    if (cardData[1] == "Р¤РёРЅР°РЅСЃРѕРІР°СЏ РіСЂР°РјРѕС‚РЅРѕСЃС‚СЊ") {
        $("#cardEnergy").attr("style", "");
    }else{
        $("#cardEnergy").attr("style", "display: none;");
    }
    $("#cardDescription").html(cardData[2]);
    $("#cardReturn").html(cardData[3]);
    $("#cardCost").html(cardData[4]);
    if (lastIntBalance >= cardData[5]) {
        $("#cardBtn").removeClass("popup__btn-grey");
    }else{
        $("#cardBtn").addClass("popup__btn-grey");
    }
    $("#cardImgBox").attr("style", "background-color: "+cardData[6]+";");
    $("#retMoney").html(countForm(cardData[7]));
    $("#nextRetMoney").html(countForm(cardData[8]));
    $("#cardBtn").off("click").click(() => updateCard(us, cardId));
}

function updateCard(us, cardId) {
    $.ajax({
        url: api_url+'/api/cards/upgrade'+'?auth_data='+a_data,
        method: 'post',
        data: {userId:us.id, cardId:cardId, hash:a_hash, auth_data:a_data, auth_date:a_date},
        success: function(data){
            getCards(us);
            updateImproving(us);
            //console.log(data);
        }
    });
}

function updateTasks(us) {
    if ($('#tasks').length) {
        $.ajax({
            url: api_url+'/api/user/tap'+'?auth_data='+a_data,
            method: 'post',
            dataType: 'html',
            data: JSON.stringify({userId:us.id, count:0, hash:a_hash, auth_data:a_data, auth_date:a_date}),
            contentType: 'application/json',
            success: function(data){
                //console.log(data);
            }
        });
        $.ajax({
            url: api_url+'/api/user/register_or_get'+'?auth_data='+a_data,
            method: 'post',
            dataType: 'html',
            data: JSON.stringify({userId:us.id, hash:a_hash, auth_data:a_data, auth_date:a_date}),
            contentType: 'application/json',
            cache:false,
            success: function(data){
                //console.log(data);
                var user_data = JSON.parse(data);
                lastLevelName = user_data.userLevel.name;
                lastLevel = "("+user_data.userLevel.level+" СѓСЂ.)";
                lastAva = "img/levels/ava/"+user_data.userLevel.level+".png";
                $("#ava").attr("src", ("img/levels/ava/"+user_data.userLevel.level+".png"));
                $("#levelName").html(user_data.userLevel.name);
                $("#level").html("("+user_data.userLevel.level+" СѓСЂ.)");
                if (typeof(limitsLevel[user_data.userLevel.level]) != "undefined") {
                    $("#levelProgress").attr("value", mathProgress(user_data.spentCoins-limitsLevel[user_data.userLevel.level-1], limitsLevel[user_data.userLevel.level]-limitsLevel[user_data.userLevel.level-1]));
                    lastLevelProgress = mathProgress(user_data.spentCoins-limitsLevel[user_data.userLevel.level-1], limitsLevel[user_data.userLevel.level]-limitsLevel[user_data.userLevel.level-1])
                }else{
                    $("#levelProgress").attr("value", "100");
                    lastLevelProgress = "100";
                }
                lastIntBalance = user_data.balance;
                if (user_data.balance < 1000000) {
                    $("#balance").html(prettify(user_data.balance));
                    lastBalance = prettify(user_data.balance);
                }else{
                    $("#balance").html(countForm(user_data.balance));
                    lastBalance = countForm(user_data.balance);
                }
            }
        });
    }
}

function updateFriends(us) {
    if ($('#friends').length) {
        $.ajax({
            url: api_url+'/api/user/tap'+'?auth_data='+a_data,
            method: 'post',
            dataType: 'html',
            data: JSON.stringify({userId:us.id, count:0, hash:a_hash, auth_data:a_data, auth_date:a_date}),
            contentType: 'application/json',
            success: function(data){
                //console.log(data);
            }
        });
        $.ajax({
            url: api_url+'/api/user/register_or_get'+'?auth_data='+a_data,
            method: 'post',
            dataType: 'html',
            data: JSON.stringify({userId:us.id, hash:a_hash, auth_data:a_data, auth_date:a_date}),
            contentType: 'application/json',
            cache:false,
            success: function(data){
                //console.log(data);
                var user_data = JSON.parse(data);
                lastLevelName = user_data.userLevel.name;
                lastLevel = "("+user_data.userLevel.level+" СѓСЂ.)";
                lastAva = "img/levels/ava/"+user_data.userLevel.level+".png";
                $("#ava").attr("src", ("img/levels/ava/"+user_data.userLevel.level+".png"));
                $("#levelName").html(user_data.userLevel.name);
                $("#level").html("("+user_data.userLevel.level+" СѓСЂ.)");
                if (typeof(limitsLevel[user_data.userLevel.level]) != "undefined") {
                    $("#levelProgress").attr("value", mathProgress(user_data.spentCoins-limitsLevel[user_data.userLevel.level-1], limitsLevel[user_data.userLevel.level]-limitsLevel[user_data.userLevel.level-1]));
                    lastLevelProgress = mathProgress(user_data.spentCoins-limitsLevel[user_data.userLevel.level-1], limitsLevel[user_data.userLevel.level]-limitsLevel[user_data.userLevel.level-1])
                }else{
                    $("#levelProgress").attr("value", "100");
                    lastLevelProgress = "100";
                }
                lastIntBalance = user_data.balance;
                if (user_data.balance < 1000000) {
                    $("#balance").html(prettify(user_data.balance));
                    lastBalance = prettify(user_data.balance);
                }else{
                    $("#balance").html(countForm(user_data.balance));
                    lastBalance = countForm(user_data.balance);
                }
            }
        });
    }
}

function updateRating(us) {
    if ($('#rating').length) {
        $.ajax({
            url: api_url+'/api/user/tap'+'?auth_data='+a_data,
            method: 'post',
            dataType: 'html',
            data: JSON.stringify({userId:us.id, count:0, hash:a_hash, auth_data:a_data, auth_date:a_date}),
            contentType: 'application/json',
            success: function(data){
                //console.log(data);
            }
        });
        $.ajax({
            url: api_url+'/api/user/register_or_get'+'?auth_data='+a_data,
            method: 'post',
            dataType: 'html',
            data: JSON.stringify({userId:us.id, hash:a_hash, auth_data:a_data, auth_date:a_date}),
            contentType: 'application/json',
            cache:false,
            success: function(data){
                //console.log(data);
                var user_data = JSON.parse(data);
                lastLevelName = user_data.userLevel.name;
                lastLevel = "("+user_data.userLevel.level+" СѓСЂ.)";
                lastAva = "img/levels/ava/"+user_data.userLevel.level+".png";
                $("#ava").attr("src", ("img/levels/ava/"+user_data.userLevel.level+".png"));
                $("#levelName").html(user_data.userLevel.name);
                $("#level").html("("+user_data.userLevel.level+" СѓСЂ.)");
                if (typeof(limitsLevel[user_data.userLevel.level]) != "undefined") {
                    $("#levelProgress").attr("value", mathProgress(user_data.spentCoins-limitsLevel[user_data.userLevel.level-1], limitsLevel[user_data.userLevel.level]-limitsLevel[user_data.userLevel.level-1]));
                    lastLevelProgress = mathProgress(user_data.spentCoins-limitsLevel[user_data.userLevel.level-1], limitsLevel[user_data.userLevel.level]-limitsLevel[user_data.userLevel.level-1])
                }else{
                    $("#levelProgress").attr("value", "100");
                    lastLevelProgress = "100";
                }
                lastIntBalance = user_data.balance;
                if (user_data.balance < 1000000) {
                    $("#balance").html(prettify(user_data.balance));
                    lastBalance = prettify(user_data.balance);
                }else{
                    $("#balance").html(countForm(user_data.balance));
                    lastBalance = countForm(user_data.balance);
                }
            }
        });
    }
}

function getRefs (us) {
    $.ajax({
        url: api_url+'/api/user/referral/'+us.id+'?hash='+a_hash+'&auth_data='+a_data+'&auth_date='+a_date,
        method: 'get',
        dataType: 'html',
        data: {},
        success: function(data){
            //console.log(data);
            var refs = JSON.parse(data);
            var refsHtml = "";
            var refsCount = 0;
            for (var i = 0; i < refs.length; i++) {
                if (refs[i]["rewardAvailable"] == true) {
                    refsHtml = refsHtml+`<li class="friends-invited-item">
            <a r-user-id="`+refs[i]["user"]["referredBy"]+`" r-ref-id="`+refs[i]["user"]["userId"]+`" class="friends-invited-item-link active">
              <div class="friends-invited-img">
                <img src="img/levels/ava/`+refs[i]["user"]["userLevel"]["level"]+`.png" alt="" />
              </div>
              <div class="friends-invited-info">
                <h3 class="friends-invited-info-name">`+refs[i]["user"]["username"]+`</h3>
                <div class="friends-invited-info-bot">
                  <p class="friends-invited-info-lvl">
                    <span>`+refs[i]["user"]["userLevel"]["level"]+`</span> СѓСЂ.
                  </p>
                  <svg width="4" height="3" viewBox="0 0 4 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.05127 1.30566V1.31836C3.05127 2.04199 2.47998 2.61328 1.75635 2.61328H1.74365C1.02002 2.61328 0.44873 2.04199 0.44873 1.31836V1.30566C0.44873 0.582031 1.02002 0.0107422 1.74365 0.0107422H1.75635C2.47998 0.0107422 3.05127 0.582031 3.05127 1.30566Z" fill="#B9B8C7" />
                  </svg>

                  <div class="friends-invited-info-sum">
                    <img src="img/main/conis-up.svg" alt="" />
                    <span>`+countForm(refs[i]["user"]["profitPerHour"])+`</span>
                  </div>
                </div>
              </div>
              <div class="friends-invited-reward">
                <div class="invited-reward-top">
                  <img src="img/main/coins20.svg" alt="" />
                  <span>+`+countForm(refs[i]["rewardAmount"])+`</span>
                </div>
                <p>Р·Р°Р±СЂР°С‚СЊ</p>
              </div>
            </a>
          </li>`;
                }else{
                    refsHtml = refsHtml+`<li class="friends-invited-item">
            <a class="friends-invited-item-link">
              <div class="friends-invited-img">
                <img src="img/levels/ava/`+refs[i]["user"]["userLevel"]["level"]+`.png" alt="" />
              </div>
              <div class="friends-invited-info">
                <h3 class="friends-invited-info-name">`+refs[i]["user"]["username"]+`</h3>
                <div class="friends-invited-info-bot">
                  <p class="friends-invited-info-lvl">
                    <span>`+refs[i]["user"]["userLevel"]["level"]+`</span> СѓСЂ.
                  </p>
                  <svg width="4" height="3" viewBox="0 0 4 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.05127 1.30566V1.31836C3.05127 2.04199 2.47998 2.61328 1.75635 2.61328H1.74365C1.02002 2.61328 0.44873 2.04199 0.44873 1.31836V1.30566C0.44873 0.582031 1.02002 0.0107422 1.74365 0.0107422H1.75635C2.47998 0.0107422 3.05127 0.582031 3.05127 1.30566Z" fill="#B9B8C7" />
                  </svg>
                  <div class="friends-invited-info-sum">
                    <img src="img/main/conis-up.svg" alt="" />
                    <span>`+countForm(refs[i]["user"]["profitPerHour"])+`</span>
                  </div>
                </div>
              </div>
              <div class="friends-invited-reward">
                <div class="invited-reward-top">
                  <img src="img/main/coins20.svg" alt="" />
                  <span>+`+countForm(refs[i]["totalReward"])+`</span>
                </div>
                <p>РІР°С€ РґРѕС…РѕРґ</p>
              </div>
            </a>
          </li>`;
                }
                refsCount++;
            }
            lastRefsCount = refsCount;
            lastRefsHtml = refsHtml;
            if ($("#friends").length) {
                if (refsCount > 0) {
                    $("#friendsBlock").attr("style", "");
                    $("#refsCount").html(refsCount);
                    $("#friendsList").html(refsHtml);
                    $("a[r-user-id]").off("click");
                    $("a[r-user-id]").off("click").click(function () {
                        refReward(us, this);
                    });
                }else{
                    $("#friendsBlock").attr("style", "display: none;");
                }
            }
        }
    });
}

function refReward (us, el) {
    $.ajax({
        url: api_url+'/api/user/check-referral-reward?userId='+$(el).attr("r-user-id")+"&referralId="+$(el).attr("r-ref-id")+"&hash="+a_hash+"&auth_data="+a_data+'&auth_date='+a_date,
        method: 'post',
        dataType: 'html',
        data: {userId:$(el).attr("r-user-id"), referralId:$(el).attr("r-ref-id")},
        success: function(data){
            //console.log(data);
            getRefs(us);
        }
    });
}

function ratingRight() {
    ratingLevel++;
    $(".rating-list").html(ratingHtml[ratingLevel]);
    $("#ratingDog").attr("src", "img/levels/dog/"+ratingLevel+".png");
    if (ratingLevel < 20) {
        getRating(ratingLevel+1);
    }
    getUserPosition();
}

function ratingUpd(lvl) {
    if (ratingLevel != lvl) {
        //console.log(lvl);
        ratingLevel = lvl;
        $(".rating-list").html(ratingHtml[ratingLevel]);
        $("#ratingDog").attr("src", "img/levels/dog/"+ratingLevel+".png");
        if (ratingLevel < 20) {
            getRating(ratingLevel+1);
        }
    }
}

function ratingLeft() {
    ratingLevel--;
    $(".rating-list").html(ratingHtml[ratingLevel]);
    $("#ratingDog").attr("src", "img/levels/dog/"+ratingLevel+".png");
    if (ratingLevel > 1) {
        getRating(ratingLevel-1);
    }
    getUserPosition();
}

function getUserPosition() {
    if ($("#usLi")) {
        $("#usLi").remove();
    }
    var ulLiHtml = `<li class="rating-item rating-item-you" id="usLi" style="display: none;">
    <div class="rating-item-avatar">
      <img id="usAva" src="img/levels/dog/20.png" alt="" />
    </div>
    <div class="rating-item-info">
      <p id="usName" class="rating-item-name">Р’С‹</p>
      <span class="rating-item-balance" id="usCoins">
        <img src="img/main/coins16.svg" alt="" />
      </span>
    </div>
    <div class="rating-item-place">
      <span id="usPlace">1</span>
    </div>
  </li>`;
    $(".rating__slider").append(ulLiHtml);
    $.ajax({
        url: api_url+'/api/user/rating?size=100&level='+lastIntLevel+"&hash="+a_hash+"&auth_data="+a_data+'&auth_date='+a_date,
        method: 'get',
        dataType: 'html',
        data: {size:100,level:lastIntLevel},
        success: function(data){
            //console.log(data);
            var elms = JSON.parse(data);
            var usPos = "100+";
            for (var i = 0; i < elms.length; i++) {
                if (elms[i]["userId"] == user.id) {
                    usPos = i+1;

                }
            }
            $("#usCoins").html(lastPerHour+' <img src="img/main/coins16.svg" alt="" />');
            $("#usName").html("Р’С‹ ("+lastIntLevel+" СѓСЂ.)");
            $("#usPlace").html(usPos);
            $("#usAva").attr("src", "img/levels/ava/"+lastIntLevel+".png");
            $("[data-lvl="+lastIntLevel+"]").find("ul").attr("data-my-rating", "true");
            if (window.innerHeight <= 750 && usPos < 6) {
                $("#usLi").attr("style", "display: none;");
            }else{
                $("#usLi").attr("style", "");
            }
        }
    });
}

function getRating(lvl) {
    $.ajax({
        url: api_url+'/api/user/rating?size=100&level='+lvl+"&hash="+a_hash+"&auth_data="+a_data+'&auth_date='+a_date,
        method: 'get',
        dataType: 'html',
        data: {size:100,level:lvl},
        success: function(data){
            //console.log(data);
            var elms = JSON.parse(data);
            var rHtml = "";
            for (var i = 0; i < elms.length; i++) {
                var secondClass = "";
                if (i == 0) {
                    secondClass = "rating-item-gold";
                }else if (i == 1) {
                    secondClass = "rating-item-silver";
                }else if (i == 2) {
                    secondClass = "rating-item-bronze";
                }
                if (elms[i]["userId"] != user.id) {
                    rHtml = rHtml+`<li class="rating-item `+secondClass+`">
            <div class="rating-item-avatar">
              <img src="img/levels/ava/`+elms[i]["userLevel"]["level"]+`.png" alt="" />
            </div>
            <div class="rating-item-info">
              <p class="rating-item-name">`+elms[i]["username"]+`</p>
              <span class="rating-item-balance">
                `+countForm(elms[i]["profitPerHour"])+` <img src="img/main/coins16.svg" alt="" />
              </span>
            </div>
            <div class="rating-item-place">
              <span>`+(Number(i)+1)+`</span>
            </div>
          </li>`;
                }else{
                    if (window.innerHeight <= 750 && i < 6) {
                        rHtml = rHtml+`<li class="rating-item `+secondClass+`">
              <div class="rating-item-avatar">
                <img src="img/levels/ava/`+elms[i]["userLevel"]["level"]+`.png" alt="" />
              </div>
              <div class="rating-item-info">
                <p class="rating-item-name">Р’С‹</p>
                <span class="rating-item-balance">
                  `+countForm(elms[i]["profitPerHour"])+` <img src="img/main/coins16.svg" alt="" />
                </span>
              </div>
              <div class="rating-item-place">
                <span>`+(Number(i)+1)+`</span>
              </div>
            </li>`;
                    }

                }
            }
            ratingHtml[lvl] = rHtml;
        }
    });
}

function checkLvlUp(us) {
    $.ajax({
        url: api_url+'/api/user/tap'+'?auth_data='+a_data,
        method: 'post',
        dataType: 'html',
        data: JSON.stringify({userId:us.id, count:0, hash:a_hash, auth_data:a_data, auth_date:a_date}),
        contentType: 'application/json',
        success: function(data){
            //console.log(data);
        }
    });
    $.ajax({
        url: api_url+'/api/user/register_or_get'+'?auth_data='+a_data,
        method: 'post',
        dataType: 'html',
        data: JSON.stringify({userId:us.id, hash:a_hash, auth_data:a_data, auth_date:a_date}),
        contentType: 'application/json',
        cache:false,
        success: function(data){
            //console.log(data);
            var user_data = JSON.parse(data);
            //console.log(lastIntLevel);
            if (user_data.userLevel.level != lastIntLevel) {
                $("#lvlUpText").html(`РџРѕР·РґСЂР°РІР»СЏРµРј! <br />Р’С‹ РїРµСЂРµС€Р»Рё РЅР° СѓСЂРѕРІРµРЅСЊ `+user_data.userLevel.level+` вЂ” `+user_data.userLevel.name);
                $("#lvlUpImg").attr("src", "img/levels/dog/"+user_data.userLevel.level+".png");
                lastIntLevel = user_data.userLevel.level;
                location.href = "#popup-lvlup";
                //console.log("go");
            }
        }
    });
}

function updateBattle(us) {
    if ($('#battle').length || $('#battleon').length) {
        $.ajax({
            url: api_url+'/api/user/tap'+'?auth_data='+a_data,
            method: 'post',
            dataType: 'html',
            data: JSON.stringify({userId:us.id, count:0, hash:a_hash, auth_data:a_data, auth_date:a_date}),
            contentType: 'application/json',
            success: function(data){
                //console.log(data);
            }
        });
        $.ajax({
            url: api_url+'/api/user/register_or_get'+'?auth_data='+a_data,
            method: 'post',
            dataType: 'html',
            data: JSON.stringify({userId:us.id, hash:a_hash, auth_data:a_data, auth_date:a_date}),
            contentType: 'application/json',
            cache:false,
            success: function(data){
                //console.log(data);
                var user_data = JSON.parse(data);
                lastLevelName = user_data.userLevel.name;
                lastLevel = "("+user_data.userLevel.level+" СѓСЂ.)";
                lastIntLevel = user_data.userLevel.level;
                lastAva = "img/levels/ava/"+user_data.userLevel.level+".png";
                $("#ava").attr("src", ("img/levels/ava/"+user_data.userLevel.level+".png"));
                $("#levelName").html(user_data.userLevel.name);
                $("#level").html("("+user_data.userLevel.level+" СѓСЂ.)");
                if (typeof(limitsLevel[user_data.userLevel.level]) != "undefined") {
                    $("#levelProgress").attr("value", mathProgress(user_data.spentCoins-limitsLevel[user_data.userLevel.level-1], limitsLevel[user_data.userLevel.level]-limitsLevel[user_data.userLevel.level-1]));
                    lastLevelProgress = mathProgress(user_data.spentCoins-limitsLevel[user_data.userLevel.level-1], limitsLevel[user_data.userLevel.level]-limitsLevel[user_data.userLevel.level-1])
                }else{
                    $("#levelProgress").attr("value", "100");
                    lastLevelProgress = "100";
                }
                lastIntBalance = user_data.balance;
                if (user_data.balance < 1000000) {
                    $("#balance").html(prettify(user_data.balance));
                    lastBalance = prettify(user_data.balance);
                }else{
                    $("#balance").html(countForm(user_data.balance));
                    lastBalance = countForm(user_data.balance);
                }
            }
        });
    }
}

function updateBattleItems(us) {
    var battleItemsHtml = "";

    if (lastIntBalance >= 50000) {
        battleItemsHtml = battleItemsHtml+`<li class="battleon-grade-item">
      <a battle-lvl="1" class="battleon-grade-link junior-battleon-grade link-grade-battleon-active">
        <div class="battleon-grade-img-box">
          <img src="img/battle/battleon-grade-1.png" alt="" />
        </div>
        <div class="battleon-grade-info">
          <h2 class="battleon-grade-name">Junior Grade</h2>
          <p class="battleon-grade-win">Р’С‹РёРіСЂС‹С€</p>
          <div class="battleon-grade-sum">
            <span>
              <img src="img/main/coins20.svg" alt="" />
              10Рљ
            </span>
            -
            <span>
              <img src="img/main/coins20.svg" alt="" />
              50Рљ
            </span>
          </div>
        </div>
        <div class="battleon-grade-lock">
          <i class="icons-Property-1white-1"></i>
        </div>
      </a>
    </li>`;
    }else{
        battleItemsHtml = battleItemsHtml+`<li class="battleon-grade-item">
      <a class="battleon-grade-link junior-battleon-grade">
        <div class="battleon-grade-img-box">
          <img src="img/battle/battleon-grade-1.png" alt="" />
        </div>
        <div class="battleon-grade-info">
          <h2 class="battleon-grade-name">Junior Grade</h2>
          <p class="battleon-grade-win">Р’С‹РёРіСЂС‹С€</p>
          <div class="battleon-grade-sum">
            <span>
              <img src="img/main/coins20.svg" alt="" />
              10Рљ
            </span>
            -
            <span>
              <img src="img/main/coins20.svg" alt="" />
              50Рљ
            </span>
          </div>
        </div>
        <div class="battleon-grade-lock">
        <i class="icons-Lock"></i>
        <span>РќСѓР¶РЅРѕ 50K</span>
        </div>
      </a>
    </li>`;
    }

    if (lastIntLevel >= 2) {
        if (lastIntBalance >= 250000) {
            battleItemsHtml = battleItemsHtml+`<li class="battleon-grade-item">
        <a battle-lvl="2" class="battleon-grade-link middle-battleon-grade link-grade-battleon-active">
          <div class="battleon-grade-img-box">
            <img src="img/battle/battleon-grade-2.png" alt="" />
          </div>
          <div class="battleon-grade-info">
            <h2 class="battleon-grade-name">Middle Grade</h2>
            <p class="battleon-grade-win">Р’С‹РёРіСЂС‹С€</p>
            <div class="battleon-grade-sum">
              <span>
                <img src="img/main/coins20.svg" alt="" />
                100Рљ
              </span>
              -
              <span>
                <img src="img/main/coins20.svg" alt="" />
                250Рљ
              </span>
            </div>
          </div>
          <div class="battleon-grade-lock">
            <i class="icons-Property-1white-1"></i>
          </div>
        </a>
      </li>`;
        }else{
            battleItemsHtml = battleItemsHtml+`<li class="battleon-grade-item">
        <a class="battleon-grade-link middle-battleon-grade">
          <div class="battleon-grade-img-box">
            <img src="img/battle/battleon-grade-2.png" alt="" />
          </div>
          <div class="battleon-grade-info">
            <h2 class="battleon-grade-name">Middle Grade</h2>
            <p class="battleon-grade-win">Р’С‹РёРіСЂС‹С€</p>
            <div class="battleon-grade-sum">
              <span>
                <img src="img/main/coins20.svg" alt="" />
                100Рљ
              </span>
              -
              <span>
                <img src="img/main/coins20.svg" alt="" />
                250Рљ
              </span>
            </div>
          </div>
          <div class="battleon-grade-lock">
            <i class="icons-Lock"></i>
            <span>РќСѓР¶РЅРѕ 250Рљ</span>
          </div>
        </a>
      </li>`;
        }
    }else{
        battleItemsHtml = battleItemsHtml+`<li class="battleon-grade-item">
      <a class="battleon-grade-link middle-battleon-grade">
        <div class="battleon-grade-img-box">
          <img src="img/battle/battleon-grade-2.png" alt="" />
        </div>
        <div class="battleon-grade-info">
          <h2 class="battleon-grade-name">Middle Grade</h2>
          <p class="battleon-grade-win">Р’С‹РёРіСЂС‹С€</p>
          <div class="battleon-grade-sum">
            <span>
              <img src="img/main/coins20.svg" alt="" />
              100Рљ
            </span>
            -
            <span>
              <img src="img/main/coins20.svg" alt="" />
              250Рљ
            </span>
          </div>
        </div>
        <div class="battleon-grade-lock">
          <i class="icons-Lock"></i>
          <span>РќСѓР¶РµРЅ 2 СѓСЂ.</span>
        </div>
      </a>
    </li>`;
    }

    if (lastIntLevel >= 5) {
        if (lastIntBalance >= 5000000) {
            battleItemsHtml = battleItemsHtml+`<li class="battleon-grade-item">
        <a battle-lvl="3" class="battleon-grade-link senior-battleon-grade link-grade-battleon-active">
          <div class="battleon-grade-img-box">
            <img src="img/battle/battleon-grade-3.png" alt="" />
          </div>
          <div class="battleon-grade-info">
            <h2 class="battleon-grade-name">Senior Grade</h2>
            <p class="battleon-grade-win">Р’С‹РёРіСЂС‹С€</p>
            <div class="battleon-grade-sum">
              <span>
                <img src="img/main/coins20.svg" alt="" />
                1M
              </span>
              -
              <span>
                <img src="img/main/coins20.svg" alt="" />
                5M
              </span>
            </div>
          </div>
          <div class="battleon-grade-lock">
            <i class="icons-Property-1white-1"></i>
          </div>
        </a>
      </li>`;
        }else{
            battleItemsHtml = battleItemsHtml+`<li class="battleon-grade-item">
        <a class="battleon-grade-link senior-battleon-grade">
          <div class="battleon-grade-img-box">
            <img src="img/battle/battleon-grade-3.png" alt="" />
          </div>
          <div class="battleon-grade-info">
            <h2 class="battleon-grade-name">Senior Grade</h2>
            <p class="battleon-grade-win">Р’С‹РёРіСЂС‹С€</p>
            <div class="battleon-grade-sum">
              <span>
                <img src="img/main/coins20.svg" alt="" />
                1M
              </span>
              -
              <span>
                <img src="img/main/coins20.svg" alt="" />
                5M
              </span>
            </div>
          </div>
          <div class="battleon-grade-lock">
            <i class="icons-Lock"></i>
            <span>РќСѓР¶РЅРѕ 5M</span>
          </div>
        </a>
      </li>`;
        }
    }else{
        battleItemsHtml = battleItemsHtml+`<li class="battleon-grade-item">
      <a class="battleon-grade-link senior-battleon-grade">
        <div class="battleon-grade-img-box">
          <img src="img/battle/battleon-grade-3.png" alt="" />
        </div>
        <div class="battleon-grade-info">
          <h2 class="battleon-grade-name">Senior Grade</h2>
          <p class="battleon-grade-win">Р’С‹РёРіСЂС‹С€</p>
          <div class="battleon-grade-sum">
            <span>
              <img src="img/main/coins20.svg" alt="" />
              1M
            </span>
            -
            <span>
              <img src="img/main/coins20.svg" alt="" />
              5M
            </span>
          </div>
        </div>
        <div class="battleon-grade-lock">
          <i class="icons-Lock"></i>
          <span>РќСѓР¶РµРЅ 5 СѓСЂ.</span>
        </div>
      </a>
    </li>`;
    }
    lastBattleItems = battleItemsHtml;
    if ($("#battleItems").length) {
        // $("#battleItems").html(battleItemsHtml);
        $("a[battle-lvl]").off("click").click(function () {
            nextBattle(us, this);
        });
    }
}

function nextBattle (us, el) {
    //console.log("CLICKED");
    var battleLvl = $(el).attr("battle-lvl");
    battleLevel = battleLvl;
    if (battleLvl == 1) {
        if (lastIntBalance >= 50000) {
            stavka = randomNumber(10000,50000);
        }
    }else if (battleLvl == 2) {
        if (lastIntBalance >= 250000 && lastIntLevel >= 2) {
            stavka = randomNumber(100000,250000);
        }
    }else if (battleLvl == 3) {
        if (lastIntBalance >= 5000000 && lastIntLevel >= 5) {
            stavka = randomNumber(1000000,5000000);
        }
    }
}

function startBattle (us, el) {
    $("#selectCoin").addClass("close-anim");
    setTimeout(function () {
        $("#selectCoin").removeClass("active-anim");
        $("#battleOnboard").removeClass("hiddens");
        $("#battleOnboard").addClass("hiddens");
        $("#battleResult").removeClass("hiddens");
        setTimeout(() => $("#battleResult").addClass("show"), 100);
        digitsCounter();
    }, 1000);
    var coinSide = $(el).attr("coin-side");
    // $("#selectCoin").attr("style", "display: none;");
    $("#battleResult").attr("style", "");
    $("#stavka").html(countForm1(stavka)[0]);
    $("#intSymbol").html(countForm1(stavka)[1]);
    $("#ava1").attr("src", lastAva);
    $("#level1").html(lastLevel);
    if (coinSide == "heads") {
        $("#coinSide").html("РћСЂС‘Р»");
    }else{
        $("#coinSide").html("Р РµС€РєР°");
    }
    var dotsInterval = setInterval(typeDots, 400);
    $.ajax({
        url: 'https://api.randomdatatools.ru/?count=1&params=FirstName',
        method: 'get',
        data: {},
        success: function(data){
            //console.log(data);
            var oponnent = JSON.parse(data);
            //console.log({userId:us.id, stake:(2 * Math.round(stavka / 2)), userCoinSide:coinSide, battleLevel:battleLevel});
            $.ajax({
                url: api_url+'/api/battle'+'?auth_data='+a_data,
                method: 'post',
                dataType: 'html',
                data: JSON.stringify({userId:us.id, stake:(2 * Math.round(stavka / 2)), userCoinSide:coinSide, battleLevel:battleLevel, hash:a_hash, auth_data:a_data, auth_date:a_date}),
                contentType: 'application/json',
                success: function(data){
                    //console.log(data);
                    var battleData = JSON.parse(data);
                    var searchOponnentTime = randomNumber(2000, 3000);
                    // setTimeout(() => $("#coinAnim").fadeIn(400), searchOponnentTime);
                    setTimeout(function () {
                        $("#coinAnim").removeClass("hiddens");
                        setTimeout(() => $("#coinAnim").addClass("show"), 100);
                    }, searchOponnentTime);
                    $("#animVideo").off("ended").on("ended", function () {
                        this.currentTime = 2850;
                        this.pause();
                        //console.log("endeeed");
                    });
                    var resultCoinSide = "";
                    if (battleData["result"] == "user") {
                        if (coinSide == "heads") {
                            $("#coinVideo").attr("src", "files/orel_1.mp4");
                            $("#animVideo").get(0).load();
                            resultCoinSide = "РћСЂС‘Р»";
                            $("#resImg").attr("src", "img/battle/coins88.svg");
                        }else{
                            $("#coinVideo").attr("src", "files/reshka_1.mp4");
                            $("#animVideo").get(0).load();
                            resultCoinSide = "Р РµС€РєР°";
                            $("#resImg").attr("src", "img/battle/Coin.svg");
                        }
                    }else{
                        if (battleData["opponentIntuitionLevel"] == null) {
                            if (coinSide == "heads") {
                                $("#coinVideo").attr("src", "files/reshka_1.mp4");
                                $("#animVideo").get(0).load();
                                resultCoinSide = "Р РµС€РєР°";
                                $("#resImg").attr("src", "img/battle/Coin.svg");
                                //console.log("1");
                            }else{
                                $("#coinVideo").attr("src", "files/orel_1.mp4");
                                $("#animVideo").get(0).load();
                                resultCoinSide = "РћСЂС‘Р»";
                                $("#resImg").attr("src", "img/battle/coins88.svg");
                                //console.log("2");

                            }
                        }else{
                            if (coinSide == "heads") {
                                $("#coinVideo").attr("src", "files/orel_1.mp4");
                                $("#animVideo").get(0).load();
                                resultCoinSide = "РћСЂС‘Р»";
                                $("#resImg").attr("src", "img/battle/coins88.svg");
                            }else{
                                $("#coinVideo").attr("src", "files/reshka_1.mp4");
                                $("#animVideo").get(0).load();
                                resultCoinSide = "Р РµС€РєР°";
                                $("#resImg").attr("src", "img/battle/Coin.svg");
                            }
                        }
                    }
                    $("#resCoinS").html(resultCoinSide);
                    var opCS = "";
                    if (battleData["opponentCoinSide"] == "heads") {
                        opCS = "РћСЂС‘Р»";
                    }else{
                        opCS = "Р РµС€РєР°";
                    }
                    setTimeout(function () {
                        $("#opponent").html(`<div class="main-page-user-avatar-box">
              <img id="ava1" src="img/levels/ava/`+battleData["opponentLevel"]+`.png" alt="" />
            </div>
            <div class="battleon-content-data">
              <p class="battleon-content-name">
                `+oponnent["FirstName"]+` <span id="level1">(`+battleData["opponentLevel"]+` СѓСЂ.)</span>
              </p>
              <p id="coinSide" class="battleon-content-coins">`+opCS+`</p>
            </div>`);
                    }, searchOponnentTime);
                    setTimeout(function () {
                        $("#coinAnim").removeClass("show");
                        setTimeout(() => $("#coinAnim").addClass("hiddens"), 1000);
                        clearInterval(dotsInterval);
                    }, searchOponnentTime+3500);
                    if (battleData["result"] == "user") {

                        $("#cs").html(resultCoinSide);
                        $("#battleResPop").html(countForm(stavka));
                        if (battleData["opponentIntuitionLevel"] == null) {
                            $("#br").html("РџРѕР±РµРґР°");
                            setTimeout(function () {
                                $("#battleResult1").removeClass("hiddens");
                                setTimeout(() => $("#battleResult1").addClass("show"), 100);
                            }, searchOponnentTime+4500);
                            setTimeout(function () {
                                clearInterval(dotsInterval)
                                $("body").addClass("popup-showtwo");
                                setTimeout(function () {
                                    location.href = "#popup-win";
                                }, 800);
                            }, searchOponnentTime+7500);
                        }else{
                            $("#br").html("РќРёС‡СЊСЏ");
                            $("#userInt").html(battleData["userIntuitionLevel"]);
                            $("#userInt").addClass("compare-skills-win");
                            $("#opInt").html(battleData["opponentIntuitionLevel"]);
                            $("#opInt").removeClass("compare-skills-win");
                            setTimeout(function () {
                                $("#battleResult1").removeClass("hiddens");
                                setTimeout(() => $("#battleResult1").addClass("show"), 100);
                            }, searchOponnentTime+4500);
                            setTimeout(function () {
                                $("#naviki").removeClass("hiddens");
                                setTimeout(() => $("#naviki").addClass("show"), 100);
                                digitsCounter1();
                            }, searchOponnentTime+5500);
                            setTimeout(function () {
                                clearInterval(dotsInterval)
                                $("body").addClass("popup-showtwo");
                                setTimeout(function () {
                                    location.href = "#popup-win";
                                }, 800);
                            }, searchOponnentTime+8500);
                        }
                    }else if (battleData["result"] == "opponent") {

                        $("#cs").html(resultCoinSide);
                        if (battleData["opponentIntuitionLevel"] == null) {
                            $("#br").html("РџРѕСЂР°Р¶РµРЅРёРµ");
                            setTimeout(function () {
                                $("#battleResult1").removeClass("hiddens");
                                setTimeout(() => $("#battleResult1").addClass("show"), 100);
                            }, searchOponnentTime+4500);
                            setTimeout(function () {
                                clearInterval(dotsInterval)
                                $("body").addClass("popup-showtwo");
                                setTimeout(function () {
                                    location.href = "#popup-loos";
                                }, 800);
                            }, searchOponnentTime+7500);
                        }else{
                            $("#br").html("РќРёС‡СЊСЏ");
                            $("#userInt").html(battleData["userIntuitionLevel"]);
                            $("#userInt").removeClass("compare-skills-win");
                            $("#opInt").html(battleData["opponentIntuitionLevel"]);
                            $("#opInt").addClass("compare-skills-win");
                            setTimeout(function () {
                                $("#battleResult1").removeClass("hiddens");
                                setTimeout(() => $("#battleResult1").addClass("show"), 100);
                            }, searchOponnentTime+4500);
                            setTimeout(function () {
                                $("#naviki").removeClass("hiddens");
                                setTimeout(() => $("#naviki").addClass("show"), 100);
                                digitsCounter1();
                            }, searchOponnentTime+5500);
                            setTimeout(function () {
                                clearInterval(dotsInterval)
                                $("body").addClass("popup-showtwo");
                                setTimeout(function () {
                                    location.href = "#popup-loos";
                                }, 800);
                            }, searchOponnentTime+8500);
                        }
                    }else{
                        $("#br").html("РќРёС‡СЊСЏ");
                        $("#cs").html(resultCoinSide);
                        $("#battleResPop").html(countForm(stavka/2));
                        setTimeout(function () {
                            $("#battleResult1").removeClass("hiddens");
                            setTimeout(() => $("#battleResult1").addClass("show"), 100);
                        }, searchOponnentTime+4500);
                        setTimeout(function () {
                            clearInterval(dotsInterval)
                            $("body").addClass("popup-showtwo");
                            setTimeout(function () {
                                location.href = "#popup-loos";
                            }, 800);
                        }, searchOponnentTime+7500);
                    }

                },
                error: function(xhr) {
                    alert ("Oopsie: " + xhr.responseText);
                }
            });

        }
    });
}

function getTasks (us) {
    lastTasksRound = false;
    $.ajax({
        url: api_url+'/api/tasks?hash='+a_hash+'&auth_data='+a_data+'&auth_date='+a_date,
        method: 'get',
        dataType: 'html',
        data: {userId:us.id, hash:a_hash, auth_data:a_data, auth_date:a_date},
        contentType: 'application/json',
        success: function(data){
            //console.log("tasks"+data);
            var tasksJSON = JSON.parse(data);
            var tasksHTML = "";
            var tasks1HTML = "";
            for (var i = 0; i < tasksJSON.length; i++) {
                if (tasksJSON[i]["status"] == "REWARDED") {
                    tasks1HTML = tasks1HTML+`<li class="tasks-main-item">
            <a bk class="tasks-main-link">
              <div class="tasks-main-img-box">
                <img src="`+api_url+tasksJSON[i]["imageUrl"]+`" alt="" />
              </div>
              <div class="tasks-main-info">
                <p class="tasks-main-info-name">
                  `+tasksJSON[i]["name"]+`
                </p>
                <div class="tasks-main-info-sum">
                  <img src="img/task/coin-gray.svg" alt="" />
                  <span>+`+countForm(tasksJSON[i]["reward"])+`</span>
                </div>
              </div>
              <div class="tasks-main-icon">
                <span> Р—Р°Р±СЂР°С‚СЊ </span>
                <i class="icons-Property-1white-1"></i>
              </div>
            </a>
          </li>`;
                }else{
                    if (tasksJSON[i]["status"] == "IN_PROGRESS") {
                        $.ajax({
                            url: api_url+'/api/tasks/check?hash='+a_hash+'&auth_data='+a_data+'&auth_date='+a_date,
                            method: 'get',
                            dataType: 'html',
                            data: {userId:us.id, taskId:tasksJSON[i]["id"], hash:a_hash, auth_data:a_data, auth_date:a_date},
                            contentType: 'application/json',
                            async: false,
                            success: function(data){
                                var checkTask = JSON.parse(data);
                                if (checkTask["status"] == "COMPLETED") {
                                    tasksHTML = tasksHTML+`<li class="tasks-main-item active">
										<a bv claim-task="`+tasksJSON[i]["id"]+`" class="tasks-main-link">
											<div class="tasks-main-img-box">
												<img src="`+api_url+tasksJSON[i]["imageUrl"]+`" alt="" />
											</div>
											<div class="tasks-main-info">
												<p class="tasks-main-info-name">
													`+tasksJSON[i]["name"]+`
												</p>
												<div class="tasks-main-info-sum">
													<img src="img/main/coins20.svg" alt="" />
													<span>+`+countForm(tasksJSON[i]["reward"])+`</span>
												</div>
											</div>
											<div class="tasks-main-icon">
												<span> Р—Р°Р±СЂР°С‚СЊ </span>
												<i class="icons-Property-1white-1"></i>
											</div>
										</a>
									</li>`;
                                    roundTasksFlag = true;
                                }else{
                                    //console.log(i);
                                    //console.log(tasksJSON[i]);
                                    tasksHTML = tasksHTML+`<li class="tasks-main-item">
										<a bs data-dis="dis" start-task="`+tasksJSON[i]["id"]+`" class="tasks-main-link">
											<div class="tasks-main-img-box">
												<img src="`+api_url+tasksJSON[i]["imageUrl"]+`" alt="" />
											</div>
											<div class="tasks-main-info">
												<p class="tasks-main-info-name">
													`+tasksJSON[i]["name"]+`
												</p>
												<div class="tasks-main-info-sum">
													<img src="img/main/coins20.svg" alt="" />
													<span>+`+countForm(tasksJSON[i]["reward"])+`</span>
												</div>
											</div>
											<div class="tasks-main-icon">
												<span> Р—Р°Р±СЂР°С‚СЊ </span>
												<i class="icons-Property-1white-1"></i>
											</div>
										</a>
									</li>`;
                                }
                            }
                        });
                    }else if (tasksJSON[i]["status"] == "COMPLETED") {
                        roundTasksFlag = true;
                        tasksHTML = tasksHTML+`<li class="tasks-main-item active">
              <a ba claim-task="`+tasksJSON[i]["id"]+`" class="tasks-main-link">
                <div class="tasks-main-img-box">
                  <img src="`+api_url+tasksJSON[i]["imageUrl"]+`" alt="" />
                </div>
                <div class="tasks-main-info">
                  <p class="tasks-main-info-name">
                    `+tasksJSON[i]["name"]+`
                  </p>
                  <div class="tasks-main-info-sum">
                    <img src="img/main/coins20.svg" alt="" />
                    <span>+`+countForm(tasksJSON[i]["reward"])+`</span>
                  </div>
                </div>
                <div class="tasks-main-icon">
                  <span> Р—Р°Р±СЂР°С‚СЊ </span>
                  <i class="icons-Property-1white-1"></i>
                </div>
              </a>
            </li>`;


                    }else{

                        tasksHTML = tasksHTML+`<li class="tasks-main-item">
              <a  start-task="`+tasksJSON[i]["id"]+`" class="tasks-main-link">
                <div class="tasks-main-img-box">
                  <img src="`+api_url+tasksJSON[i]["imageUrl"]+`" alt="" />
                </div>
                <div class="tasks-main-info">
                  <p class="tasks-main-info-name">
                    `+tasksJSON[i]["name"]+`
                  </p>
                  <div class="tasks-main-info-sum">
                    <img src="img/main/coins20.svg" alt="" />
                    <span>+`+countForm(tasksJSON[i]["reward"])+`</span>
                  </div>
                </div>
                <div class="tasks-main-icon">
                  <span> Р—Р°Р±СЂР°С‚СЊ </span>
                  <i class="icons-Property-1white-1"></i>
                </div>
              </a>
            </li>`;
                        lastTasksRound = true;
                    }
                }
                userTasks[tasksJSON[i]["id"]] = [api_url+tasksJSON[i]["imageUrl"], tasksJSON[i]["name"], tasksJSON[i]["description"], countForm(tasksJSON[i]["reward"]), tasksJSON[i]["type"], tasksJSON[i]["status"], tasksJSON[i]["externalLink"]];
            }
            lastTasks = tasksHTML;
            lastTasks1 = tasks1HTML;

            if ($("#tasks").length) {
                $("#tasksList").html(tasksHTML);
                $("#tasks1List").html(tasks1HTML);
                $("a[start-task]").off("click").click(function () {
                    showTask(us, this);
                });
                $("a[claim-task]").off("click").click(function () {
                    claimTask(us, this);
                });
            }
            if (lastTasksRound) {
                $(".main-tabs__anim").attr("style", "");
            }else{
                $(".main-tabs__anim").attr("style", "display: none;");
            }
        }
    });
}

function showTask (us, el) {
    var taskId = $(el).attr("start-task");
    //console.log(taskId);
    //console.log(userTasks);
    $("#taskImg").attr("src", userTasks[taskId][0]);
    $("#taskName").html(userTasks[taskId][1]);
    $("#taskRew").html(userTasks[taskId][3]);
    if ($(el).attr("data-dis") != "dis") {
        $("#taskBtn").text("РџРµСЂРµР№С‚Рё Рє РІС‹РїРѕР»РЅРµРЅРёСЋ");
        $("#taskBtn").removeClass("popup__btn-grey");
        $("#taskBtn").off("click").click(() => startTask(us, taskId));
    }else{
        $("#taskBtn").off("click");
        $("#taskBtn").addClass("popup__btn-grey");
        $("#taskBtn").text("Р—Р°Р±СЂР°С‚СЊ РЅР°РіСЂР°РґСѓ С‡РµСЂРµР· С‡Р°СЃ");
    }
    location.href = "#popup-task";
}

function startTask (us, taskId) {
    if (userTasks[taskId][5] == "AVAILABLE") {
        $.ajax({
            url: api_url+'/api/tasks/start'+'?auth_data='+a_data,
            method: 'post',
            dataType: 'html',
            data: {userId:us.id, taskId:taskId, hash:a_hash, auth_data:a_data, auth_date:a_date},
            success: function(data){
                if ((userTasks[taskId][4] == "REGISTER_TENCHAT" || userTasks[taskId][4] == "SUBSCRIBE_TELEGRAM" || userTasks[taskId][4] == "WATCH_YOUTUBE")) {
                    tg.openLink(userTasks[taskId][6]);
                }else if (userTasks[taskId][4] == "INVITE_FRIENDS") {
                    barba_umd.go("friends.html");
                }
            }
        });
    }else{
        if ((userTasks[taskId][4] == "REGISTER_TENCHAT" || userTasks[taskId][4] == "SUBSCRIBE_TELEGRAM" || userTasks[taskId][4] == "WATCH_YOUTUBE")) {
            tg.openLink(userTasks[taskId][6]);
        }else if (userTasks[taskId][4] == "INVITE_FRIENDS") {
            barba_umd.go("friends.html");
        }
    }
    getTasks(us);
}

function claimTask (us, el) {
    var taskId = $(el).attr("claim-task");
    $.ajax({
        url: api_url+'/api/tasks/claim'+'?auth_data='+a_data,
        method: 'post',
        data: {userId:us.id, taskId:taskId, hash:a_hash, auth_data:a_data, auth_date:a_date},
        success: function(data){
            //console.log(data);
            getTasks(us);
        },
        error: function(xhr) {
            alert ("Oopsie: " + xhr.responseText);
        }
    });
}

function selectPage(el) {
    var page = $(el).find("main").attr("id");
    //digitsCounter();
    //console.log(page);
    if (page != lastPage) {
        lastPage = page;
        reloadFrontFunction();
        if (lastTasksRound) {
            $(".main-tabs__anim").attr("style", "");
        }else{
            $(".main-tabs__anim").attr("style", "display: none;");
        }
        if (page == "lotties") {
            tg.BackButton.hide();
            $("#balance").html(lastBalance);
            $("#ava").attr("src", lastAva);
            $("#dog").attr("src", lastDog);
            $("#levelName").html(lastLevelName);
            $("#level").html(lastLevel);
            $("#levelProgress").attr("value", lastLevelProgress);
            $("#perHour").html(lastPerHour);
            $("#prPerHour").html(lastPerHour);
            $("#perClick").html(lastPerCLick);
            $("#pClick").attr("value", lastPerCLick);
            $("#currentEnergy").html(lastEnergy);
            $("#energyLimit").html(lastMaxEnergy);
            $("#energyProgress").attr("value", lastEnergyProgress);
            $("#load").attr("style", "display: none;");
            $("[data-barba=container]").attr("style", "display: flex;");
            $(".main-page__panel").attr("style", "");
            if (tg.platform == "tdesktop") {
                $("#dog").click(() => onTap(user));
            }else{
                $("#dog").on("touchstart", () => onTap(user));
            }
            updateMain(user);
            streakUpdate(user);
            $("#dog").attr("style", "main-dog-img");
            $("#dog").addClass(lastDogClass);
            initAnim();
            $("#dailyRound").attr("style", lastDailyRevardStyle);
            $("div").find(".main-page-user-avatar-box").off("click").click(function() {
                barba_umd.go("rating.html");
            });

            $("div").find(".main-page-user-data").off("click").click(function() {
                barba_umd.go("rating.html");
            });
        }else if (page == "improving") {
            $("#ava").attr("src", lastAva);
            $("#levelName").html(lastLevelName);
            $("#level").html(lastLevel);
            $("#levelProgress").attr("value", lastLevelProgress);
            $("#balance").html(lastBalance);
            $("#perHour").html(lastPerHour);
            $("#bn").html(userCards["b"]["n"]);
            $("#bp").html(userCards["b"]["p"]);
            $("#bi").html(userCards["b"]["i"]);
            $("#cn").html(userCards["c"]["n"]);
            $("#co").html(userCards["c"]["o"]);
            $("#cr").html(userCards["c"]["r"]);
            $("#ro").html(userCards["r"]["o"]);
            $("a[card-id]").click(function () {
                showCardInfo(user, this);
            });
        }else if (page == "tasks") {
            $("#tasksList").html(lastTasks);
            $("#tasks1List").html(lastTasks1);
            $("a[start-task]").off("click").click(function () {
                showTask(us, this);
            });
            $("a[claim-task]").off("click").click(function () {
                claimTask(us, this);
            });
            $("#ava").attr("src", lastAva);
            $("#levelName").html(lastLevelName);
            $("#level").html(lastLevel);
            $("#levelProgress").attr("value", lastLevelProgress);
            $("#balance").html(lastBalance);
            if (lastDailyRevardStyle == "display: none;") {
                $(".weekly-award").removeClass("active");
            }else{
                $(".weekly-award").addClass("active");
            }
            getTasks(user);
            if (lastStreak == 21) {
                lastStreak = 0;
            }
            $("#streakRew").html("+"+countForm(streakSumm[lastStreak+1]));
        }else if (page == "friends") {
            $("#shareRefLink").off("click").click(() => tg.openTelegramLink("https://t.me/share/url?url="+encodeURIComponent(appUrl+"?startapp="+user.id)+"&text="+encodeURIComponent(refMsg)));
            $("#copyRefLink").off("click").click(() => copyToClipboard(appUrl+"?startapp="+user.id));
            $("#ava").attr("src", lastAva);
            $("#levelName").html(lastLevelName);
            $("#level").html(lastLevel);
            $("#levelProgress").attr("value", lastLevelProgress);
            $("#balance").html(lastBalance);
            if (lastRefsCount > 0) {
                $("#friendsBlock").attr("style", "");
                $("#refsCount").html(lastRefsCount);
                $("#friendsList").html(lastRefsHtml);
                $("a[r-user-id]").off("click").click(function () {
                    refReward(user, this);
                });
            }else{
                $("#friendsBlock").attr("style", "display: none;");
            }
        }else if (page == "rating") {
            getUserPosition();
            ratingLevel = 1;
            //console.log(lastAva);
            $("#ava").attr("src", lastAva);
            $("#levelName").html(lastLevelName);
            $("#level").html(lastLevel);
            $("#levelProgress").attr("value", lastLevelProgress);
            $("#balance").html(lastBalance);
            tg.BackButton.hide();
            tg.BackButton.show();
            $(".rating-center-arrow-right").off("click").click(() => ratingRight());
            $(".rating-center-arrow-left").off("click").click(() => ratingLeft());
            $(".rating-list").html(ratingHtml[ratingLevel]);
            $("#ratingDog").attr("src", "img/levels/dog/"+ratingLevel+".png");
            $("#acSlide").off("change").on("change", function () {
                if (Number($(this).val())+1 > ratingLevel) {
                    ratingRight();
                }else if(Number($(this).val())+1 < ratingLevel){
                    ratingLeft();
                }
            });
        }else if (page == "settings") {
            tg.BackButton.hide();
            tg.BackButton.show();
        }else if (page == "battleon") {
            $.ajax({
                url: api_url+'/api/user/check-battle?hash='+a_hash+'&auth_data='+a_data+'&auth_date='+a_date,
                method: 'get',
                dataType: 'html',
                data: {userId:user.id, hash:a_hash, auth_data:a_data, auth_date:a_date},
                contentType: 'application/json',
                success: function(data){
                    //console.log("battle"+data);
                }
            });
            dotsC = 0;
            $("#ava").attr("src", lastAva);
            $("#levelName").html(lastLevelName);
            $("#level").html(lastLevel);
            $("#levelProgress").attr("value", lastLevelProgress);
            $("#balance").html(lastBalance);
            if (showBalleOnBoard == true) {
                if (!showBattleOnBoard1) {
                    $("#battleOnboard").removeClass("hidenmain-block");
                    $("#battleOnboard").addClass("hidenmain-block");
                    $("#battleOnboard").attr("style", "visibility: hidden; transition: visibility 0s ease 0s;");
                    $("#battleMain").attr("style", "");
                    $("#battleMain").removeClass("hiddens");
                    $("#battleMain").removeClass("active-first");
                    $("#battleMain").addClass("show");
                    $("#battleMain").addClass("active-first");
                    showBattleOnBoard1 = false;
                }
            }
            $("#battleItems").html(lastBattleItems);
            $("a[battle-lvl]").off("click").click(function () {
                nextBattle(user, this);
            });
            // $(".battleon-grade-training").off("click").click(function () {
            //   //console.log("CLICKED");
            //   showBattleOnBoard1 = true;
            //   barba_umd.go("battleon.html");
            // });
            $("a[coin-side]").off("click").click(function () {
                startBattle(user, this);
            });
            reloadFrontFunction();

        }else if (page == "battle") {
            dotsC = 0;
            $("#ava").attr("src", lastAva);
            $("#levelName").html(lastLevelName);
            $("#level").html(lastLevel);
            $("#levelProgress").attr("value", lastLevelProgress);
            $("#balance").html(lastBalance);

        }else if (page == "fortune") {
            $("#shareRefLink").off("click").click(() => tg.openTelegramLink("https://t.me/share/url?url="+encodeURIComponent(appUrl+"?startapp="+user.id)+"&text="+encodeURIComponent(refMsg)));
            $("#copyRefLink").off("click").click(() => copyToClipboard(appUrl+"?startapp="+user.id));
            $("#ava").attr("src", lastAva);
            $("#levelName").html(lastLevelName);
            $("#level").html(lastLevel);
            $("#levelProgress").attr("value", lastLevelProgress);
            $("#balance").html(lastBalance);
            tg.BackButton.hide();
            tg.BackButton.show();
        }

    }
}

function urldecode(str) {
    return decodeURIComponent((str+'').replace(/\+/g, '%20'));
}

function parse_str(str, array){	// Parses the string into variables
    //
    // +   original by: Cagri Ekin
    // +   improved by: Michael White (http://crestidg.com)

    var glue1 = '=';
    var glue2 = '&';

    var array2 = str.split(glue2);
    var array3 = [];
    for(var x=0; x<array2.length; x++){
        var tmp = array2[x].split(glue1);
        array3[unescape(tmp[0])] = unescape(tmp[1]).replace(/[+]/g, ' ');
    }

    if(array){
        array = array3;
    } else{
        return array3;
    }
}

function http_build_query( formdata, numeric_prefix, arg_separator ) {	// Generate URL-encoded query string
    //
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Legaev Andrey
    // +   improved by: Michael White (http://crestidg.com)

    var key, use_val, use_key, i = 0, tmp_arr = [];

    if(!arg_separator){
        arg_separator = '&';
    }

    for(key in formdata){
        use_key = escape(key);
        use_val = escape((formdata[key].toString()));
        use_val = use_val.replace(/%20/g, '+');

        if(numeric_prefix && !isNaN(key)){
            use_key = numeric_prefix + i;
        }
        tmp_arr[i] = use_key + '=' + use_val;
        i++;
    }

    return tmp_arr.join(arg_separator);
}

function load() {
    //console.log("start");
    if (!$("#lotties").length) {
        window.location = "main.html";
    }
    $("#levelProgress").attr("value", "100");
    tg = window.Telegram.WebApp;
    //console.log(window.Telegram);
    tg  = {
        initData: "string", // строка, содержащая данные, переданные при запуске WebApp
        initDataUnsafe: {
            user: {
                id: 123456789,
                first_name: "John",
                last_name: "Doe",
                username: "johndoe",
                language_code: "en"
            },
            chat: null, // или информация о чате, если WebApp запускается в группе
            query_id: "abcdef123456",
            auth_date: 1234567890,
            hash: "abcdef1234567890abcdef1234567890"
        },
        version: "6.2", // версия Web App API
        platform: "android", // платформа: "android", "ios", "desktop", "web"
        themeParams: {
            bg_color: "#ffffff", // цвет фона
            text_color: "#000000", // цвет текста
            hint_color: "#aaaaaa", // цвет подсказок
            link_color: "#1a73e8", // цвет ссылок
            button_color: "#1a73e8", // цвет кнопок
            button_text_color: "#ffffff" // цвет текста кнопок
        },
        colorScheme: "light", // или "dark"
        isExpanded: true, // флаг, указывает, развернут ли WebApp
        viewportHeight: 100, // высота области просмотра
        viewportStableHeight: 100, // стабильная высота области просмотра
        MainButton: {
            text: "CONTINUE",
            color: "#1a73e8",
            textColor: "#ffffff",
            isVisible: false,
            isActive: true,
            setText: function(text) { /* изменяет текст кнопки */ },
            show: function() { /* отображает кнопку */ },
            hide: function() { /* скрывает кнопку */ },
            enable: function() { /* активирует кнопку */ },
            disable: function() { /* деактивирует кнопку */ },
            onClick: function(callback) { /* устанавливает обработчик клика */ }
        },
        HapticFeedback: {
            impactOccurred: function(style) { /* вибрация для обратной связи */ },
            notificationOccurred: function(type) { /* уведомление */ },
            selectionChanged: function() { /* изменение выбора */ }
        },
        close: function() { /* закрывает WebApp */ },
        expand: function() { /* разворачивает WebApp */ },
        ready: function() { /* уведомляет Telegram, что WebApp готов к работе */ }
    };



    window.Telegram.WebApp.setHeaderColor('#2b2c33');

    if (typeof(tg.initDataUnsafe.user) == "undefined") {
        window.location = "403.php";
    }else{
        if (tg.platform == "tdesktop") {
            window.location = "403.php?os="+encodeURIComponent(tg.platform+" "+tg.version);
        }
        user = tg.initDataUnsafe.user;
        a_data = parse_str(urldecode(tg.initData));
        a_hash = a_data['hash'];
        a_date = a_data['auth_date'];
        // delete a_data['hash'];
        a_data = encodeURIComponent(urldecode(tg.initData));
        //console.log(urldecode(a_data));
        //console.log(tg.initData)
        if (typeof(user.is_premium) == "undefined") {
            is_premium = false;
        }else{
            is_premium = true;
        }
        if (user.language_code == "ru") {
            refMsg = `РџРѕРґРєР»СЋС‡Р°Р№СЃСЏ Рє РёРіСЂРµ СЃРѕ РјРЅРѕР№: РїСЂРѕРєР°С‡Р°Р№ СЃРІРѕРµРіРѕ РєРѕСЂРіРё РґРѕ РјРёР»Р»РёР°СЂРґРµСЂР° Рё РїРѕР»СѓС‡Р°Р№ С‚РѕРєРµРЅС‹, С‡С‚РѕР±С‹ РїСЂРµРІСЂР°С‚РёС‚СЊ РёС… РІ РЅР°СЃС‚РѕСЏС‰РµРµ Р·РѕР»РѕС‚Рѕ Рё РґРµРЅРµР¶РЅС‹Рµ РїСЂРёР·С‹!

РџРѕР»СѓС‡Рё Р±РѕРЅСѓСЃ:
рџ’°+5 000 РјРѕРЅРµС‚ РґР»СЏ Р±С‹СЃС‚СЂРѕРіРѕ СЃС‚Р°СЂС‚Р° РІ РїРѕРґР°СЂРѕРє
рџ”Ґ+25 000 РјРѕРЅРµС‚, РµСЃР»Рё Сѓ С‚РµР±СЏ РµСЃС‚СЊ Telegram Premium`;
        }else{
            refMsg = `Get in the game with me: pump your corgi up to billionaire and get tokens to turn them into real gold and cash prizes!

Get bonus:
рџ’°+5,000 coins for a quick start as a gift
рџ”Ґ+25,000 coins if you have Telegram Premium`;
        }
        getUserData(user, is_premium);
        const observer = new MutationObserver((mutationsList, observer) => {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList' || mutation.type === 'subtree') {
                    selectPage($("body"));
                }
            }
        });
        const configOb = {
            childList: true,
            subtree: true
        };
        observer.observe(document.body, configOb);
        if (tg.platform == "tdesktop") {
            $("#dog").click(() => onTap(user));
        }else{
            $("#dog").on("touchstart", () => onTap(user));
        }
        for (var i = 0; i < 20; i++) {
            setTimeout(progressPlus, 350);
        }
    }
    tg.onEvent("backButtonClicked", function () {
        if ($('#rating').length) {
            barba_umd.go("main.html")
        }else if ($('#settings').length) {
            barba_umd.go("rating.html")
        }else if ($('#fortune').length) {
            barba_umd.go("main.html")
        }
    });
    $("#offRew").click(function () {
        $("#lotties1").addClass("active");
        setTimeout(function () {
            const coinsAnim = new DotLottie({
                autoplay: true,
                loop: false,
                canvas: document.getElementById("lotties1"),
                containerClass: "page-coins-anim",
                src: "./files/path/coins left right.lottie"
            });
            coinsAnim.load();
        }, 1000);
        setTimeout(() => $("#lotties1").removeClass("active"), 4000);
    });

    $("body").click(function () {
        const coinsAnim1 = new DotLottie({
            autoplay: true,
            loop: true,
            canvas: document.getElementById("dotlottie-svg"),
            containerClass: "page-coins-anim",
            src: "./files/path/m16urpqp.lottie"
        });
        coinsAnim1.load();
        $("body").off("click");
    });

    if (debugMode) {
        //console.log("test1");
        tg.MainButton.setText("[DebugMode] РћС‡РёСЃС‚РєР° РєРµС€Р°");
        tg.MainButton.show();
        tg.MainButton.onClick(() => {
            // Clear JavaScript cache
            if ('caches' in window) {
                caches.keys().then(function(cacheNames) {
                    cacheNames.forEach(function(cacheName) {
                        caches.delete(cacheName);
                    });
                });
            }

            // Clear HTML cache by reloading the page without cache
            window.location.reload(true); // Forces a reload from the server, ignoring cache
        });
    }

    window.onload = function() {
        //console.log(window.Telegram);
        try {
            window.Telegram.WebApp.expand();
            window.Telegram.WebApp.disableVerticalSwipes();
            window.scrollTo(0, 0);
            $("body").attr("style", "max-height: "+window.Telegram.WebApp.viewportStableHeight+";");
            window.Telegram.WebApp.isClosingConfirmationEnabled = true;
            window.Telegram.WebApp.isVerticalSwipesEnabled = false;
        }catch (err) {
            //console.log(err);
        }
        // window.Telegram.WebApp.MainButton.show();
        // window.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
//     $('*').bind('touchmove touchstart touchend blur change click dblclick error focus focusin focusout hover keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup resize scroll select submit', function(event){
//     event.stopPropagation();
//     event.preventDefault()
// });
        // window.addEventListener("touchstart", (e) => e.preventDefault(), { passive: false });
        // window.addEventListener("touchend", (e) => e.preventDefault(), { passive: false });
        // window.Telegram.WebApp.ready();
        // $("body").trigger("click");
        // window.Telegram.WebApp.onEvent('viewportChanged', () => window.Telegram.WebApp.expand());
        // initAnim();
    };


}

function main() {
    $("#load").attr("style", "display: flex;");
    load();


    $("div").find(".main-page-user-avatar-box").off("click").click(function() {
        barba_umd.go("rating.html");
    });

    $("div").find(".main-page-user-data").off("click").click(function() {
        barba_umd.go("rating.html");
    });

}

function goRating() {

}

$(document).ready(main());