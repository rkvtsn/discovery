import React, { useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { symbolSelector, openSymbolById } from 'store/reducers/symbolReducer';

const Symbols = () => {
  const dispatch = useAppDispatch();
  const { active, deck } = useAppSelector(symbolSelector);
  const symbols = useMemo(() => deck.filter((card) => card.id.endsWith('.0')), [
    deck,
  ]);
  const [symbolSearchValue, setSymbolSearchValue] = useState('');
  const handleOnChange = (e: any) => {
    setSymbolSearchValue(e.target.value);
  };

  const handleOnSearch = () => {
    dispatch(openSymbolById(symbolSearchValue));
  };

  return (
    <div>
      <h4>Символы</h4>
      <input value={symbolSearchValue} onChange={handleOnChange} />
      <button type="button" onClick={handleOnSearch}>
        Открыть
      </button>
      <div>
        <h5>Активные</h5>
        {active.map((card) => (
          <div key={card.id}>{card.title}</div>
        ))}
      </div>

      <hr />
      <div>
        <h5>Колода</h5>
        {symbols.map((card) => (
          <div key={card.id}>{card.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Symbols;
