import {combineReducers, legacy_createStore as createStore} from "redux";
import {loginReducer} from "./reducers/loginReducer";
import {recoveryPasswordReducer} from "./reducers/recoveryRasswordReducer";
import {profileReducer} from "./reducers/profileReducer";
import {registrationReducer} from "./reducers/registationReducer";
import {inputNewPasswordReducer} from "./reducers/inputNewPasswordReducer";

const rootReducer = combineReducers(
    {
        login: loginReducer,
        registration: registrationReducer,
        profile: profileReducer,
        recoveryPassword: recoveryPasswordReducer,
        inputNewPassword: inputNewPasswordReducer
    }
)

export const store = createStore(rootReducer)