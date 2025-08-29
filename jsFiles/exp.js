

const exp = (function() {


    var p = {};

    const condition = 1;

    const play = ["play", "watch"][condition];

    const doingOrWatching = ["doing", "watching"][condition];

    const playBool = [true, false][condition];

    jsPsych.data.addProperties({
        condition: play,
    });


   /*
    *
    *   INSTRUCTIONS
    *
    */

    const html = {
        welcome_play: [
            `<div class='parent'>
                <p><strong>Welcome to Wheel of Fortune!</strong></p>
                <p>In Wheel of Fortune, you'll spin a series of prize wheels.</p>
                <p>With each spin, you'll earn tokens.</p>
                <p>Your goal is to earn as many tokens as possible!</p>
            </div>`,
        ],

        welcome_watch: [
            `<div class='parent'>
                <p><strong>Welcome to Wheel of Fortune!</strong></p>
                <p>In Wheel of Fortune, you'll observe a series of spinning prize wheels.</p>
                <p>Each time a prize wheel spins, you'll earn tokens.</p>
                <p>Your goal is to earn as many tokens as possible!</p>
            </div>`,
        ],

        how_to_earn: [
            `<div class='parent'>
                <p>The more tokens you earn, the better your chances of winning a <strong>$100.00 bonus prize</strong>.</p>
                <p>The tokens you earn will be entered into a lottery, and if one of your tokens is drawn, you'll win $100.00. 
                To maximize your chances of winning a $100.00 bonus, you'll need to earn as many tokens as possible.</p>
            </div>`,

            `<div class='parent'>
                <p>Each wheel is divided into four wedges, like this:</p>
                <img src="./img/arrow-up.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>When a wheel stops spinning, one of the wedges will activate.</p>
                <p>The activated wedge will turn black, like this:</p>
                <img src="./img/standard-outcome.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>The number on the activated wedge is added to your total score.</p>
                <p>In this example, you'd gain 11 tokens.</p>
                <img src="./img/standard-outcome.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>Typically, the wedge that lands on the arrow will activate.</p>
                <p>This is called a "standard outcome."</p>
                <p>Below is an example of a standard outcome.</p>
                <img src="./img/standard-outcome.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>Occasionally, a random wedge will activate instead.</p>
                <p>This is called a "random outcome."</p>
                <p>Here's an example of a random outcome:</p>
                <img src="./img/random-outcome.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>The chance of a standard outcome changes from wheel to wheel.</p>
            </div>`,

            `<div class='parent'>
                <p>The chance of a standard outcome is displayed before each wheel.</p>
                <p>For example, this message means that the next wheel has a 75% chance of a standard outcome and a 25% chance of a random outcome.</p>
                <img src="./img/outcome-75.png" style="width:70%; height:70%">      
            </div>`,

            `<div class='parent'>
                <p>After each spin, the arrow at the center of the wheel will change directions.</p>
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point up:</p>
                <img src="./img/arrow-up.png" style="width:50%; height:50%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point right:</p>
                <img src="./img/arrow-right.png" style="width:50%; height:50%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point left:</p>
                <img src="./img/arrow-left.png" style="width:50%; height:50%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point down:</p>
                <img src="./img/arrow-down.png" style="width:50%; height:50%">      
            </div>`
        ],

        how_to_spin_play: [
            `<div class='parent'>
                <p>To spin a prize wheel, just grab it with your cursor and give it a spin!
                <br>Watch the animation below to see how it's done.</p>
                <img src="./img/spin-${play}-gif.gif" style="width:60%; height:60%">
            </div>`,

            `<div class='parent'>
                <p>Throughout Wheel of Fortune, you'll answer questions about your feelings.</p>
                <p>Specifically, you'll report how <strong>immersed and engaged</strong> you feel while spinning each wheel,
                as well as how <strong>happy</strong> you currently feel.</p>
            </div>`,      

            `<div class='parent'>
                <p>You're ready to start playing Wheel of Fortune!</p>
                <p>Continue to the next screen to begin.</p>
            </div>`,      
        ],

        how_to_spin_watch: [
            `<div class='parent'>
                <p>Each prize wheel spins automatically.
                <br>Watch the animation below to see an example.</p>
                <img src="./img/spin-${play}-gif.gif" style="width:60%; height:60%">
            </div>`,

            `<div class='parent'>
                <p>Throughout Wheel of Fortune, you'll answer questions about your feelings.</p>
                <p>Specifically, you'll report how <strong>immersed and engaged</strong> you feel during each round of Wheel of Fortune,
                as well as how <strong>happy</strong> you currently feel.</p>
            </div>`,      

            `<div class='parent'>
                <p>You're ready to start playing Wheel of Fortune!</p>
                <p>Continue to the next screen to begin.</p>
            </div>`,      
        ],

        postTask: [
            `<div class='parent'>
                <p>Wheel of Fortune is now complete!</p>
                <p>To finish this study, please continue to answer a few final questions.</p>
            </div>`
        ],
    };

    p.consent = {
        type: jsPsychExternalHtml,
        url: "./html/consent.html",
        cont_btn: "advance",
    };

    const intro = {
        type: jsPsychInstructions,
        pages: [[html.welcome_play, html.welcome_watch][condition], ...html.how_to_earn],
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
    };

    let correctAnswers = [`100%`, `75%`, `50%`, `25%`, `Earn as many tokens as possible.`];

    const errorMessage = {
        type: jsPsychInstructions,
        pages: [`<div class='parent'><p>You provided the wrong answer.<br>To make sure you understand the game, please continue to re-read the instructions.</p></div>`],
        show_clickable_nav: true,
        allow_keys: false,
    };

    const attnChk = {
        type: jsPsychSurveyMultiChoice,
        preamble: `<div class='parent'>
            <p>Please answer the following questions.</p>
            </div>`,
        questions: [
            {
                prompt: `If you land on a 9 and there's a 100% chance of a standard outcome, what are your chances of earning 9 tokens?`, 
                name: `attnChk1`, 
                options: ['100%', '75%', '50%', '25%'],
            },
            {
                prompt: `If you land on a 9 and there's a 75% chance of a standard outcome, what are your chances of earning 9 tokens?`, 
                name: `attnChk2`, 
                options: ['100%', '75%', '50%', '25%'],
            },
            {
                prompt: `If you land on a 9 and there's a 50% chance of a standard outcome, what are your chances of earning 9 tokens?`, 
                name: `attnCh3`, 
                options: ['100%', '75%', '50%', '25%'],
            },
            {
                prompt: `If you land on a 9 and there's a 25% chance of a standard outcome, what are your chances of earning 9 tokens?`, 
                name: `attnCh4`, 
                options: ['100%', '75%', '50%', '25%'],
            },
            {
                prompt: `What is your goal?`, 
                name: `attnChk5`, 
                options: [`Get as many standard outcomes as possible.`, `Get as many random outcomes as possible.`, `Earn as many tokens as possible.`],
            },
        ],
        scale_width: 500,
        on_finish: (data) => {
              const totalErrors = getTotalErrors(data, correctAnswers);
              data.totalErrors = totalErrors;
        },
    };

    const conditionalNode = {
      timeline: [errorMessage],
      conditional_function: () => {
        const fail = jsPsych.data.get().last(1).select('totalErrors').sum() > 0 ? true : false;
        return fail;
      },
    };

    p.instLoop = {
      timeline: [intro, attnChk, conditionalNode],
      loop_function: () => {
        const fail = jsPsych.data.get().last(2).select('totalErrors').sum() > 0 ? true : false;
        return fail;
      },
    };

    p.postIntro = {
        type: jsPsychInstructions,
        pages: [html.how_to_spin_play, html.how_to_spin_watch][condition],
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
    };

    
   /*
    *
    *   TASK
    *
    */

    function makeFlipArray(n, nTotal) {
        const arr = Array(n).fill(true).concat(Array(nTotal - n).fill(false));
        return jsPsych.randomization.repeat(arr, 1)
    };

    // define each wedge
    const wedges = {
        two: {color: "#E69F00", font: 'white', label:"2", points: 2},
        three: {color: "#56B4E9", font: 'white', label:"3", points: 3},
        four: {color: "#009E73", font: 'white', label:"4", points: 4},
        five: {color: "#F0E442", font: 'white', label:"5", points: 5},
        six: {color: "#0072B2", font: 'white', label:"6", points: 6},
        seven: {color: "#D55E00", font: 'white', label:"7", points: 7},
        eight: {color: "#CC79A7", font: 'white', label:"8", points: 8},
        nine: {color: "#999999", font: 'white', label:"9", points: 9},
    };

    function shuffleColorsInPlace(wedgesObj) {
        const shuffledColors = jsPsych.randomization.repeat(Object.values(wedgesObj).map(w => w.color), 1);
        Object.keys(wedgesObj).forEach((key, i) => { wedgesObj[key].color = shuffledColors[i] });
    };

    shuffleColorsInPlace(wedges);

    // define each wheel
    const wheels = [
        {sectors: [ wedges.two, wedges.three, wedges.four, wedges.five ],   wheel_id: 1,  n_flip: 0, label: "100%", ev: 3.5, cardinality: 4, mi: 2},
        {sectors: [ wedges.four, wedges.five, wedges.six, wedges.seven ],   wheel_id: 2,  n_flip: 0, label: "100%", ev: 5.5, cardinality: 4, mi: 2},
        {sectors: [ wedges.six, wedges.seven, wedges.eight, wedges.nine ],  wheel_id: 3,  n_flip: 0, label: "100%", ev: 7.5, cardinality: 4, mi: 2},
        {sectors: [ wedges.two, wedges.five, wedges.two, wedges.five ],     wheel_id: 4,  n_flip: 0, label: "100%", ev: 3.5, cardinality: 2, mi: 2},
        {sectors: [ wedges.four, wedges.seven, wedges.four, wedges.seven ], wheel_id: 5,  n_flip: 0, label: "100%", ev: 5.5, cardinality: 2, mi: 2},
        {sectors: [ wedges.six, wedges.nine, wedges.six, wedges.nine ],     wheel_id: 6,  n_flip: 0, label: "100%", ev: 7.5, cardinality: 2, mi: 2},

        {sectors: [ wedges.two, wedges.three, wedges.four, wedges.five ],   wheel_id: 7,  n_flip: 2, label: "80%", ev: 3.5, cardinality: 4, mi: 2},
        {sectors: [ wedges.four, wedges.five, wedges.six, wedges.seven ],   wheel_id: 8,  n_flip: 2, label: "80%", ev: 5.5, cardinality: 4, mi: 2},
        {sectors: [ wedges.six, wedges.seven, wedges.eight, wedges.nine ],  wheel_id: 9,  n_flip: 2, label: "80%", ev: 7.5, cardinality: 4, mi: 2},
        {sectors: [ wedges.two, wedges.five, wedges.two, wedges.five ],     wheel_id: 10, n_flip: 2, label: "80%", ev: 3.5, cardinality: 2, mi: 2},
        {sectors: [ wedges.four, wedges.seven, wedges.four, wedges.seven ], wheel_id: 11, n_flip: 2, label: "80%", ev: 5.5, cardinality: 2, mi: 2},
        {sectors: [ wedges.six, wedges.nine, wedges.six, wedges.nine ],     wheel_id: 12, n_flip: 2, label: "80%", ev: 7.5, cardinality: 2, mi: 2},

        {sectors: [ wedges.two, wedges.three, wedges.four, wedges.five ],   wheel_id: 13, n_flip: 4, label: "60%", ev: 3.5, cardinality: 4, mi: 2},
        {sectors: [ wedges.four, wedges.five, wedges.six, wedges.seven ],   wheel_id: 14, n_flip: 4, label: "60%", ev: 5.5, cardinality: 4, mi: 2},
        {sectors: [ wedges.six, wedges.seven, wedges.eight, wedges.nine ],  wheel_id: 15, n_flip: 4, label: "60%", ev: 7.5, cardinality: 4, mi: 2},
        {sectors: [ wedges.two, wedges.five, wedges.two, wedges.five ],     wheel_id: 16, n_flip: 4, label: "60%", ev: 3.5, cardinality: 2, mi: 2},
        {sectors: [ wedges.four, wedges.seven, wedges.four, wedges.seven ], wheel_id: 17, n_flip: 4, label: "60%", ev: 5.5, cardinality: 2, mi: 2},
        {sectors: [ wedges.six, wedges.nine, wedges.six, wedges.nine ],     wheel_id: 18, n_flip: 4, label: "60%", ev: 7.5, cardinality: 2, mi: 2},
    ];

    let scoreTracker = 0; // track current score

    let round = 1;  // track current round

    let flipArray;

    const preSpin = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: function() {
            let pct = jsPsych.timelineVariable('label');
            let html = `<div class='pFlip-style'>
                            <p><span style='font-size:100px'><strong>${pct}</strong></span>
                            <br><br><br>chance of standard outcome</p>
                        </div>`;
            return html;
        },
        choices: "NO_KEYS",
        trial_duration: 5000,
        response_ends_trial: false,
        data: {wheel_id: jsPsych.timelineVariable('wheel_id'), ev: jsPsych.timelineVariable('ev'), cardinality: jsPsych.timelineVariable('cardinality'), n_flip: jsPsych.timelineVariable('n_flip'), mi: jsPsych.timelineVariable('mi')},
        on_finish: function(data) {
            data.round = round;
            flipArray = makeFlipArray(jsPsych.timelineVariable('n_flip'), 10);
        }
    };

    const spin = {
        type: jsPsychCanvasButtonResponse,
        stimulus: function(c, spinnerData) {
            let flip = flipArray.pop()
            createActivatorWheel(c, spinnerData, scoreTracker, jsPsych.timelineVariable('sectors'), flip);
        },
        canvas_size: [500, 500],
        score: function() {
            return scoreTracker
        },
        data: {wheel_id: jsPsych.timelineVariable('wheel_id'), ev: jsPsych.timelineVariable('ev'), cardinality: jsPsych.timelineVariable('cardinality'), n_flip: jsPsych.timelineVariable('n_flip'), mi: jsPsych.timelineVariable('mi')},
        on_finish: function(data) {
            data.round = round;
            scoreTracker = data.score
        }
    };

    const feedback = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: () => {
            const last = jsPsych.data.get().last(1).values()[0]; // spin trial
            const pts = last.award_score;     // <-- awarded (reliability-adjusted)
            const col = last.award_color;      // <-- matching color
            return `
              <div class="center">
                <div style="font-size:80px; font-weight:800; line-height:80px; color:${col}">
                  +${pts}<br>Tokens
                </div>
              </div>
            `;
        },
        choices: "NO_KEYS",
        trial_duration: 1750,
        data: {wheel_id: jsPsych.timelineVariable('wheel_id'), ev: jsPsych.timelineVariable('ev'), cardinality: jsPsych.timelineVariable('cardinality'), n_flip: jsPsych.timelineVariable('n_flip'), mi: jsPsych.timelineVariable('mi')},
    };

    // Choice loop
    const spinLoop = {
        timeline: [spin, feedback],
        repetitions: 10,
    };

    // trial: flow DV
    const flowMeasure = {
        type: jsPsychSurveyLikert,
        questions: [
            {prompt: `During the last round of Wheel of Fortune,<br>how <b>immersed</b> and <b>engaged</b> did you feel in what you were ${doingOrWatching}?`,
            name: `flow`,
            labels: ['0<br>A little', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>Extremely']},
        ],
        randomize_question_order: false,
        scale_width: 600,
        data: {wheel_id: jsPsych.timelineVariable('wheel_id'), ev: jsPsych.timelineVariable('ev'), cardinality: jsPsych.timelineVariable('cardinality'), n_flip: jsPsych.timelineVariable('n_flip'), mi: jsPsych.timelineVariable('mi')},
        on_finish: function(data) {
            data.round = round;
            let scoreArray = jsPsych.data.get().select('score').values;
            let outcomesArray = jsPsych.data.get().select('outcomes').values;
            data.score = scoreArray[scoreArray.length - 1];
            data.outcomes = outcomesArray[outcomesArray.length - 1];
            saveSurveyData(data);
        }
    };

    const happinessMeasure = {
        type: jsPsychSurveyMultiChoice,
        questions: [
            {
                prompt: `How <b>happy</b> are you right now?`, 
                name: `happiness`, 
                options: ['10 (Very Happy)', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0 (Very Unhappy)'],
            },
        ],
        scale_width: 500,
        data: {wheel_id: jsPsych.timelineVariable('wheel_id'), ev: jsPsych.timelineVariable('ev'), cardinality: jsPsych.timelineVariable('cardinality'), n_flip: jsPsych.timelineVariable('n_flip'), mi: jsPsych.timelineVariable('mi')},
        on_finish: (data) => {
            data.round = round;
            let scoreArray = jsPsych.data.get().select('score').values;
            let outcomesArray = jsPsych.data.get().select('outcomes').values;
            data.score = scoreArray[scoreArray.length - 2];
            data.outcomes = outcomesArray[outcomesArray.length - 2];
            saveSurveyData(data);
            round++;
        },
    };

    // timeline: main task
    p.task = {
        timeline: [preSpin, spinLoop, flowMeasure, happinessMeasure],
        repetitions: 1,
        timeline_variables: wheels,
        randomize_order: true,
    };

   /*
    *
    *   Demographics
    *
    */

    p.demographics = (function() {


        const taskComplete = {
            type: jsPsychInstructions,
            pages: html.postTask,
            show_clickable_nav: true,
            post_trial_gap: 500,
        };

        const gender = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>What is your gender?</p>',
            choices: ['Male', 'Female', 'Other'],
            on_finish: (data) => {
                data.gender = data.response;
            }
        };

        const age = {
            type: jsPsychSurveyText,
            questions: [{prompt: "Age:", name: "age"}],
            on_finish: (data) => {
                saveSurveyData(data); 
            },
        }; 

        const ethnicity = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>What is your race?</p>',
            choices: ['White / Caucasian', 'Black / African American','Asian / Pacific Islander', 'Hispanic', 'Native American', 'Other'],
            on_finish: (data) => {
                data.ethnicity = data.response;
            }
        };

        const english = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>Is English your native language?:</p>',
            choices: ['Yes', 'No'],
            on_finish: (data) => {
                data.english = data.response;
            }
        };  

        const finalWord = {
            type: jsPsychSurveyText,
            questions: [{prompt: "Questions? Comments? Complains? Provide your feedback here!", rows: 10, columns: 100, name: "finalWord"}],
            on_finish: (data) => {
                saveSurveyData(data); 
            },
        }; 

        const demos = {
            timeline: [taskComplete, gender, age, ethnicity, english, finalWord]
        };

        return demos;

    }());


   /*
    *
    *   SAVE DATA
    *
    */

    p.save_data = {
        type: jsPsychPipe,
        action: "save",
        experiment_id: "9paGFcUANmDw",
        filename: filename,
        data_string: ()=>jsPsych.data.get().csv()
    };

    return p;

}());

const timeline = [exp.task, exp.consent, exp.instLoop, exp.postIntro, exp.task, exp.demographics, exp.save_data];

jsPsych.run(timeline);
