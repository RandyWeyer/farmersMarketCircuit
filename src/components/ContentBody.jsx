import React from 'react';
import MarketSchedule from './MarketSchedule';
import SeasonalProduce from './SeasonalProduce';

function Header(){
  return (
    <div>
      <MarketSchedule></MarketSchedule>
      <SeasonalProduce></SeasonalProduce>
    </div>
  );
}

export default Header;
