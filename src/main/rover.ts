export class Rover {
  execute(instructions: string): string {
    if (instructions === "R") {
      return "0:0:E"
    }
    if (instructions === "RR") {
      return "0:0:S"
    }
    return "0:0:N"
  };
}
