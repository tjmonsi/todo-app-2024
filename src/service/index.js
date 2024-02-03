async function home (req, reply) {
  return { success: false };
}

async function getTodo (req, reply) {
  return { success: true };
}

export class Service {
  home = home
  getTodo = getTodo
}