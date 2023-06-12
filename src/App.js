import React, { useState } from 'react';
import './App.css';
import Button from './component/Button';


function App() {
  const [backgroundColor, setBackgroundColor] = useState('');

function colorChange (color){
return setBackgroundColor(color)
}
 
  return (
    
    <div style={{ backgroundColor }}>
      <Button color="White" onClick={() => colorChange('White')} />
      <Button color="Black" onClick={() => colorChange('Black')} />
      <Button color="Yellow" onClick={() => colorChange('Yellow')} />
      <Button color="Red" onClick={() => colorChange('Red')} />
      <Button color="Grey" onClick={() => colorChange('Grey')} />
      <Button color="Green" onClick={() => colorChange('Green')} />
      <Button color="Orange" onClick={() => colorChange('Orange')} />
      <Button color="Blue" onClick={() => colorChange('Blue')} />
      <Button color="Pink" onClick={() => colorChange('Pink')} />
      <Button color="Violet" onClick={() => colorChange('Violet')} />
    </div>
  );
}


export default App;
