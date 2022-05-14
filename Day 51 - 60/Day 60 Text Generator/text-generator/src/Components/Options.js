import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';


const Options = (props) => {
    const {
         paragraphs,
         tag,
         setTag,
         inputVal,
         setInputVal,
         includeHtml,
         setIncludeHtml
         } = props

    return(
        <div className="options">
            <div className="wrapper">
                <div className="optionsContainer">
                    <div className="paragraphs">
                        <p>Paragraphs : </p>
                        <input
                         type='number'
                         value={inputVal}
                         onChange={event => setInputVal(event.target.value)}
                         />
                    </div>
                    <div className="tags">
                        <p>Tags: </p>
                        <select defaultValue={tag} onChange={event => setTag(event.target.value)}>
                            <option value="p">&lt;p&gt;</option>
                            <option value="h1">&lt;h1&gt;</option>
                            <option value="h2">&lt;h2&gt;</option>
                            <option value="h3">&lt;h3&gt;</option>
                            <option value="h4">&lt;h4&gt;</option>
                            <option value="h5">&lt;h5&gt;</option>
                            <option value="h6">&lt;h6&gt;</option>
                            <option value="span">&lt;span&gt;</option>
                        </select>
                    </div>
                    <div className="include">
                        <p>Include HTML: </p>
                        <select
                        defaultValue={includeHtml}
                        onChange={event => setIncludeHtml(event.target.value)}
                        >
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </select>
                    </div>
                </div>
                <div className="copy">
                    <CopyToClipboard 
                    text={paragraphs.map((sentence) => {
                        return includeHtml === "Yes" ? `<${tag}>${sentence}</${tag}>` : `${sentence}`
                    })}
                    >
                    <button>Copy to clipboard</button>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
    )
}

export default Options