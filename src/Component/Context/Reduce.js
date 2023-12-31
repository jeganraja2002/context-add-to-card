import Card from "../../Object.json"

export const Object={
    state:Card.shirt
}

export const Reduce = (name,action) => {

    if (action.type=="like") {
            return {...name,state:action.payload}
    }


}