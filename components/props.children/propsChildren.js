import React, { Component } from 'react';
import RadioGroup from './RadioGroup';
import RadioButton from './RadioButton';

export default class PropsChildren extends Component {
    render(){
        return(
            <div>
                <RadioGroup name="blizzard-games">
                    <RadioButton label="Warcraft III" value="wc3" />
                    <RadioButton label="World of Warcraft" value="wow" />
                    <RadioButton label="Starcraft I" value="sc1" />
                    <RadioButton label="Starcraft II" value="sc2" />
                </RadioGroup>
            </div>
        )
    }
}