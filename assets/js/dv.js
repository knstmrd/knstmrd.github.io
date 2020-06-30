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
        'translation': 'to think, have an opinion of something, remember something',
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
    },
        {
        'inf': 'entfernen',
        'present': ['entferne', 'entfernst', 'entfernt', 'entfernen', 'entfernt', 'entfernen'],
        'preterite': ['entfernte', 'entferntest', 'entfernte', 'entfernten', 'entferntet', 'entfernten'],
        'perfect': 'entfernt',
        'translation': 'to remove, detach, diverge/deviate (refl.), leave a place - remove oneself (refl.)'
    },
        {
        'inf': 'bleiben',
        'present': ['bleibe', 'bleibst', 'bleibt', 'bleiben', 'bleibt', 'bleiben'],
        'preterite': ['bliebe', 'bliebst', 'bliebt', 'blieben', 'bliebt', 'blieben'],
        'perfect': 'geblieben',
        'translation': 'to stay, to remain, to stick with'
        // 'preposition': ,
        // 'prepcase': ,
    },
        {
        'inf': 'widerspiegelen',
        'present': ['spiegele wider', 'spiegelst wider', 'spiegelt wider', 'spiegelen wider', 'spiegelt wider', 'spiegelen wider'],
        'preterite': ['spiegelte wider', 'spiegeltest wider', 'spiegelte wider', 'spiegelten wider', 'spiegeltet wider', 'spiegelten wider'],
        'perfect': 'wiedergespiegelt',
        'translation': 'to reflect, mirror'
        // 'preposition': ,
        // 'prepcase': ,
    },
        {
        'inf': 'zwingen',
        'present': ['zwinge', 'zwingst', 'zwingt', 'zwingen', 'zwingt', 'zwingen'],
        'preterite': ['zwang', 'zwangst', 'zwang', 'zwangen', 'zwangt', 'zwangen'],
        'perfect': 'gezwungen',
        'translation': 'to force, compel, necessitate',
        // 'preposition': ,
        // 'prepcase': ,
    },
        {
        'inf': 'werten',
        'present': ['werte', 'wertest', 'wertet', 'werten', 'wertet', 'werten'],
        'preterite': ['wertete', 'wertetest', 'wertetet', 'werteten', 'wertetet', 'werteten'],
        'perfect': 'gewertet',
        'translation': 'to rate, grade',
        // 'preposition': ,
        // 'prepcase': ,
    },
        {
        'inf': 'bewerten',
        'present': ['bewerte', 'wertest', 'wertet', 'werten', 'wertet', 'werten'],
        'preterite': ['bewertete', 'bewertetest', 'bewertetet', 'bewerteten', 'bewertetet', 'bewerteten'],
        'perfect': 'bewertet',
        'translation': 'to evaluate, assess',
        // 'preposition': ,
        // 'prepcase': ,
    }
    //     {
    //     'inf': 'kaufen',
    //     'present': ['achte', 'achtest', 'achtet', 'achten', 'achtet', 'achten'],
    //     'preterite': ['achtete', 'achtetest', 'achtetete', 'achteten', 'achtetet', 'achteten'],
    //     'perfect': 'geachtet',
    //     'translation': 'to care about, pay attention to, keep an eye on',
    //     'preposition': 'auf',
    //     'prepcase': 'Acc.',
    // }
    
];


