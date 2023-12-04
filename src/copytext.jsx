import React, { useState } from 'react';

const CopyToClipboardText = ({ children }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setIsCopied(true);
                window.setTimeout(() => setIsCopied(false), 1500);
            })
            .catch(err => console.error('Failed to copy text: ', err));
    };

    return (
        <div onClick={() => copyToClipboard(children)}>
            {children}
            {isCopied && <span style={{color: 'green'}}> Copied!</span>}
        </div>
    );
};

export default CopyToClipboardText;