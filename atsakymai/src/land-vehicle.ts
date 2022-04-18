import Vehicle, { VehicleProps } from "./vehicle.js";

export type LandVehicleProps = {
  tires: string[]
}

class LandVehicle extends Vehicle {
  private tires: string[];

  constructor({ tires }: LandVehicleProps, vehicleProps: VehicleProps) {
    super(vehicleProps);

    this.tires = tires;
  }

  public override toString = (): string => {
    return `${this.getString()}\tpadangos: ${this.tires.join(', ')}`;
  };
}

export default LandVehicle;