export type FilterOption = { value: string; label: string };

export type OptionGroup = {
  id: string;
  title: string;
  type: 'checkbox' | 'buttons';
  searchable: boolean,
  collapsible: boolean,
  options: readonly FilterOption[];
};

export type RangeGroup = {
  id: string;
  title: string;
  type: 'range';
  min: number;
  max: number;
};

export type FilterGroup = OptionGroup | RangeGroup;

export const BALL_FILTERS: readonly FilterGroup[] = [
  {
    id: 'brand',
    title: 'Бренд',
    type: 'checkbox',
    searchable: true,
    collapsible: false,
    options: [
      { value: 'adidas',   label: 'Adidas' },
      { value: 'merso',    label: 'Merso' },
      { value: 'mikasa',   label: 'Mikasa' },
      { value: 'netw',     label: 'Netw' },
      { value: 'nike',     label: 'Nike' },
      { value: 'puma',     label: 'Puma' },
      { value: 'ronex',    label: 'Ronex' },
      { value: 'select',   label: 'Select' },
      { value: 'spalding', label: 'Spalding' },
      { value: 'wilson',   label: 'Wilson' },
    ],
  },
  {
    id: 'price',
    title: 'Ціна, грн',
    type: 'range',
    min: 1,
    max: 10_000,
  },
  {
    id: 'kind',
    title: 'Вид',
    type: 'checkbox',
    searchable: false,
    collapsible: false,
    options: [
      { value: 'basketball',       label: 'Баскетбольні' },
      { value: 'baseball',         label: 'Бейсбольні' },
      { value: 'volleyball',       label: 'Волейбольні' },
      { value: 'beach-volleyball', label: 'Для пляжного волейболу' },
      { value: 'beach-soccer',     label: 'Для пляжного футболу' },
      { value: 'football',         label: 'Футбольні' },
      { value: 'water-polo',       label: 'Для водного поло' },
      { value: 'golf',             label: 'Для гольфу' },
      { value: 'rugby',            label: 'Для регбі' },
    ],
  },
  {
    id: 'size',
    title: 'Розмір',
    type: 'buttons',
    searchable: false,
    collapsible: false,
    options: [
      { value: 'N0',   label: '№0' },
      { value: 'N1',   label: '№1' },
      { value: 'N1.5', label: '№1.5' },
      { value: 'N2',   label: '№2' },
      { value: 'N3',   label: '№3' },
      { value: 'N4',   label: '№4' },
      { value: 'N4.5', label: '№4.5' },
      { value: 'N5',   label: '№5' },
      { value: 'N5.5', label: '№5.5' },
      { value: 'N6',   label: '№6' },
      { value: 'N7',   label: '№7' },
      { value: 'N9',   label: '№9' },
    ],
  },
  {
    id: 'surface',
    title: 'Тип ігрового покриття',
    type: 'checkbox',
    searchable: false,
    collapsible: false,
    options: [
      { value: 'asphalt',  label: 'Асфальт' },
      { value: 'grass',    label: 'Газон' },
      { value: 'parquet',  label: 'Паркет' },
      { value: 'sand',     label: 'Пісок' },
      { value: 'turf',     label: 'Штучне покриття' },
    ],
  },
  {
    id: 'color',
    title: 'Колір',
    type: 'checkbox',
    searchable: false,
    collapsible: true,
    options: [
      { value: 'white',       label: 'Білий' },
      { value: 'yellow',      label: 'Жовтий' },
      { value: 'green',       label: 'Зелений' },
      { value: 'brown',       label: 'Коричневий' },
      { value: 'orange',      label: 'Помаранчевий' },
      { value: 'pink',        label: 'Рожевий' },
      { value: 'multicolor',  label: 'Різнокольоровий' },
      { value: 'blue',        label: 'Синій' },
      { value: 'grey',        label: 'Сірий' },
    ],
  },
  {
    id: 'country',
    title: 'Країна-виробник',
    type: 'checkbox',
    searchable: true,
    collapsible: true,
    options: [
      { value: 'indonesia',  label: 'Індонезія' },
      { value: 'india',      label: 'Індія' },
      { value: 'spain',      label: 'Іспанія' },
      { value: 'vietnam',    label: 'Вʼєтнам' },
      { value: 'denmark',    label: 'Данія' },
      { value: 'china',      label: 'Китай' },
      { value: 'germany',    label: 'Німеччина' },
      { value: 'pakistan',   label: 'Пакистан' },
      { value: 'poland',     label: 'Польща' },
      { value: 'usa',        label: 'США' },
      { value: 'thailand',   label: 'Таїланд' },
      { value: 'ukraine',    label: 'Україна' },
      { value: 'czechia',    label: 'Чехія' },
    ],
  },

] as const;
