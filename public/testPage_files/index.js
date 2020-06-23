const data = {
  question: {
    id: "5bd57acb-c396-486b-9b06-55244c38d861",
    title: "Soal no 06",
    thumbnail:
      "https://www.zenius.net/assets/v-img/S/oa/l No/Soal No 6-520fa24f.png",
    image: "https://www.zenius.net/assets/q-img/Soal No 6-520fa24f.png",
    answers: ["D"],
    tags: [
      "pengantar",
      "statistika",
      "sma",
      "bab 1",
      "set",
      "pelajaran",
      "kelas 11",
      "no",
      "matematika",
      "soal",
      "pg"
    ],
    options: [
      {
        label: " \\(\\dfrac {159} 3\\)",
        value: "A",
        __typename: "OptionsType"
      },
      {
        label: "&nbsp;\\(\\dfrac {161} 3\\)",
        value: "B",
        __typename: "OptionsType"
      },
      {
        label: "&nbsp;\\(53\\dfrac 2 3\\)",
        value: "C",
        __typename: "OptionsType"
      },
      {
        label: "&nbsp;\\(53\\dfrac 1 3\\)",
        value: "D",
        __typename: "OptionsType"
      },
      {
        label: "&nbsp;\\(54\\dfrac 2 3\\)",
        value: "E",
        __typename: "OptionsType"
      }
    ],
    type: "legacy-problem5",
    description:
      "<p style=\"font-family: 'Helvetica Neue', Verdana, 'Liberation Sans', FreeSans, Arial, sans-serif; background-color: #ffffff;\">Di dalamnya berisi video-video pelajaran MATEMATIKA untuk kelas 1 SD yang udah disesuaikan dengan kurikulum sekolah.</p><p style=\"font-family: 'Helvetica Neue', Verdana, 'Liberation Sans', FreeSans, Arial, sans-serif; background-color: #ffffff;\"><img src=\"https://zs-inline.s3.ap-southeast-1.amazonaws.com/development/f/71/20b1/f7120b18dfc842db94be60afbf659989.jpg?efs=https%3A%2F%2Fwww.zeniusnet.com%2Fassets%2Fv-img%2Ff%2F71%2F20b1%2Ff7120b18dfc842db94be60afbf659989.jpg\" alt=\"\"/></p><p style=\"font-family: 'Helvetica Neue', Verdana, 'Liberation Sans', FreeSans, Arial, sans-serif; background-color: #ffffff;\">Pas banget untuk:</p><p style=\"font-family: 'Helvetica Neue', Verdana, 'Liberation Sans', FreeSans, Arial, sans-serif; background-color: #ffffff;\"><img src=\"https://zs-inline.s3.ap-southeast-1.amazonaws.com/development/f/71/20b1/f7120b18dfc842db94be60afbf659989.jpg\" alt=\"\"/></p><ul style=\"font-family: 'Helvetica Neue', Verdana, 'Liberation Sans', FreeSans, Arial, sans-serif; background-color: #ffffff;\"><li>Mendalami pelajaran Matematika untuk kelas 1 SD</li><li>Memperlancar siswa ngerjain soal-soal Matematika dasar</li><li>Membantu siswa untuk menghadapi ulangan-ulangan di sekolah</li><li>Membantu orangtua dan guru untuk mengajarkan konsep matematika dasar dengan praktis dan mudah.</li></ul><table style=\"border-collapse: collapse; width: 100%;\" border=\"1\"><tbody><tr><td style=\"width: 25%;\">A</td><td style=\"width: 25%;\">B</td><td style=\"width: 25%;\">C</td><td style=\"width: 25%;\">D</td></tr><tr><td style=\"width: 25%;\">1</td><td style=\"width: 25%;\">2</td><td style=\"width: 25%;\">3</td><td style=\"width: 25%;\">4</td></tr></tbody></table>",
    visibility: "published",
    multipleResponses: true,
    learningUnitId: "5bd4cf9f-a0b5-486c-879c-5395890b4b43",
    learningUnit: {
      id: "5bd4cf9f-a0b5-486c-879c-5395890b4b43",
      type: "video",
      title: "Soal no 06",
      thumbnail:
        "https://www.zenius.net/assets/v-img/c/70/f5fb/c70f5fbcc8443ffd5c29d2cf80dfd456e28485a65bd089da93826cc6bcd619fa.jpg",
      content: [
        {
          type: "board",
          title: "Soal no 06",
          videoUrl:
            "https://vs4zenius.akamaized.net/m3u8/a/76/0498/a760498a7a2fb4e9edad895308355eba998a53568292a9d4d4085f82fbae9729.m3u8?hdnts=st=1584542466~exp=1584544266~acl=/m3u8/a/76/0498*~hmac=42253ae4edbd1d5416bf5aa033ccec28b7e8de500554191497aecb7fc83e7899",
          __typename: "LearningUnitContentType"
        }
      ],
      __typename: "LearningUnit"
    },
    __typename: "Question"
  }
};
const REGEX_LATEX = /(\\\(|\\\\\(|\\\[|\\\\\[|\${1,2})((.|\n)+?)(\\\)|\\\\\)|\\\]|\\\\\]|\${1,2})/g;
const DELIMS = {
  $: "$",
  $$: "$$",
  "\(": "\)",
  "\\(": "\\)",
  "\[": "\]",
  "\\[": "\\]"
};
const KATEX_REPLACEMENTS = [
  [/{align}/g, "{aligned}"],
  [/^(\\\(|\\\\\(|\\\[|\\\\\[|\${1,2})/, ""],
  [/(\\\)|\\\\\)|\\\]|\\\\\]|\${1,2})$/g, ""],
];
const REGEX_S3IMG = /https?:\/\/zs-inline\.[^\/]*amazonaws.com\/([^\/]+)\/([\/\.a-z0-9]*)(\?efs=([^'"]+))?/ig;
const REGEX_BADEFS = /(src=[\\'"]+)\/\//g;
const REGEX_FONT_STYLES = /\bfont-(family|size):[^;]+?;\s?/g

const replaceNecessities = e => {
  if (!e) return;
  let html = e;
  let parser = new DOMParser();
  html = html.replace(REGEX_LATEX, (match, p1, p2, p3, p4) => {
    if (DELIMS[p1] !== p4) return match;    // not valid latex
    const [latex, err] = validateLatex(p2);
    if (err) return match;                  // not valid latex
    let htm = parser.parseFromString(p2,"text/html");
    // const htm = editor.parser.parse(p2);
    if (!!htm.firstChild.next) return match; // valid latex but might contain HTML in it so don't risk it
    return `<samp class="math" data-latex="${latex}">_</samp>`;
  });
  html = html.replace(REGEX_S3IMG, (match, p1, p2, p3, p4) => {
    if (!!p4)
      return window.decodeURIComponent(p4);
    const base = p1 === 'production' ? 'https://www.zenius.net' : 'https://www.zeniusnet.com';
    return `${base}/assets/v-img/${p2}`;
  });
  html = html.replace(REGEX_BADEFS, '$1https://');
  html = html.replace(REGEX_FONT_STYLES, '');
  return html;
};
const validateLatex = latex => {
  try {
    if (!window.hiddenTxtArea) {
      window.hiddenTxtArea = document.getElementById('zenius_shhh');
    }
    let out = latex;
    if (window.hiddenTxtArea) {
      window.hiddenTxtArea.innerHTML = latex;
      out = window.hiddenTxtArea.value;
    }
    KATEX_REPLACEMENTS.forEach(([a, b]) => {
      out = out.replace(a, b);
    });
    katex.renderToString(out);
    return [out, null];
  } catch (e) {
    return [latex, e];
  }
};
const REVREGEX = /<samp [^>]*data-latex=(.)((.|\n)+?)\1>.+?<\/samp>/g;
const spanifyKatex = html => {
  return html.replace(REVREGEX, '<samp class="math" data-latex="$2">_</samp>');
};

const latexifyKatex = html => {
  return html.replace(REVREGEX, "$2");
};

const katexify = elem => {
  let maths = elem.getElementsByClassName("math");
  let x = maths.item(0);
  while (!!x) {
    const latex = x.dataset.latex;
    if (!!latex && (typeof latex === "string" || latex instanceof String))
      katex.render(latex, x, {
        throwOnError: false,
        display: false,
        output: "htmlAndMathml"
      });
    x.classList.remove("math");
    x.classList.add("zmath");
    x = maths.item(0);
  }
};

const actualOptions = (data) => {
  if (!data) return [];
  if (!data.question) return [];
  return data.question.options || [];
}

const actualAnswers = (actualOptions, selectedAnswers) => {
  // returns intersection of the 2 arrays - q->opts->value and selected-answers
  // this is just a insurance .... in case the q option format and selected format happen to be different
  const qOptVals = actualOptions.map(x => x.value);
  return (selectedAnswers || []).filter(v => -1 !== qOptVals.indexOf(v));
}

function render(dataJSON, reviewMode, selectedAnswers = JSON.stringify([])) {
  const data = JSON.parse(decodeURIComponent(dataJSON));
  const qOptions = actualOptions(data);
  let sAnswers = actualAnswers(qOptions, JSON.parse(decodeURIComponent(selectedAnswers)));
  let selected = [...sAnswers];
  let rMode = JSON.parse(reviewMode);
  const question = document.getElementById("question");
  question.innerHTML = replaceNecessities(data.question.description);
  katexify(question);
  spanifyKatex(question.innerHTML);
  const options = document.getElementById("options");
  qOptions.forEach((o, i) => {
    const li = document.createElement("li");
    li.setAttribute("id", o.value);
    li.classList.add("option");
    const tag = document.createElement("div");
    tag.innerHTML = String.fromCharCode(65 + i);
    tag.classList.add("option-tag");
    const div = document.createElement("div");
    div.classList.add("mce");

    //if review Mode true
    if (rMode) {
      if (data.question.answers.includes(o.value)) {
        li.classList.add("correct");
      }
      sAnswers &&
        sAnswers.length &&
        sAnswers.forEach((s) => {
          if (s === o.value) {
            li.classList.add("marked");
            if (!data.question.answers.includes(s))
              li.classList.add("incorrect");
          }
        });
    } else {
      if (sAnswers && sAnswers.length) {
        sAnswers.forEach((s) => {
          if (s === o.value) {
            li.classList.add("selected");
          }
        });
      }
      // add onClick events
      li.addEventListener("click", function(e) {
        const label = e.currentTarget.id;
        if (data.question.multipleResponses) {
          if (li.classList.contains("selected")) {
            li.classList.remove("selected");
          } else {
            li.classList.add("selected");
          }
          if (selected.includes(label)) {
            selected.splice(selected.indexOf(label), 1);
          } else {
            selected.push(label);
          }
        } else {
          selected = [];
          const prevSelected = document.querySelectorAll(".selected");
          console.log(prevSelected);
          prevSelected.forEach(i => {
            i.classList.remove("selected");
          });
          li.classList.add("selected");
          selected.push(label);
        }
        callNativeApp(selected);
      });
    }
    li.appendChild(tag);
    div.innerHTML += replaceNecessities(o.label);
    li.appendChild(div);
    katexify(div);
    spanifyKatex(div.innerHTML);
    options.appendChild(li);
  });
  sendReadySignalToiOSApp();
  return reviewMode;
}

function callNativeApp(data) {
  console.log(data);
  try {
    webkit.messageHandlers.callbackHandler.postMessage(JSON.stringify(data));
  } catch (err) {
    console.log("The native context does not exist yet");
  }
}

function sendReadySignalToiOSApp() {
  try {
    webkit.messageHandlers.callbackHandler.postMessage("ready");
  } catch (err) {
    console.log("Sending Ready Signal to iOS App failed");
  }
}

render(encodeURI(JSON.stringify(data)), false, encodeURI(JSON.stringify(["A", "D"])));

