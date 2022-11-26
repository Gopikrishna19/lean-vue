const dateFormat = new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
});

const ordinalFormat = new Intl.PluralRules('en', {
    type: 'ordinal',
});

const ordinalSuffix = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th',
};

const buildOrdinal = (number) => `${number}${ordinalSuffix[ordinalFormat.select(number % 10)] || ordinalSuffix.other}`;

const buildDate = (datetime) => {
    const parts = dateFormat.formatToParts(new Date(datetime))
        .reduce((parts, {type, value}) => type === 'literal' ? parts : {
            ...parts,
            [type]: value,
        }, {});

    return [
        parts.month,
        buildOrdinal(parts.day),
        'at',
        `${parts.hour}:${parts.minute}${parts.dayPeriod.toLowerCase()}`,
    ].join(' ');
};

export const serializeDate = (datetime) => {
    return buildDate(datetime);
};
