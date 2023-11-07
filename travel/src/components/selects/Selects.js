import React from 'react'
import './SelectsStyles.css'
import SelectsImg from '../selectsimg/SelectsImg'
import borabora from '../../assets/borabora.jpg'
import borabora2 from '../../assets/borabora2.jpg'
import maldives from '../../assets/maldives.jpg'
import maldives2 from '../../assets/maldives2.jpg'
import Keywest from '../../assets/keywest.jpg'
import maldives3 from '../../assets/maldives3.jpg'
function selects() {
  return (
    <div name='views' className='selects'>
    <div className='container'>
    <SelectsImg bgImg={borabora} text='bora bora'/>
    <SelectsImg bgImg={borabora2} text='Enerled Boy'/>
    <SelectsImg bgImg={maldives} text='maldive'/>
    <SelectsImg bgImg={maldives2} text='Grenda'/>
    <SelectsImg bgImg={maldives3} text='barbados'/>
    <SelectsImg bgImg={Keywest} text='key West'/>
    </div>
    </div>
  )
}

export default selects

