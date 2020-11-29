const bloodGroup = {
  O_POSITIVE: 1,
  O_NEGATIVE: 2,
  A_POSITIVE: 3,
  A_NEGATIVE: 4,
  B_POSITIVE: 5,
  B_NEGATIVE: 6,
  AB_POSITIVE: 7,
  AB_NEGATIVE: 8,
};

const bloodGroupData = [
  {
    id: bloodGroup.O_POSITIVE,
    name: "O +",
  },
  {
    id: bloodGroup.O_NEGATIVE,
    name: "O -",
  },
  {
    id: bloodGroup.A_POSITIVE,
    name: "A +",
  },
  {
    id: bloodGroup.A_NEGATIVE,
    name: "A -",
  },
  {
    id: bloodGroup.B_POSITIVE,
    name: "B +",
  },
  {
    id: bloodGroup.B_NEGATIVE,
    name: "B -",
  },
  {
    id: bloodGroup.AB_POSITIVE,
    name: "AB +",
  },
  {
    id: bloodGroup.AB_NEGATIVE,
    name: "AB -",
  },
];

const getBloodGroup = (id) => {
  const bloodGroup = bloodGroupData.find((item) => item.id === id).name;
  return bloodGroup;
};

export { getBloodGroup, bloodGroupData, bloodGroup };
