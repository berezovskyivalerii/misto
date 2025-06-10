export const recommendations = Array.from({ length: 20 }, (_, i) => ({
  id: `rec-${i + 1}`,
  image: './test_img.png',
  title: `Рекомендація ${i + 1}`, 
}));

export const offers = Array.from({ length: 8 }, (_, i) => ({
  id: `offer-${i + 1}`,
  image: './test_img.png',
  title: `Пропозиція ${i + 1}`,
}));

export const categories = [
  'Ноутбуки і комп’ютери',
  'Смартфони, ТВ і електроніка',
  'Товари для геймерів',
  'Побутова техніка',
  'Товари для дому',
  'Інструменти та автотовари',
  'Сантехніка та ремонт',
  'Дача, сад і город',
  'Спорт і захоплення',
  'Одяг, взуття та прикраси',
].map((label) => ({
  icon: './viber_icon.png',
  label,
}));