import './App.css';
import { useState } from 'react';

const RevenueCalculator = () => {
  
  const [basePrice, setBasePrice] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [volume, setVolume] = useState('');

  const [c1PriceDiff, setC1PriceDiff] = useState('');
  const [c1UnitPriceDiff, setC1UnitPriceDiff] = useState('');
  const [c1VolumeDiff, setC1VolumeDiff] = useState('');

  const [c2PriceDiff, setC2PriceDiff] = useState('');
  const [c2UnitPriceDiff, setC2UnitPriceDiff] = useState('');
  const [c2VolumeDiff, setC2VolumeDiff] = useState('');

  return (

    <main className="App">

    <div className="header py-4">
      <div className="mx-auto max-w-7xl px-4">
         <div className="mx-auto max-w-4xl">   
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
            Margin Calculator
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
          Optimize your menu item prices to maximize profits by identifying the most effective selling prices.
          </p>
        </div>
        
      </div>
    </div>



    <div className="flex max-w-7xl mx-auto">
      
    <div className="flex-col text-left mx-auto px-4 max-w-[350px]">
        <h2 className="flex text-xl font-bold tracking-tight w-full bg-gray-100 mb-2">
          Base
        </h2>
        <form className="flex flex-col">
          <div className="flex flex-row">
            <p className="w-32">Base Unit Price:</p>
            <input className="border-2 w-20" type="number" name="basePrice" value={basePrice} onChange={e => setBasePrice(e.target.value)} />
          </div>
          <div className="flex flex-row">
            <p className="w-32">Base COGS:</p>
            <input className="border-2 w-20" type="number" name="unitPrice" value={unitPrice} onChange={e => setUnitPrice(e.target.value)} />
          </div>
          <div className="flex flex-row">
            <p className="w-32">Base Volume:</p>
            <input className="border-2 w-20" type="number" name="volume" value={volume} onChange={e => setVolume(e.target.value)} />
          </div>
        </form>
        
        <div className="mt-4">
          <p>Retail: {basePrice} | {((basePrice/basePrice)*100).toFixed(0)}%</p>
          <p>COGS: {unitPrice} | {((unitPrice/basePrice)*100).toFixed(0)}%</p>
          <p className="mb-4">Gross Margin: {basePrice-unitPrice} | {(((basePrice-unitPrice)/basePrice)*100).toFixed(0)}%</p>

          <p>Revenue @ Volume: {volume * basePrice}</p>
          <p>Total Gross Margin @ Volume: {volume * (basePrice-unitPrice)}</p>
        </div>
      </div>


      <div className="flex-col text-left mx-auto px-4 max-w-[400px]">
        <h2 className="flex text-xl font-bold tracking-tight w-full bg-gray-100 mb-2">
          Case 1
        </h2>
        <form className="flex flex-col">
          <div className="flex flex-row">
            <p className="w-32">Price Diff:</p>  
            <input className="border-2 w-20" type="number" name="basePrice" value={c1PriceDiff} onChange={e => setC1PriceDiff(e.target.value)} /> 
          </div>
          <div className="flex flex-row">
            <p className="w-32">COGS Diff:</p>
            <input className="border-2 w-20" type="number" name="unitPrice" value={c1UnitPriceDiff} onChange={e => setC1UnitPriceDiff(e.target.value)} />
          </div>
          <div className="flex flex-row">
            <p className="w-32">Exp Volume Diff:</p>
            <input className="border-2 w-20" type="number" name="volume" value={c1VolumeDiff} onChange={e => setC1VolumeDiff(e.target.value)} />
          </div>
        </form>
        
        
        <div className="mt-4">
          <p>Retail: {parseFloat(basePrice)+parseFloat(c1PriceDiff)} | {(((parseFloat(basePrice)+parseFloat(c1PriceDiff))/(parseFloat(basePrice)+parseFloat(c1PriceDiff)))*100).toFixed(0)}%</p>
          <p>COGS: {parseFloat(unitPrice)+parseFloat(c1UnitPriceDiff)} | {(((parseFloat(unitPrice)+parseFloat(c1UnitPriceDiff))/(parseFloat(basePrice)+parseFloat(c1PriceDiff)))*100).toFixed(0)}%</p>
          <p>Gross Margin: {(parseFloat(basePrice)+parseFloat(c1PriceDiff))-(parseFloat(unitPrice)+parseFloat(c1UnitPriceDiff))} | {(((parseFloat(basePrice)+parseFloat(c1PriceDiff))-(parseFloat(unitPrice)+parseFloat(c1UnitPriceDiff))) / ((parseFloat(basePrice)+parseFloat(c1PriceDiff)))*100).toFixed(0)}%</p>
          <p className="mb-4">Delta to Base: {(basePrice-unitPrice)-((parseFloat(basePrice)+parseFloat(c1PriceDiff))-(parseFloat(unitPrice)+parseFloat(c1UnitPriceDiff)))}</p>

          <p>Break Even Revenue (Units): {((volume * basePrice)/(parseFloat(basePrice)+parseFloat(c1PriceDiff))).toFixed(0)}</p>
          <p className="mb-4">Break Even Margin (Units): {((volume*(basePrice-unitPrice))/((parseFloat(basePrice)+parseFloat(c1PriceDiff))-(parseFloat(unitPrice)+parseFloat(c1UnitPriceDiff)))).toFixed(0)} | {(((volume * basePrice)/(parseFloat(basePrice)+parseFloat(c1PriceDiff)))/volume*100).toFixed(0)}%</p>
          <p>Delta Units @ Revenue Break Even: {(((volume * basePrice)/(parseFloat(basePrice)+parseFloat(c1PriceDiff)))-volume).toFixed(0)}</p>
          <p className="mb-4">Delta Units @ Margin Break Even: {(((volume*(basePrice-unitPrice))/((parseFloat(basePrice)+parseFloat(c1PriceDiff))-(parseFloat(unitPrice)+parseFloat(c1UnitPriceDiff))))-volume).toFixed(0)}</p>

          <p>Expected Total Volume (Units): {parseFloat(volume)+parseFloat(c1VolumeDiff)}</p>
          <p>Total Revenue @ Expected Volume: {(parseFloat(volume)+parseFloat(c1VolumeDiff))*(parseFloat(basePrice)+parseFloat(c1PriceDiff))} | {(((parseFloat(volume)+parseFloat(c1VolumeDiff))*(parseFloat(basePrice)+parseFloat(c1PriceDiff))/(volume * basePrice))*100).toFixed(0)}%</p>
          <p>Gross Margin @ Expected Volume: {((parseFloat(basePrice)+parseFloat(c1PriceDiff))-(parseFloat(unitPrice)+parseFloat(c1UnitPriceDiff)))*(parseFloat(volume)+parseFloat(c1VolumeDiff))} | {(((parseFloat(basePrice)+parseFloat(c1PriceDiff))-(parseFloat(unitPrice)+parseFloat(c1UnitPriceDiff)))*(parseFloat(volume)+parseFloat(c1VolumeDiff))/(volume * (basePrice-unitPrice))*100).toFixed(0)}%</p>

        </div>
      </div>



      <div className="flex-col text-left mx-auto px-4 max-w-[400px]">
        <h2 className="flex text-xl font-bold tracking-tight w-full bg-gray-100 mb-2">
          Case 2
        </h2>
        <form className="flex flex-col">
          <div className="flex flex-row">
            <p className="w-32">Price Diff:</p>  
            <input className="border-2 w-20" type="number" name="basePrice" value={c2PriceDiff} onChange={e => setC2PriceDiff(e.target.value)} /> 
          </div>
          <div className="flex flex-row">
            <p className="w-32">COGS Diff:</p>
            <input className="border-2 w-20" type="number" name="unitPrice" value={c2UnitPriceDiff} onChange={e => setC2UnitPriceDiff(e.target.value)} />
          </div>
          <div className="flex flex-row">
            <p className="w-32">Exp Volume Diff:</p>
            <input className="border-2 w-20" type="number" name="volume" value={c2VolumeDiff} onChange={e => setC2VolumeDiff(e.target.value)} />
          </div>
        </form>
        
        
        <div className="mt-4">
          <p>Retail: {parseFloat(basePrice)+parseFloat(c2PriceDiff)} | {(((parseFloat(basePrice)+parseFloat(c2PriceDiff))/(parseFloat(basePrice)+parseFloat(c2PriceDiff)))*100).toFixed(0)}%</p>
          <p>COGS: {parseFloat(unitPrice)+parseFloat(c2UnitPriceDiff)} | {(((parseFloat(unitPrice)+parseFloat(c2UnitPriceDiff))/(parseFloat(basePrice)+parseFloat(c2PriceDiff)))*100).toFixed(0)}%</p>
          <p>Gross Margin: {(parseFloat(basePrice)+parseFloat(c2PriceDiff))-(parseFloat(unitPrice)+parseFloat(c2UnitPriceDiff))} | {(((parseFloat(basePrice)+parseFloat(c2PriceDiff))-(parseFloat(unitPrice)+parseFloat(c2UnitPriceDiff))) / ((parseFloat(basePrice)+parseFloat(c2PriceDiff)))*100).toFixed(0)}%</p>
          <p className="mb-4">Delta to Base: {(basePrice-unitPrice)-((parseFloat(basePrice)+parseFloat(c2PriceDiff))-(parseFloat(unitPrice)+parseFloat(c2UnitPriceDiff)))}</p>

          <p>Break Even Revenue (Units): {((volume * basePrice)/(parseFloat(basePrice)+parseFloat(c2PriceDiff))).toFixed(0)}</p>
          <p className="mb-4">Break Even Margin (Units): {((volume*(basePrice-unitPrice))/((parseFloat(basePrice)+parseFloat(c2PriceDiff))-(parseFloat(unitPrice)+parseFloat(c2UnitPriceDiff)))).toFixed(0)} | {(((volume * basePrice)/(parseFloat(basePrice)+parseFloat(c2PriceDiff)))/volume*100).toFixed(0)}%</p>
          <p>Delta Units @ Revenue Break Even: {(((volume * basePrice)/(parseFloat(basePrice)+parseFloat(c2PriceDiff)))-volume).toFixed(0)}</p>
          <p className="mb-4">Delta Units @ Margin Break Even: {(((volume*(basePrice-unitPrice))/((parseFloat(basePrice)+parseFloat(c2PriceDiff))-(parseFloat(unitPrice)+parseFloat(c2UnitPriceDiff))))-volume).toFixed(0)}</p>

          <p>Expected Total Volume (Units): {parseFloat(volume)+parseFloat(c2VolumeDiff)}</p>
          <p>Total Revenue @ Expected Volume: {(parseFloat(volume)+parseFloat(c2VolumeDiff))*(parseFloat(basePrice)+parseFloat(c2PriceDiff))} | {(((parseFloat(volume)+parseFloat(c2VolumeDiff))*(parseFloat(basePrice)+parseFloat(c2PriceDiff))/(volume * basePrice))*100).toFixed(0)}%</p>
          <p>Gross Margin @ Expected Volume: {((parseFloat(basePrice)+parseFloat(c2PriceDiff))-(parseFloat(unitPrice)+parseFloat(c2UnitPriceDiff)))*(parseFloat(volume)+parseFloat(c2VolumeDiff))} | {(((parseFloat(basePrice)+parseFloat(c2PriceDiff))-(parseFloat(unitPrice)+parseFloat(c2UnitPriceDiff)))*(parseFloat(volume)+parseFloat(c2VolumeDiff))/(volume * (basePrice-unitPrice))*100).toFixed(0)}%</p>

        </div>
      </div>

    </div>
    
  </main>
  );
};

export default RevenueCalculator;





