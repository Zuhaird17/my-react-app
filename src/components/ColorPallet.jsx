import { useState } from 'react';

const materialColors = [
  '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6', '#E74C3C', '#2ECC71', '#3498DB', '#1ABC9C', '#F39C12',
  // we only take the first 10 for first row
];

// 30 colors split into 3 rows of 10
const additionalRows = [
  ['#DB7093', '#FF69B4', '#FFF0F5', '#DC143C', '#FFB6C1', '#FFC0CB', '#C71585', '#FF1493', '#800080', '#8B008B'],
  ['#FF00FF', '#DA70D6', '#EE82EE', '#DDA0DD', '#D8BFD8', '#BA55D3', '#4B0082', '#9400D3', '#9932CC', '#8A2BE2'],
  ['#F8F8FF', '#9370DB', '#9370DB', '#000080', '#191970', '#00008B', '#483D8B', '#0000CD', '#0000FF', '#6A5ACD'],
  ['#A20025', '#E51400', '#FA6800', '#F0A30A', '#E3C800', '#A4C400', '#60A917', '#008A00', '#00ABA9', '#1BA1E2']
];

const firstRowColors = materialColors.slice(0, 10);

const allRows = [firstRowColors, ...additionalRows];

export function ColorPallet() {
  const [colorRows, setColorRows] = useState(allRows);

  return (
    <div>
      {colorRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-4 overflow-x-auto py-6">
          {row.map((color, index) => (
            <div
              key={index}
              className="w-[300px] h-[150px] rounded-xl cursor-pointer shadow-lg flex items-center justify-center text-white font-bold text-xl hover:scale-105 transition-all"
              style={{ backgroundColor: color }}
              onClick={() => alert(`You clicked the ${color} box!`)}
            >
              {color}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
