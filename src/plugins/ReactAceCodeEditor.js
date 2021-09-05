import React, {useState} from 'react';
import AceEditor from 'react-ace'

// import mode-<language> , this imports the style and colors for the selected language.
import 'ace-builds/src-noconflict/mode-javascript'
// there are many themes to import, I liked monokai.
import 'ace-builds/src-noconflict/theme-monokai'
// this is an optional import just improved the interaction.
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-beautify'

const ReactAceCodeEditor = () => {
    const [code, setCode] = useState(`function hello() {
      console.log("Hello World!");
    }`)
    return (
        <AceEditor
            style={{
                height: '100vh',
                width: '100%',
            }}
            placeholder='Start Coding'
            mode='javascript'
            theme='monokai'
            name='basic-code-editor'
            onChange={currentCode => setCode(currentCode)}
            fontSize={18}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={code}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 1,
            }}
        />
    );
};

export default ReactAceCodeEditor;
