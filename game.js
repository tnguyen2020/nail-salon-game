// ═══════════════════════════════════════════
// VOCABULARY DATABASE
// ═══════════════════════════════════════════
var VOCAB_DB = {
  "appointment":       { def:"A scheduled time to visit the salon.",                        ex:'"I have an appointment at 3pm under Sarah."' },
  "walk-in":           { def:"Coming to the salon WITHOUT an appointment.",                 ex:'"I\'m a walk-in — do you have availability?"' },
  "availability":      { def:"Open/free time slots at the salon.",                          ex:'"Do you have any availability right now?"' },
  "book":              { def:"To schedule or reserve an appointment.",                      ex:'"Can I book an appointment for Saturday?"' },
  "welcome":           { def:"A friendly greeting when someone arrives.",                   ex:'"Welcome to Pretty Nails!"' },
  "recommended":       { def:"Suggested by someone because it is good.",                    ex:'"A friend recommended your salon."' },
  "don't mind":        { def:"To be okay or fine with something.",                          ex:'"I don\'t mind waiting 20 minutes."' },
  "manicure":          { def:"A nail care service for your HANDS.",                         ex:'"I\'d like a regular manicure, please."' },
  "pedicure":          { def:"A nail care service for your FEET.",                          ex:'"Can I get a pedicure today?"' },
  "full set":          { def:"A complete new set of artificial acrylic nails.",             ex:'"I\'d like a full set of acrylics."' },
  "acrylic":           { def:"A popular type of artificial nail.",                          ex:'"Do you do acrylic nails?"' },
  "gel":               { def:"Polish cured under UV light. Lasts 2-3 weeks.",              ex:'"I\'ll go with gel — I want it to last longer."' },
  "dip powder":        { def:"A nail system using powder. Strong and long-lasting.",        ex:'"I\'d like dip powder nails, please."' },
  "fill-in":           { def:"Touching up grown-out acrylic nails. Also called fill.",      ex:'"I need a fill-in — they\'ve grown out."' },
  "soak off":          { def:"Removing gel or dip nails using acetone.",                    ex:'"I\'d like to soak off my gel first."' },
  "grown out":         { def:"When nails have grown away from where product was applied.",  ex:'"My acrylics have grown out."' },
  "What's included":   { def:"Asking what is part of a service or package.",               ex:'"What\'s included in the deluxe pedicure?"' },
  "I'll go with":      { def:"A natural way to say I choose or I decide.",                  ex:'"I\'ll go with gel, please."' },
  "coffin":            { def:"Nail shape — long with a flat squared-off tip.",             ex:'"Can I get coffin shape, please?"' },
  "almond":            { def:"Nail shape — oval with a slightly pointed tip.",             ex:'"I\'d like almond shape."' },
  "stiletto":          { def:"Nail shape — very long and sharply pointed.",                ex:'"Stiletto please — I love them sharp!"' },
  "square":            { def:"Nail shape — flat across top with sharp corners.",           ex:'"Square shape, please."' },
  "oval":              { def:"Nail shape — rounded on all sides.",                         ex:'"Oval would look elegant."' },
  "round":             { def:"Nail shape — gently curved, natural looking.",               ex:'"Just a round shape, please."' },
  "medium":            { def:"A size between short and long.",                              ex:'"Medium length — not too long, not too short."' },
  "past my fingertip": { def:"Slightly longer than the end of your finger.",               ex:'"Just a little past my fingertip, please."' },
  "shade":             { def:"A specific variation of a color.",                            ex:'"Which shade of pink do you have?"' },
  "ombre":             { def:"Two colors that gradually fade into each other.",            ex:'"I\'d love an ombre design."' },
  "French tip":        { def:"Classic style — white tip on a natural or pink base.",      ex:'"Can I get a classic French tip?"' },
  "glitter":           { def:"Sparkly particles added to nail polish.",                     ex:'"Can you add some glitter on top?"' },
  "chrome":            { def:"A metallic mirror-like finish on nails.",                     ex:'"I\'d like a chrome finish."' },
  "matte":             { def:"A finish with NO shine — flat and modern looking.",           ex:'"I\'d like matte please."' },
  "glossy":            { def:"A shiny high-shine finish.",                                  ex:'"Can I get a glossy top coat?"' },
  "rhinestones":       { def:"Small jewel-like gems placed on nails.",                     ex:'"Can you add some rhinestones?"' },
  "accent nail":       { def:"One nail with a special design different from the others.",  ex:'"Can my ring finger be an accent nail?"' },
  "solid color":       { def:"One plain single color on all nails.",                        ex:'"Just solid color today."' },
  "total":             { def:"The final amount of money to pay.",                           ex:'"Your total comes to \$55."' },
  "tip":               { def:"Extra money given for good service.",                         ex:'"Is the tip included?"' },
  "gratuity":          { def:"The formal word for tip.",                                    ex:'"Gratuity is not included."' },
  "receipt":           { def:"A paper showing what you paid.",                              ex:'"Can I get a receipt, please?"' },
  "cash":              { def:"Physical paper money and coins.",                             ex:'"Do you take cash?"' },
  "card":              { def:"Debit or credit card payment.",                               ex:'"Can I pay with card?"' },
  "Zelle":             { def:"A popular US app for sending money instantly.",               ex:'"Do you accept Zelle?"' },
  "Venmo":             { def:"A popular US payment app.",                                   ex:'"Can I pay through Venmo?"' },
  "included":          { def:"Already part of the price — no extra charge.",               ex:'"Is the tip included in the price?"' },
  "additional charge": { def:"Extra money added on top of the base price.",                ex:'"Is there an additional charge for card?"' }
};

