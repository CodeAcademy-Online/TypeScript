// interface Address {
//   country: string;
//   city: string;
//   street: string;
//   number: string;
// }

// const numbers: number[] = [1, 2, 3, 4];
// const words: string[] = ["Don't", "come", "easy", "to", "me"];

// const addresses: Address[] = [
//   { country: 'USA', city: 'Washington', street: 'Halaway str.', number: '17-202a'  },
//   { country: 'Lithuania', city: 'Vilnius', street: 'Kauno g.', number: '1-17'  },
//   { country: 'UK', city: 'London', street: 'Bridge aven.', number: '15'  },
// ];

type Address = {
  country: string,
  city: string,
  street: string,
  number: string,
}

const numbers: Array<number> = [1, 2, 3, 4];
const words: Array<string> = ["Don't", "come", "easy", "to", "me"];

const addresses: Array<Address> = [
  { country: 'USA', city: 'Washington', street: 'Halaway str.', number: '17-202a' },
  { country: 'Lithuania', city: 'Vilnius', street: 'Kauno g.', number: '1-17' },
  { country: 'UK', city: 'London', street: 'Bridge aven.', number: '15' },
];

