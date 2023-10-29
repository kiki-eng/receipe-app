import React from 'react';
import {SvgXml} from 'react-native-svg';
import IconsSVG, {TIMER} from './svgIcons';


export default function Icon ({
    name,
    size,
    color = undefined,
    fill = undefined,
    rotation = 0,
})  {
    let xml = IconsSVG[name];

    if (!xml) {
        xml = IconsSVG[TIMER];
    }

    return <SvgXml xml={xml} fill={fill} color={color} width={size} rotation={rotation} />;
};

