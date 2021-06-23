interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const printVehicle = ({ name, year, broken }: Vehicle): void => {
  console.log(`
    Vehicle name ${name}
    From the year ${year}
    Is it broken? ${broken}`);
};

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

printVehicle(oldCivic);
