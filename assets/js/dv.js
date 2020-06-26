verbs_list = [{
    'inf': 'sein',
    'present': ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'],
    'preterite': ['war', 'warst', 'war', 'waren', 'wart', 'waren'],
    'perfect': 'gewesen',
    'translation': 'to be'
},
{
    'inf': 'schließen',
    'present': ['schließe', 'schließt', 'schließt', 'schließen', 'schließt', 'schließen'],
    'preterite': ['schloss', 'schlossest', 'schloss', 'schlossen', 'schlosst', 'schlossen'],
    'perfect': 'geschlossen',
    'translation': 'to shut, close down, lock'},
    {
        'inf': 'denken',
        'present': ['denke', 'denkst', 'denkt', 'denken', 'denkt', 'denken'],
        'preterite': ['dachte', 'dachtest', 'dachte', 'dachten', 'dachtet', 'dachten'],
        'perfect': 'gedacht',
        'translation': 'to think',
        'preposition': 'an',
        'prepcase': 'Acc.',
    },
        {
        'inf': 'achten',
        'present': ['achte', 'achtest', 'achtet', 'achten', 'achtet', 'achten'],
        'preterite': ['achtete', 'achtetest', 'achtetete', 'achteten', 'achtetet', 'achteten'],
        'perfect': 'geachtet',
        'translation': 'to care about, pay attention to, keep an eye on',
        'preposition': 'auf',
        'prepcase': 'Acc.',
    }
    
];
    // {
    //     'inf': ,
    //     'present': [],
    //     'preterite': [],
    //     'perfect': ,
    //     'translation': ,
    //     'preposition': ,
    //     'prepcase': ,
    // }

ich_list = ['ich', 'du', 'sie/er', 'wir', 'ihr', 'Sie'];

var len_verbs_list = verbs_list.length;
var content = window.document.getElementById("container");
var verb_id;

function generate() {
    verb_id = Math.floor(Math.random() * len_verbs_list);
    form = Math.floor(Math.random() * 3);

    if (form == 0) {
        content.innerHTML = '<u>Infinitiv</u>: ' + verbs_list[verb_id]['inf'];
    }
    else if (form == 1) {
        content.innerHTML = '<u>Perfekt</u>: ' + verbs_list[verb_id]['perfect'];
    }
    else {
        content.innerHTML = '<u>Translation</u>: ' + verbs_list[verb_id]['translation'];
    }
}

function show() {
    content.innerHTML = '<u>Infinitiv</u>: ' + verbs_list[verb_id]['inf'] + '<br>';

    content.innerHTML += '<u>Present</u>: ';
    for (i=0; i<6; i++) {
        content.innerHTML += ich_list[i] + ' ' + verbs_list[verb_id]['present'][i];
        if (i != 5) {
            content.innerHTML += ' | ';
        }
    }
    content.innerHTML += '<br>';

    content.innerHTML += '<u>Perfekt</u>: ' + verbs_list[verb_id]['perfect'] + '<br>';

    content.innerHTML += '<u>Preterite</u>: ';
    for (i=0; i<6; i++) {
        content.innerHTML += ich_list[i] + ' ' + verbs_list[verb_id]['preterite'][i];
        if (i != 5) {
            content.innerHTML += ' | ';
        }
    }
    content.innerHTML += '<br>';

    if ("preposition" in verbs_list[verb_id]) {
        content.innerHTML += '<u>With preposition</u>: ' + verbs_list[verb_id]['inf'] + ' ';
        content.innerHTML += verbs_list[verb_id]['preposition'] + ' <i>(' + verbs_list[verb_id]['prepcase'] + ' case)</i><br>';
    }

    content.innerHTML += '<u>Translation</u>: ' + verbs_list[verb_id]['translation'];
}