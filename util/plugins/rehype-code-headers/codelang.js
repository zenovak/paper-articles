const codeLanguageDisplay = {
    c: "c",
    cs: "C#",
    csharp: "C#",
    cpp: "C++",
    dart: "Dart",
    flutter: "Flutter",
    gradle: "Gradle",
    html: "HTML",
    kt: "Kotlin",
    kotlin: "Kotlin",
    java: "Java",
    js: "JavaScript",
    jsx: "Jsx",
    py: "Python",
    python: "Python",
    ts: "TypeScript",
    txt: "Plain Text",
    xml: "XML",
    xaml: "XAML"
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

    if (!(langString in codeLanguageDisplay)) {
        console.log("RehypeCodeHeaders: Code Lang label is not in record. showing " + langString);
        return langString;
    }
    return codeLanguageDisplay[langString];
}

