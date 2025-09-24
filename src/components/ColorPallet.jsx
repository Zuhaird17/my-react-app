import { useState } from 'react';

// Material UI color palette (predefined set of colors)
const materialColors = [
  '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6', '#E74C3C', '#2ECC71', '#3498DB', '#1ABC9C', '#F39C12',
  '#D35400', '#34495E', '#7F8C8D', '#BDC3C7', '#95A5A6', '#16A085', '#27AE60', '#2980B9', '#8E44AD', '#F5B7B1',
  '#85C1AE', '#7FB3D5', '#85929E', '#D5DBDB', '#FAD7A0', '#F1948A', '#D35400', '#A93226', '#B03A2E'
];

export function ColorPallet() {
  const [colorList, setColorList] = useState(materialColors);

  return (
    <div>
      <div className="flex gap-4 overflow-x-auto py-6">
        {colorList.map((color, index) => (
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
    </div>
  );
}
