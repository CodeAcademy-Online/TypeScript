import Vehicle from "./vehicle.js";
class WaterVehicle extends Vehicle {
    constructor({ maxDepth }, vehicleProps) {
        super(vehicleProps);
        this.toString = () => {
            return `${this.toStringVehicle()}\tmaksimalus gylis: ${this.maxDepth}`;
        };
        this.maxDepth = maxDepth;
    }
}
export default WaterVehicle;
//# sourceMappingURL=water-vehicle.js.map