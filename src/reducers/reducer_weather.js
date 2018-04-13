import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {

    switch(action.type) {
        case FETCH_WEATHER:
            // concat returns a new version, does not manipulate existing array
            // return state.concat([action.payload.data]);
            return [ action.payload.data, ...state ];
    };

    return state;
}