class Rover{
  execute(): string{
    return ""
  };
}

describe('rover test', () => {

  it("should when no instructions are given have innitial position 0:0:N",()=>{
    const rover = new Rover();

    expect(rover.execute()).toBe("0:0:N");

  });
})
