type Option = {
    label: string
    value: string
}

type Propstypes = {
    label: string;
    name: string;
    defaultValue?: string
    disable?: boolean
    options: Option[]
}

const Select = (props: Propstypes) => {

    const { label, name, defaultValue, disable, options } = props
    return (
        <div className="space-y-2">
            <label htmlFor={name} className="text-base text-navy font-semibold">{label}</label>
            <select
                name={name}
                id={name}
                defaultValue={defaultValue}
                disabled={disable}
                className="w-full px-2 py-[14px] rounded-lg border-2 border-gray-300 focus:outline-none focus:border-ungu tracking-[-0.7px]"
                >
                {options.map((option) => (
                    <option value={option.value} key={option.label}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select