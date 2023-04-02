const ex: {
  a: string;
  b: number;
  c: (x: string) => void;
} = {
  a: "abc",
  b: 1,
  c: (x: any) => console.log(x),
};

const x = ex.c("ola");
