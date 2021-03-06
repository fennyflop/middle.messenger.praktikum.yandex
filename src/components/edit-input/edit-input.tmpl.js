import * as styles from "./edit-input.module.scss";

export default `
    <fieldset class="${styles.fieldset}">
        <p class="${styles.name}">{{name}}</p>
        <div class="${styles.group}">
            <input class="${styles.currentValue}" placeholder={{currentValue}} name={{fieldName}}>
            <button class="${styles.edit}"></button>
        </div>
    </fieldset>
`;