// ═══════════════════════════════════════════
// GAME DATA — ALL 5 ROUNDS
// ═══════════════════════════════════════════
var ROUNDS = [
  {
    id:1, title:"Greeting & Welcome", icon:"🚪",
    vocab:["appointment","walk-in","availability","welcome","book","recommended","don't mind"],

    // ── CUSTOMER questions ──────────────────────
    customerQuestions:[
      {
        scene:"Scene 1 — Walking In", icon:"🚪", title:"Entering the Salon",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Hi! Welcome to Pretty Nails Salon! How can I help you today?" }
        ],
        prompt:"You just walked in. What is the BEST natural English response?",
        options:[
          { text:'"Hi! I\'d like to get a manicure today, please!"',                              correct:true  },
          { text:'"Yes, nail please."',                                                            correct:false },
          { text:'"I want beautiful nail."',                                                       correct:false },
          { text:'"Nail shop good."',                                                              correct:false }
        ],
        feedback:"Great! Always greet back and clearly state what service you want. Very professional and polite!",
        tip:"💡 Use 'I'd like to...' + the service name. Example: 'I'd like to get a manicure, please.'"
      },
      {
        scene:"Scene 1 — Appointment", icon:"📅", title:"No Appointment",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Do you have an appointment today?" }
        ],
        prompt:"You did NOT make an appointment. What do you say?",
        options:[
          { text:'"No, I\'m a walk-in. Do you have any availability right now?"', correct:true  },
          { text:'"No appointment. I am here now."',                              correct:false },
          { text:'"Yes, I have appointment."',                                    correct:false },
          { text:'"No. I just came."',                                            correct:false }
        ],
        feedback:'"Walk-in" means no appointment. "Availability" = open time slots. Very natural!',
        tip:"💡 'Walk-in' = no appointment. 'Do you have availability?' is very polite and professional!"
      },
      {
        scene:"Scene 1 — Wait Time", icon:"⏳", title:"Happy to Wait",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"The wait is about 20 minutes. Is that okay?" }
        ],
        prompt:"You are fine with waiting. How do you respond?",
        options:[
          { text:'"That\'s totally fine! I don\'t mind waiting at all."', correct:true  },
          { text:'"Yes wait is okay."',                                    correct:false },
          { text:'"OK I wait here."',                                      correct:false },
          { text:'"20 minute is good."',                                   correct:false }
        ],
        feedback:'"That\'s totally fine!" and "I don\'t mind" are very natural American expressions!',
        tip:"💡 'I don't mind' = I am okay with it. Use this phrase in many daily situations!"
      },
      {
        scene:"Scene 1 — Meeting Tech", icon:"🤝", title:"Technician Says Hello",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Jenny", text:"Hi! I'm Jenny, I'll be your nail tech today. Nice to meet you!" }
        ],
        prompt:"How do you respond to Jenny's friendly greeting?",
        options:[
          { text:'"Nice to meet you too, Jenny! I\'m really excited to be here!"', correct:true  },
          { text:'"Hello Jenny. Do my nail now."',                                  correct:false },
          { text:'"OK hi."',                                                         correct:false },
          { text:'"Jenny good name."',                                               correct:false }
        ],
        feedback:"Always say 'Nice to meet you too!' and use their name. Builds a great relationship!",
        tip:"💡 In US salons, techs introduce themselves. Using their name shows friendliness!"
      },
      {
        scene:"Scene 1 — First Visit", icon:"🌟", title:"First Time Here",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Is this your first time visiting Pretty Nails?" }
        ],
        prompt:"It IS your first time. What is the most natural response?",
        options:[
          { text:'"Yes, it\'s my first time! A friend recommended your salon!"', correct:true  },
          { text:'"Yes. First time."',                                            correct:false },
          { text:'"Yes I am first time customer."',                               correct:false },
          { text:'"No I never come before."',                                     correct:false }
        ],
        feedback:"Mentioning how you found the salon is great small talk. 'Recommended' is a great word!",
        tip:"💡 'Recommended' = someone told you it was good. Very natural everyday English!"
      }
    ],

    // ── NAIL TECH questions ─────────────────────
    techQuestions:[
      {
        scene:"Scene 1 — Customer Arrives", icon:"🚪", title:"Greet the Customer",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"*A customer walks through the door and smiles at you*" }
        ],
        prompt:"You are the Nail Tech. What is the BEST way to greet the customer?",
        options:[
          { text:'"Hi! Welcome to Pretty Nails! How can I help you today?"',  correct:true  },
          { text:'"Yes? What you want?"',                                      correct:false },
          { text:'"Come in. Sit."',                                            correct:false },
          { text:'"We are busy. Wait."',                                       correct:false }
        ],
        feedback:"Perfect greeting! Warm, professional, and welcoming. This makes customers feel comfortable!",
        tip:"💡 Always smile and say 'Welcome!' first. First impressions are very important in a US salon!"
      },
      {
        scene:"Scene 1 — Check Appointment", icon:"📅", title:"Ask About Appointment",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"Hi! I'd like to get my nails done today." }
        ],
        prompt:"You need to check if the customer has an appointment. What do you ask?",
        options:[
          { text:'"Of course! Do you have an appointment, or are you a walk-in today?"', correct:true  },
          { text:'"Did you book?"',                                                       correct:false },
          { text:'"Appointment? Yes or no?"',                                             correct:false },
          { text:'"You have reservation?"',                                               correct:false }
        ],
        feedback:"Excellent! Giving both options ('appointment or walk-in') is very professional and helpful!",
        tip:"💡 Always give the customer TWO options so they don't feel embarrassed either way!"
      },
      {
        scene:"Scene 1 — Long Wait", icon:"⏳", title:"Tell Customer the Wait Time",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"I'm a walk-in — do you have availability now?" }
        ],
        prompt:"You are busy and the wait is 25 minutes. How do you tell the customer politely?",
        options:[
          { text:'"We\'d love to take you! The wait is about 25 minutes — would that work for you?"', correct:true  },
          { text:'"25 minutes wait. Okay?"',                                                           correct:false },
          { text:'"We busy. Come back later."',                                                        correct:false },
          { text:'"Wait 25 minute. Sit there."',                                                       correct:false }
        ],
        feedback:"Great! Always offer the wait time as a question — give the customer the choice. Very polite!",
        tip:"💡 Say 'Would that work for you?' instead of just telling them. It shows respect!"
      },
      {
        scene:"Scene 1 — Introduce Yourself", icon:"🤝", title:"Introduce to Customer",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"Great, I'll wait! Thank you so much." }
        ],
        prompt:"The customer sits down and you are ready to start. How do you introduce yourself?",
        options:[
          { text:'"Hi! I\'m Lisa and I\'ll be taking care of you today. So nice to meet you!"', correct:true  },
          { text:'"I am Lisa. Your nail tech."',                                                 correct:false },
          { text:'"My name Lisa. Start now?"',                                                   correct:false },
          { text:'"OK let\'s begin the nail."',                                                  correct:false }
        ],
        feedback:"Beautiful introduction! Always say your name and 'I'll be taking care of you today.' Very professional!",
        tip:"💡 'I'll be taking care of you today' is the standard professional phrase in US service jobs!"
      },
      {
        scene:"Scene 1 — First Time Customer", icon:"🌟", title:"Welcome First-Timer",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"This is actually my first time at a nail salon!" }
        ],
        prompt:"The customer is nervous — it's their first time! How do you make them feel welcome?",
        options:[
          { text:'"How exciting! Don\'t worry at all — I\'ll walk you through everything step by step!"', correct:true  },
          { text:'"OK. What service you want?"',                                                          correct:false },
          { text:'"First time? Don\'t be nervous."',                                                      correct:false },
          { text:'"No problem. Sit here."',                                                               correct:false }
        ],
        feedback:"Perfect! Making nervous customers feel safe and excited is excellent customer service!",
        tip:"💡 'I'll walk you through everything' = I will explain each step. Very reassuring phrase!"
      }
    ]
  },

  {
    id:2, title:"Choosing Your Service", icon:"💅",
    vocab:["manicure","pedicure","full set","acrylic","gel","dip powder","fill-in","soak off","What's included","I'll go with","grown out"],

    customerQuestions:[
      {
        scene:"Scene 2 — Service Selection", icon:"💅", title:"What Service Today?",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"What service would you like today?" }
        ],
        prompt:"You want brand new acrylic nails for the first time. What do you say?",
        options:[
          { text:'"I\'d like a full set of acrylics, please!"', correct:true  },
          { text:'"I want fake nail please."',                   correct:false },
          { text:'"Give me acrylic full."',                      correct:false },
          { text:'"I need more nail please."',                   correct:false }
        ],
        feedback:'"Full set of acrylics" is exactly what nail technicians expect to hear!',
        tip:"💡 'Full set' = brand new acrylics. 'Fill-in' = touching up grown-out acrylics."
      },
      {
        scene:"Scene 2 — Gel or Regular?", icon:"✨", title:"Choosing Polish Type",
        dialogue:[
          { side:"tech",     emoji:"💅",    speaker:"Nail Tech", text:"Would you like regular polish or gel polish?" },
          { side:"customer", emoji:"💁‍♀️", speaker:"You",       text:"What's the difference?" },
          { side:"tech",     emoji:"💅",    speaker:"Nail Tech", text:"Gel lasts 2-3 weeks without chipping. Regular is cheaper but chips easier." }
        ],
        prompt:"You want something that lasts longer. What do you say?",
        options:[
          { text:'"I\'ll go with gel then — I want it to last longer!"', correct:true  },
          { text:'"The expensive one please."',                           correct:false },
          { text:'"Gel please the long lasting."',                        correct:false },
          { text:'"Regular please, more cheap."',                         correct:false }
        ],
        feedback:'"I\'ll go with..." is a super natural way to make a decision in English!',
        tip:"💡 'I'll go with...' = I choose. Very natural American English!"
      },
      {
        scene:"Scene 2 — Pedicure Options", icon:"🦶", title:"Pedicure Menu",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Regular pedicure for \$30 or deluxe with hot stones for \$50?" }
        ],
        prompt:"Before deciding, you want to know what is in the deluxe.",
        options:[
          { text:'"What\'s included in the deluxe pedicure?"', correct:true  },
          { text:'"What is in the expensive one?"',             correct:false },
          { text:'"Deluxe have what?"',                         correct:false },
          { text:'"Tell me deluxe."',                           correct:false }
        ],
        feedback:'"What\'s included?" is a very important phrase — use it everywhere!',
        tip:"💡 'What's included?' = What do I get? Use this at salons, hotels, restaurants!"
      },
      {
        scene:"Scene 2 — Fill-in Request", icon:"🔧", title:"Need a Fill-in",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Hi, welcome back! What can I do for you today?" }
        ],
        prompt:"Your acrylic nails grew out and need a touch-up. What do you say?",
        options:[
          { text:'"I need a fill-in please — they\'ve grown out quite a bit!"', correct:true  },
          { text:'"My nail grow. Please fix."',                                  correct:false },
          { text:'"I want fill the nail hole."',                                 correct:false },
          { text:'"Touch up my acrylic."',                                       correct:false }
        ],
        feedback:'"Fill-in" is exactly the right word. "Grown out" is what every regular customer says!',
        tip:"💡 'Grown out' = the nail grew away from where product was applied."
      },
      {
        scene:"Scene 2 — Soak Off", icon:"💧", title:"Remove & Redo",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"What service are you in for today?" }
        ],
        prompt:"You want to REMOVE old gel nails AND get a fresh manicure after.",
        options:[
          { text:'"I\'d like to soak off my gel nails first, then get a regular manicure."', correct:true  },
          { text:'"Take off nail then do new nail."',                                          correct:false },
          { text:'"Remove gel then make normal."',                                             correct:false },
          { text:'"No more gel, then regular."',                                               correct:false }
        ],
        feedback:'"Soak off" is the professional term for removing gel nails. Very natural!',
        tip:"💡 'Soak off' = remove gel nails using acetone. Knowing this makes you sound like a regular!"
      }
    ],

    techQuestions:[
      {
        scene:"Scene 2 — Ask Service", icon:"💅", title:"Find Out What They Want",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"Hi! I'd like to get my nails done today!" }
        ],
        prompt:"You are the Nail Tech. What is the BEST first question to ask?",
        options:[
          { text:'"Of course! What service are you looking for — manicure, pedicure, or a full set?"', correct:true  },
          { text:'"What color do you want?"',                correct:false },
          { text:'"Sit down please."',                       correct:false },
          { text:'"How much do you want to spend?"',         correct:false }
        ],
        feedback:"Always ask about the SERVICE TYPE first before anything else. This is priority #1!",
        tip:"💡 As a nail tech: always establish the SERVICE before color, design, or length!"
      },
      {
        scene:"Scene 2 — Explain Gel vs Regular", icon:"✨", title:"Explain the Difference",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"What's the difference between regular and gel polish?" }
        ],
        prompt:"You are the Nail Tech. How do you explain it clearly?",
        options:[
          { text:'"Gel lasts 2-3 weeks without chipping and has a glossy finish, but costs a bit more. Regular is great for a shorter commitment!"', correct:true  },
          { text:'"Gel is better. Regular is cheap."',       correct:false },
          { text:'"Gel more expensive. Regular normal."',    correct:false },
          { text:'"Both are good. You choose."',             correct:false }
        ],
        feedback:"Excellent explanation! You gave both pros to help the customer decide. Very professional!",
        tip:"💡 Always explain BOTH options clearly. Let the customer make an informed choice!"
      },
      {
        scene:"Scene 2 — Upsell Deluxe", icon:"🦶", title:"Suggest the Upgrade",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"Can I get a regular pedicure today?" }
        ],
        prompt:"You want to let the customer know about the deluxe upgrade. How do you suggest it?",
        options:[
          { text:'"Of course! We also have a deluxe pedicure with a hot stone massage for just \$20 more — would you like to hear about it?"', correct:true  },
          { text:'"Regular is \$30. Deluxe is \$50."',         correct:false },
          { text:'"You should get deluxe it\'s better."',    correct:false },
          { text:'"Deluxe pedicure is available also."',     correct:false }
        ],
        feedback:"Perfect upsell! You mentioned the benefit AND asked if they want to know more. Not pushy!",
        tip:"💡 'Would you like to hear about it?' = offering without pressuring. Great sales skill!"
      },
      {
        scene:"Scene 2 — Check Fill or Full Set", icon:"🔧", title:"Fill-in or New Set?",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"Hi, I have acrylic nails and they've grown out a lot." }
        ],
        prompt:"You need to check if she wants a fill-in or a whole new set. What do you ask?",
        options:[
          { text:'"No problem! Would you like a fill-in to touch up what you have, or would you prefer a brand new full set?"', correct:true  },
          { text:'"Fill or new?"',                           correct:false },
          { text:'"You want fill-in?"',                      correct:false },
          { text:'"How long your acrylic?"',                 correct:false }
        ],
        feedback:"Great question! Giving both options clearly shows expertise and professionalism!",
        tip:"💡 Always give the customer a clear choice between TWO specific options!"
      },
      {
        scene:"Scene 2 — Soak Off First", icon:"💧", title:"Recommend Soak Off",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"I want a manicure but I still have old gel on my nails." }
        ],
        prompt:"You need to soak off the old gel first. How do you explain this to the customer?",
        options:[
          { text:'"No worries! We\'ll need to soak off your old gel first — that takes about 15 minutes — then we\'ll do your fresh manicure!"', correct:true  },
          { text:'"We remove gel first then do manicure."',  correct:false },
          { text:'"Old gel must come off. OK?"',             correct:false },
          { text:'"Soak off \$10 extra."',                    correct:false }
        ],
        feedback:"Perfect! You explained the process AND the time. Customers love knowing what to expect!",
        tip:"💡 Always tell customers HOW LONG each step takes. It reduces anxiety and builds trust!"
      }
    ]
  },

  {
    id:3, title:"Nail Shape & Length", icon:"📐",
    vocab:["coffin","almond","stiletto","square","oval","round","medium","past my fingertip","shade"],

    customerQuestions:[
      {
        scene:"Scene 3 — Choose Shape", icon:"💎", title:"Picking Your Shape",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"What shape would you like for your nails?" }
        ],
        prompt:"You want coffin shape — long with a flat squared top.",
        options:[
          { text:'"Can I get coffin shape please?"',  correct:true  },
          { text:'"Box at the top shape."',           correct:false },
          { text:'"Flat on top and long."',           correct:false },
          { text:'"Trendy flat tip nail."',           correct:false }
        ],
        feedback:'"Coffin shape" is the exact nail industry term. The technician knows immediately!',
        tip:"💡 Nail Shapes: Coffin 🟫 Almond 🌰 Stiletto 🔺 Square 🟦 Oval 🥚 Round ⭕"
      },
      {
        scene:"Scene 3 — Ask for Advice", icon:"🤔", title:"Ask for Recommendation",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"What shape would you like today?" }
        ],
        prompt:"You are not sure what looks best on YOUR fingers. How do you ask?",
        options:[
          { text:'"I\'m not sure — what shape do you think would look best on my hands?"', correct:true  },
          { text:'"You decide for me."',              correct:false },
          { text:'"What shape is beautiful?"',       correct:false },
          { text:'"I don\'t know nail shape."',      correct:false }
        ],
        feedback:"Asking for a professional's opinion is natural and polite in American English!",
        tip:"💡 'What do you think would look...?' = asking for opinion. Very polite!"
      },
      {
        scene:"Scene 3 — Length", icon:"📏", title:"How Long?",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"How long would you like your nails?" }
        ],
        prompt:"You want medium length — just slightly longer than your fingertip.",
        options:[
          { text:'"Medium length please — just a little past my fingertips."', correct:true  },
          { text:'"Not too long not too short."',     correct:false },
          { text:'"Medium. In the middle."',          correct:false },
          { text:'"Middle nail length."',             correct:false }
        ],
        feedback:"'Just past my fingertips' gives a clear visual reference. Excellent communication!",
        tip:"💡 Use body references: 'past my fingertip' or point to show exactly where!"
      },
      {
        scene:"Scene 3 — Photo Reference", icon:"📸", title:"Show a Photo",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Do you have something specific in mind?" }
        ],
        prompt:"You have a phone photo of the nail style you want. What do you say?",
        options:[
          { text:'"Yes! I have a reference photo — can you match this shape and length?"', correct:true  },
          { text:'"Yes I have picture. Copy please."', correct:false },
          { text:'"Look at my phone. Do same."',        correct:false },
          { text:'"I have photo. Make same nail."',     correct:false }
        ],
        feedback:'"Can you match this?" is professional. Nail techs love reference photos!',
        tip:"💡 'Can you match this?' or 'Can you do something similar?' when showing a photo."
      },
      {
        scene:"Scene 3 — Confirm Shape", icon:"✅", title:"Make Sure It's Right",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"I'm going to start filing now — does this shape look right so far?" }
        ],
        prompt:"The shape looks great but you want them a tiny bit longer. What do you say?",
        options:[
          { text:'"The shape looks perfect! Could you make them just a tiny bit longer though?"', correct:true  },
          { text:'"Yes good. But longer please."',    correct:false },
          { text:'"Shape okay but more long."',       correct:false },
          { text:'"I want longer nail."',             correct:false }
        ],
        feedback:"Starting with a compliment then making a request is very natural and polite!",
        tip:"💡 'Could you...?' is more polite than 'Can you...?' Use it when making requests!"
      }
    ],

    techQuestions:[
      {
        scene:"Scene 3 — Ask Shape", icon:"💎", title:"What Shape Does She Want?",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"I'd like a full set of acrylics please!" }
        ],
        prompt:"You are the Nail Tech. What do you ask about shape?",
        options:[
          { text:'"Great choice! What shape would you like — coffin, almond, square, oval, or stiletto?"', correct:true  },
          { text:'"What shape?"',                     correct:false },
          { text:'"You want coffin?"',                correct:false },
          { text:'"Shape is important. Choose one."', correct:false }
        ],
        feedback:"Perfect! You listed the options clearly so the customer can make an informed choice!",
        tip:"💡 Always list examples when asking about shape — many customers don't know the names!"
      },
      {
        scene:"Scene 3 — Recommend Shape", icon:"💡", title:"Give a Shape Recommendation",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"Hmm, I'm not sure what shape would look good on me." }
        ],
        prompt:"You are the Nail Tech. Give her a specific recommendation based on her hands.",
        options:[
          { text:'"With your finger shape, I think almond or oval would look really elegant — they elongate the fingers beautifully!"', correct:true  },
          { text:'"All shapes are nice. You choose."', correct:false },
          { text:'"Coffin is most popular now."',      correct:false },
          { text:'"What shape do you like?"',          correct:false }
        ],
        feedback:"Excellent! You gave a specific recommendation AND explained WHY. Builds so much trust!",
        tip:"💡 Always explain WHY you recommend something. 'Because it will...' makes you sound expert!"
      },
      {
        scene:"Scene 3 — Ask Length", icon:"📏", title:"How Long Does She Want?",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"Can I get coffin shape please?" }
        ],
        prompt:"Now you need to ask about the length. What do you say?",
        options:[
          { text:'"Coffin it is! How long would you like them — short, medium, or extra long?"', correct:true  },
          { text:'"How long?"',                       correct:false },
          { text:'"You want long nail?"',             correct:false },
          { text:'"Short medium long. Which one?"',   correct:false }
        ],
        feedback:"Great! You confirmed her shape choice AND asked the next logical question smoothly!",
        tip:"💡 Always CONFIRM what the customer said before moving to the next question!"
      },
      {
        scene:"Scene 3 — Check Length While Filing", icon:"✂️", title:"Check In While Working",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"*You are filing the nails to medium length*" }
        ],
        prompt:"You want to make sure the customer is happy with the length so far. What do you ask?",
        options:[
          { text:'"How does this length look so far? Would you like them a little longer or shorter?"', correct:true  },
          { text:'"Length okay?"',                    correct:false },
          { text:'"Is this good?"',                   correct:false },
          { text:'"You like the length?"',             correct:false }
        ],
        feedback:"Perfect check-in! Asking during the process prevents mistakes and shows you care!",
        tip:"💡 Always check in with the customer DURING the service, not just at the end!"
      },
      {
        scene:"Scene 3 — Handle Change Request", icon:"🔄", title:"Customer Wants It Different",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"Actually, could you make them a little shorter? I think they're too long." }
        ],
        prompt:"You are the Nail Tech. How do you respond to the customer's request?",
        options:[
          { text:'"Of course! No problem at all — I\'ll shorten them right now. Just let me know when the length looks perfect to you!"', correct:true  },
          { text:'"OK. I make shorter."',             correct:false },
          { text:'"Sure. Short now."',                correct:false },
          { text:'"You want shorter? Okay."',         correct:false }
        ],
        feedback:"Excellent response! 'No problem at all' reassures the customer. You never make them feel bad!",
        tip:"💡 Never make a customer feel bad for changing their mind. Always say 'No problem at all!'"
      }
    ]
  },

  {
    id:4, title:"Color & Design", icon:"🎨",
    vocab:["ombre","French tip","glitter","chrome","matte","glossy","rhinestones","accent nail","solid color","shade"],

    customerQuestions:[
      {
        scene:"Scene 4 — Pick Color", icon:"🎨", title:"Choosing Your Color",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Do you have a color in mind today?" }
        ],
        prompt:"You want pink but aren't sure which shade. How do you ask?",
        options:[
          { text:'"I\'m thinking pink, but not sure which shade. Can you show me your options?"', correct:true  },
          { text:'"Pink color. Show me pinks."',      correct:false },
          { text:'"I want pink but which one I don\'t know."', correct:false },
          { text:'"All the pinks please."',           correct:false }
        ],
        feedback:'"Can you show me your options?" is perfectly natural in any US store!',
        tip:"💡 'Shade' = a specific version of a color. Baby pink, hot pink, dusty rose = shades!"
      },
      {
        scene:"Scene 4 — Design Request", icon:"💫", title:"Ask for Nail Art",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Would you like any nail art or special design?" }
        ],
        prompt:"You want ombre nails with glitter on top. What do you say?",
        options:[
          { text:'"Yes! I\'d love an ombre design with some glitter on top please!"', correct:true  },
          { text:'"Two color mix with sparkle."',     correct:false },
          { text:'"Fade color nail with shiny."',     correct:false },
          { text:'"Ombre nail. Put glitter."',        correct:false }
        ],
        feedback:'"I\'d love..." sounds enthusiastic and natural. Great use of vocabulary!',
        tip:"💡 'I'd love...' sounds warmer than 'I want...' Use when you're excited!"
      },
      {
        scene:"Scene 4 — French Tip", icon:"🤍", title:"Classic French Tips",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"What design are you thinking?" }
        ],
        prompt:"You want white tips on a natural base. What do you ask for?",
        options:[
          { text:'"I\'d like a classic French tip — white tips with a natural pink base."', correct:true  },
          { text:'"White on top natural bottom."',    correct:false },
          { text:'"French nail style."',              correct:false },
          { text:'"White nail tip France style."',   correct:false }
        ],
        feedback:'"Classic French tip" is exactly the right term. Very professional!',
        tip:"💡 'French tip' = white tip + natural/pink base. A timeless classic style!"
      },
      {
        scene:"Scene 4 — Accent Nail", icon:"💍", title:"One Special Nail",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Same design on all nails, or something different?" }
        ],
        prompt:"You want solid pink on all nails EXCEPT the ring finger gets flowers.",
        options:[
          { text:'"Can I do solid pink on all, but make my ring finger an accent nail with flowers?"', correct:true  },
          { text:'"All pink but one different. Flower ring finger."', correct:false },
          { text:'"Four pink nail one flower nail."', correct:false },
          { text:'"Ring finger different. Others pink."', correct:false }
        ],
        feedback:'"Accent nail" is the industry term! Now you sound like a true salon regular!',
        tip:"💡 'Accent nail' = one nail with special design — usually the ring finger!"
      },
      {
        scene:"Scene 4 — Finish Type", icon:"✨", title:"Matte or Glossy?",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Would you like a shiny top coat or matte finish?" }
        ],
        prompt:"You want NO shine — a flat modern look.",
        options:[
          { text:'"I\'d like matte please — I love that flat modern look!"', correct:true  },
          { text:'"No shiny please. Flat nail."',     correct:false },
          { text:'"I don\'t want shiny."',            correct:false },
          { text:'"Not glossy. The other one."',      correct:false }
        ],
        feedback:'"Matte" is the exact word for no shine. Vocabulary used perfectly!',
        tip:"💡 Matte = no shine. Glossy = shiny. Chrome = mirror. Shimmer = sparkles!"
      }
    ],

    techQuestions:[
      {
        scene:"Scene 4 — Ask About Color", icon:"🎨", title:"What Color Does She Like?",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"Okay I'm ready to pick the color!" }
        ],
        prompt:"You are the Nail Tech. How do you help the customer choose a color?",
        options:[
          { text:'"Wonderful! Do you have a color in mind, or would you like to see our color chart?"', correct:true  },
          { text:'"What color you want?"',            correct:false },
          { text:'"Pick a color from here."',         correct:false },
          { text:'"We have many colors. Choose."',    correct:false }
        ],
        feedback:"Perfect! Giving two options (own idea OR chart) makes the customer feel comfortable!",
        tip:"💡 Always offer to SHOW the color chart — customers often don't know what's available!"
      },
      {
        scene:"Scene 4 — Suggest Design", icon:"💫", title:"Recommend a Design",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"I want something romantic and pretty for my anniversary dinner tonight!" }
        ],
        prompt:"You are the Nail Tech. What design do you suggest?",
        options:[
          { text:'"How about a soft rose pink with a gold glitter accent nail and tiny rhinestones? Perfect for a romantic evening!"', correct:true  },
          { text:'"Red is romantic."',                correct:false },
          { text:'"What color you like?"',            correct:false },
          { text:'"Many romantic designs available."', correct:false }
        ],
        feedback:"Fantastic! Specific suggestion + connected to the occasion = excellent service!",
        tip:"💡 Always connect your suggestion to the customer's event or occasion. Shows you listened!"
      },
      {
        scene:"Scene 4 — Explain Ombre", icon:"🌈", title:"Explain the Design",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"I think I want ombre nails but I'm not sure what that is exactly." }
        ],
        prompt:"You are the Nail Tech. How do you explain ombre nails clearly?",
        options:[
          { text:'"Ombre is when two colors gradually blend into each other — like pink fading into white. It looks stunning! Want to see an example?"', correct:true  },
          { text:'"Ombre is two colors together."',   correct:false },
          { text:'"Ombre is fade color nail."',       correct:false },
          { text:'"Two color blend. Very pretty."',   correct:false }
        ],
        feedback:"Excellent explanation! You described it clearly AND offered to show an example. Perfect!",
        tip:"💡 Always offer to SHOW an example when explaining a design. A picture = 1000 words!"
      },
      {
        scene:"Scene 4 — Ask About Finish", icon:"✨", title:"Matte or Glossy?",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"I think the color and design look perfect!" }
        ],
        prompt:"You are the Nail Tech. Ask about the finish type.",
        options:[
          { text:'"Great! One last thing — would you prefer a shiny glossy top coat, or a trendy matte finish?"', correct:true  },
          { text:'"You want shiny or not shiny?"',    correct:false },
          { text:'"Matte or glossy?"',                correct:false },
          { text:'"What top coat you want?"',         correct:false }
        ],
        feedback:"Perfect question! 'One last thing' is a great transition phrase in service conversations!",
        tip:"💡 'One last thing...' = a smooth way to introduce the final question. Very natural!"
      },
      {
        scene:"Scene 4 — Show Finished Design", icon:"🌟", title:"Reveal the Finished Look",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"*You just finished the nail art design*" }
        ],
        prompt:"You are the Nail Tech. How do you present the finished design to the customer?",
        options:[
          { text:'"Ta-da! What do you think? I\'m so happy with how the design turned out — it really suits you!"', correct:true  },
          { text:'"Done. Look at it."',               correct:false },
          { text:'"Finish. You like?"',               correct:false },
          { text:'"I\'m done. Check your nail."',     correct:false }
        ],
        feedback:"Wonderful! Sharing your own enthusiasm about the work makes customers excited too!",
        tip:"💡 'It really suits you!' = it looks great on you specifically. Very personal and warm!"
      }
    ]
  },

  {
    id:5, title:"Price & Payment", icon:"💰",
    vocab:["total","tip","gratuity","receipt","cash","card","Zelle","Venmo","included","additional charge"],

    customerQuestions:[
      {
        scene:"Scene 5 — Ask Price First", icon:"💰", title:"Ask the Total Cost",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"I can do all of that for you — no problem!" }
        ],
        prompt:"Before they start, you want to know the total cost. What do you ask?",
        options:[
          { text:'"Before we start, can you tell me how much everything will be?"', correct:true  },
          { text:'"How much price?"',                 correct:false },
          { text:'"Tell me money for nail."',         correct:false },
          { text:'"What is cost?"',                   correct:false }
        ],
        feedback:'"Before we start, how much will this be?" Very natural and smart. Always ask first!',
        tip:"💡 Always ask about price BEFORE services start to avoid surprises!"
      },
      {
        scene:"Scene 5 — Pay with Card", icon:"💳", title:"Card Payment",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Your total comes to \$65 today!" }
        ],
        prompt:"You want to pay with debit card. What is the smartest thing to say?",
        options:[
          { text:'"Can I pay with card? Is there an additional charge for using a card?"', correct:true  },
          { text:'"I use my card."',                  correct:false },
          { text:'"Card payment."',                   correct:false },
          { text:'"I will pay card."',                correct:false }
        ],
        feedback:"Smart! Many US salons charge extra for card. Always ask about additional charges!",
        tip:"💡 Some salons add 3-4% for card payments. Always ask: 'Is there a fee for card?'"
      },
      {
        scene:"Scene 5 — Tip Included?", icon:"🙏", title:"Is Tip Included?",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Your total is \$45. Cash or card?" }
        ],
        prompt:"You want to know if the tip is already in the \$45. How do you ask?",
        options:[
          { text:'"Is the tip included, or should I add it separately?"', correct:true  },
          { text:'"Tip inside \$45?"',                 correct:false },
          { text:'"Gratuity included?"',              correct:false },
          { text:'"I need give tip?"',                correct:false }
        ],
        feedback:'"Is the tip included?" is very common and natural at US salons. Usually NOT included!',
        tip:"💡 In the US, tipping 15-20% at nail salons is customary. Cash tips are preferred!"
      },
      {
        scene:"Scene 5 — Polite Complaint", icon:"😟", title:"Something Isn't Right",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"All finished! What do you think?" }
        ],
        prompt:"They look great but one nail is uneven. How do you politely ask for a fix?",
        options:[
          { text:'"They look beautiful! Could you just check the pinky — the shape looks a little uneven?"', correct:true  },
          { text:'"This nail wrong. Fix please."',    correct:false },
          { text:'"Not good! Do again."',             correct:false },
          { text:'"One nail bad shape."',             correct:false }
        ],
        feedback:"Start with a compliment then mention the issue gently. Classic American polite style!",
        tip:"💡 Sandwich: Positive → Gentle issue → Positive. Very polite and effective!"
      },
      {
        scene:"Scene 5 — Book Next Visit", icon:"📅", title:"Make Next Appointment",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"I hope you love your nails! Anything else I can help with?" }
        ],
        prompt:"You want to book your NEXT appointment for about 3 weeks from now.",
        options:[
          { text:'"Everything is perfect, thank you! Can I book my next appointment for about 3 weeks from today?"', correct:true  },
          { text:'"Book me again 3 weeks."',           correct:false },
          { text:'"I come back 3 week."',              correct:false },
          { text:'"Next appointment 3 weeks."',        correct:false }
        ],
        feedback:'"Can I book my next appointment?" is perfect! "About 3 weeks" is very natural!',
        tip:"💡 'About' + time = approximately. 'About 3 weeks.' 'About 2 hours.' Very natural!"
      }
    ],

    techQuestions:[
      {
        scene:"Scene 5 — Give Total", icon:"💰", title:"Tell Customer the Price",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"Okay I think we're all done! How much is it?" }
        ],
        prompt:"You are the Nail Tech. How do you professionally tell the customer the total?",
        options:[
          { text:'"Your total today comes to \$65. Would you like to pay with cash or card?"', correct:true  },
          { text:'"\$65 please."',                     correct:false },
          { text:'"That is 65 dollar."',              correct:false },
          { text:'"You owe \$65."',                    correct:false }
        ],
        feedback:"Perfect! 'Your total comes to...' + ask payment method in one smooth sentence!",
        tip:"💡 'Your total comes to...' is the standard professional phrase for giving a price!"
      },
      {
        scene:"Scene 5 — Explain Card Fee", icon:"💳", title:"Card Fee Policy",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"Can I pay with my credit card?" }
        ],
        prompt:"Your salon charges 3% extra for card. How do you explain this politely?",
        options:[
          { text:'"Of course! Just so you know, we have a small 3% processing fee for card payments. Cash and Zelle have no fee — whatever works best for you!"', correct:true  },
          { text:'"Card has 3% fee."',                correct:false },
          { text:'"Yes but extra charge for card."',  correct:false },
          { text:'"Card okay but cost more."',        correct:false }
        ],
        feedback:"Excellent! You warned them AND offered alternatives. 'Whatever works best for you' is very friendly!",
        tip:"💡 Always mention the fee BEFORE processing the payment. Transparency builds trust!"
      },
      {
        scene:"Scene 5 — Explain Tipping", icon:"🙏", title:"Tell Customer About Tips",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"Is the tip already included in the price?" }
        ],
        prompt:"The tip is NOT included. How do you explain tipping culture politely?",
        options:[
          { text:'"The tip is not included — most customers tip around 15-20%, but it\'s completely up to you and always appreciated!"', correct:true  },
          { text:'"No tip not included. You pay extra."', correct:false },
          { text:'"Tip is separate. 20% is good."',   correct:false },
          { text:'"No tip in price. You give tip."',  correct:false }
        ],
        feedback:"Perfect! You gave a guideline BUT said it's optional. Never pressure customers to tip!",
        tip:"💡 'It's completely up to you' = no pressure. Always say this when mentioning tips!"
      },
      {
        scene:"Scene 5 — Handle Complaint", icon:"😟", title:"Customer Has a Concern",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"These look really nice, but I think the ring finger nail is a little crooked?" }
        ],
        prompt:"You are the Nail Tech. How do you respond to the concern?",
        options:[
          { text:'"Oh, I\'m so sorry about that! Let me fix that right now — I want you to be 100% happy before you leave!"', correct:true  },
          { text:'"OK I fix it."',                    correct:false },
          { text:'"Sorry. I repair now."',            correct:false },
          { text:'"Let me see. I fix."',              correct:false }
        ],
        feedback:"Excellent! Apologize genuinely AND commit to fixing it. 'I want you to be 100% happy' is powerful!",
        tip:"💡 '100% happy before you leave' = your standard of service. Very professional!"
      },
      {
        scene:"Scene 5 — Rebook Customer", icon:"📅", title:"Invite Customer Back",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"I absolutely love them! Thank you so much!" }
        ],
        prompt:"You are the Nail Tech. How do you invite the customer to rebook?",
        options:[
          { text:'"I\'m so glad you love them! Most clients come back every 2-3 weeks for a fill — would you like to book your next appointment before you leave?"', correct:true  },
          { text:'"Come back 2-3 weeks for fill."',   correct:false },
          { text:'"You want next appointment?"',      correct:false },
          { text:'"Book again before you go?"',       correct:false }
        ],
        feedback:"Amazing! You mentioned when to come back AND offered to book right now. Very professional!",
        tip:"💡 Always try to rebook the customer before they leave. It keeps your schedule full!"
      }
    ]
  }
];

