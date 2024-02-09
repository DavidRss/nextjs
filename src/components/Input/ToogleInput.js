import { useState } from "react";

function ToogleInput({
    labelTitle,
    labelStyle,
    type,
    containerStyle,
    defaultValue,
    placeholder,
    updateFormValue,
    updateType,
}) {
    const [value, setValue] = useState(defaultValue);

    const updateToogleValue = () => {
        const newValue = !value;
        setValue(newValue);
        updateFormValue({ updateType, value: newValue });
    };

    return (
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label cursor-pointer">
                <span className={"label-text text-base-content " + labelStyle}>
                    {labelTitle}
                </span>
                <input
                    type="checkbox"
                    className="toggle"
                    checked={value}
                    onChange={updateToogleValue}
                />
            </label>
        </div>
    );
}

export default ToogleInput;
