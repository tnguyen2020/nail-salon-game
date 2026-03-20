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
  // ── ROUND 1: GREETING ──────────────────────────────────
  {
    id:1, title:"Greeting & Welcome", icon:"🚪",
    vocab:["appointment","walk-in","availability","welcome","book","recommended","don't mind"],
    questions:[
      {
        scene:"Scene 1 — Walking In", icon:"🚪", title:"Entering the Salon",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Hi! Welcome to Pretty Nails Salon! How can I help you today?" }
        ],
        prompt:"You just walked in. What is the BEST natural English response?",
        options:[
          { text:'"Hi! I\'d like to make an appointment for a manicure, please."', correct:true  },
          { text:'"Yes, nail please."',                                             correct:false },
          { text:'"I want beautiful nail."',                                        correct:false },
          { text:'"Nail shop. Good."',                                              correct:false }
        ],
        feedback:"Great! Always greet back and clearly state what service you want. This sounds professional and polite!",
        tip:"💡 Use 'I'd like to...' + the service name. Example: 'I'd like to get a manicure, please.'"
      },
      {
        scene:"Scene 1 — Appointment Check", icon:"📅", title:"Do You Have an Appointment?",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Do you have an appointment today?" }
        ],
        prompt:"You did NOT make an appointment ahead of time. What do you say?",
        options:[
          { text:'"No, I\'m a walk-in. Do you have any availability right now?"', correct:true  },
          { text:'"No appointment. I am here now."',                              correct:false },
          { text:'"Yes, I have appointment today."',                              correct:false },
          { text:'"No. I just came."',                                            correct:false }
        ],
        feedback:'Perfect! "Walk-in" means no appointment. "Availability" = open time slots — very natural!',
        tip:"💡 'Walk-in' = coming without an appointment. 'Availability' = open time slots. Both are key words!"
      },
      {
        scene:"Scene 1 — Wait Time", icon:"⏳", title:"The Salon is Busy",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"We're a little busy right now. The wait will be about 20 minutes. Is that okay?" }
        ],
        prompt:"You are happy to wait. How do you respond naturally?",
        options:[
          { text:'"That\'s totally fine! I don\'t mind waiting at all."', correct:true  },
          { text:'"Yes wait is okay."',                                    correct:false },
          { text:'"OK. I wait here."',                                     correct:false },
          { text:'"20 minute is good."',                                   correct:false }
        ],
        feedback:'"That\'s totally fine!" and "I don\'t mind" are very natural American English expressions!',
        tip:"💡 'I don't mind' = I am okay with it. Use this phrase in many daily situations in the US!"
      },
      {
        scene:"Scene 1 — Meeting Your Tech", icon:"🤝", title:"Technician Introduction",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Jenny (Tech)", text:"Hi! I'm Jenny, I'll be your nail technician today. So nice to meet you!" }
        ],
        prompt:"How do you respond to your nail technician's friendly greeting?",
        options:[
          { text:'"Nice to meet you too, Jenny! I\'m so excited to be here!"', correct:true  },
          { text:'"Hello Jenny. Do my nail now."',                              correct:false },
          { text:'"OK. Hi."',                                                   correct:false },
          { text:'"Jenny? Good name."',                                         correct:false }
        ],
        feedback:"Wonderful! Always respond with 'Nice to meet you too!' This builds a great relationship with your tech!",
        tip:"💡 In US salons, nail techs introduce themselves. Using their name shows friendliness and respect!"
      },
      {
        scene:"Scene 1 — First Visit", icon:"🌟", title:"First Time Here",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Is this your first time visiting Pretty Nails?" }
        ],
        prompt:"It IS your first time at this salon. What is the most natural response?",
        options:[
          { text:'"Yes, it\'s my first time! A friend recommended your salon and I\'m so excited to try it!"', correct:true  },
          { text:'"Yes. First time here."',              correct:false },
          { text:'"Yes I am first time customer."',      correct:false },
          { text:'"No I never come before."',            correct:false }
        ],
        feedback:"Excellent! Mentioning how you found the salon is natural small talk. 'Recommended' is a great word!",
        tip:"💡 'Recommended' = someone told you it was good. 'A friend recommended this place' is very natural!"
      }
    ]
  },

  // ── ROUND 2: SERVICES ──────────────────────────────────
  {
    id:2, title:"Choosing Your Service", icon:"💅",
    vocab:["manicure","pedicure","full set","acrylic","gel","dip powder","fill-in","soak off","What's included","I'll go with","grown out"],
    questions:[
      {
        scene:"Scene 2 — Service Selection", icon:"💅", title:"What Service Today?",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Okay! What service would you like today?" }
        ],
        prompt:"You want brand new fake nails (acrylic) for the very first time. What do you say?",
        options:[
          { text:'"I\'d like a full set of acrylics, please!"', correct:true  },
          { text:'"I want fake nail please."',                  correct:false },
          { text:'"Give me acrylic full set."',                 correct:false },
          { text:'"I need more nail please."',                  correct:false }
        ],
        feedback:'"Full set of acrylics" is exactly what nail technicians expect to hear! You sound like a regular!',
        tip:"💡 'Full set' = brand new acrylics. 'Fill-in' = touching up grown-out acrylics. Know the difference!"
      },
      {
        scene:"Scene 2 — Polish Type", icon:"✨", title:"Gel or Regular?",
        dialogue:[
          { side:"tech",      emoji:"💅",    speaker:"Nail Tech", text:"Would you like regular polish or gel polish?" },
          { side:"customer",  emoji:"💁‍♀️", speaker:"You",       text:"What's the difference?" },
          { side:"tech",      emoji:"💅",    speaker:"Nail Tech", text:"Gel lasts 2-3 weeks without chipping, but costs a little more. Regular is cheaper but chips easier." }
        ],
        prompt:"You want something that lasts a long time. What do you say?",
        options:[
          { text:'"I\'ll go with gel then — I want it to last longer!"', correct:true  },
          { text:'"The expensive one please."',                           correct:false },
          { text:'"Gel please the long lasting."',                        correct:false },
          { text:'"Regular please, more cheap."',                         correct:false }
        ],
        feedback:'"I\'ll go with..." is a super natural way to make a decision in English. Use it every day!',
        tip:"💡 'I'll go with...' = I choose / I decide. 'I'll go with the gel.' Very natural American English!"
      },
      {
        scene:"Scene 2 — Pedicure Menu", icon:"🦶", title:"Pedicure Options",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"For your pedicure — regular for \$30 or the deluxe with hot stone massage for \$50?" }
        ],
        prompt:"Before deciding, you want to know exactly what is in the deluxe option.",
        options:[
          { text:'"What\'s included in the deluxe pedicure?"', correct:true  },
          { text:'"What is in the expensive one?"',             correct:false },
          { text:'"Deluxe have what things?"',                  correct:false },
          { text:'"Tell me deluxe contents."',                  correct:false }
        ],
        feedback:'"What\'s included in...?" is a very important phrase! Use it at salons, restaurants, hotels!',
        tip:"💡 'What's included?' = What do I get? Very useful for any shopping situation in the US!"
      },
      {
        scene:"Scene 2 — Fill-in Request", icon:"🔧", title:"Time for a Fill-in",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Hi, welcome back! What can I do for you today?" }
        ],
        prompt:"Your acrylic nails grew out and you need them touched up. What do you say?",
        options:[
          { text:'"I need a fill-in, please. They\'ve grown out quite a bit!"', correct:true  },
          { text:'"My nail grow. Please fix."',                                  correct:false },
          { text:'"I want fill the nail hole."',                                 correct:false },
          { text:'"Touch up my acrylic nail."',                                  correct:false }
        ],
        feedback:'Perfect! "Fill-in" is exactly the right word. "Grown out" is natural — every regular customer says this!',
        tip:"💡 'Grown out' = the nail has grown away from where product was applied. Key phrase!"
      },
      {
        scene:"Scene 2 — Remove & Redo", icon:"💧", title:"Soak Off & Start Fresh",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"What service are you in for today?" }
        ],
        prompt:"You want to REMOVE your old gel nails AND get a fresh regular manicure after.",
        options:[
          { text:'"I\'d like to soak off my gel nails first, then get a regular manicure."', correct:true  },
          { text:'"Take off my nail then do new nail."',                                      correct:false },
          { text:'"Remove gel then make normal."',                                            correct:false },
          { text:'"I want no more gel, then regular."',                                       correct:false }
        ],
        feedback:'"Soak off" is the professional term for removing gel. Very natural and easy to understand!',
        tip:"💡 'Soak off' = remove gel nails using acetone. Knowing this makes you sound like a salon regular!"
      },
      {
        scene:"Scene 2 — Nail Tech Role", icon:"👩‍💼", title:"You Are the Nail Tech!",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"Hi! I'd like to get my nails done today!" }
        ],
        prompt:"You are the NAIL TECH. What is the most helpful first question?",
        options:[
          { text:'"Of course! What service are you looking for — manicure, pedicure, or a full set?"', correct:true  },
          { text:'"What color do you want?"',               correct:false },
          { text:'"Please sit down over there."',           correct:false },
          { text:'"How much are you going to pay?"',        correct:false }
        ],
        feedback:"Great instinct! Always ask about the SERVICE TYPE first. This is the #1 priority as a nail tech!",
        tip:"💡 As a nail tech: always establish the SERVICE before asking about color, design, or length!"
      }
    ]
  },

  // ── ROUND 3: SHAPE & LENGTH ────────────────────────────
  {
    id:3, title:"Nail Shape & Length", icon:"📐",
    vocab:["coffin","almond","stiletto","square","oval","round","medium","past my fingertip","shade"],
    questions:[
      {
        scene:"Scene 3 — Shape Selection", icon:"💎", title:"Choosing Your Shape",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"What shape would you like for your nails?" }
        ],
        prompt:"You want the popular coffin shape — long with a flat squared top. What do you say?",
        options:[
          { text:'"Can I get coffin shape, please?"',          correct:true  },
          { text:'"I want the box at the top shape."',         correct:false },
          { text:'"Make it flat on top and long."',            correct:false },
          { text:'"The trendy flat tip nail."',                correct:false }
        ],
        feedback:'"Coffin shape" is the exact nail industry term. The technician will know instantly what you want!',
        tip:"💡 Nail Shapes: Coffin 🟫 Almond 🌰 Stiletto 🔺 Square 🟦 Oval 🥚 Round ⭕ — learn them all!"
      },
      {
        scene:"Scene 3 — Asking for Advice", icon:"🤔", title:"Need a Recommendation",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"What shape would you like today?" }
        ],
        prompt:"You are not sure what shape looks best on YOUR fingers. How do you ask for advice?",
        options:[
          { text:'"I\'m not sure — what shape do you think would look best on my hands?"', correct:true  },
          { text:'"You decide for me please."',                correct:false },
          { text:'"What shape is the most beautiful?"',       correct:false },
          { text:'"I don\'t know nail shape."',               correct:false }
        ],
        feedback:"Wonderful! Asking for a professional's opinion is very natural and polite in American English!",
        tip:"💡 'What do you think would look...?' = asking for professional opinion. Very polite and very American!"
      },
      {
        scene:"Scene 3 — Length Choice", icon:"📏", title:"How Long?",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"How long would you like your nails?" }
        ],
        prompt:"You want medium length — just slightly longer than your natural fingertip.",
        options:[
          { text:'"Medium length please — just a little past my fingertips."', correct:true  },
          { text:'"Not too long not too short nail."',                          correct:false },
          { text:'"Medium. In the middle size."',                               correct:false },
          { text:'"I want middle nail length."',                                correct:false }
        ],
        feedback:"Perfect! 'Just past my fingertips' gives the technician a very clear visual reference!",
        tip:"💡 Use body references for length: 'past my fingertip' or point to show exactly where. Much clearer!"
      },
      {
        scene:"Scene 3 — Photo Reference", icon:"📸", title:"Showing a Reference Photo",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Do you have something specific in mind for the shape and length?" }
        ],
        prompt:"You have a photo on your phone of the exact nail style you want. What do you say?",
        options:[
          { text:'"Yes! I have a reference photo right here — can you match this shape and length?"', correct:true  },
          { text:'"Yes I have picture. Copy please."',         correct:false },
          { text:'"Look at my phone. Do same thing."',         correct:false },
          { text:'"I have photo. Make same nail."',            correct:false }
        ],
        feedback:'"Can you match this?" is very professional. Nail techs love when customers bring reference photos!',
        tip:"💡 Say 'Can you match this?' or 'Can you do something similar to this?' when showing a photo."
      },
      {
        scene:"Scene 3 — Tech Recommends", icon:"💡", title:"You Are the Nail Tech!",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"I'm honestly not sure what shape I want. What do you recommend for me?" }
        ],
        prompt:"You are the NAIL TECH. What is the most professional and helpful response?",
        options:[
          { text:'"With your finger shape, I think almond or oval would look really elegant on you!"', correct:true  },
          { text:'"All shapes are good. You choose."',         correct:false },
          { text:'"Coffin is very popular right now."',        correct:false },
          { text:'"Do you want coffin or square?"',            correct:false }
        ],
        feedback:"Excellent! A great nail tech gives a specific recommendation based on the CUSTOMER's hands!",
        tip:"💡 As a nail tech: always explain WHY you recommend something. 'I think X would look great because...' builds trust!"
      }
    ]
  },

  // ── ROUND 4: COLOR & DESIGN ────────────────────────────
  {
    id:4, title:"Color & Design", icon:"🎨",
    vocab:["ombre","French tip","glitter","chrome","matte","glossy","rhinestones","accent nail","solid color","shade"],
    questions:[
      {
        scene:"Scene 4 — Picking Color", icon:"🎨", title:"Choosing Your Color",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Do you have a color in mind today?" }
        ],
        prompt:"You want pink but aren't sure which shade. How do you ask naturally?",
        options:[
          { text:'"I\'m thinking pink, but I\'m not sure which shade. Can you show me your options?"', correct:true  },
          { text:'"Pink color. Show me the pinks."',            correct:false },
          { text:'"I want pink but which one I don\'t know."',  correct:false },
          { text:'"All the pinks please show me."',             correct:false }
        ],
        feedback:'"Can you show me your options?" is perfectly natural! You will hear this in stores all across the US!',
        tip:"💡 'Shade' = a specific version of a color. Baby pink, hot pink, dusty rose = all shades of pink!"
      },
      {
        scene:"Scene 4 — Design Request", icon:"💫", title:"Nail Art Design",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Would you like any nail art or special design?" }
        ],
        prompt:"You want ombre nails (two colors fading together) with glitter on top. What do you say?",
        options:[
          { text:'"Yes! I\'d love an ombre design with some glitter on top, please!"', correct:true  },
          { text:'"Yes two color mix with sparkle please."',                           correct:false },
          { text:'"Make fade color nail with shiny."',                                 correct:false },
          { text:'"Ombre nail. Put glitter."',                                         correct:false }
        ],
        feedback:'"I\'d love..." sounds enthusiastic and natural! Great use of "ombre" and "glitter" vocabulary!',
        tip:"💡 'I'd love...' sounds warmer than 'I want...' Use it when you're excited about something!"
      },
      {
        scene:"Scene 4 — French Tip", icon:"🤍", title:"Classic French Tips",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"What design are you thinking today?" }
        ],
        prompt:"You want the classic style — white tips on a natural base. What do you ask for?",
        options:[
          { text:'"I\'d like a classic French tip, please — white tips with a natural pink base."', correct:true  },
          { text:'"White on top of nail natural color bottom."',  correct:false },
          { text:'"French nail style please."',                   correct:false },
          { text:'"I want white nail tip France style."',         correct:false }
        ],
        feedback:'"Classic French tip" is exactly the right term! Very professional and easy to understand!',
        tip:"💡 'French tip' = white tip + natural/pink base. A timeless, classic American nail style!"
      },
      {
        scene:"Scene 4 — Accent Nail", icon:"💍", title:"Special Accent Nail",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Would you like the same on all nails, or something different?" }
        ],
        prompt:"You want all nails solid pink EXCEPT the ring finger — that one gets a floral design.",
        options:[
          { text:'"Can I do solid pink on all nails, but make my ring finger an accent nail with flowers?"', correct:true  },
          { text:'"All pink but one different nail. Flower on ring finger."', correct:false },
          { text:'"Four pink nail, one flower nail please."',                 correct:false },
           { text:'"Ring finger different. Others same pink."',               correct:false }
        ],
        feedback:'"Accent nail" is the industry term for one standout nail. Now you sound like a true salon regular!',
        tip:"💡 'Accent nail' = one nail with a special design — usually the ring finger. Very trendy in the US!"
      },
      {
        scene:"Scene 4 — Finish Type", icon:"✨", title:"Matte or Glossy?",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Would you like a shiny top coat or matte finish?" }
        ],
        prompt:"You want NO shine — a flat, modern look. What do you say?",
        options:[
          { text:'"I\'d like matte please — I love that flat modern look!"', correct:true  },
          { text:'"No shiny please. Flat nail."',                            correct:false },
          { text:'"I don\'t want shiny nail."',                              correct:false },
          { text:'"Not glossy. The other one."',                             correct:false }
        ],
        feedback:'"Matte" is the exact word for no shine. You used the vocabulary perfectly — great job!',
        tip:"💡 Matte = no shine. Glossy = shiny. Chrome = mirror-like. Shimmer = tiny sparkles. Know them all!"
      },
      {
        scene:"Scene 4 — Tech Suggests", icon:"🌸", title:"You Are the Nail Tech!",
        dialogue:[
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"I want something romantic and elegant for my anniversary dinner tonight." },
          { side:"customer", emoji:"💁‍♀️", speaker:"Customer", text:"Can you help me choose a design?" }
        ],
        prompt:"You are the NAIL TECH. What is the BEST design suggestion?",
        options:[
          { text:'"How about soft rose pink with a gold glitter accent nail and tiny rhinestones? Perfect for a romantic evening!"', correct:true  },
          { text:'"Red nail is romantic color."',              correct:false },
          { text:'"What color do you like?"',                 correct:false },
          { text:'"Romantic design is very popular now."',    correct:false }
        ],
        feedback:"Fantastic! You gave a specific, detailed suggestion that matches the occasion. Excellent customer service!",
        tip:"💡 As a nail tech: always connect your suggestion to the customer's occasion. It shows you listened!"
      }
    ]
  },

  // ── ROUND 5: PRICE & PAYMENT ───────────────────────────
  {
    id:5, title:"Price & Payment", icon:"💰",
    vocab:["total","tip","gratuity","receipt","cash","card","Zelle","Venmo","included","additional charge"],
    questions:[
      {
        scene:"Scene 5 — Asking Price", icon:"💰", title:"How Much Will It Cost?",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"I can do all of that for you — no problem at all!" }
        ],
        prompt:"Before agreeing to start, you want to know the total cost. What do you ask?",
        options:[
          { text:'"Before we start, can you tell me how much everything will be?"', correct:true  },
          { text:'"How much price for this?"',               correct:false },
          { text:'"Tell me the money for nail."',            correct:false },
          { text:'"What is cost for everything?"',           correct:false }
        ],
        feedback:'"Before we start, how much will this be?" is very natural and smart. Always ask first!',
        tip:"💡 Always ask about price BEFORE services start. Say: 'Before we begin, how much will this cost?'"
      },
      {
        scene:"Scene 5 — Card Payment", icon:"💳", title:"Paying the Bill",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Alright, your total comes to \$65 today!" }
        ],
        prompt:"You want to pay with your debit card. What is the smartest thing to say?",
        options:[
          { text:'"Can I pay with card? Is there an additional charge for using a card?"', correct:true  },
          { text:'"I use my card please."',  correct:false },
          { text:'"Card payment."',          correct:false },
          { text:'"I will pay card."',       correct:false }
        ],
        feedback:"Smart! Many US salons charge extra for card payments. Always ask about additional charges first!",
        tip:"💡 Some nail salons add a 3-4% fee for card payments. Always ask: 'Is there a fee for using a card?'"
      },
      {
        scene:"Scene 5 — Tip Question", icon:"🙏", title:"Is Tip Included?",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"Your total is \$45. Would you like to pay by cash or card?" }
        ],
        prompt:"You want to know if the tip is already part of the \$45 total. How do you ask?",
        options:[
          { text:'"Is the tip included in that, or should I add it separately?"', correct:true  },
          { text:'"Tip is inside \$45?"',          correct:false },
          { text:'"Gratuity included?"',          correct:false },
          { text:'"I need to give tip also?"',    correct:false }
        ],
        feedback:'"Is the tip included?" is a very common and natural question at US salons. Usually it is NOT included!',
        tip:"💡 In the US, tipping 15-20% at nail salons is customary. Cash tips are always preferred!"
      },
      {
        scene:"Scene 5 — Polite Complaint", icon:"😟", title:"Something Isn't Right",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"All finished! What do you think? Do you love them?" }
        ],
        prompt:"They look mostly great, but one nail has an uneven shape. How do you politely ask for a fix?",
        options:[
          { text:'"They look beautiful! Could you just check the pinky? The shape looks a little uneven."', correct:true  },
          { text:'"This nail is wrong. Fix please."',  correct:false },
          { text:'"Not good! Do it again."',           correct:false },
          { text:'"One nail bad shape."',              correct:false }
        ],
        feedback:"Excellent! Start with a compliment then mention the issue gently. This is the polite American style!",
        tip:"💡 The sandwich method: Positive comment → Gentle issue → Positive ending. Very polite and effective!"
      },
      {
        scene:"Scene 5 — Book Next Visit", icon:"📅", title:"Booking Your Next Appointment",
        dialogue:[
          { side:"tech", emoji:"💅", speaker:"Nail Tech", text:"I hope you love your nails! Is there anything else I can help you with today?" }
        ],
        prompt:"Everything is perfect! You want to book your NEXT appointment for about 3 weeks from now.",
        options:[
          { text:'"Everything is perfect, thank you so much! Can I book my next appointment for about 3 weeks from today?"', correct:true  },
          { text:'"Book me again 3 weeks."',             correct:false },
          { text:'"I come back in 3 week."',             correct:false },
          { text:'"Next time appointment 3 weeks."',     correct:false }
        ],
        feedback:'"Can I book my next appointment?" is perfect! "About 3 weeks from today" is very natural timing language!',
        tip:"💡 'About' + time = approximately. 'About 3 weeks.' 'About 2 hours.' Adds natural flexibility!"
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
  var q = r.questions[currentQ];
  answered = false;

  // top bar
  document.getElementById('scoreDisplay').textContent = totalScore;
  document.getElementById('roleBadge').textContent    = playerRole === 'customer' ? '💁 Customer' : '💅 Nail Tech';
  document.getElementById('qCounter').textContent     = 'Q ' + (currentQ + 1) + '/' + r.questions.length;

  // scene header
  document.getElementById('sceneName').textContent    = q.scene;
  document.getElementById('sceneIconBig').textContent = q.icon;
  document.getElementById('sceneTitle').textContent   = q.title;

  // progress bar
  var pct = (currentQ / r.questions.length) * 100;
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
  if (currentQ < r.questions.length) {
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
  var maxP = r.questions.length * 150;
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
  r.questions.forEach(function(q) {
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