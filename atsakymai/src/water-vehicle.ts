import Vehicle, { VehicleProps } from "./vehicle.js";

export type WaterVehicleProps = {
  maxDepth: number
}

class WaterVehicle extends Vehicle {
  private maxDepth: number;

  constructor({ maxDepth }: WaterVehicleProps, vehicleProps: VehicleProps) {
    super(vehicleProps);

    this.maxDepth = maxDepth;
  }

  public override toString = (): string => {
    return `${this.getString()}\tmaksimalus gylis: ${this.maxDepth}`;
  };
}

export default WaterVehicle;