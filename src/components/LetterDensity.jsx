import React from 'react';

const LetterDensity = ({ formData }) => {

  const letterCount = {};

  for (let letter of formData.text.replace(/[^a-zA-Z]/g, '').toUpperCase()) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  const totalValues = Object.values(letterCount).reduce((acc, val) => acc + val, 0);

  const sortedEntries = Object.entries(letterCount).sort((a, b) => b[1] - a[1]);

  return (
    <div className="py-10">
      <h3 className="text-white text-xl font-semibold mb-4">Letter Density</h3>
      <div className="space-y-2">
        {sortedEntries.map(([key, value]) => (
          <div key={key} className="flex items-center gap-3">
            <p className="text-white w-6">{key}</p>
            <div className="grow h-3 bg-gray-800 rounded-3xl overflow-hidden relative">
              <div
                className="h-full bg-purple-500 rounded-3xl transition-all duration-300"
                style={{ width: `${(value / totalValues) * 100}%` }}
              />
            </div>
            <p className="text-white text-sm text-right">
              ({value}){((value / totalValues) * 100).toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetterDensity;