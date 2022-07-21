var mass = [];
function checkMassiveLenht(){
    if (mass.length >= 16) {
        mass = [];
        alert("Вы привысили лимиты количества чисел в массиве(15), поэтому он автоматически очищается " +mass );
    }
}
function nullMassive(){
    mass = [];
    alert("Массив пустой")
}
function writeNum() {
    checkMassiveLenht();
    //mass.push(document.getElementById('info').value);
    mass.push(+document.getElementById('info').value);
    document.getElementById('info').value = null;
};

function randGenerate () {
    var amountOfNumbers = +document.getElementById('numbers').value;
    if (amountOfNumbers > 15) {
        alert("Прочитайте внимательнее. Указано до 15 чисел");
    }
    if (amountOfNumbers <= 0) {
        alert("Ты придурка за меня не держи~");
    }
    if (amountOfNumbers <=15 && amountOfNumbers > 0) {
        for (var g = amountOfNumbers; g > 0; g--) {
            var randNumber = Math.floor(Math.random() * 50);
            var randIndex =  Math.random ();
            if (randIndex > 0.5) {
                randNumber = randNumber * -1;
                mass.push(randNumber);
            } else {
                mass.push(randNumber);
            }
        }
        checkMassiveLenht();
        alert("Все числа: "+mass);
    }

};

function showMassive () {
    alert("Все числа: "+mass);
};

function mediumOfNumber() {
    var q = 0;
    var amOfNum = mass.length;
    for (var g = mass.length - 1 ; g >= 0; g--) {
        q = q + mass[g];
    }
    q = q / amOfNum
    alert(q)
};
function extremeNumbers () {
    var amountOfNumbers = +document.getElementById('numbers').value; //3
    var lenghtOfMassive =  mass.length
    var maxNum = -50
    var minNum = 50
    for ( var counter = 0; counter < lenghtOfMassive; counter++) {
        if (mass[counter] > maxNum)
        maxNum = mass[counter] 
    }  
    alert ("Максимальное число:"+ maxNum) 
    for ( var Minn = 0; Minn < lenghtOfMassive; Minn++) {
        if (mass[Minn] < minNum) {
            minNum = mass[Minn]
        }
    }
    alert ("Минимальное число:"+minNum)
};
function nameGenerate () {
    var name =""
    var massOfUpperVowels = ["А","Е","Ё","И","О","У","Ы","Э","Ю","Я"];                                                 //10
    var massOfVowels = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я' ];                                            //10
    var massofUpperConsonants = ["Б","В","Г","Д","Ж","З","Й","К","Л","М","Н","П","Р","С","Т","Ф","Х","Ц","Ч","Ш","Щ"]; //21
    var massofConsonants = ["б","в","г","д","ж","з","й","к","л","м","н","п","р","с","т","ф","х","ц","ч","ш","щ"];      //21
    var randIndexOfNum = Math.floor(Math.random () *4) + 3;
    var randIndexOfFirstLetterChange = Math.random () 
    if (randIndexOfFirstLetterChange > 0.5) {
        var randIndexx = Math.floor(Math.random()* 10);
        name = massOfUpperVowels[randIndexx];
        
    } else {
        var randIndexx = Math.floor(Math.random()* 21);
        name = massofUpperConsonants[randIndexx];
        randIndexOfNum = randIndexOfNum - 1
    };
    for (var i = 0; i < randIndexOfNum; i++) {
        var randIndexForLater = Math.random() 
        if(randIndexForLater > 0.5){
            var randIndexxx = Math.floor(Math.random () * 10);
            name = name + massOfVowels[randIndexxx]
        }else {
            var randIndexxx = Math.floor(Math.random () * 21);
            name = name + massofConsonants[randIndexxx]
        }
    }
    alert(name)
};
function telephoneNumber (){
    var russianIndex = '+7'
    var regionIndexes = ['916','977', '926', '910', '915', '916', '917', '919', '985', '986', '925', '926', '927', '936', '999', '995', 
    '996','958', '901', '968', '980', '983'] //22
    var randIndexForNumber = Math.floor(Math.random()*22)
    var randLetterTelephoneNumberIndex = Math.floor(Math.random()*10000000)
    var letterTelephoneNumber = russianIndex + regionIndexes[randIndexForNumber] + randLetterTelephoneNumberIndex
    alert(letterTelephoneNumber)
}