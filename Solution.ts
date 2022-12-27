function maximumBags(capacity: number[], rocks: number[], additionalRocks: number): number {
  let fullCapacity = 0;

  // Sort the rocks in ascending order by the difference between their capacity and the number of rocks they currently have
  const sortedRocks = capacity.map((c, i) => ({ capacity: c, rocks: rocks[i] })).sort((a, b) => (a.capacity - a.rocks) - (b.capacity - b.rocks));

  // Distribute the additional rocks to the rocks with the smallest difference between capacity and number of rocks
  for (const rock of sortedRocks) {
    const extraCapacity = rock.capacity - rock.rocks;
    if (extraCapacity !== 0 && additionalRocks !== 0) {
      if (additionalRocks >= extraCapacity) {
        rock.rocks += extraCapacity;
        additionalRocks -= extraCapacity;
      } else {
        rock.rocks += additionalRocks;
        additionalRocks = 0;
      }
    }
    if (rock.rocks === rock.capacity) {
      fullCapacity++;
    }
  }
  return fullCapacity;
}