// ═══════════════════════════════════════════
// GAME STATE
// ═══════════════════════════════════════════
var playerName    = "Player";
var playerRole    = "customer";
var currentRound  = 0;
var currentQ      = 0;
var totalScore    = 0;
var roundScore    = 0;
var combo         = 0;
var correctCount  = 0;
var totalAnswered  = 0;
var answered      = false;
var timerInterval = null;
var timeLeft      = 15;
var roundScores   = [];

// ═══════════════════════════════════════════
// SCREEN MANAGER
// ═══════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function(s) {
    s.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// ═══════════════════════════════════════════
// WELCOME → ROLE SELECT
// ═══════════════════════════════════════════
function goToRoleSelect() {
  var n = document.getElementById('playerName').value.trim();
  if (!n) {
    var inp = document.getElementById('playerName');
    inp.style.borderColor = '#e74c3c';
    inp.placeholder = 'Please enter your name first!';
    inp.focus();
    return;
  }
  playerName = n;
  showScreen('screenRole');
}

function selectRole(role) {
  playerRole = role;
  document.getElementById('roleCustomer').classList.toggle('selected', role === 'customer');
  document.getElementById('roleTech').classList.toggle('selected', role === 'tech');
  var wrap = document.getElementById('roleConfirmWrap');
  var txt  = document.getElementById('roleConfirmText');
  wrap.style.display = 'block';
  if (role === 'customer') {
    txt.innerHTML = '💁‍♀️ You are the <strong>Customer</strong>! Practice asking for nail services in English!';
  } else {
    txt.innerHTML = '💅 You are the <strong>Nail Technician</strong>! Practice serving customers professionally!';
  }
}

