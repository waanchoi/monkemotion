
import { useState } from 'react';
import {
    atom,

} from 'recoil';

export const currentImageRecoil = atom({
    key: 'currentImageRecoil', // unique ID (with respect to other atoms/selectors)
    default: 'https://picsum.photos/400/300', // default value (aka initial value)
});


export const currentLabelRecoil = atom({
    key: 'currentLabelRecoil', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});


export const currentXRecoil = atom({
    key: 'currentXRecoil', // unique ID (with respect to other atoms/selectors)
    default: '0', // default value (aka initial value)
});



export const currentYRecoil = atom({
    key: 'currentYRecoil', // unique ID (with respect to other atoms/selectors)
    default: '0', // default value (aka initial value)
});


export const dataRecoil = atom({
    key: 'dataRecoil', // unique ID (with respect to other atoms/selectors)
    default: {
        "Left Eye": { x: "0", y: "0", visible: true },
        "Right Eye": { x: "0", y: "0", visible: true },
        "Center Nose": { x: "0", y: "0", visible: true },
        "Left Ear": { x: "0", y: "0", visible: true },
        "Right Ear": { x: "0", y: "0", visible: true },
        "Mouth": { x: "0", y: "0", visible: true }
    }, // default value (aka initial value)
});

