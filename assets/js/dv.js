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
    'translation': 'to shut, close down, lock'}
];


var len_verbs_list = verbs_list.length;
var content = window.document.getElementById("container");
var verb_id;

function generate() {
    verb_id = Math.floor(Math.random() * len_verbs_list);
    form = Math.floor(Math.random() * 3);

    if (form == 0) {
        content.innerHTML = 'Infinitiv: ' + verbs_list[verb_id]['inf'];
    }
    else if (form == 1) {
        content.innerHTML = 'Perfekt: ' + verbs_list[verb_id]['perfect'];
    }
    else {
        content.innerHTML = 'Translation: ' + verbs_list[verb_id]['translation'];
    }
}

function show() {
    console.log('showing', verb_id);
    content.innerHTML = 'Infinitiv: ' + verbs_list[verb_id]['inf'] + '<br>';
    content.innerHTML += 'Perfekt: ' + verbs_list[verb_id]['perfect'] + '<br>';
    content.innerHTML += 'Translation: ' + verbs_list[verb_id]['translation'];
}