function startGame() {
  currentRound  = 0;
  currentQ      = 0;
  totalScore    = 0;
  roundScore    = 0;
  combo         = 0;
  correctCount  = 0;
  totalAnswered  = 0;
  roundScores   = [];
  loadRoundIntro();
}

// ═══════════════════════════════════════════
// ROUND INTRO
// ═══════════════════════════════════════════
function loadRoundIntro() {
  var r = ROUNDS[currentRound];
  document.getElementById('roundIcon').textContent     = r.icon;
  document.getElementById('roundTitle').textContent    = 'Round ' + r.id + ' of ' + ROUNDS.length;
  document.getElementById('roundSubtitle').textContent = r.title;

  var vl = document.getElementById('roundVocabList');
  vl.innerHTML = '';
  r.vocab.forEach(function(w) {
    var chip = document.createElement('span');
    chip.className   = 'vocab-chip';
    chip.textContent = w;
    chip.onclick     = function() { showVocabModal(w); };
    vl.appendChild(chip);
  });

  showScreen('screenRoundIntro');
}

function startRound() {
  currentQ   = 0;
  roundScore = 0;
  answered   = false;
  loadQuestion();
  showScreen('screenQuestion');
}

// ═══════════════════════════════════════════
// LOAD QUESTION
// ═══════════════════════════════════════════
function loadQuestion() {
  var r = ROUNDS[currentRound];
var q = playerRole === 'customer'
  ? r.customerQuestions[currentQ]
  : r.techQuestions[currentQ];
  answered = false;

  // top bar
  document.getElementById('scoreDisplay').textContent = totalScore;
  document.getElementById('roleBadge').textContent    = playerRole === 'customer' ? '💁 Customer' : '💅 Nail Tech';
  
var activeQs = playerRole === 'customer' ? r.customerQuestions : r.techQuestions;
document.getElementById('qCounter').textContent
  = 'Q ' + (currentQ + 1) + '/' + activeQs.length;

  // scene header
  document.getElementById('sceneName').textContent    = q.scene;
  document.getElementById('sceneIconBig').textContent = q.icon;
  document.getElementById('sceneTitle').textContent   = q.title;

  // progress bar
var activeQs2 = playerRole === 'customer' ? r.customerQuestions : r.techQuestions;
var pct = (currentQ / activeQs2.length) * 100;
  document.getElementById('progressFill').style.width = pct + '%';

  // nail bar — shows which round you're on
  var nb = document.getElementById('nailBar');
  nb.innerHTML = '';
  ROUNDS.forEach(function(rr, i) {
    var s = document.createElement('span');
    if (i < currentRound) {
      s.classList.add('done');
    } else if (i === currentRound) {
      s.style.background = 'linear-gradient(90deg,var(--pink),var(--gold))';
      s.style.opacity    = '0.7';
    }
    nb.appendChild(s);
  });

  // dialogue bubbles
  var da = document.getElementById('dialogueArea');
  da.innerHTML = '';
  if (q.dialogue && q.dialogue.length) {
    q.dialogue.forEach(function(line) {
      var wrap = document.createElement('div');
      wrap.className = 'bubble-wrap' + (line.side === 'customer' ? ' right' : '');

      var av = document.createElement('div');
      av.className   = 'avatar';
      av.textContent = line.emoji;

      var bub = document.createElement('div');
      bub.className   = 'bubble';
      bub.innerHTML   = '<div class="speaker">' + line.speaker + '</div>' + line.text;

      wrap.appendChild(av);
      wrap.appendChild(bub);
      da.appendChild(wrap);
    });
  }

  // prompt
  document.getElementById('questionPrompt').textContent = q.prompt;

  // answer options
  // shuffle options so correct answer is not always first
  var og = document.getElementById('optionsGrid');
  og.innerHTML = '';
  var labels = ['A', 'B', 'C', 'D'];

  // make a copy of options and shuffle
  var shuffled = q.options.slice();
  for (var s = shuffled.length - 1; s > 0; s--) {
    var randIdx = Math.floor(Math.random() * (s + 1));
    var temp = shuffled[s];
    shuffled[s] = shuffled[randIdx];
    shuffled[randIdx] = temp;
  }

  shuffled.forEach(function(opt, i) {
    var btn       = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = '<span class="opt-label">' + labels[i] + '</span>' + opt.text;
    btn.onclick   = function() { selectAnswer(i, btn, opt.correct, q, shuffled); };
    og.appendChild(btn);
  });

  // hide feedback and next button
  var fb = document.getElementById('feedbackBox');
  var tb = document.getElementById('tipBox');
  fb.className    = 'feedback-box';
  tb.className    = 'feedback-box';
  fb.style.display = 'none';
  tb.style.display = 'none';
  document.getElementById('nextBtn').style.display = 'none';

  // live vocab chips
  var lv = document.getElementById('liveVocabList');
  lv.innerHTML = '';
  r.vocab.slice(0, 6).forEach(function(w) {
    var chip       = document.createElement('span');
    chip.className   = 'vocab-chip';
    chip.textContent = w;
    chip.onclick     = function() { showVocabModal(w); };
    lv.appendChild(chip);
  });

  // start countdown timer
  startTimer();
}

