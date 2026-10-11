/* ══════════════════════════════════════════════════════════════
   PRINCIPAL EXAM 2026 — मुदालियर आयोग (1952–53) Quiz Engine
   50 Hard Level MCQs — Secondary Education Commission
   ══════════════════════════════════════════════════════════════ */

// ── QUESTION DATA (50 Questions — Hard Level) ──
const quizData = [
  {
    q: "माध्यमिक शिक्षा आयोग (मुदालियर आयोग) की स्थापना किस तिथि को हुई थी?",
    options: ["23 सितम्बर 1952", "3 अक्टूबर 1952", "15 अगस्त 1952", "26 जनवरी 1953"],
    correct: 0,
    explanation: "माध्यमिक शिक्षा आयोग की स्थापना 23 सितम्बर 1952 को भारत सरकार द्वारा की गई थी।"
  },
  {
    q: "मुदालियर आयोग के अध्यक्ष डॉ. ए. लक्ष्मणस्वामी मुदालियर किस विश्वविद्यालय के कुलपति थे?",
    options: ["मद्रास विश्वविद्यालय", "मैसूर विश्वविद्यालय", "बम्बई विश्वविद्यालय", "कलकत्ता विश्वविद्यालय"],
    correct: 0,
    explanation: "डॉ. ए. लक्ष्मणस्वामी मुदालियर मद्रास विश्वविद्यालय के कुलपति थे। वे एक प्रसिद्ध शिक्षाविद् एवं प्रशासक थे।"
  },
  {
    q: "मुदालियर आयोग में अध्यक्ष सहित कुल कितने सदस्य थे?",
    options: ["7", "9", "10", "12"],
    correct: 2,
    explanation: "मुदालियर आयोग में अध्यक्ष डॉ. मुदालियर सहित कुल 10 सदस्य थे, जिनमें 1 विदेशी सदस्य (जॉन क्रिस्टी) भी शामिल थे।"
  },
  {
    q: "मुदालियर आयोग ने अपनी रिपोर्ट कब प्रस्तुत की?",
    options: ["जून 1953", "अगस्त 1953", "अक्टूबर 1953", "दिसम्बर 1953"],
    correct: 1,
    explanation: "मुदालियर आयोग ने अपनी रिपोर्ट 29 अगस्त 1953 को भारत सरकार को प्रस्तुत की।"
  },
  {
    q: "मुदालियर आयोग की रिपोर्ट का शीर्षक क्या था?",
    options: [
      "Education and National Development",
      "Report of the Secondary Education Commission",
      "Learning Without Burden",
      "Challenge of Education"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग की रिपोर्ट 'Report of the Secondary Education Commission' (माध्यमिक शिक्षा आयोग की रिपोर्ट) शीर्षक से प्रकाशित हुई।"
  },
  {
    q: "मुदालियर आयोग ने माध्यमिक शिक्षा की अवधि कितने वर्ष प्रस्तावित की?",
    options: ["5 वर्ष", "6 वर्ष", "7 वर्ष", "4 वर्ष"],
    correct: 2,
    explanation: "मुदालियर आयोग ने माध्यमिक शिक्षा की अवधि 7 वर्ष (कक्षा 5 से कक्षा 11 तक) प्रस्तावित की — जिसमें 3 वर्ष मिडिल (6–8) + 4 वर्ष हाई/हायर सेकेंडरी (8–11)।"
  },
  {
    q: "मुदालियर आयोग ने शैक्षिक संरचना में कौन-सा प्रारूप सुझाया?",
    options: [
      "8+4 (8 वर्ष प्राथमिक + 4 वर्ष माध्यमिक)",
      "5+3+4 (प्राथमिक + मिडिल + हाई/हायर सेकेंडरी)",
      "6+3+3 (प्राथमिक + मिडिल + सेकेंडरी)",
      "10+2+3"
    ],
    correct: 0,
    explanation: "मुदालियर आयोग ने शैक्षिक संरचना के रूप में 8+4 प्रारूप सुझाया — 8 वर्ष प्राथमिक/मिडिल शिक्षा (कक्षा 1–8) और 4 वर्ष माध्यमिक/उच्चतर माध्यमिक शिक्षा (कक्षा 8–11)।"
  },
  {
    q: "मुदालियर आयोग ने माध्यमिक शिक्षा का प्रमुख उद्देश्य क्या बताया?",
    options: [
      "केवल विश्वविद्यालय प्रवेश की तैयारी",
      "लोकतांत्रिक नागरिकता का विकास",
      "केवल व्यावसायिक कुशलता",
      "केवल साक्षरता प्रसार"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने माध्यमिक शिक्षा का प्रमुख उद्देश्य लोकतांत्रिक नागरिकता का विकास बताया, जिसमें नेतृत्व, सामाजिक दायित्व एवं राष्ट्रीय एकता शामिल थी।"
  },
  {
    q: "मुदालियर आयोग ने माध्यमिक शिक्षा के कितने उद्देश्य निर्धारित किए?",
    options: ["5", "6", "7", "8"],
    correct: 2,
    explanation: "मुदालियर आयोग ने माध्यमिक शिक्षा के 7 उद्देश्य निर्धारित किए: (1) लोकतांत्रिक नागरिकता, (2) व्यावसायिक दक्षता, (3) व्यक्तित्व विकास, (4) नेतृत्व, (5) चरित्र निर्माण, (6) साहित्यिक एवं सौंदर्यात्मक विकास, (7) विज्ञान शिक्षा।"
  },
  {
    q: "मुदालियर आयोग में शामिल विदेशी सदस्य (ब्रिटिश सदस्य) कौन थे?",
    options: ["जॉन सार्जेन्ट", "जॉन क्रिस्टी", "लॉर्ड मैकाले", "चार्ल्स वुड"],
    correct: 1,
    explanation: "मुदालियर आयोग में जॉन क्रिस्टी (John Christie) ब्रिटिश सदस्य के रूप में शामिल थे, जो ब्रिटेन के शिक्षा जगत से जुड़े विशेषज्ञ थे।"
  },
  {
    q: "मुदालियर आयोग ने 'बहुउद्देशीय विद्यालय' (Multipurpose School) की अवधारणा किस देश की शिक्षा प्रणाली से प्रेरित होकर प्रस्तुत की?",
    options: ["इंग्लैंड", "अमेरिका (USA)", "जापान", "फ्रांस"],
    correct: 1,
    explanation: "बहुउद्देशीय विद्यालय (Multipurpose School) की अवधारणा अमेरिका (USA) की Comprehensive High School प्रणाली से प्रेरित थी, जहाँ एक ही विद्यालय में अनेक विषय धाराएँ उपलब्ध होती हैं।"
  },
  {
    q: "मुदालियर आयोग ने बहुउद्देशीय विद्यालयों में कौन-कौन सी धाराएँ (Streams) प्रस्तावित कीं?",
    options: [
      "केवल विज्ञान और कला",
      "मानविकी, विज्ञान, तकनीकी, वाणिज्य, कृषि, ललित कला, गृह विज्ञान",
      "केवल वाणिज्य और विज्ञान",
      "केवल कृषि और तकनीकी"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने बहुउद्देशीय विद्यालयों में मानविकी, विज्ञान, तकनीकी, वाणिज्य, कृषि, ललित कला एवं गृह विज्ञान जैसी विविध धाराएँ (Diversified Courses) प्रस्तावित कीं।"
  },
  {
    q: "मुदालियर आयोग ने माध्यमिक स्तर पर 'विविधीकृत पाठ्यक्रम' (Diversified Curriculum) की सिफारिश क्यों की?",
    options: [
      "विश्वविद्यालयों का बोझ बढ़ाने के लिए",
      "सभी छात्रों को एक ही दिशा में ले जाने के लिए",
      "छात्रों की विभिन्न रुचियों, क्षमताओं एवं व्यावसायिक आवश्यकताओं की पूर्ति हेतु",
      "शिक्षकों की संख्या कम करने के लिए"
    ],
    correct: 2,
    explanation: "आयोग ने विविधीकृत पाठ्यक्रम की सिफारिश इसलिए की ताकि छात्रों की विभिन्न रुचियों, योग्यताओं, क्षमताओं एवं व्यावसायिक आवश्यकताओं को पूरा किया जा सके और शिक्षा केवल विश्वविद्यालय प्रवेश तक सीमित न रहे।"
  },
  {
    q: "मुदालियर आयोग ने परीक्षा प्रणाली में सुधार हेतु कौन-सी प्रमुख सिफारिश की?",
    options: [
      "केवल मौखिक परीक्षा होनी चाहिए",
      "बाह्य परीक्षा को पूर्णतः समाप्त कर देना चाहिए",
      "आंतरिक मूल्यांकन (Internal Assessment) को बाह्य परीक्षा के साथ जोड़ा जाए",
      "परीक्षा केवल वर्ष में एक बार हो"
    ],
    correct: 2,
    explanation: "मुदालियर आयोग ने सिफारिश की कि बाह्य परीक्षा के साथ-साथ आंतरिक मूल्यांकन (Internal Assessment) को भी शामिल किया जाए ताकि मूल्यांकन अधिक व्यापक और विश्वसनीय हो।"
  },
  {
    q: "मुदालियर आयोग ने माध्यमिक शिक्षा में हस्तकला/शिल्प (Craft) शिक्षा के बारे में क्या कहा?",
    options: [
      "हस्तकला को पूर्णतः अनिवार्य बनाया जाए जैसा बेसिक शिक्षा में है",
      "हस्तकला को पूर्णतः समाप्त किया जाए",
      "हस्तकला/शिल्प को शिक्षा का केंद्र न बनाकर विविधीकृत पाठ्यक्रम का एक अंग बनाया जाए",
      "केवल लड़कियों को हस्तकला पढ़ाई जाए"
    ],
    correct: 2,
    explanation: "मुदालियर आयोग ने गांधीजी की बेसिक शिक्षा में हस्तकला को शिक्षा का केंद्र बनाने की आलोचना की और सुझाव दिया कि शिल्प/हस्तकला को विविधीकृत पाठ्यक्रम का एक अंग बनाया जाए, न कि पूरी शिक्षा उसके इर्द-गिर्द घूमे।"
  },
  {
    q: "मुदालियर आयोग ने 'माध्यमिक शिक्षा बोर्ड' (Secondary Education Board) की स्थापना किस स्तर पर करने का सुझाव दिया?",
    options: [
      "केवल केन्द्रीय स्तर पर",
      "प्रत्येक राज्य स्तर पर",
      "जिला स्तर पर",
      "ब्लॉक स्तर पर"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने प्रत्येक राज्य में एक 'माध्यमिक शिक्षा बोर्ड' की स्थापना का सुझाव दिया जो माध्यमिक शिक्षा के पाठ्यक्रम, परीक्षा एवं गुणवत्ता नियंत्रण का कार्य करे।"
  },
  {
    q: "मुदालियर आयोग ने शिक्षा के माध्यम (Medium of Instruction) के बारे में क्या सिफारिश की?",
    options: [
      "केवल अंग्रेजी माध्यम होना चाहिए",
      "केवल हिन्दी माध्यम होना चाहिए",
      "मातृभाषा/क्षेत्रीय भाषा को शिक्षा का माध्यम बनाया जाए",
      "संस्कृत को शिक्षा का माध्यम बनाया जाए"
    ],
    correct: 2,
    explanation: "मुदालियर आयोग ने सिफारिश की कि माध्यमिक स्तर पर शिक्षा का माध्यम मातृभाषा/क्षेत्रीय भाषा होनी चाहिए, और अंग्रेजी को एक विषय के रूप में पढ़ाया जाए, न कि शिक्षा के माध्यम के रूप में।"
  },
  {
    q: "मुदालियर आयोग ने अंग्रेजी भाषा की शिक्षा किस कक्षा से आरंभ करने की सिफारिश की?",
    options: ["कक्षा 1 से", "कक्षा 3 से", "कक्षा 5 से", "कक्षा 6 से"],
    correct: 3,
    explanation: "मुदालियर आयोग ने अंग्रेजी भाषा की शिक्षा कक्षा 6 (मिडिल स्तर) से आरंभ करने की सिफारिश की, इससे पहले मातृभाषा में ही शिक्षा दी जानी चाहिए।"
  },
  {
    q: "मुदालियर आयोग ने 'त्रि-भाषा सूत्र' (Three-Language Formula) के अंतर्गत कौन-सी तीन भाषाएँ सुझाईं?",
    options: [
      "हिन्दी, अंग्रेजी, संस्कृत",
      "मातृभाषा/क्षेत्रीय भाषा, हिन्दी (अहिन्दी क्षेत्रों में), अंग्रेजी या कोई आधुनिक यूरोपीय भाषा",
      "हिन्दी, उर्दू, अंग्रेजी",
      "मातृभाषा, फ्रेंच, अंग्रेजी"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने त्रि-भाषा सूत्र प्रस्तुत किया: (1) मातृभाषा/क्षेत्रीय भाषा, (2) हिन्दी (अहिन्दी भाषी क्षेत्रों के लिए) या क्षेत्रीय भाषा (हिन्दी भाषी क्षेत्रों के लिए), (3) अंग्रेजी या कोई अन्य आधुनिक यूरोपीय/भारतीय भाषा।"
  },
  {
    q: "मुदालियर आयोग ने शिक्षकों के वेतन एवं सेवा शर्तों के बारे में क्या सिफारिश की?",
    options: [
      "शिक्षकों के वेतन में कटौती होनी चाहिए",
      "शिक्षकों के वेतन एवं सेवा शर्तों में सुधार किया जाए ताकि योग्य व्यक्ति इस पेशे में आएँ",
      "शिक्षकों को कोई विशेष सुविधा नहीं दी जानी चाहिए",
      "केवल निजी विद्यालयों के शिक्षकों को अधिक वेतन मिलना चाहिए"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने सिफारिश की कि शिक्षकों के वेतन, सेवा शर्तों एवं कार्य दशाओं में पर्याप्त सुधार किया जाए ताकि प्रतिभाशाली और योग्य व्यक्ति शिक्षण पेशे की ओर आकर्षित हों।"
  },
  {
    q: "मुदालियर आयोग ने 'All India Council for Secondary Education' (AICSE) की स्थापना की सिफारिश किस उद्देश्य से की?",
    options: [
      "प्राथमिक शिक्षा का प्रबंधन करने हेतु",
      "माध्यमिक शिक्षा के मानकों का निर्धारण, नीति निर्माण एवं समन्वय हेतु",
      "विश्वविद्यालय शिक्षा को नियंत्रित करने हेतु",
      "तकनीकी शिक्षा के विकास हेतु"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने केन्द्रीय स्तर पर 'All India Council for Secondary Education' (AICSE) की स्थापना की सिफारिश की ताकि माध्यमिक शिक्षा के मानकों का निर्धारण, नीतियों का समन्वय एवं सुधार कार्यक्रमों का मार्गदर्शन किया जा सके।"
  },
  {
    q: "मुदालियर आयोग ने माध्यमिक विद्यालयों में 'निर्देशन एवं परामर्श' (Guidance and Counselling) सेवाओं की स्थापना क्यों आवश्यक मानी?",
    options: [
      "केवल अनुशासन बनाए रखने के लिए",
      "छात्रों को उनकी रुचियों, योग्यताओं के अनुसार उचित विषय/व्यवसाय चुनने में सहायता करने हेतु",
      "शिक्षकों की निगरानी करने हेतु",
      "केवल कमजोर छात्रों को अलग करने हेतु"
    ],
    correct: 1,
    explanation: "आयोग ने विद्यालयों में निर्देशन एवं परामर्श सेवाओं की सिफारिश इसलिए की ताकि छात्रों को उनकी रुचियों, योग्यताओं और क्षमताओं के अनुसार उचित विषय-धारा एवं व्यवसाय चुनने में सहायता मिल सके।"
  },
  {
    q: "मुदालियर आयोग ने 'सह-पाठ्यचर्या गतिविधियों' (Co-curricular Activities) को किस रूप में देखा?",
    options: [
      "अनावश्यक एवं समय की बर्बादी",
      "शिक्षा का अभिन्न अंग जो छात्रों के सर्वांगीण विकास में सहायक हो",
      "केवल खेल-कूद तक सीमित",
      "केवल प्रतिभाशाली छात्रों के लिए"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने सह-पाठ्यचर्या गतिविधियों को शिक्षा का अभिन्न अंग माना और कहा कि ये छात्रों के सर्वांगीण विकास — शारीरिक, सामाजिक, नैतिक एवं सौंदर्यात्मक — में महत्वपूर्ण भूमिका निभाती हैं।"
  },
  {
    q: "मुदालियर आयोग ने 'अन्तर्वैयक्तिक शिक्षा' (Intercast Education / Education for Mutual Understanding) किस उद्देश्य से प्रस्तावित की?",
    options: [
      "जाति व्यवस्था को मजबूत करने के लिए",
      "राष्ट्रीय एकता, सामाजिक समरसता एवं सांप्रदायिक सद्भाव को बढ़ावा देने हेतु",
      "केवल अल्पसंख्यकों के लिए",
      "शिक्षा को राजनीतिक बनाने हेतु"
    ],
    correct: 1,
    explanation: "आयोग ने राष्ट्रीय एकता, सामाजिक समरसता एवं सांप्रदायिक सद्भाव को बढ़ावा देने के लिए पाठ्यक्रम में ऐसी शिक्षा शामिल करने की सिफारिश की जो पारस्परिक समझ और सहिष्णुता विकसित करे।"
  },
  {
    q: "मुदालियर आयोग ने माध्यमिक विद्यालयों में 'धार्मिक एवं नैतिक शिक्षा' (Religious and Moral Instruction) के बारे में क्या राय दी?",
    options: [
      "धार्मिक शिक्षा अनिवार्य होनी चाहिए",
      "किसी भी प्रकार की नैतिक शिक्षा नहीं होनी चाहिए",
      "नैतिक एवं आध्यात्मिक मूल्यों की शिक्षा दी जाए लेकिन किसी विशेष धर्म का प्रचार न हो",
      "केवल हिन्दू धर्म की शिक्षा अनिवार्य हो"
    ],
    correct: 2,
    explanation: "मुदालियर आयोग ने सिफारिश की कि विद्यालयों में सार्वभौमिक नैतिक एवं आध्यात्मिक मूल्यों की शिक्षा दी जाए, लेकिन किसी विशेष धर्म या संप्रदाय का प्रचार न किया जाए। यह धर्मनिरपेक्ष दृष्टिकोण था।"
  },
  {
    q: "मुदालियर आयोग ने प्राथमिक शिक्षा के बाद की शिक्षा को कितने भागों में विभाजित किया?",
    options: ["2 भाग", "3 भाग", "4 भाग", "5 भाग"],
    correct: 1,
    explanation: "मुदालियर आयोग ने प्राथमिक शिक्षा के बाद की शिक्षा को 3 भागों में विभाजित किया: (1) मिडिल/जूनियर हाई स्कूल (3 वर्ष), (2) हाई स्कूल (2 वर्ष), (3) हायर सेकेंडरी/प्री-यूनिवर्सिटी (2 वर्ष)।"
  },
  {
    q: "मुदालियर आयोग ने उच्चतर माध्यमिक (Higher Secondary) स्तर पर शिक्षा की अवधि कितने वर्ष प्रस्तावित की?",
    options: ["1 वर्ष", "2 वर्ष", "3 वर्ष", "4 वर्ष"],
    correct: 3,
    explanation: "मुदालियर आयोग ने उच्चतर माध्यमिक (Higher Secondary) स्तर पर 4 वर्ष (कक्षा 8 से कक्षा 11 तक) की शिक्षा प्रस्तावित की।"
  },
  {
    q: "मुदालियर आयोग ने इंटरमीडिएट (Intermediate) कक्षा के बारे में क्या सिफारिश की?",
    options: [
      "इंटरमीडिएट कक्षा को बनाए रखा जाए",
      "इंटरमीडिएट कक्षा को समाप्त किया जाए और इसे उच्चतर माध्यमिक तथा विश्वविद्यालय शिक्षा में विभाजित किया जाए",
      "इंटरमीडिएट को 3 वर्ष का बनाया जाए",
      "इंटरमीडिएट केवल विज्ञान छात्रों के लिए हो"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने इंटरमीडिएट कक्षा को समाप्त करने की सिफारिश की और कहा कि इसका एक वर्ष उच्चतर माध्यमिक में और दूसरा वर्ष विश्वविद्यालय स्नातक शिक्षा में जोड़ा जाए।"
  },
  {
    q: "मुदालियर आयोग ने स्नातक (Degree) पाठ्यक्रम की अवधि कितने वर्ष प्रस्तावित की?",
    options: ["2 वर्ष", "3 वर्ष", "4 वर्ष", "5 वर्ष"],
    correct: 1,
    explanation: "इंटरमीडिएट समाप्त करने के बाद मुदालियर आयोग ने स्नातक (Degree) पाठ्यक्रम को 3 वर्ष का प्रस्तावित किया, जो पहले 2 वर्ष का था।"
  },
  {
    q: "मुदालियर आयोग ने 'शिक्षक प्रशिक्षण' (Teacher Training) के बारे में कौन-सी प्रमुख सिफारिश दी?",
    options: [
      "शिक्षक प्रशिक्षण अनावश्यक है",
      "शिक्षक प्रशिक्षण संस्थाओं का स्तर उन्नत किया जाए और प्रशिक्षण को व्यावहारिक बनाया जाए",
      "केवल पुरुष शिक्षकों को प्रशिक्षण दिया जाए",
      "प्रशिक्षण की अवधि घटाई जाए"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने सिफारिश की कि शिक्षक प्रशिक्षण संस्थाओं (Training Colleges) का स्तर उन्नत किया जाए, प्रशिक्षण को अधिक व्यावहारिक एवं प्रायोगिक बनाया जाए, और शिक्षकों को नवीन शिक्षण विधियों से अवगत कराया जाए।"
  },
  {
    q: "मुदालियर आयोग ने माध्यमिक विद्यालयों में कौन-सी शिक्षण विधि (Teaching Method) अपनाने पर बल दिया?",
    options: [
      "केवल व्याख्यान विधि (Lecture Method)",
      "क्रियात्मक एवं अनुभवात्मक विधियाँ (Activity-based and Experience-based Methods)",
      "केवल पुस्तक-आधारित रटन्त शिक्षा",
      "केवल दूरस्थ शिक्षा"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने रटन्त पद्धति की आलोचना की और क्रियात्मक, अनुभवात्मक, परियोजना-आधारित एवं समस्या-समाधान जैसी शिक्षण विधियों को अपनाने पर बल दिया।"
  },
  {
    q: "मुदालियर आयोग ने माध्यमिक स्तर पर 'शैक्षिक एवं व्यावसायिक निर्देशन' (Educational and Vocational Guidance) किसके द्वारा दिए जाने की सिफारिश की?",
    options: [
      "केवल प्रधानाचार्य द्वारा",
      "प्रशिक्षित परामर्शदाता (Trained Counsellors) द्वारा",
      "केवल अभिभावकों द्वारा",
      "केवल सरकारी अधिकारियों द्वारा"
    ],
    correct: 1,
    explanation: "आयोग ने सिफारिश की कि विद्यालयों में प्रशिक्षित परामर्शदाता (Trained Counsellors) की नियुक्ति की जाए जो छात्रों को शैक्षिक एवं व्यावसायिक निर्देशन प्रदान करें।"
  },
  {
    q: "मुदालियर आयोग ने माध्यमिक विद्यालयों में 'पुस्तकालय' (Library) के बारे में क्या कहा?",
    options: [
      "पुस्तकालय अनावश्यक है",
      "प्रत्येक माध्यमिक विद्यालय में एक सुसज्जित पुस्तकालय होना चाहिए जो शिक्षण-अधिगम का अभिन्न अंग हो",
      "पुस्तकालय केवल शिक्षकों के लिए हो",
      "पुस्तकालय केवल शहरी विद्यालयों में हो"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने प्रत्येक माध्यमिक विद्यालय में एक सुसज्जित पुस्तकालय की स्थापना की सिफारिश की और इसे शिक्षण-अधिगम प्रक्रिया का अभिन्न अंग माना।"
  },
  {
    q: "मुदालियर आयोग ने माध्यमिक शिक्षा के प्रशासन में 'विकेन्द्रीकरण' (Decentralization) के बारे में क्या सिफारिश की?",
    options: [
      "सब कुछ केन्द्र सरकार के अधीन हो",
      "माध्यमिक शिक्षा का प्रशासन राज्य सरकारों एवं स्थानीय निकायों के माध्यम से विकेन्द्रित किया जाए",
      "केवल निजी संस्थाओं को नियंत्रण दिया जाए",
      "प्रशासन की कोई आवश्यकता नहीं"
    ],
    correct: 1,
    explanation: "आयोग ने माध्यमिक शिक्षा के प्रशासन में विकेन्द्रीकरण की सिफारिश की और कहा कि राज्य सरकारों एवं स्थानीय निकायों को माध्यमिक शिक्षा के प्रबंधन एवं नियंत्रण में अधिक भूमिका दी जाए।"
  },
  {
    q: "मुदालियर आयोग ने 'बालिका शिक्षा' (Girls' Education) के संबंध में कौन-सी सिफारिश की?",
    options: [
      "बालिका शिक्षा अनावश्यक है",
      "बालिकाओं के लिए अलग विद्यालय, छात्रावास, सुरक्षा एवं विशेष प्रोत्साहन की व्यवस्था की जाए",
      "लड़कियों को केवल गृह विज्ञान पढ़ाया जाए",
      "बालिका शिक्षा केवल प्राथमिक स्तर तक हो"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने बालिका शिक्षा के विस्तार पर बल दिया और बालिकाओं के लिए पृथक विद्यालय, छात्रावास सुविधा, सुरक्षित वातावरण एवं विशेष प्रोत्साहन/छात्रवृत्ति की व्यवस्था करने की सिफारिश की।"
  },
  {
    q: "मुदालियर आयोग ने माध्यमिक शिक्षा पर सरकारी व्यय के बारे में क्या सुझाव दिया?",
    options: [
      "सरकार को माध्यमिक शिक्षा पर कम खर्च करना चाहिए",
      "माध्यमिक शिक्षा पर सरकारी व्यय बढ़ाया जाए और निजी विद्यालयों को भी पर्याप्त अनुदान दिया जाए",
      "केवल निजी क्षेत्र को खर्च वहन करना चाहिए",
      "विदेशी सहायता ही पर्याप्त है"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने माध्यमिक शिक्षा पर सरकारी व्यय में पर्याप्त वृद्धि की सिफारिश की और कहा कि निजी/सहायता प्राप्त विद्यालयों को भी पर्याप्त सरकारी अनुदान (Grant-in-Aid) प्रदान किया जाए।"
  },
  {
    q: "मुदालियर आयोग ने 'माध्यमिक शिक्षा कोष' (Secondary Education Fund) की स्थापना किस उद्देश्य से सुझाई?",
    options: [
      "शिक्षकों के वेतन में कटौती के लिए",
      "माध्यमिक शिक्षा के सुधार एवं विस्तार हेतु वित्तीय संसाधन जुटाने के लिए",
      "केवल भवन निर्माण के लिए",
      "केवल परीक्षा संचालन के लिए"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने 'माध्यमिक शिक्षा कोष' की स्थापना की सिफारिश की ताकि माध्यमिक शिक्षा के सुधार, विस्तार, शिक्षक प्रशिक्षण एवं अन्य विकासात्मक कार्यक्रमों हेतु पर्याप्त वित्तीय संसाधन उपलब्ध हो सकें।"
  },
  {
    q: "मुदालियर आयोग ने 'विद्यालय भवन एवं उपकरण' (School Buildings and Equipment) के बारे में क्या कहा?",
    options: [
      "भवन एवं उपकरण महत्वपूर्ण नहीं हैं",
      "उचित भवन, प्रयोगशाला, कार्यशाला, खेल मैदान एवं आधुनिक उपकरण सुनिश्चित किए जाएँ",
      "खुले आसमान के नीचे ही शिक्षा दी जाए",
      "केवल शहरी विद्यालयों में सुविधाएँ हों"
    ],
    correct: 1,
    explanation: "आयोग ने माध्यमिक विद्यालयों में उचित भवन, सुसज्जित प्रयोगशालाएँ, कार्यशालाएँ, खेल मैदान एवं आधुनिक शिक्षण उपकरणों की व्यवस्था सुनिश्चित करने पर बल दिया।"
  },
  {
    q: "मुदालियर आयोग ने 'ग्रामीण क्षेत्रों में माध्यमिक शिक्षा' के विस्तार हेतु कौन-सा सुझाव दिया?",
    options: [
      "ग्रामीण क्षेत्रों में माध्यमिक शिक्षा अनावश्यक है",
      "ग्रामीण विद्यालयों में कृषि, पशुपालन जैसे विषय शामिल किए जाएँ और ग्रामीण जीवन से जुड़ी शिक्षा दी जाए",
      "ग्रामीण छात्रों को शहर भेजा जाए",
      "ग्रामीण विद्यालय बंद किए जाएँ"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने सिफारिश की कि ग्रामीण क्षेत्रों के माध्यमिक विद्यालयों में कृषि, पशुपालन, कुटीर उद्योग जैसे विषय शामिल किए जाएँ ताकि शिक्षा ग्रामीण जीवन एवं आवश्यकताओं से जुड़ी हो।"
  },
  {
    q: "मुदालियर आयोग ने 'विद्यालय प्रबंधन समिति' (School Managing Committee) के गठन की सिफारिश किस उद्देश्य से की?",
    options: [
      "शिक्षकों पर नियंत्रण रखने के लिए",
      "विद्यालय प्रशासन में समुदाय, अभिभावकों एवं शिक्षकों की सहभागिता सुनिश्चित करने हेतु",
      "केवल वित्तीय भ्रष्टाचार रोकने के लिए",
      "केवल परीक्षा संचालन हेतु"
    ],
    correct: 1,
    explanation: "आयोग ने विद्यालय प्रबंधन समिति के गठन की सिफारिश की ताकि विद्यालय प्रशासन में समुदाय, अभिभावकों, शिक्षकों एवं स्थानीय प्रतिनिधियों की सक्रिय सहभागिता सुनिश्चित हो सके।"
  },
  {
    q: "मुदालियर आयोग ने भारत में माध्यमिक शिक्षा की किस प्रमुख कमी की ओर ध्यान आकर्षित किया?",
    options: [
      "शिक्षा बहुत सस्ती है",
      "माध्यमिक शिक्षा केवल विश्वविद्यालय प्रवेश की तैयारी तक सीमित है और व्यावसायिक/जीवन-उपयोगी शिक्षा का अभाव है",
      "शिक्षक अत्यधिक योग्य हैं",
      "विद्यालयों में अत्यधिक सुविधाएँ हैं"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने भारत में माध्यमिक शिक्षा की सबसे बड़ी कमी यह बताई कि यह केवल विश्वविद्यालय प्रवेश (University-oriented) की तैयारी तक सीमित थी और इसमें व्यावसायिक, जीवन-उपयोगी एवं व्यावहारिक शिक्षा का अभाव था।"
  },
  {
    q: "मुदालियर आयोग ने 'शिक्षा में प्रयोग एवं नवाचार' (Experimentation and Innovation) के लिए कौन-सा सुझाव दिया?",
    options: [
      "किसी भी प्रयोग की आवश्यकता नहीं",
      "कुछ चुनिंदा विद्यालयों को 'प्रायोगिक विद्यालय' (Experimental Schools) बनाया जाए जहाँ नवीन शिक्षण विधियों का परीक्षण हो",
      "सभी विद्यालयों को एक साथ बदला जाए",
      "केवल विदेशी मॉडल अपनाए जाएँ"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने कुछ चुनिंदा विद्यालयों को 'प्रायोगिक विद्यालय' (Experimental Schools) बनाने की सिफारिश की जहाँ नवीन पाठ्यक्रम, शिक्षण विधियों, मूल्यांकन तकनीकों आदि का परीक्षण किया जा सके।"
  },
  {
    q: "मुदालियर आयोग ने 'संस्कृत भाषा' की शिक्षा के बारे में क्या राय दी?",
    options: [
      "संस्कृत को पूर्णतः समाप्त किया जाए",
      "संस्कृत को एक वैकल्पिक भाषा के रूप में पढ़ाया जाए और इसकी शिक्षण विधियों का आधुनिकीकरण किया जाए",
      "संस्कृत को अनिवार्य विषय बनाया जाए",
      "संस्कृत केवल विश्वविद्यालय स्तर पर पढ़ाई जाए"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने संस्कृत को एक वैकल्पिक भाषा के रूप में पढ़ाने की सिफारिश की और कहा कि संस्कृत शिक्षण की विधियों को आधुनिक एवं प्रभावी बनाया जाए।"
  },
  {
    q: "मुदालियर आयोग ने माध्यमिक शिक्षा में 'सामाजिक अध्ययन' (Social Studies) विषय को किस रूप में प्रस्तावित किया?",
    options: [
      "इतिहास, भूगोल, नागरिक शास्त्र को अलग-अलग पढ़ाया जाए",
      "इतिहास, भूगोल, नागरिक शास्त्र एवं अर्थशास्त्र को एकीकृत कर 'सामाजिक अध्ययन' (Social Studies) के रूप में पढ़ाया जाए",
      "केवल इतिहास पढ़ाया जाए",
      "सामाजिक विज्ञान को समाप्त किया जाए"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने माध्यमिक स्तर पर इतिहास, भूगोल, नागरिक शास्त्र एवं अर्थशास्त्र को एकीकृत कर 'सामाजिक अध्ययन' (Social Studies) के रूप में एक समेकित विषय के रूप में पढ़ाने की सिफारिश की।"
  },
  {
    q: "मुदालियर आयोग ने माध्यमिक शिक्षा में 'सामान्य विज्ञान' (General Science) की शिक्षा क्यों आवश्यक मानी?",
    options: [
      "केवल परीक्षा पास करने के लिए",
      "वैज्ञानिक दृष्टिकोण, तार्किक सोच एवं दैनिक जीवन में विज्ञान की उपयोगिता समझने हेतु",
      "केवल इंजीनियर बनाने के लिए",
      "विज्ञान अनावश्यक है"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने सामान्य विज्ञान (General Science) की शिक्षा को सभी छात्रों के लिए आवश्यक माना ताकि उनमें वैज्ञानिक दृष्टिकोण, तार्किक सोच और दैनिक जीवन में विज्ञान की उपयोगिता की समझ विकसित हो।"
  },
  {
    q: "मुदालियर आयोग ने 'केन्द्रीय शिक्षा सलाहकार बोर्ड' (CABE) की भूमिका के बारे में क्या सुझाव दिया?",
    options: [
      "CABE को समाप्त किया जाए",
      "CABE को माध्यमिक शिक्षा के सुधार एवं समन्वय में अधिक सक्रिय भूमिका निभानी चाहिए",
      "CABE केवल प्राथमिक शिक्षा देखे",
      "CABE केवल विश्वविद्यालय शिक्षा देखे"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने सिफारिश की कि केन्द्रीय शिक्षा सलाहकार बोर्ड (CABE) को माध्यमिक शिक्षा के सुधार, विकास एवं राज्यों के बीच समन्वय में अधिक सक्रिय एवं प्रभावी भूमिका निभानी चाहिए।"
  },
  {
    q: "मुदालियर आयोग ने 'पाठ्यपुस्तकों' (Textbooks) के बारे में कौन-सी सिफारिश की?",
    options: [
      "पाठ्यपुस्तकें अनावश्यक हैं",
      "पाठ्यपुस्तकों की गुणवत्ता सुधारी जाए, एक से अधिक पाठ्यपुस्तकें उपलब्ध हों, और रटन्त पद्धति को हतोत्साहित किया जाए",
      "केवल सरकारी पाठ्यपुस्तकें ही हों",
      "सभी विषयों के लिए एक ही पुस्तक हो"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने सिफारिश की कि पाठ्यपुस्तकों की गुणवत्ता सुधारी जाए, एक विषय पर एक से अधिक अनुमोदित पाठ्यपुस्तकें उपलब्ध कराई जाएँ, और पाठ्यपुस्तकें ऐसी हों जो समझ एवं चिंतन को बढ़ावा दें, रटन्त पद्धति को नहीं।"
  },
  {
    q: "मुदालियर आयोग ने 'निजी विद्यालयों' (Private Schools) के बारे में क्या दृष्टिकोण अपनाया?",
    options: [
      "सभी निजी विद्यालयों को तत्काल बंद किया जाए",
      "निजी विद्यालयों को मान्यता प्रदान की जाए लेकिन उन पर सरकारी नियंत्रण एवं निरीक्षण सुनिश्चित किया जाए",
      "निजी विद्यालयों को पूर्ण स्वतंत्रता दी जाए",
      "केवल निजी विद्यालय ही चलने चाहिए"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने निजी विद्यालयों के अस्तित्व को स्वीकार किया लेकिन सिफारिश की कि उन्हें मान्यता (Recognition) प्रदान की जाए और उन पर न्यूनतम मानकों, पाठ्यक्रम एवं शिक्षक योग्यता के संबंध में सरकारी नियंत्रण एवं निरीक्षण सुनिश्चित हो।"
  },
  {
    q: "मुदालियर आयोग ने 'शिक्षा में अनुसंधान' (Research in Education) के बारे में क्या सिफारिश की?",
    options: [
      "शैक्षिक अनुसंधान अनावश्यक है",
      "शैक्षिक अनुसंधान को बढ़ावा दिया जाए और इसके लिए विश्वविद्यालयों एवं प्रशिक्षण संस्थाओं में अनुसंधान विभाग स्थापित किए जाएँ",
      "अनुसंधान केवल विदेश में किया जाए",
      "अनुसंधान केवल विज्ञान में हो"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने शैक्षिक अनुसंधान को बढ़ावा देने की सिफारिश की और कहा कि विश्वविद्यालयों, शिक्षक प्रशिक्षण संस्थाओं एवं अन्य संगठनों में शैक्षिक अनुसंधान विभाग स्थापित किए जाएँ।"
  },
  {
    q: "मुदालियर आयोग ने 'अनुशासन' (Discipline) की समस्या को हल करने के लिए कौन-सा दृष्टिकोण सुझाया?",
    options: [
      "कठोर शारीरिक दंड दिया जाए",
      "आत्म-अनुशासन (Self-discipline) विकसित किया जाए और विद्यार्थी सरकार (Student Self-Government) को प्रोत्साहित किया जाए",
      "अनुशासनहीन छात्रों को निकाल दिया जाए",
      "पुलिस की सहायता ली जाए"
    ],
    correct: 1,
    explanation: "मुदालियर आयोग ने कठोर दंड के स्थान पर आत्म-अनुशासन (Self-discipline) विकसित करने और 'विद्यार्थी स्वशासन' (Student Self-Government) को प्रोत्साहित करने की सिफारिश की ताकि छात्र स्वयं अनुशासन सीखें।"
  }
];


// ══════════════════ APP STATE ══════════════════
let state = {
  userName: "",
  currentQ: 0,
  answers: new Array(quizData.length).fill(null),
  submitted: false,
  mapVisible: false
};

// ══════════════════ DOM REFERENCES ══════════════════
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const welcomeScreen  = $("#welcome-screen");
const quizScreen     = $("#quiz-screen");
const resultScreen   = $("#result-screen");

const userNameInput  = $("#user-name");
const nameError      = $("#name-error");
const startBtn       = $("#start-btn");

const userDisplay    = $("#user-display");
const progressText   = $("#progress-text");
const progressBar    = $("#progress-bar");
const questionNumber = $("#question-number");
const questionText   = $("#question-text");
const optionsList    = $("#options-list");
const prevBtn        = $("#prev-btn");
const nextBtn        = $("#next-btn");
const submitBtn      = $("#submit-btn");
const toggleMapBtn   = $("#toggle-map-btn");
const questionMap    = $("#question-map");

const confirmModal   = $("#confirm-modal");
const modalMessage   = $("#modal-message");
const modalCancel    = $("#modal-cancel");
const modalConfirm   = $("#modal-confirm");

const resultUserName   = $("#result-user-name");
const scoreNumber      = $("#score-number");
const scorePercentage  = $("#score-percentage");
const scoreRemark      = $("#score-remark");
const statCorrect      = $("#stat-correct");
const statWrong        = $("#stat-wrong");
const statUnanswered   = $("#stat-unanswered");
const reviewList       = $("#review-list");
const retryBtn         = $("#retry-btn");
const ringFill         = $("#ring-fill");

// ══════════════════ SVG GRADIENT (for score ring) ══════════════════
(function injectSVGGradient() {
  const svg = document.querySelector(".score-ring");
  if (!svg) return;
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  gradient.setAttribute("id", "scoreGradient");
  gradient.setAttribute("x1", "0%"); gradient.setAttribute("y1", "0%");
  gradient.setAttribute("x2", "100%"); gradient.setAttribute("y2", "0%");
  const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop1.setAttribute("offset", "0%"); stop1.setAttribute("stop-color", "#6366f1");
  const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop2.setAttribute("offset", "100%"); stop2.setAttribute("stop-color", "#8b5cf6");
  gradient.appendChild(stop1);
  gradient.appendChild(stop2);
  defs.appendChild(gradient);
  svg.insertBefore(defs, svg.firstChild);
})();

// ══════════════════ SCREEN MANAGEMENT ══════════════════
function showScreen(screen) {
  [welcomeScreen, quizScreen, resultScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ══════════════════ WELCOME SCREEN LOGIC ══════════════════
startBtn.addEventListener("click", () => {
  const name = userNameInput.value.trim();
  if (!name) {
    nameError.textContent = "⚠️ कृपया अपना नाम दर्ज करें। नाम खाली नहीं छोड़ सकते।";
    userNameInput.classList.add("input-error");
    userNameInput.focus();
    return;
  }
  nameError.textContent = "";
  userNameInput.classList.remove("input-error");
  state.userName = name;
  userDisplay.textContent = `👤 ${name}`;
  showScreen(quizScreen);
  renderQuestion();
  renderQuestionMap();
});

userNameInput.addEventListener("input", () => {
  if (userNameInput.value.trim()) {
    nameError.textContent = "";
    userNameInput.classList.remove("input-error");
  }
});

userNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") startBtn.click();
});

// ══════════════════ QUESTION RENDERING ══════════════════
function renderQuestion() {
  const idx = state.currentQ;
  const q = quizData[idx];
  const total = quizData.length;

  questionNumber.textContent = `प्रश्न ${idx + 1}`;
  questionText.textContent = q.q;
  progressText.textContent = `प्रश्न ${idx + 1} / ${total}`;
  progressBar.style.width = `${((idx + 1) / total) * 100}%`;

  // Navigation
  prevBtn.disabled = idx === 0;
  nextBtn.textContent = idx === total - 1 ? "अंतिम प्रश्न" : "अगला प्रश्न →";

  // Options
  const labels = ["A", "B", "C", "D"];
  optionsList.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn" + (state.answers[idx] === i ? " selected" : "");
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", state.answers[idx] === i ? "true" : "false");
    btn.innerHTML = `
      <span class="option-label">${labels[i]}</span>
      <span class="option-text">${opt}</span>
    `;
    btn.addEventListener("click", () => selectOption(i));
    optionsList.appendChild(btn);
  });

  updateQuestionMap();
}

function selectOption(optionIndex) {
  state.answers[state.currentQ] = optionIndex;
  renderQuestion();
}

// ══════════════════ NAVIGATION ══════════════════
prevBtn.addEventListener("click", () => {
  if (state.currentQ > 0) {
    state.currentQ--;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.currentQ < quizData.length - 1) {
    state.currentQ++;
    renderQuestion();
  }
});

// ══════════════════ QUESTION MAP ══════════════════
function renderQuestionMap() {
  questionMap.innerHTML = "";
  quizData.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "map-dot";
    dot.textContent = i + 1;
    dot.setAttribute("aria-label", `प्रश्न ${i + 1} पर जाएँ`);
    dot.addEventListener("click", () => {
      state.currentQ = i;
      renderQuestion();
    });
    questionMap.appendChild(dot);
  });
  updateQuestionMap();
}

function updateQuestionMap() {
  const dots = questionMap.querySelectorAll(".map-dot");
  dots.forEach((dot, i) => {
    dot.classList.remove("answered", "current");
    if (i === state.currentQ) dot.classList.add("current");
    else if (state.answers[i] !== null) dot.classList.add("answered");
  });
}

toggleMapBtn.addEventListener("click", () => {
  state.mapVisible = !state.mapVisible;
  questionMap.classList.toggle("hidden", !state.mapVisible);
  toggleMapBtn.textContent = state.mapVisible ? "✕ सूची बंद करें" : "📋 प्रश्न सूची";
});

// ══════════════════ SUBMIT LOGIC ══════════════════
submitBtn.addEventListener("click", () => {
  const unanswered = state.answers.filter(a => a === null).length;
  if (unanswered > 0) {
    modalMessage.innerHTML = `आपने <strong>${unanswered}</strong> प्रश्नों के उत्तर नहीं दिए हैं।<br>क्या आप फिर भी टेस्ट जमा करना चाहते हैं?`;
  } else {
    modalMessage.textContent = "क्या आप टेस्ट जमा करना चाहते हैं? जमा करने के बाद उत्तर बदले नहीं जा सकेंगे।";
  }
  confirmModal.classList.remove("hidden");
});

modalCancel.addEventListener("click", () => {
  confirmModal.classList.add("hidden");
});

modalConfirm.addEventListener("click", () => {
  confirmModal.classList.add("hidden");
  state.submitted = true;
  showResults();
});

// Close modal on overlay click
confirmModal.addEventListener("click", (e) => {
  if (e.target === confirmModal) confirmModal.classList.add("hidden");
});

// ══════════════════ RESULTS ══════════════════
function showResults() {
  const total = quizData.length;
  let correct = 0, wrong = 0, unanswered = 0;

  quizData.forEach((q, i) => {
    if (state.answers[i] === null) unanswered++;
    else if (state.answers[i] === q.correct) correct++;
    else wrong++;
  });

  const pct = Math.round((correct / total) * 100);

  resultUserName.textContent = `🎓 ${state.userName}`;
  scoreNumber.textContent = correct;
  scorePercentage.textContent = `${pct}%`;
  statCorrect.textContent = correct;
  statWrong.textContent = wrong;
  statUnanswered.textContent = unanswered;

  // Remark
  if (pct >= 90) scoreRemark.textContent = "🏆 उत्कृष्ट! अद्भुत प्रदर्शन!";
  else if (pct >= 70) scoreRemark.textContent = "👏 बहुत अच्छा! शानदार प्रयास!";
  else if (pct >= 50) scoreRemark.textContent = "👍 अच्छा! और अभ्यास करें।";
  else if (pct >= 30) scoreRemark.textContent = "📖 और मेहनत की जरूरत है।";
  else scoreRemark.textContent = "💪 निराश न हों, दोबारा प्रयास करें!";

  // Animate ring
  const circumference = 2 * Math.PI * 54; // ~339.292
  const offset = circumference - (correct / total) * circumference;
  setTimeout(() => {
    ringFill.style.strokeDashoffset = offset;
  }, 100);

  // Build review
  buildReview();

  showScreen(resultScreen);
}

function buildReview() {
  const labels = ["A", "B", "C", "D"];
  reviewList.innerHTML = "";

  quizData.forEach((q, i) => {
    const userAns = state.answers[i];
    const isCorrect = userAns === q.correct;
    const isUnanswered = userAns === null;

    let statusClass, badgeClass, badgeText;
    if (isUnanswered) {
      statusClass = "review-unanswered";
      badgeClass = "badge-unanswered";
      badgeText = "अनुत्तरित";
    } else if (isCorrect) {
      statusClass = "review-correct";
      badgeClass = "badge-correct";
      badgeText = "✅ सही";
    } else {
      statusClass = "review-wrong";
      badgeClass = "badge-wrong";
      badgeText = "❌ गलत";
    }

    let optionsHTML = "";
    q.options.forEach((opt, j) => {
      let cls = "review-option is-neutral";
      let prefix = `${labels[j]}. `;
      let suffix = "";

      if (j === q.correct) {
        cls = "review-option is-correct";
        suffix = " ✅ (सही उत्तर)";
      }
      if (userAns === j && j !== q.correct) {
        cls = "review-option is-wrong-selected";
        suffix = " ❌ (आपका उत्तर)";
      }
      if (userAns === j && j === q.correct) {
        suffix = " ✅ (आपका उत्तर — सही)";
      }

      optionsHTML += `<div class="${cls}">${prefix}${opt}${suffix}</div>`;
    });

    const item = document.createElement("div");
    item.className = `review-item ${statusClass}`;
    item.innerHTML = `
      <div class="review-q-number">प्रश्न ${i + 1}</div>
      <span class="review-status-badge ${badgeClass}">${badgeText}</span>
      <p class="review-q-text">${q.q}</p>
      <div class="review-options">${optionsHTML}</div>
      <div class="review-explanation"><strong>व्याख्या:</strong> ${q.explanation}</div>
    `;
    reviewList.appendChild(item);
  });
}

// ══════════════════ RETRY ══════════════════
retryBtn.addEventListener("click", () => {
  state.currentQ = 0;
  state.answers = new Array(quizData.length).fill(null);
  state.submitted = false;
  state.mapVisible = false;
  questionMap.classList.add("hidden");
  toggleMapBtn.textContent = "📋 प्रश्न सूची";
  ringFill.style.strokeDashoffset = 339.292;
  showScreen(welcomeScreen);
  userNameInput.value = "";
  userNameInput.focus();
});

// ══════════════════ KEYBOARD NAV ══════════════════
document.addEventListener("keydown", (e) => {
  if (!quizScreen.classList.contains("active") || state.submitted) return;
  if (e.key === "ArrowLeft" && state.currentQ > 0) {
    state.currentQ--;
    renderQuestion();
  } else if (e.key === "ArrowRight" && state.currentQ < quizData.length - 1) {
    state.currentQ++;
    renderQuestion();
  } else if (e.key >= "1" && e.key <= "4") {
    selectOption(parseInt(e.key) - 1);
  }
});
