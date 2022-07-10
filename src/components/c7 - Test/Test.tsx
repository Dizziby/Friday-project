import React, {ReactElement} from 'react';
import SuperInputText from "../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../common/c3-SuperCheckbox/SuperCheckbox";
import styles from "./Test.module.css"

export const Test = (): ReactElement => {

    return (
        <div className={styles.test}>
            <SuperInputText placeholder={"Default Value"}/>
            <SuperButton>
                BUTTON
            </SuperButton>
            <SuperCheckbox/>
        </div>
    );
};