// ═══════════════════════════════════════════
// TIMER
// ═══════════════════════════════════════════
function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 15;
  var ring = document.getElementById('timerRing');
  ring.textContent = timeLeft;
  ring.classList.remove('urgent');

  timerInterval = setInterval(function() {
    timeLeft--;
    ring.textContent = timeLeft;
    if (timeLeft <= 5)  ring.classList.add('urgent');
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (!answered) timeUp();
    }
  }, 1000);
}

function timeUp() {
  answered = true;
  combo    = 0;
  totalAnswered++;
  var r    = ROUNDS[currentRound];
  var q    = r.questions[currentQ];

  var btns = document.querySelectorAll('.opt-btn');
  btns.forEach(function(btn, i) {
    btn.disabled = true;
  });

  showFeedback(false, "Time's up! " + q.feedback, q.tip);
  document.getElementById('nextBtn').style.display = 'inline-block';
}

// ═══════════════════════════════════════════
// SELECT ANSWER
// ═══════════════════════════════════════════
function selectAnswer(idx, btn, isCorrect, q, shuffled) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);
  totalAnswered++;

  // use shuffled options to find and reveal correct button
  var allBtns = document.querySelectorAll('.opt-btn');
  allBtns.forEach(function(b, i) {
    b.disabled = true;
    if (shuffled[i].correct && i !== idx) b.classList.add('reveal');
  });

  if (isCorrect) {
    btn.classList.add('correct');
    combo++;
    correctCount++;

    var pts = 100;
    if (timeLeft >= 12) pts = 150;
    else if (timeLeft >= 8) pts = 120;
    if (combo >= 3) pts += 50;

    totalScore += pts;
    roundScore += pts;

    document.getElementById('scoreDisplay').textContent = totalScore;
    showScorePopup('+' + pts + (combo >= 3 ? ' COMBO!' : ' '));
    showFeedback(true, 'Correct! ' + q.feedback, q.tip);

  } else {
    btn.classList.add('wrong');
    combo = 0;
    showFeedback(false, 'Not quite! ' + q.feedback, q.tip);
  }

  document.getElementById('nextBtn').style.display = 'inline-block';
}

