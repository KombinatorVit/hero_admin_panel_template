export interface Hero {
    id: string;
    name: string;
    description: string;
    element: string;
}

export interface Filter {
    id: string;
    name: NameFilterType;
    label: LabelFilterType;
    className: string;
}


export type NameFilterType = 'all' | 'wind' | 'earth' | 'fire' | 'water'

export type LabelFilterType = 'Все' | 'Земля' | 'Ветер' | 'Вода' | 'Огонь'