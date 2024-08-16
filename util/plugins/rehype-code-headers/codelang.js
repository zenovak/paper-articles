const codeLanguageDisplay = {
    c: "c",
    cs: "C#",
    csharp: "C#",
    cpp: "C++",
    dart: "Dart",
    flutter: "Flutter",
    kt: "Kotlin",
    kotlin: "Kotlin",
    java: "Java",
    js: "JavaScript",
    jsx: "Jsx",
    py: "Python",
    python: "Python",
    txt: "Plain Text",
}


function identifyCodeLang(codeNode) {
    const regexLang = /^language-/;
  
    if (Object.keys(codeNode.properties).length === 0) {
      return "txt";
    }
  
    if (codeNode.properties.className && codeNode.properties.className.length < 1) {
      return "txt";
    }
  
    let language = "";
    for (let index = 0; index < codeNode.properties.className.length; index++) {
      const element = codeNode.properties.className[index];
      
      language = regexLang.test(element) ? element.split('-')[1] : "txt";
    }
  
    return language;
}


export function getCodeLangugage(codeNode) {
    var langString = identifyCodeLang(codeNode);

    if (!langString in codeLanguageDisplay) {
        return codeLanguageDisplay.txt;
    }
    return codeLanguageDisplay[langString];
}