// ═══════════════════════════════════════════
// SHOW FEEDBACK
// ═══════════════════════════════════════════
function showFeedback(correct, msg, tip) {
  var fb = document.getElementById('feedbackBox');
  var tb = document.getElementById('tipBox');

  fb.textContent   = msg;
  fb.className     = 'feedback-box show ' + (correct ? 'ok' : 'err');
  fb.style.display = 'block';

  if (tip) {
    tb.textContent   = tip;
    tb.className     = 'feedback-box show tip';
    tb.style.display = 'block';
  }
}

// ═══════════════════════════════════════════
// SCORE POPUP
// ═══════════════════════════════════════════
function showScorePopup(text) {
  var el       = document.createElement('div');
  el.className   = 'score-popup';
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(function() { el.remove(); }, 1600);
}

// ═══════════════════════════════════════════
// NEXT QUESTION
// ═══════════════════════════════════════════
function nextQuestion() {
  var r = ROUNDS[currentRound];
  currentQ++;
  var qs = playerRole === 'customer' ? r.customerQuestions : r.techQuestions;
  if (currentQ < qs.length) {
    loadQuestion();
  } else {
    showRoundEnd();
  }
}

// ═══════════════════════════════════════════
// ROUND END
// ═══════════════════════════════════════════
function showRoundEnd() {
  clearInterval(timerInterval);
  var r    = ROUNDS[currentRound];
var qs   = playerRole === 'customer' ? r.customerQuestions : r.techQuestions;
var maxP = qs.length * 150;
  var pct  = roundScore / maxP;

  roundScores.push(roundScore);

  // icon and stars
  document.getElementById('roundEndIcon').textContent  = pct >= 0.8 ? '🎉' : pct >= 0.5 ? '👍' : '💪';
  document.getElementById('roundEndTitle').textContent = 'Round ' + r.id + ' Complete!';
  document.getElementById('roundEndSub').textContent   = r.title;
  document.getElementById('roundScore').textContent    = roundScore;
  document.getElementById('roundScoreMax').textContent = '/' + maxP + ' pts';

  var stars = pct >= 0.85 ? '⭐⭐⭐' : pct >= 0.55 ? '⭐⭐' : '⭐';
  document.getElementById('roundStars').textContent = stars;

  var msg = pct >= 0.85
    ? '🔥 Amazing round! Your English sounds very natural!'
    : pct >= 0.55
    ? '👏 Great job! Keep practicing and you will be perfect!'
    : '💪 Good effort! Review the vocabulary and try again!';
  document.getElementById('roundMessage').textContent = msg;

  // show correct phrases from this round
  var pl = document.getElementById('roundPhraseList');
  pl.innerHTML = '';
var questions = playerRole === 'customer' ? r.customerQuestions : r.techQuestions;
questions.forEach(function(q) {
    var correct = q.options.find(function(o) { return o.correct; });
    var div     = document.createElement('div');
    div.style.cssText = 'background:#fff0f7;border-radius:10px;padding:10px 14px;margin-bottom:8px;font-size:.87rem;border-left:4px solid var(--pink);';
    div.innerHTML     = '<span style="font-size:.75rem;color:var(--pink);font-weight:700;display:block;margin-bottom:3px;">' + q.scene + '</span>' + correct.text;
    pl.appendChild(div);
  });

  // next round or finish button label
  var nb = document.getElementById('nextRoundBtn');
  nb.textContent = currentRound < ROUNDS.length - 1 ? 'Next Round ➡️' : 'See Final Results 🏆';

  if (pct >= 0.8) launchConfetti();
  showScreen('screenRoundEnd');
}

