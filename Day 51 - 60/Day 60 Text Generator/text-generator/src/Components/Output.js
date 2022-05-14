import React from "react";

const Output = (props) => {

    const { paragraphs, tag, includeHtml } = props // paragraphs, tag, includeHtml will be destructured

    return(
        <div className="output">
            {/* If the includeHtml text is equal to Yes then we will map through the paragraphs and and for each sentence we will
            and wrap it inside the tag variable else just display the sentence as it is without the tag
            */}
            {includeHtml === "Yes" ? (
                <p>{paragraphs.map(sentence => `<${tag}>${sentence}</${tag}>`)}</p>
            ) : 
            (
                <p>{paragraphs.map((sentence) => {
                    return `${sentence}`
                })}</p>
            )}
        </div>

    )
}

export default Output