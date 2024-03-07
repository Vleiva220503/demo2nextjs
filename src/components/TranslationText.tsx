import React from 'react';

interface TranslationTextProps {
    translation: string;
}

const TranslationText: React.FC<TranslationTextProps> = ({ translation }) => (
    <p>{translation}</p>
);

export default TranslationText;