// ═══════════════════════════════════════════
// NEXT ROUND
// ═══════════════════════════════════════════
function nextRound() {
  currentRound++;
  if (currentRound < ROUNDS.length) {
    roundScore = 0;
    loadRoundIntro();
  } else {
    showFinalResults();
  }
}

// ═══════════════════════════════════════════
// FINAL RESULTS
// ═══════════════════════════════════════════
function showFinalResults() {
  var totalPossible = ROUNDS.reduce(function(a, r) {
    return a + r.questions.length * 150;
  }, 0);
  var pct = totalScore / totalPossible;

  document.getElementById('finalNameLine').textContent = 'Well done, ' + playerName + '! 🎉';
  document.getElementById('finalScore').textContent    = totalScore;

  // stars
  var stars = pct >= 0.85 ? '⭐⭐⭐⭐⭐'
            : pct >= 0.70 ? '⭐⭐⭐⭐'
            : pct >= 0.50 ? '⭐⭐⭐'
            : pct >= 0.30 ? '⭐⭐'
            : '⭐';
  document.getElementById('finalStars').textContent = stars;

  // badge and message
  var badgeIcon, badgeTitle, badgeDesc, finalMsg;
  if (pct >= 0.85) {
    badgeIcon  = '💎';
    badgeTitle = 'Diamond Nail Speaker!';
    badgeDesc  = 'You speak English at a nail salon like a true American!';
    finalMsg   = 'Outstanding, ' + playerName + '! Your English is natural, fluent and confident. You are ready to visit any nail salon in the US!';
  } else if (pct >= 0.70) {
    badgeIcon  = '🥇';
    badgeTitle = 'Gold Nail Speaker!';
    badgeDesc  = 'Excellent English skills at the nail salon!';
    finalMsg   = 'Great work, ' + playerName + '! You have strong nail salon English. A little more practice and you will be perfect!';
  } else if (pct >= 0.50) {
    badgeIcon  = '🥈';
    badgeTitle = 'Silver Nail Speaker!';
    badgeDesc  = 'Good English skills — keep practicing!';
    finalMsg   = 'Nice effort, ' + playerName + '! You know the basics well. Review the vocabulary and play again to improve!';
  } else {
    badgeIcon  = '🌸';
    badgeTitle = 'Nail Salon Learner!';
    badgeDesc  = 'You are on your way — keep going!';
    finalMsg   = 'Keep practicing, ' + playerName + '! Every expert was once a beginner. Study the vocabulary and try again — you can do it!';
  }

  document.getElementById('badgeIcon').textContent  = badgeIcon;
  document.getElementById('badgeTitle').textContent = badgeTitle;
  document.getElementById('badgeDesc').textContent  = badgeDesc;
  document.getElementById('finalMessage').textContent = finalMsg;

  // performance stats
  var sl       = document.getElementById('statsList');
  sl.innerHTML = '';
  var accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
  var stats    = [
    { label:'Total Score',     value: totalScore + ' pts',             color:'var(--pink-dk)' },
    { label:'Accuracy',        value: accuracy + '%',                  color:'var(--teal)'    },
    { label:'Correct Answers', value: correctCount + '/' + totalAnswered, color:'var(--purple)'  },
    { label:'Rounds Completed',value: ROUNDS.length,                   color:'var(--gold-dk)' }
  ];
  stats.forEach(function(s) {
    var row       = document.createElement('div');
    row.style.cssText = 'display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed #f0c0d5;font-size:.9rem;';
    row.innerHTML = '<span style="color:#666;">' + s.label + '</span><span style="font-weight:800;color:' + s.color + ';">' + s.value + '</span>';
    sl.appendChild(row);
  });

  if (pct >= 0.7) launchConfetti();
  showScreen('screenFinal');
}

