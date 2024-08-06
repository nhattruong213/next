import { _mock } from './_mock';

// ----------------------------------------------------------------------
export const _membersData = [
  {
    id: 1,
    role: 'Founder/CEO',
    name: 'Long Pham',
    photo: `/assets/images/portrait/long-pham.jpg`,
  },
  {
    id: 5,
    role: 'Co-founder/COO',
    name: 'Lan Pham',
    photo: `/assets/images/portrait/lan-pham.jpg`,
  },
  {
    id: 10,
    role: 'Project Manager',
    name: 'Tien Nguyen',
    photo: `/assets/images/portrait/tien-nguyen.png`,
  },
  {
    id: 15,
    role: 'Technical Manager',
    name: 'Duy Nguyen',
    photo: `/assets/images/portrait/duy-nguyen.png`,
  },
  {
    id: 20,
    role: 'Consulting Manager',
    name: 'Chieu Nguyen',
    photo: `/assets/images/portrait/chieu-nguyen.png`,
  },
  {
    id: 25,
    role: 'Team Lead',
    name: 'Son Phan',
    photo: `/assets/images/portrait/son-phan.png`,
  },
  {
    id: 30,
    role: 'Team Lead',
    name: 'Huy Dang',
    photo: `/assets/images/portrait/huy-dang.png`,
  },
];

export const _members = [...Array(7)].map((_, index) => ({
  id: _membersData[index]?.id,
  role: _membersData[index]?.role,
  name: _membersData[index]?.name,
  photo: _membersData[index]?.photo,
  socialLinks: {
    facebook: null,
    instagram: null,
    linkedin: null,
    twitter: null,
  },
}));
