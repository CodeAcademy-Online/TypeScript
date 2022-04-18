class Vehicle {
    constructor({ brand, model, year }) {
        this.toStringVehicle = () => {
            const { brand, model, year } = this;
            return `${brand} ${model} ${year}\n`;
        };
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
export default Vehicle;
//# sourceMappingURL=vehicle.js.map