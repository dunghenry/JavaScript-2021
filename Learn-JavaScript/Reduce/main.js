let arr = [1, 2, 3, 4, 5]

const a = arr.reduce((num, sum) =>{
    return num + sum;
}, 0)

console.log(a)

//!

function reduce(arr, callback, initialValue) {
    if(initialValue === undefined){
        // initialValue = arr.shift(); // 1
        initialValue = arr[0]; // 1
       arr = arr.slice(1); // 2, 3, 4, 5
    }
    for (const item of arr) {
        initialValue = callback(initialValue, item);
    }
    return initialValue;
}

const b = reduce(arr, (sum, num)=>{
    return num + sum;
}, 0)

console.log(b)

//!

const actions = [
    {type: 'CHANGE_SPEED', payload: 3}, //speed = 3, lastSpeed: 1
    {type: "TURN_OFF"}, // speed = 0, lastSpeed = 3
    {type: 'TURN_ON'} // speed = 3, lastSpeed = 3
];

const initState = {
    speed: 0,
    lastSpeed: 1
}

const c = reduce(actions, (state, action) => {
    if(action.type === 'CHANGE_SPEED'){
        return{
            ...state,
            speed: action.payload
        }
    }
    if(action.type === "TURN_OFF"){
        return{
            ...state,
            speed: 0,
            lastSpeed: state.speed
        }
    }
    if(action.type === "TURN_ON"){
        return{
            ...state,
            speed: state.lastSpeed
        }
    }
    return state;
}, initState)

console.log(c)