prefixes = [
    {'verb': 'denken',
     'prefixes': [
         {'prefix': 'um',
          'separable': 1,
          'translation': 'to rethink'
        },
        {'prefix': 'aus',
         'separable': 1,
         'translation': 'to come up with, think up, make up'
        },
        {'prefix': 'nach',
         'separable': 1,
         'translation': 'to think, reflect, consider',
         'preposition': 'über',
          'prepcase': 'Acc.',
          'link': 'https://yourdailygerman.com/meaning-nachdenken/'
        }
     ]},
    {'verb': 'zwingen',
     'prefixes': [
         {'prefix': 'auf',
          'separable': 1,
          'translation': 'to force upon'
        },
     ]},

    {'verb': 'werten',
     'prefixes': [
         {'prefix': 'auf',
          'separable': 1,
          'translation': 'to upgrade, enhance, improve'
        },
         {'prefix': 'ab',
          'separable': 1,
          'translation': 'to devaluate, denigrate, devalue, depreciate'
        },
         {'prefix': 'aus',
          'separable': 1,
          'translation': 'to evaluate, assess, analyze'
        },
     ]},
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
var verb_key_id = {};

for (i=0; i<len_verbs_list; i++) {
    verb_key_id[verbs_list[i]['inf']] = i;
}

var total_prefixes = 0;
var prefix_offsets = [];

for (i=0; i<prefixes.length; i++) {
    total_prefixes += prefixes[i]['prefixes'].length;
    prefix_offsets.push(prefixes[i]['prefixes'].length);
}

for (i=1; i<prefix_offsets.length; i++) {
    prefix_offsets[i] += prefix_offsets[i-1];
}

// console.log(total_prefixes);
// console.log(prefix_offsets);

function generate() {
    verb_id = Math.floor(Math.random() * (len_verbs_list + total_prefixes));

    helpful_info = 0;
    help_links = '';

    if (verb_id >= len_verbs_list) {
        verb_id -= len_verbs_list;
        tmp_prefix_id = verb_id;
        found_prefix_id = 0;

        prefix_array_id = 0;

        // something something 1 offset

        console.log('tmp id', tmp_prefix_id);
        if (tmp_prefix_id < prefix_offsets[0]) {
            prefix_array_id = prefixes[0]['verb'];
            found_prefix_id = 0;
            // console.log('found1', prefix_array_id);
        }
        else {

            for (i=0; i<prefix_offsets.length-1; i++) {
                if ((tmp_prefix_id >= prefix_offsets[i]) && (tmp_prefix_id < prefix_offsets[i + 1])) {
                    prefix_array_id = prefixes[i + 1]['verb'];
                    found_prefix_id = i + 1;
                    // console.log('found2', prefix_array_id);
                    break;
                }
            }
        }

        if (found_prefix_id > 0) {
            tmp_prefix_id -= prefix_offsets[found_prefix_id - 1];
        }

        // console.log('id', prefix_array_id);
        // console.log('vid', verb_key_id);
        verb_id = verb_key_id[prefix_array_id];




        // console.log('vid final', verb_id);
        // verb_id = verb_key_id[]
        console.log(found_prefix_id, tmp_prefix_id);

        if (prefixes[found_prefix_id]['prefixes'][tmp_prefix_id]['separable'] == 1) {

            add_str_inf_perf = prefixes[found_prefix_id]['prefixes'][tmp_prefix_id]['prefix'];
            add_str = '';
            add_str2 = ' ' + prefixes[found_prefix_id]['prefixes'][tmp_prefix_id]['prefix'];
        }
        else {
            add_str_inf_perf = prefixes[found_prefix_id]['prefixes'][tmp_prefix_id]['prefix'];
            add_str = prefixes[found_prefix_id]['prefixes'][tmp_prefix_id]['prefix'];
            add_str2 = '';
        }

        if ("preposition" in prefixes[found_prefix_id]['prefixes'][tmp_prefix_id]) {
            show_prep = 1;
            prep = prefixes[found_prefix_id]['prefixes'][tmp_prefix_id]['preposition'];
            prep_case = prefixes[found_prefix_id]['prefixes'][tmp_prefix_id]['prepcase'];
        }
        else {
            show_prep = 0;
        }
        // if 
        translation_str = prefixes[found_prefix_id]['prefixes'][tmp_prefix_id]['translation'];

        if ("link" in prefixes[found_prefix_id]['prefixes'][tmp_prefix_id]) {
            helpful_info += 1;
            help_links += '<br><a href="' + prefixes[found_prefix_id]['prefixes'][tmp_prefix_id]['link'] + '" target="_blank">Helpful info</a>';
            // if ('link' in verbs_list[verb_id]) {
            //     content.innerHTML += '<br><a href="' + verbs_list[verb_id] + '">Helpful info</a>'
            // }
        }
    }
    else {
        add_str_inf_perf = '';
        add_str = '';
        add_str2 = '';
        translation_str = verbs_list[verb_id]['translation'];
        if ("preposition" in verbs_list[verb_id]) {
            show_prep = 1;
            prep = verbs_list[verb_id]['preposition'];
            prep_case = verbs_list[verb_id]['prepcase'];
        }
        else {
            show_prep = 0;
        }
    }

    if ("link" in  verbs_list[verb_id]) {
        helpful_info += 1;

        if (helpful_info == 1) {
        help_links += '<br><a href="' + prefixes[found_prefix_id]['prefixes'][tmp_prefix_id]['link'] + '" target="_blank">Helpful info</a>';
        }
        else {
            help_links += '; <a href="' + verbs_list[verb_id]['link'] + '" target="_blank">Helpful info</a>';
        }
        // if ('link' in verbs_list[verb_id]) {
        //     content.innerHTML += '<br><a href="' + verbs_list[verb_id] + '">Helpful info</a>'
        // }
    }


    form = Math.floor(Math.random() * 3);


    if (form == 0) {
        content.innerHTML = '<u>Infinitiv</u>: ' + add_str_inf_perf + verbs_list[verb_id]['inf'];
    }
    else if (form == 1) {
        content.innerHTML = '<u>Perfekt</u>: ' + add_str_inf_perf + verbs_list[verb_id]['perfect'];
    }
    else {
        content.innerHTML = '<u>Translation</u>: ' + translation_str;
    }
}

function show() {
    content.innerHTML = '<u>Infinitiv</u>: ' + add_str_inf_perf + verbs_list[verb_id]['inf'] + '<br><br>';

    content.innerHTML += '<u>Present</u>: ';
    for (i=0; i<6; i++) {
        content.innerHTML += ich_list[i] + ' ' + add_str + verbs_list[verb_id]['present'][i] + add_str2;
        if (i != 5) {
            content.innerHTML += ' | ';
        }
    }
    content.innerHTML += '<br><br>';

    content.innerHTML += '<u>Perfekt</u>: ' + add_str_inf_perf + verbs_list[verb_id]['perfect'] + '<br><br>';

    content.innerHTML += '<u>Preterite</u>: ';
    for (i=0; i<6; i++) {
        content.innerHTML += ich_list[i] + ' ' + add_str + verbs_list[verb_id]['preterite'][i] + add_str2;
        if (i != 5) {
            content.innerHTML += ' | ';
        }
    }
    content.innerHTML += '<br><br>';


    if (show_prep == 1) {
        content.innerHTML += '<u>With preposition</u>: ' + add_str_inf_perf + verbs_list[verb_id]['inf'] + ' ';
        content.innerHTML += prep + ' <i>(' + prep_case + ' case)</i><br>';
    }

    content.innerHTML += '<u>Translation</u>: ' + translation_str;

    if (helpful_info > 0) {
        content.innerHTML += help_links;
    }
}