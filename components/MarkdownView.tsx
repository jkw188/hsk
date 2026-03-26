import React from 'react';

interface MarkdownViewProps {
  content: string;
}

const MarkdownView: React.FC<MarkdownViewProps> = ({ content }) => {
  // A simple, robust parser for the demo environment.
  // Handles headers, bold (<strong>), italics/pinyin (<em>), tables, lists, and blockquotes.

  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  
  // Helper to detect and style Chinese characters
  const highlightChinese = (text: string) => {
    // Split by Chinese characters (Unicode range for CJK Unified Ideographs)
    const parts = text.split(/([\u4e00-\u9fff]+)/g);
    
    return parts.map((part, index) => {
      // Check if the part is Chinese
      if (/[\u4e00-\u9fff]/.test(part)) {
        return (
          <span 
            key={index} 
            // Increased to 1.5em for distinct visibility as requested.
            // Using font-medium for better legibility of strokes.
            className="zh-text text-[1.5em] leading-normal mx-0.5 align-baseline inline-block text-gray-900 font-medium"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  // Inline parser now looks for <strong> and <em> tags
  const parseInline = (text: string) => {
    // Regex to split by tags, capturing the tags themselves
    // Matches <strong>...</strong> OR <em>...</em>
    const parts = text.split(/((?:<strong>.*?<\/strong>)|(?:<em>.*?<\/em>))/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
        const content = part.slice(8, -9); 
        return (
            <strong key={index} className="font-bold text-gray-900">
                {highlightChinese(content)}
            </strong>
        );
      }
      if (part.startsWith('<em>') && part.endsWith('</em>')) {
        const content = part.slice(4, -5);
        // Pinyin styling: Not italic, distinct color, slightly widely spaced for readability
        return (
            <span key={index} className="not-italic text-blue-600 font-medium tracking-wide px-0.5">
                {highlightChinese(content)}
            </span>
        );
      }
      // Text outside tags
      return <React.Fragment key={index}>{highlightChinese(part)}</React.Fragment>;
    });
  };

  let inTable = false;
  let tableHeader: string[] = [];
  let tableRows: string[][] = [];

  const flushTable = (key: number) => {
    if (!inTable) return null;
    inTable = false;
    const res = (
      <div key={`table-${key}`} className="overflow-x-auto my-6 border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
          <thead className="bg-gray-50">
            <tr>
              {tableHeader.map((th, i) => (
                <th key={i} className="px-4 py-3 text-left font-medium text-gray-700 tracking-wider border-r border-gray-200 last:border-r-0">
                  {parseInline(th.trim())}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tableRows.map((row, rI) => (
              <tr key={rI} className={rI % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {row.map((cell, cI) => (
                  <td key={cI} className="px-4 py-3 text-gray-700 border-r border-gray-200 last:border-r-0 whitespace-pre-wrap">
                    {parseInline(cell.trim())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableHeader = [];
    tableRows = [];
    return res;
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Tables
    if (trimmed.startsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableHeader = trimmed.split('|').filter(s => s).map(s => s.trim());
      } else if (trimmed.includes('---')) {
        // Separator line, ignore
      } else {
        tableRows.push(trimmed.split('|').filter(s => s).map(s => s.trim()));
      }
      return; // Continue loop
    } else if (inTable) {
      elements.push(flushTable(index));
    }

    // Headers
    if (trimmed.startsWith('# ')) {
      elements.push(<h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">{parseInline(trimmed.substring(2))}</h1>);
    } else if (trimmed.startsWith('## ')) {
      elements.push(<h2 key={index} className="text-2xl font-semibold text-gray-800 mt-6 mb-3">{parseInline(trimmed.substring(3))}</h2>);
    } else if (trimmed.startsWith('### ')) {
      elements.push(<h3 key={index} className="text-xl font-medium text-gray-800 mt-4 mb-2">{parseInline(trimmed.substring(4))}</h3>);
    }
    // Blockquote
    else if (trimmed.startsWith('> ')) {
      elements.push(
        <div key={index} className="border-l-4 border-red-500 bg-red-50 p-4 my-4 rounded-r italic text-gray-700">
          {parseInline(trimmed.substring(2))}
        </div>
      );
    }
    // List Items
    else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      elements.push(
        <li key={index} className="ml-6 list-disc text-gray-700 mb-1 pl-1 marker:text-red-500">
          {parseInline(trimmed.substring(2))}
        </li>
      );
    } else if (/^\d+\.\s/.test(trimmed)) {
       elements.push(
        <div key={index} className="ml-6 flex gap-2 text-gray-700 mb-2">
            <span className="font-semibold text-red-600">{trimmed.split(' ')[0]}</span>
            <span>{parseInline(trimmed.substring(trimmed.indexOf(' ') + 1))}</span>
        </div>
       );
    }
    // Empty lines
    else if (trimmed === '') {
      elements.push(<div key={index} className="h-2"></div>);
    }
    // Paragraphs
    else {
      elements.push(<p key={index} className="text-gray-700 leading-relaxed mb-3">{parseInline(trimmed)}</p>);
    }
  });

  // Flush any remaining table
  if (inTable) {
    elements.push(flushTable(lines.length));
  }

  return <div className="markdown-content w-full max-w-none prose prose-red">{elements}</div>;
};

export default MarkdownView;