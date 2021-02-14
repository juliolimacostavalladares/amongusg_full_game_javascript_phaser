export const movePlayer = (keys, player) => {
  
    if (
      keys.includes('KeyW')) {
      player.y = player.y - 10;
    }
    if (
      keys.includes('KeyD')) {
      player.y = player.y + 10;
    }
    if (
      keys.includes('KeyA')) {
      player.x = player.x - 10;

    }
    if (
      keys.includes('KeyD')) {
      player.x = player.x + 10;

    }
  };