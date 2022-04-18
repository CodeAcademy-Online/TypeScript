const formatLine = (text: string, indent: number = 0): string => `${('\t').repeat(indent) + text}\n`;

export default formatLine;
