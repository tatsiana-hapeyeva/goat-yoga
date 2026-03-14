export type City = {
  name: string;
  aliases?: string[];
};

export const REGIONAL_CENTERS: City[] = [
  { name: 'Minsk' },
  { name: 'Grodno', aliases: ['Hrodna'] },
  { name: 'Vitebsk', aliases: ['Viciebsk'] },
  { name: 'Mogilev', aliases: ['Mahilyow', 'Mahiliou'] },
  { name: 'Brest' },
  { name: 'Gomel', aliases: ['Homiel'] },
];

export const BREST_REGION_CENTERS: City[] = [

  { name: 'Baranovichi', aliases: ['Baranavichy', 'Baranavici'] },
  { name: 'Pinsk' },

  { name: 'Bereza', aliases: ['Biaroza'] },
  { name: 'Gantsevichi', aliases: ['Hantsavichy'] },
  { name: 'Drogichin', aliases: ['Drahichyn'] },
  { name: 'Zhabinka' },
  { name: 'Ivanovo', aliases: ['Ivanava'] },
  { name: 'Ivatsevichi', aliases: ['Ivacevichi'] },
  { name: 'Kamenets', aliases: ['Kamianets'] },
  { name: 'Kobrin', aliases: ['Kobryn'] },
  { name: 'Luninets' },
  { name: 'Lyakhovichi', aliases: ['Liachavichy'] },
  { name: 'Malorita', aliases: ['Malaryta'] },
  { name: 'Pruzhany' },
  { name: 'Stolin' },
];

export const GOMEL_REGION_CENTERS: City[] = [
  { name: 'Mozyr', aliases: ['Mazyr'] },
  { name: 'Zhlobin' },

  { name: 'Bragin', aliases: ['Brahin'] },
  { name: 'Buda-Kashalyovo', aliases: ['Buda-Kashalyova', 'Buda-Koshelevo'] },
  { name: 'Chechersk', aliases: ['Chachersk'] },
  { name: 'Dobrush', aliases: ['Dabraush'] },
  { name: 'Elsk', aliases: ['Yelsk', 'Jelsk'] },
  { name: 'Zhitkovichi', aliases: ['Zhytkavichy'] },
  { name: 'Kalinkovichi', aliases: ['Kalinkavichy'] },
  { name: 'Korma' },
  { name: 'Lelchitsy', aliases: ['Lelchytsy', 'Lelchicy'] },
  { name: 'Loev', aliases: ['Loyev', 'Lojev'] },
  { name: 'Narovlya', aliases: ['Naroulia'] },
  { name: 'Oktyabrsky', aliases: ['Aktsyabrski'] },
  { name: 'Petrikov', aliases: ['Pietrykau', 'Pietrikov'] },
  { name: 'Rechitsa', aliases: ['Rechytsa'] },
  { name: 'Rogachev', aliases: ['Ragachou'] },
  { name: 'Svetlogorsk', aliases: ['Svetlahorsk'] },
  { name: 'Khoiniki', aliases: ['Khoyniki', 'Chojniki'] },
  { name: 'Vasilevichi', aliases: ['Vasilevichy'] },
];

export const ALL_CITIES: City[] = [
  ...REGIONAL_CENTERS,
  ...BREST_REGION_CENTERS,
  ...GOMEL_REGION_CENTERS,
];