// ═══════════════════════════════════════════
// VOCAB MODAL
// ═══════════════════════════════════════════
function showVocabModal(word) {
  var entry = VOCAB_DB[word];
  if (!entry) return;
  document.getElementById('modalWord').textContent = word;
  document.getElementById('modalDef').textContent  = entry.def;
  document.getElementById('modalEx').textContent   = entry.ex;
  document.getElementById('vocabModal').classList.add('show');
}

function closeVocabModal() {
  document.getElementById('vocabModal').classList.remove('show');
}

// ═══════════════════════════════════════════
// VOCAB STUDY SCREEN
// ═══════════════════════════════════════════
function showVocabStudy() {
  var container    = document.getElementById('vocabStudyList');
  container.innerHTML = '';

  ROUNDS.forEach(function(r) {
    // round header
    var header       = document.createElement('div');
    header.style.cssText = 'display:flex;align-items:center;gap:10px;margin:20px 0 12px;';
    header.innerHTML = '<span style="font-size:1.6rem;">' + r.icon + '</span><h3 style="color:var(--pink-dk);">Round ' + r.id + ': ' + r.title + '</h3>';
    container.appendChild(header);

    r.vocab.forEach(function(word) {
      var entry = VOCAB_DB[word];
      if (!entry) return;
      var card       = document.createElement('div');
      card.className = 'vcard';
      card.innerHTML = '<div class="vword">💅 ' + word + '</div>'
                     + '<div class="vdef">' + entry.def + '</div>'
                     + '<div class="vex">💬 ' + entry.ex + '</div>';
      container.appendChild(card);
    });
  });

  showScreen('screenVocab');
}

// ═══════════════════════════════════════════
// RESTART
// ═══════════════════════════════════════════
function restartGame() {
  currentRound  = 0;
  currentQ      = 0;
  totalScore    = 0;
  roundScore    = 0;
  combo         = 0;
  correctCount  = 0;
  totalAnswered  = 0;
  roundScores   = [];
  clearInterval(timerInterval);
  showScreen('screenRole');
}

// ═══════════════════════════════════════════
// CONFETTI
// ═══════════════════════════════════════════
function launchConfetti() {
  var canvas    = document.getElementById('confetti-canvas');
  var ctx       = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  var colors    = ['#ff6b9d','#f5c842','#9b59b6','#1abc9c','#ff8c42','#ffffff'];
  var particles = [];
  for (var i = 0; i < 120; i++) {
    particles.push({
      x:          Math.random() * canvas.width,
      y:          Math.random() * canvas.height - canvas.height,
      r:          Math.random() * 8 + 4,
      d:          Math.random() * 3 + 1,
      color:      colors[Math.floor(Math.random() * colors.length)],
      tilt:       Math.random() * 10 - 10,
      tiltAngle:  0,
      tiltSpeed:  Math.random() * 0.1 + 0.05
    });
  }

  var frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function(p) {
      ctx.beginPath();
      ctx.lineWidth   = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
      ctx.stroke();
      p.tiltAngle += p.tiltSpeed;
      p.y          += (Math.cos(0) + p.d);
      p.tilt        = Math.sin(p.tiltAngle) * 15;
    });
    frame++;
    if (frame < 220) {
      requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  draw();
}

// ═══════════════════════════════════════════
// EVENT LISTENERS
// ═══════════════════════════════════════════
document.getElementById('vocabModal').addEventListener('click', function(e) {
  if (e.target === this) closeVocabModal();
});

document.getElementById('playerName').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') goToRoleSelect();
});
